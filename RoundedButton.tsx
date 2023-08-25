import Image from 'next/image'
import React from 'react'
import { PlayIcon } from '@heroicons/react/solid'
import playButton from '../public/images/playButton.png'

type Props = {}

const RoundedButton = (props: Props) => {
    return (
        <div className='flex items-center gap-4'>
            <div className='w-12 2xl:w-16'>
                <Image src={playButton} alt='Play Button' />
            </div>
            <div className='font-semibold underline decoration-2 text-[18px] xl:text-[22px]'>
                {' '}
                Watch Demo
            </div>
        </div>
    )
}

export default RoundedButton
