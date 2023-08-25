import React from 'react'
import Image from 'next/image'

import HelpImg from '/assets/images/message-question.svg'
function Help() {
    return (
        <div className='rounded-[30px] bg-[#355ADC] w-[100px] fixed bottom-5 right-5 z-50 flex items-center gap-2 pl-[13px] pt-1 pb-1 '>
            <div className='pt-2'>
                <Image alt='' src={HelpImg}></Image>
            </div>
            <div className='text-white font-author  text-[22px]'> Help</div>
        </div>
    )
}

export default Help
