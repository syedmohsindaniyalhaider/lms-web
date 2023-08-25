import React, {
    memo,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react'
import ZoomMediaContext from '../../../context/media-context'
import ChatContext from '../../../context/chat-context'
import CommandContext from '../../../context/cmd-context'
import LiveTranscriptionContext from '../../../context/live-transcription'
import RecordingContext from '../../../context/recording-context'
import ZoomVideo, { ConnectionState, ReconnectReason } from '@zoom/videosdk'
import produce from 'immer'
import {
    ChatClient,
    CommandChannelClient,
    LiveTranscriptionClient,
    MediaStream,
    RecordingClient,
    SubsessionClient,
} from '../../../index-types'
import SubsessionContext from '../../../context/subsession-context'
import ZoomContext from '../../../context/zoom-context'
import { isAndroidBrowser } from '../../../utils/platform'
import ZoomClass from './ZoomClass'
import { useRouter } from 'next/router'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { classStatusUpdate } from '../../../store/actions/student/classes/classStatusUpdateService'
import { teacherAllClasses } from '../../../store/actions/teacher/classes/allClassesService'
import LoadingLayer from '../../ui/Zoom/LoadingLayer'
// import { classStatusUpdate } from "../../../store/actions/student/classes/classStatusUpdateService";

interface AppProps {
    meetingArgs: {
        topic: string
        signature: string
        name: string
        webEndpoint?: string
        enforceGalleryView?: string
    }
}

const mediaShape = {
    audio: {
        encode: false,
        decode: false,
    },
    video: {
        encode: false,
        decode: false,
    },
    share: {
        encode: false,
        decode: false,
    },
}
const mediaReducer = produce((draft, action) => {
    switch (action.type) {
        case 'audio-encode': {
            draft.audio.encode = action.payload
            break
        }
        case 'audio-decode': {
            draft.audio.decode = action.payload
            break
        }
        case 'video-encode': {
            draft.video.encode = action.payload
            break
        }
        case 'video-decode': {
            draft.video.decode = action.payload
            break
        }
        case 'share-encode': {
            draft.share.encode = action.payload
            break
        }
        case 'share-decode': {
            draft.share.decode = action.payload
            break
        }
        case 'reset-media': {
            Object.assign(draft, { ...mediaShape })
            break
        }
        default:
            break
    }
}, mediaShape)

declare global {
    interface Window {
        webEndpoint: string | undefined
        zmClient: any | undefined
        mediaStream: any | undefined
        crossOriginIsolated: boolean
    }
}

const ZoomLayout = (props: AppProps) => {
    const {
        meetingArgs: {
            topic,
            signature,
            name,
            webEndpoint: webEndpointArg,
            enforceGalleryView,
        },
    } = props
    const [loading, setIsLoading] = useState(true)
    const [loadingText, setLoadingText] = useState('')
    const [isFailover, setIsFailover] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('closed')
    const [mediaState, dispatch] = useReducer(mediaReducer, mediaShape)
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)
    const [chatClient, setChatClient] = useState<ChatClient | null>(null)
    const [recordingClient, setRecordingClient] =
        useState<RecordingClient | null>(null)
    const [commandClient, setCommandClient] =
        useState<CommandChannelClient | null>(null)
    const [subsessionClient, setSubsessionClient] =
        useState<SubsessionClient | null>(null)
    const [liveTranscriptionClient, setLiveTranscriptionClient] =
        useState<LiveTranscriptionClient | null>(null)
    const [isSupportGalleryView, setIsSupportGalleryView] =
        useState<boolean>(true)
    const zmClient = ZoomVideo.createClient()
    let webEndpoint: any
    if (webEndpointArg) {
        webEndpoint = webEndpointArg
    } else {
        webEndpoint = window?.webEndpoint ?? 'zoom.us'
    }
    const mediaContext = useMemo(
        () => ({ ...mediaState, mediaStream }),
        [mediaState, mediaStream]
    )
    const galleryViewWithoutSAB =
        Number(enforceGalleryView) === 1 && !window.crossOriginIsolated
    useEffect(() => {
        const init = async () => {
            await zmClient.init('en-US', `${window.location.origin}/lib`, {
                webEndpoint,
                enforceMultipleVideos: galleryViewWithoutSAB,
                stayAwake: true,
            })
            try {
                setLoadingText(`Joining ${topic}...`)
                await zmClient
                    .join(topic, signature, name, '', 5)
                    .catch((e) => {
                        console.log(e)
                    })
                const stream = zmClient.getMediaStream()
                setMediaStream(stream)
                setIsSupportGalleryView(
                    stream.isSupportMultipleVideos() && !isAndroidBrowser()
                )
                const chatClient = zmClient.getChatClient()
                const commandClient = zmClient.getCommandClient()
                const recordingClient = zmClient.getRecordingClient()
                const ssClient = zmClient.getSubsessionClient()
                const ltClient = zmClient.getLiveTranscriptionClient()
                setChatClient(chatClient)
                setCommandClient(commandClient)
                setRecordingClient(recordingClient)
                setSubsessionClient(ssClient)
                setLiveTranscriptionClient(ltClient)
                setIsLoading(false)
            } catch (e: any) {
                setIsLoading(false)
                console.error(e.reason)
            }
        }
        init()
        return () => {
            ZoomVideo.destroyClient()
        }
    }, [signature, zmClient, topic, name, webEndpoint, galleryViewWithoutSAB])
    const onConnectionChange = useCallback(
        (payload: any) => {
            if (payload.state === ConnectionState.Reconnecting) {
                setIsLoading(true)
                setIsFailover(true)
                setStatus('connecting')
                const { reason, subsessionName } = payload
                if (reason === ReconnectReason.Failover) {
                    setLoadingText('Session Disconnected,Try to reconnect')
                } else if (
                    reason === ReconnectReason.JoinSubsession ||
                    reason === ReconnectReason.MoveToSubsession
                ) {
                    setLoadingText(`Joining ${subsessionName}...`)
                } else if (reason === ReconnectReason.BackToMainSession) {
                    setLoadingText('Returning to Main Session...')
                }
            } else if (payload.state === ConnectionState.Connected) {
                setStatus('connected')
                if (isFailover) {
                    setIsLoading(false)
                }
                window.zmClient = zmClient
                window.mediaStream = zmClient.getMediaStream()
            } else if (payload.state === ConnectionState.Closed) {
                setStatus('closed')
                dispatch({ type: 'reset-media' })
                if (payload.reason === 'ended by host') {
                    console.log({
                        title: 'Meeting ended',
                        content: 'This meeting has been ended by host',
                    })
                    // Modal.warning({
                    //   title: "Meeting ended",
                    //   content: "This meeting has been ended by host",
                    // });
                }
            }
        },
        [isFailover, zmClient]
    )
    const onMediaSDKChange = useCallback((payload: any) => {
        const { action, type, result } = payload
        dispatch({ type: `${type}-${action}`, payload: result === 'success' })
    }, [])

    const onDialoutChange = useCallback((payload: any) => {
        console.log('onDialoutChange', payload)
    }, [])

    const onAudioMerged = useCallback((payload: any) => {
        console.log('onAudioMerged', payload)
    }, [])

    const onLeaveOrJoinSession = useCallback(async () => {
        if (status === 'closed') {
            setIsLoading(true)
            await zmClient.join(topic, signature, name, '', 5)
            setIsLoading(false)
        } else if (status === 'connected') {
            await zmClient.leave(true)
            console.warn('You have left the session.')
        }
    }, [zmClient, status, topic, signature, name])
    useEffect(() => {
        zmClient.on('connection-change', onConnectionChange)
        zmClient.on('media-sdk-change', onMediaSDKChange)
        zmClient.on('dialout-state-change', onDialoutChange)
        zmClient.on('merged-audio', onAudioMerged)
        return () => {
            zmClient.off('connection-change', onConnectionChange)
            zmClient.off('media-sdk-change', onMediaSDKChange)
            zmClient.off('dialout-state-change', onDialoutChange)
            zmClient.off('merged-audio', onAudioMerged)
        }
    }, [
        zmClient,
        onConnectionChange,
        onMediaSDKChange,
        onDialoutChange,
        onAudioMerged,
    ])

    useEffect(() => {
        onLeaveOrJoinSession()
    }, [])
    return (
        <>
            {loading && <LoadingLayer content={loadingText} />}
            {!loading && (
                <ZoomContext.Provider value={zmClient}>
                    <ZoomMediaContext.Provider value={mediaContext}>
                        <ChatContext.Provider value={chatClient}>
                            <RecordingContext.Provider value={recordingClient}>
                                <CommandContext.Provider value={commandClient}>
                                    <SubsessionContext.Provider
                                        value={subsessionClient}
                                    >
                                        <LiveTranscriptionContext.Provider
                                            value={liveTranscriptionClient}
                                        >
                                            <ZoomClass
                                                status={status}
                                                onLeaveOrJoinSession={
                                                    onLeaveOrJoinSession
                                                }
                                                isSupportGalleryView={
                                                    isSupportGalleryView
                                                }
                                                galleryViewWithoutSAB={
                                                    galleryViewWithoutSAB
                                                }
                                            />
                                            {/* <Router>
                      <Switch>
                        <Route
                          path="/"
                          render={(props) => (
                            <Home
                              {...props}
                              status={status}
                              onLeaveOrJoinSession={onLeaveOrJoinSession}
                            />
                          )}
                          exact
                        />
                        <Route path="/index.html" component={Home} exact />
                        <Route path="/chat" component={Chat} />
                        <Route path="/command" component={Command} />
                        <Route
                          path="/video"
                          component={
                            isSupportGalleryView
                              ? Video
                              : galleryViewWithoutSAB
                              ? VideoNonSAB
                              : VideoSingle
                          }
                        />
                        <Route path="/subsession" component={Subsession} />
                        <Route path="/preview" component={Preview} />
                      </Switch>
                    </Router> */}
                                        </LiveTranscriptionContext.Provider>
                                    </SubsessionContext.Provider>
                                </CommandContext.Provider>
                            </RecordingContext.Provider>
                        </ChatContext.Provider>
                    </ZoomMediaContext.Provider>
                </ZoomContext.Provider>
            )}
        </>
    )
}

export default ZoomLayout
