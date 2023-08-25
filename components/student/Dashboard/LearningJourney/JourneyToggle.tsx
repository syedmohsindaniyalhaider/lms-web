import React from 'react'
import Image from 'next/image'

import chevron from '/assets/images/chevron.svg'

function JourneyToggle(props: any) {
    const toggle = () => {
        props.setJourney(!props.journey)
    }
    return (
        <div
            className={
                props.journey
                    ? 'h-[35px] xl:h-[50px] lg:h-[40px] rounded-b-lg hover:cursor-pointer bg-[#0F5647] md:mr-0 justify-center mb-4 flex'
                    : '  hover:cursor-pointer h-[35px] lg:h-[40px] xl:h-[50px] -mt-[240px] rounded-lg bg-[#0F5647] md:mr-0 justify-center flex mb-4'
            }
            onClick={toggle}
        >
            <div className='flex items-center gap-3'>
                <div className='text-white text-[16px] xl:text-[20px] lg:text-[18px] lg lg:font-medium font-semibold'>
                    My Learning Journey
                </div>
                <div className={props.journey ? 'rotate-0 pt-2' : 'rotate-180'}>
                    <Image alt='' src={chevron} height='20' width='16'></Image>
                </div>
            </div>
        </div>
    )
}

export default JourneyToggle
