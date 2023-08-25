import React from 'react'
import { ClockIcon } from '@heroicons/react/solid'
import ProjectImg from '/assets/images/project5.png'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import CongratesCard from '../CongratsCard'
import Link from 'next/link'

const NotCompletedProjects = (props: any) => {
    return (
        <Grid item sm={6} md={6}>
            <div className='rounded-lg'>
                <div className='flex'>
                    <div className=''>
                        <div className='bg-white border-solid rounded-[8px] border-[1.5px] border-[#D9D9D9]'>
                            <p className='absolute z-10 font-semibold bg-[#FEE5E3] md:w-[82px] md:h-[26px] md:text-[14px] lg:h-[40px] lg:text-[20px] md:pt-[5px] lg:w-[132px]  text-center text-[#F94F46] rounded-tl-md rounded-br-md -mt-[2px] -ml-[2px]'>
                                Yet to Start
                            </p>

                            <div className='pt-[20px] pr-[20px] pl-[20px] rounded-[8px] '>
                                <Image
                                    className='rounded-[8px] '
                                    src={ProjectImg}
                                    alt='/'
                                />
                            </div>
                            <div className='py-2'>
                                <h3 className='p-[16px]text-[#131414] pl-4 font-Author pt-2 md:text-[14px] lg:text-[22px] text-[#131414] leading-5 font-bold'>
                                    {props?.projectTitle}
                                </h3>
                                <div className=' bg-[#FFF8F8] mt-2 md:pl-[10px] md:pr-[10px] md:pt-[5px] md:pb-[5px] lg:pl-[20px] lg:pr-[20px] '>
                                    <h4 className='md:text-[12px]  pt-2  lg:text-[18px] font-author font-[400] '>
                                        {props?.projectDescription ||
                                            'Project Description'}
                                    </h4>
                                    <div className='flex items-center md:mb-[9px] md:pb-2  gap-1'>
                                        <ClockIcon
                                            className='text-[#F94F46]  '
                                            height='20px'
                                            width='20px'
                                        />
                                        <p className=' md:text-[14px] lg:text-[19px] text-[#F94F46] font-author font-[500]'>
                                            {props?.startDate}
                                        </p>
                                    </div>
                                </div>
                                <button className='my-2 ml-3 bg-[#F0A901] px-[8px] md:py-[5px]  rounded-[8px] text-white relative group overflow-hidden'>
                                    <span className='relative font-author  md:text-[15px] lg:text-[20px]  z-40'>
                                        <Link
                                            href={`/student/classes/${props?.classId}?t=p`}
                                        >
                                            START PROJECT
                                        </Link>
                                    </span>
                                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default NotCompletedProjects
