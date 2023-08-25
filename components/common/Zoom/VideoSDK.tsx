import React from 'react'
import Video from '../../../feature/video/video'
import VideoNonSAB from '../../../feature/video/video-non-sab'
import VideoSingle from '../../../feature/video/video-single'

const VideoSDK = ({ isSupportGalleryView, galleryViewWithoutSAB }: any) => {
    return isSupportGalleryView ? (
        <Video />
    ) : galleryViewWithoutSAB ? (
        <VideoNonSAB />
    ) : (
        <VideoSingle />
    )
}

export default VideoSDK
