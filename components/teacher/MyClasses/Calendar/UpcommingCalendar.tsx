import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// icons
import clockIcon from '/assets/icons/clockIcon.svg'
import cancelClassIcon from '/assets/icons/cancelClass.svg'
import calendarEditIcon from '/assets/icons/calendarEdit.svg'
import classAvatarIcon from '/assets/icons/classesAvatar.svg'
import rightChevIcon from '/assets/icons/rightChevArrow.svg'
import moment from 'moment'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { useAppDispatch } from '../../../../store'
import { classStatusUpdate } from '../../../../store/actions/teacher/classes/classStatusUpdateService'
import Link from 'next/link'

const UpcomingCalendar = (props: any) => {
    const {
        classId,
        classCode,
        startTime,
        topic,
        name,
        classStatus,
        date,
        classes,
    } = props

    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div
                key={classId}
                className='grid md:grid-cols-7 lg:grid-cols-9 gap-4 py-4 '
            >
                <div className='col-span-1 flex items-center text-left '>
                    <div>
                        {date && (
                            <>
                                <h3 className='md:text-[20px] md:font-[600] lg:text-[24px]'>
                                    {moment(date, 'DD/MM/YYYY').format(
                                        'Do MMM'
                                    )}
                                </h3>
                                <h3 className='text-[#8C8C8C]  md:text-[18px] font-[494] lg:text-[20px]'>
                                    {moment(date, 'DD/MM/YYYY').format('ddd')}
                                </h3>
                            </>
                        )}
                        {classStatus === 'not scheduled' && (
                            <span className='text-[#131414] text-[24px] font-[596]'>
                                {classStatus}
                            </span>
                        )}
                    </div>
                </div>

                <div className=' bg-white col-span-6 p-4 md:rounded-lg text-[14px] flex gap-3 items-center custom-shadow'>
                    <div>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2  '>
                                <div className='flex'>
                                    <Image
                                        src={classAvatarIcon}
                                        alt='class-avatar-icon'
                                    />
                                </div>
                                student name
                                <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                    {classes?.name}
                                </div>
                            </div>
                            <div className='flex gap-2 border-l-[0.5px] border-[#D9D9D9] px-3 items-center'>
                                <div className='flex'>
                                    <Image src={clockIcon} alt='clock-icon' />
                                </div>
                                <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                    {classes?.startTime}-{classes?.endTime}
                                </div>
                            </div>
                        </div>
                        <h3 className=' pt-2 md:font-[600] lg:text-[22px]'>
                            <span className='text-[#355ADC]'>
                                {classes?.classCode}
                            </span>
                            <span className='text-[#131414]'>
                                {' '}
                                - {classes?.classTitle}
                            </span>
                            <span className='text-black'>{classes?.topic}</span>
                        </h3>
                        <p className='py-3 md:text-[14px] font-[400] lg:text-[20px]'>
                            <span className='text-black'>
                                {classes?.description}...
                            </span>
                            <span className='underline text-[#F0A901] pl-1'>
                                <Link
                                    href={`/teacher/classes/${classes?.classId}?t=c`}
                                >
                                    View Details
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingCalendar
