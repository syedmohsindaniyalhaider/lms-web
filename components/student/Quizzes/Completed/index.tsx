import React from 'react'
import Image from 'next/image'
import QuizImg from '/assets/images/image4.svg'
// import CompImg from "/assets/images/image5.svg";
import QuizImge from '/assets/images/image6.svg'
import { ClockIcon } from '@heroicons/react/solid'
import { Grid } from '@mui/material'
import { useAppSelector, RootState, useAppDispatch } from '../../../../store'
import Link from 'next/link'

import moment from 'moment'

const CompletedQuizzes = ({ status, quizzes }: any) => {
    return (
        <Grid item sm={6} md={4}>
            <div className=' bg-white border-solid rounded-[8px] border-[1.5px] border-[#D9D9D9]'>
                <p className='absolute z-10 font-semibold bg-[#DBE6E3] md:w-[86px] md:h-[28px] md:text-[14px] lg:text-[20px] md:pt-[5px] lg:h-[40px] lg:w-[132px]   lg:p-2 text-center text-[#0F5647] rounded-tl-md rounded-br-md -mt-[2px] -ml-[2px]'>
                    {status === 'taken' ? 'COMPLETED' : status?.toUpperCase()}
                </p>
                <div className='pt-[20px] pr-[20px] pl-[20px] rounded-[8px] '>
                    <Image className='rounded-[8px]' src={QuizImg} alt='/' />
                </div>
                <div className='py-2'>
                    <h3 className='p-[16px]text-[#131414] pl-4 font-Author pt-2 md:text-[14px] lg:text-[22px] text-[#131414] leading-5 font-bold'>
                        {quizzes?.quizTitle}
                    </h3>

                    <div className='bg-[#F5F5F5]  mt-2 md:pl-[10px] md:pr-[10px] md:pt-[5px] md:pb-[5px] lg:pl-[20px] lg:pr-[20px] '>
                        <h4 className='md:text-[12px] pt-2 lg:text-[18px] font-author font-[400] '>
                            {quizzes?.quizDescription}
                        </h4>
                        <div className='flex items-center md:mb-[9px] md:pb-2  gap-1'>
                            <ClockIcon
                                className='text-[#131414] '
                                height='30px'
                                width='20px'
                            />
                            <p className=' md:text-[14px] lg:text-[19px] text-black font-author font-[500]'>
                                {`${quizzes?.startTime} - ${moment(
                                    quizzes?.submitDate,
                                    'YYYY/MM/DD'
                                ).format('Do dddd, YYYY')}`}
                            </p>
                        </div>
                    </div>
                </div>
                <button className='my-2 ml-3 bg-[#F0A901] px-[8px] md:py-[5px]  rounded-[8px] text-white relative group overflow-hidden'>
                    <span className='relative font-author  md:text-[15px] lg:text-[20px] tracking-wide z-40'>
                        <Link href={`/student/classes/${quizzes?.classId}?t=q`}>
                            REVIEW QUIZ
                        </Link>
                    </span>
                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                </button>
            </div>
        </Grid>
    )
}

export default CompletedQuizzes
