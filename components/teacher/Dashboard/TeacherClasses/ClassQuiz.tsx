import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Green from '/assets/images/Green.svg'
import Black from '/assets/images/Black-quiz-1.png'
import Black2 from '/assets/images/Black-quiz-2.png'
import red from '/assets/images/red.svg'
import Clock from '/assets/images/clok.svg'
import moment from 'moment'

const ClassQuiz = ({
    quizDescription,
    quizTitle,
    submitDate,
    endTime,
    students,
}: any) => {
    return (
        <>
            <div className='rounded-lg overflow-hidden w-[50%] font-author'>
                {students?.length > 0 && students[0]?.status === 'pending' ? (
                    <div className='bg-[#FEE5E3] h-[65px] flex  lg:justify-start items-center md:gap-3 md:px-2 lg:px-4'>
                        <div className='pt-2'>
                            <Image src={red} alt='' height='30' width='30' />
                        </div>
                        <div className='text-[#F94F46] md:font-medium font-author lg:text-[18px]'>
                            Quiz will unlock after class will be taken
                        </div>
                    </div>
                ) : (
                    <div className='bg-[#DBE6E3] h-[65px] flex font-author lg:justify-start items-center md:gap-3 md:px-2 lg:px-4'>
                        <div className='pt-2 font-author'>
                            <Image src={Green} alt='' height='30' width='30' />
                        </div>
                        <div className='text-[#0F5647] font-author md:font-[500] xl:text-[22px]'>
                            Quiz will unlock after class will be taken
                        </div>
                    </div>
                )}

                <div className='bg-white flex md:p-2 lg:p-4  font-author gap-2 lg:gap-3'>
                    <div className='md:rounded-lg overflow-hidden md:w-[130px] lg:w-[180px] lg:max-w-300 md:h-[80px] lg:h-[100px]  lg:max-h-[120px] bg-red-800'>
                        <Image
                            className='lg:object-fill  '
                            src={Black}
                            alt=''
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className='font-[700] xl:text-[22px] xl:font-[600] font-author'>
                            {quizTitle}
                        </h1>
                        <p className='text-[12px] font-[500] md:pt-1 xl:text-[20px]'>
                            {quizDescription}
                        </p>
                        <div className='flex md:gap-1'>
                            <Image src={Clock} alt='' />
                            <p className='text-[12px] font-[500] xl:text-[20px] font-author'>
                                {`${endTime} - ${moment(submitDate).format(
                                    'Do MMM, YYYY'
                                )}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 bg-white lg:p-4 lg:-mt-3'>
                    {/* <h1 className="font-[600] xl:text-[22px] xl:-mt-2 font-author">
            You Score
          </h1>
          <div className="flex items-center gap-2 lg:-mt-1 ">
            <progress
              className="rounded w-full h-[2px]  [&::-webkit-progress-value]:rounded overflow-hidden [&::-moz-progress-bar]:bg-[#0F5647]"
              value={30}
              max="100"
            ></progress>
            <div className="md-text-[12] font-[500] xl:text-[22px]">5/5</div>
          </div> */}
                    {students?.length > 0 &&
                    students[0]?.status === 'pending' ? (
                        <div>
                            <button className='bg-[#F0A901]  font-medium px-[15px] py-[6px] rounded-[8px] text-white md:text-[16px] relative group overflow-hidden'>
                                <span className='relative z-40 font-author'>
                                    {/* <Link href={`/classes/${props.classCode}`}> */}
                                    START Quiz
                                    {/* </Link> */}
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#eac46e]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#eac46e] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button className='bg-[#717688] px-[15px] py-[6px] rounded-[8px] text-white relative group overflow-hidden'>
                                <span className='relative z-40 font-author font-[500] md:text-[15px] xl:text-[22px]'>
                                    {/* <Link href={`/classes/${props.classCode}`}> */}
                                    REVIEW QUIZ
                                    {/* </Link> */}
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#4d5161]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#4d5161] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ClassQuiz
