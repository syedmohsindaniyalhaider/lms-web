import React, { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { zoomSignature } from '../../../store/actions/zoom/signatureService'
import { devConfig } from '../../../config/dev'
import ZoomContext from '../../../context/zoom-context'
import ZoomVideo from '@zoom/videosdk'

const ZoomLayout = dynamic(() => import('../../../components/common/Zoom'), {
    ssr: false,
})

const Zoom = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { teacherUpcomingClass }: any = useAppSelector(
        (state: RootState) => state.teacherClasses
    )
    const { signature } = useAppSelector((state: RootState) => state.zoom)
    let meetingArgs: any
    if (typeof window !== 'undefined') {
        meetingArgs = Object.fromEntries(new URLSearchParams(location.search))
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

    useEffect(() => {
        const getSignature = async () => {
            await dispatch(
                zoomSignature({
                    roleId: 1,
                    topic: teacherUpcomingClass?.classes?.classTitle,
                })
            )
        }
        getSignature()
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            meetingArgs.signature = signature
            meetingArgs.role = 0
            meetingArgs.topic = teacherUpcomingClass?.classes?.classTitle
            meetingArgs.name = user?.email
        }
    }, [signature, teacherUpcomingClass?.classes?.classTitle, user?.email])

    return <>{meetingArgs && <ZoomLayout meetingArgs={meetingArgs as any} />}</>
}

export default Zoom
