import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {
    icon: any
    heading: string
    detail: string
}

const LoginCards = (props: Props) => {
    return (
        <div
            className={`flex h-32 font-author  mb-6 min-w-[500px] max-w-[500px] bg-white rounded-md shadow-2xl px-4 items-center gap-4`}
        >
            <div className='h-20 w-20 min-w-[5rem]  rounded-full bg-[#0f564729] flex items-center justify-center'>
                <Image
                    className='flex items-center justify-center'
                    src={props.icon}
                    alt='icons'
                />
            </div>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-[26px]'>{props.heading}</h1>
                <p className='max-w-[350px] font-thin text-[18px] leading-[24px]'>
                    {props.detail}
                </p>
            </div>
        </div>
    )
}

export default LoginCards
