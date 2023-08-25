import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

// icons
import clockIcon from '/assets/icons/clockIcon.svg'
import classesAvatarIcon from '/assets/icons/classesAvatar.svg'
import rightChevIcon from '/assets/icons/rightChevArrow.svg'
import moment from 'moment'
import Link from 'next/link'

function CompletedCalendar(props: any) {
    const { classId, classStatus, classes, date } = props

    return (
        // <div className={` ${props.second ? "" : "hidden"}`}>
        <div>
            {props ? (
                <div
                    key={classId}
                    className='grid md:grid-cols-8 lg:grid-cols-9 gap-4 pl-4 py-4'
                >
                    <div className='col-span-1 flex items-center text-left'>
                        <div className=''>
                            <h3 className='md:text-[20px] md:font-[600] lg:text-[24px]'>
                                {moment(date, 'DD/MM/YYYY').format('Do MMM')}
                            </h3>
                            <h3 className='text-[#8C8C8C] md:text-[18px] md:font-[600] lg:text-[20px]'>
                                {moment(date, 'DD/MM/YYYY').format('ddd')}
                            </h3>
                        </div>
                    </div>
                    <div
                        className=' bg-white col-span-7 lg:col-span-8 p-4 md:rounded-lg text-[14px]
            custom-shadow'
                    >
                        <div className=''>
                            <h3 className='text-[#355ADC] md:font-[600] lg:text-[22px]'>
                                {classes?.classCode}
                                <span className='text-[#131414]'>
                                    - {classes?.classTitle}
                                </span>
                                <span className='text-[#131414]'>
                                    {' '}
                                    - {classes?.topic}
                                </span>
                            </h3>
                            <div className='flex items-center gap-3 py-2'>
                                <div className='xl:w-[90%] md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[400]'>
                                    <span className='pl-3 py-3 '>
                                        {classes?.description}...
                                    </span>
                                    <span className=' text-[#F0A901] underline'>
                                        <Link
                                            href={`/teacher/classes/${classes?.classId}?t=c`}
                                        >
                                            View Details
                                        </Link>
                                    </span>
                                </div>
                                <div className='w-[] md:mt-1'>
                                    <Image
                                        src={rightChevIcon}
                                        alt='right-chev'
                                        width={10}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex'>
                                        <Image
                                            src={clockIcon}
                                            alt='clock-icon'
                                        />
                                    </div>
                                    <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                        {classes?.startTime}
                                    </div>
                                </div>
                                <div className='flex gap-2 border-l-[0.5px] border-[#D9D9D9] px-3'>
                                    <div>
                                        <Image
                                            src={classesAvatarIcon}
                                            alt='avatar-icon'
                                        />
                                    </div>
                                    <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                        {classes?.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No Completed Classes</div>
            )}
        </div>
    )
}

export default CompletedCalendar
