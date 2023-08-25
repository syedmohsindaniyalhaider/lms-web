import React, { memo, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { zoomSignature } from '../../../store/actions/zoom/signatureService'
import { devConfig } from '../../../config/dev'

const ZoomLayout = dynamic(() => import('../../../components/common/Zoom'), {
    ssr: false,
})

let meetingArgs: any

const Zoom = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { upcomingClass }: any = useAppSelector(
        (state: RootState) => state.classes
    )
    const { signature } = useAppSelector((state: RootState) => state.zoom)

    useEffect(() => {
        const getSignature = async () => {
            await dispatch(
                zoomSignature({
                    roleId: 0,
                    topic: upcomingClass?.classes?.classTitle,
                })
            )
        }
        getSignature()
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            meetingArgs = Object.fromEntries(
                new URLSearchParams(location.search)
            )
            if (
                !meetingArgs.sdkKey ||
                !meetingArgs.topic ||
                !meetingArgs.name ||
                !meetingArgs.signature
            ) {
                meetingArgs = { ...devConfig, ...meetingArgs }
                meetingArgs.enforceGalleryView = true
            }

            if (!meetingArgs?.cloud_recording_option) {
                meetingArgs.cloud_recording_option = '0'
            }
            if (!meetingArgs?.cloud_recording_election) {
                meetingArgs.cloud_recording_election = ''
            }
        }
    }, [])

    useEffect(() => {
        // Add enforceGalleryView to turn on the gallery view without SharedAddayBuffer
        if (typeof window !== 'undefined') {
            meetingArgs.signature = signature
            meetingArgs.role = 0
            meetingArgs.topic = upcomingClass?.classes?.classTitle
            meetingArgs.name = user?.email
        }
    }, [signature, upcomingClass?.classes?.classTitle, user?.email])
    return <>{meetingArgs && <ZoomLayout meetingArgs={meetingArgs as any} />}</>
}

export default Zoom
