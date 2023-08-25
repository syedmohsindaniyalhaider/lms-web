import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

// icons
import clockIcon from '/assets/icons/clockIcon.svg'
import classAvatarIcon from '/assets/icons/classesAvatar.svg'
import rightChevIcon from '/assets/icons/rightChevArrow.svg'
import moment from 'moment'
import Link from 'next/link'
import { Grid } from '@mui/material'

const CompletedClasses = (props: any) => {
    const { classId, classes, day, month, teacherFirstName } = props
    return (
        <Grid container spacing={2} py={2}>
            {classes?.length > 0 ? (
                classes?.map((item: any) => (
                    <Grid item key={item?.classes?.classId} sm={12}>
                        <Grid container>
                            <Grid
                                item
                                sm={2}
                                lg={1}
                                className='flex items-center'
                            >
                                {day !== '' && month !== '' && (
                                    <div className=''>
                                        <h3 className='md:text-[20px] md:font-[600] lg:text-[24px]'>
                                            {moment(
                                                item?.date,
                                                'DD/MM/YYYY'
                                            ).format('Do MMM')}
                                        </h3>
                                        <h3 className='text-[#8C8C8C] md:text-[18px] md:font-[600] lg:text-[20px]'>
                                            {moment(
                                                item?.date,
                                                'DD/MM/YYYY '
                                            ).format('ddd')}
                                        </h3>
                                    </div>
                                )}
                            </Grid>
                            <Grid
                                marginLeft={{ sm: 1, lg: 4.5 }}
                                item
                                sm={9.5}
                                lg={10.5}
                                className='bg-white p-4 md:rounded-lg text-[14px] custom-shadow'
                            >
                                <h3 className='text-[#355ADC] md:font-[600] lg:text-[22px]'>
                                    {item?.classes?.classCode} #
                                    <span className='text-[#131414]'>
                                        {item?.classes?.classTitle}
                                    </span>
                                </h3>
                                <div className='flex justify-between items-center gap-3 py-2'>
                                    <div className='md:text-[14px] md:font-[400] lg:text-[22px] lg:font-[400]'>
                                        <span className='py-3'>
                                            {item?.classes?.description}...
                                        </span>
                                        <span className=' underline pl-1 text-[#F0A901]'>
                                            <Link
                                                href={`/student/classes/${item?.classes?.classId}?t=c`}
                                            >
                                                View Details
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='mr-4 lg:mr-8 md:mt-1'>
                                        <Image
                                            src={rightChevIcon}
                                            alt='right-chev-icon'
                                            width={10}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <Image
                                                src={clockIcon}
                                                alt='clock-icon'
                                            />
                                        </div>
                                        <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                            {item?.classes?.startTime} -{' '}
                                            {item?.classes?.endTime}
                                        </div>
                                    </div>
                                    <div className='flex gap-2 border-l-[0.5px] border-[#D9D9D9] px-3'>
                                        <div>
                                            <Image
                                                src={classAvatarIcon}
                                                alt='classes-icon'
                                            />
                                        </div>
                                        <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                            {teacherFirstName}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            ) : (
                <>
                    <Grid item key={classId} sm={1.5}></Grid>
                    <Grid item key={classId} sm={10.5}>
                        No Classes found.
                    </Grid>
                </>
            )}
        </Grid>
    )
}

export default CompletedClasses
