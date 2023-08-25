import { EmojiSadIcon } from '@heroicons/react/solid'
import {
    Error,
    ErrorOutline,
    FaceRetouchingNaturalTwoTone,
} from '@mui/icons-material'
import React from 'react'

const ErrorPage = () => {
    return (
        <div className='flex mt-[30vh] flex-col items-center justify-center'>
            <EmojiSadIcon className='h-20 w-20' />
            <div className='font-black text-2xl'>
                <span className='text-4xl'>404: </span> Page not Found
            </div>
        </div>
    )
}

export default ErrorPage
