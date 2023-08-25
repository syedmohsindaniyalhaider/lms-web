import React from 'react'
import Image from 'next/image'
import Bq1 from '/assets/images/Black-quiz-1.png'
import Watch from '/assets/images/WatchBlack.svg'
// import Star from "/assets/images/star.svg";
import { ClockIcon } from '@heroicons/react/solid'
import moment from 'moment'
import Link from 'next/link'

const Quizzes = ({ quizzes }: any) => {
    return (
        <>
            <div className='relative px-2 mx-3 w-[350px] shadow-lg py-4 rounded-md bg-white'>
                <div
                    className='absolute z-10 bg-[#DBE6E3] w-[132px] lg:text-[20px] md:text-[12px] text-center items-center 
              font-[596] text-[#0F5647] p-2 rounded-br-lg left-0 top-0'
                >
                    {quizzes?.students[0]?.status}
                </div>
                <div className=' rounded-lg w-[300px] '>
                    <Image
                        alt=''
                        src={Bq1}
                        className='rounded-md object-cover'
                    />
                </div>
                <div className='lg:text-[22px] px-2 md:text-[22px] text-[#262626] font-bold lg:font-semibold font-author pt-5 lg:pt-3 pb-2 lg:pb-0'>
                    {quizzes?.quizTitle}
                </div>
                <div className='text-[#454545] px-2 lg:text-[18px] md:text-[14px] font-[494] '>
                    {quizzes?.quizDescription}
                </div>
                <div className='bg-[#F5F5F5] my-5 p-2 -mx-2 lg:mt-[5px]'>
                    <div className='text-[#454545] px-2 font-[494] lg:text-[15px] md:text-[12px] items-center'>
                        {quizzes?.quizDescription}
                    </div>
                    <div className='flex items-center gap-1 px-1 pt-0'>
                        <div className='items-center inline-block pt-[2px]'>
                            <ClockIcon
                                className='text-[#131414]'
                                height='16px'
                                width='16px'
                            />
                        </div>
                        <div className='text-[#131414] lg:text-[16px] md:text-[12px] font-semibold items-center'>
                            {moment(quizzes?.startTime, 'h:mm').format('h a')} -{' '}
                            {moment(quizzes?.submitDate).format(
                                'Do MMMM, YYYY'
                            )}
                        </div>
                    </div>
                </div>
                <button className=' ml-3 bg-[#0F5647] px-[8px] md:py-[5px]  rounded-[8px] text-white relative group overflow-hidden'>
                    <span className='relative font-author  md:text-[15px] lg:text-[22px]  z-40'>
                        <Link href={`/student/classes/${quizzes?.classId}?t=q`}>
                            REVIEW QUIZ
                        </Link>
                    </span>
                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[0F5647]  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-[0F5647] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                </button>
            </div>
        </>
    )
}

export default Quizzes
