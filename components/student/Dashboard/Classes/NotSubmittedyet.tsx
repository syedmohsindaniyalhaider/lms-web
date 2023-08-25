import React, { useState } from 'react'
import Image from 'next/image'
import red from '/assets/images/red.svg'
import Black from '/assets/images/Black-quiz-1.png'
import Black2 from '/assets/images/Black-quiz-2.png'

import Clok from '/assets/images/clok.svg'
function NotSubmittedyet() {
    return (
        <div className='flex md:gap-4 md:-mx-3 mt-3 font-author'>
            <div className='rounded-lg overflow-hidden w-[50%] font-author'>
                <div className='bg-[#FEE5E3] h-[65px] flex  lg:justify-start items-center md:gap-3 md:px-2 lg:px-4'>
                    <div className='pt-2'>
                        <Image src={red} alt='' height='30' width='30' />
                    </div>
                    <div className='text-[#F94F46] md:font-medium font-author lg:text-[18px]'>
                        Hurray! You have completed this Quiz
                    </div>
                </div>
                <div className='bg-white flex md:p-2 lg:p-4  gap-2 lg:gap-3'>
                    <div className='md:rounded-lg overflow-hidden md:w-[130px] lg:w-[180px] lg:max-w-300 md:h-[80px] lg:h-[100px]  lg:max-h-[120px] bg-red-800'>
                        <Image
                            className='lg:object-fill  '
                            src={Black}
                            alt=''
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className='font-bold lg:text-[20px] font-author'>
                            Class Quiz
                        </h1>
                        <p className='text-[12px] md:pt-1 lg:text-[16px] font-author'>
                            Q # 12: Color Psycology in Design
                        </p>
                        <div className='flex md:gap-1'>
                            <Image src={Clok} alt='' />
                            <p className='text-[12px] lg:text-[16px] font-author'>
                                2 pm - 31st August, 2022
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 bg-white lg:p-4 lg:-mt-4'>
                    <h1 className='font-semibold lg:text-[20px] font-author'>
                        You Score
                    </h1>
                    <div className='flex items-center gap-2'>
                        <progress
                            className='rounded w-full h-[2px]  [&::-webkit-progress-value]:rounded overflow-hidden [&::-moz-progress-bar]:bg-[#0F5647]'
                            value={30}
                            max='100'
                        ></progress>
                        <div className='text-[#454545] md:text-[14px] md:w-[180px] font-author lg:text-[18px]'>
                            Yet to determine
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#F0A901]  font-medium px-[15px] py-[6px] rounded-[8px] text-white md:text-[16px] relative group overflow-hidden'>
                            <span className='relative z-40 font-author'>
                                {/* <Link href={`/classes/${props.classCode}`}> */}
                                START PROJECT
                                {/* </Link> */}
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#eac46e]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#eac46e] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden w-[50%]'>
                <div className='bg-[#FEE5E3] h-[65px] flex justify-start lg:px-4 md:px-2 items-center md:gap-3'>
                    <div className='pt-2'>
                        <Image src={red} alt='' height='30' width='30' />
                    </div>
                    <div className='text-[#F94F46] md:font-medium lg:text-[18px] font-author'>
                        Hurray! You have completed this Quiz
                    </div>
                </div>
                <div className='bg-white flex md:p-2 lg:p-4  gap-2 lg:gap-3'>
                    <div className='md:rounded-lg overflow-hidden md:w-[130px] lg:w-[180px] lg:max-w-300 md:h-[80px] lg:h-[100px]  lg:max-h-[120px] bg-red-800'>
                        <Image
                            className='lg:object-fill  '
                            src={Black2}
                            alt=''
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className='font-bold lg:text-[20px] font-author'>
                            Class Quiz
                        </h1>
                        <p className='text-[12px] md:pt-1 lg:text-[16px] font-author'>
                            Q # 12: Color Psycology in Design
                        </p>
                        <div className='flex md:gap-1'>
                            <Image src={Clok} alt='' />
                            <p className='text-[12px] lg:text-[16px] font-author'>
                                2 pm - 31st August, 2022
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 bg-white lg:p-4 lg:-mt-4'>
                    <h1 className='font-semibold lg:text-[20px] font-author'>
                        You Score
                    </h1>
                    <div className='flex items-center gap-2 justify-start'>
                        <progress
                            className='rounded md:w-full  h-[2px]  [&::-webkit-progress-value]:rounded overflow-hidden [&::-moz-progress-bar]:bg-[#0F5647]'
                            value={30}
                            max='100'
                        ></progress>

                        <div className='text-[#454545] md:text-[14px] md:w-[180px] font-author lg:text-[18px]'>
                            Yet to determine
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#F0A901]  font-medium px-[15px] py-[6px] rounded-[8px] text-white md:text-[16px] relative group overflow-hidden'>
                            <span className='relative z-40 font-author'>
                                {/* <Link href={`/classes/${props.classCode}`}> */}
                                START PROJECT
                                {/* </Link> */}
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#eac46e]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#eac46e] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* not */}

            {/* <div className='rounded-lg overflow-hidden w-[50%] '>
                <div className='bg-[#DBE6E3] h-[65px] flex justify-center items-center md:gap-3'>
                    <div className='pt-2'><Image src={Green} alt="" height="30px" width="30px"/></div>
                    <div className='text-[#0F5647] md:font-medium'>Hurray! You have completed this Quiz</div>
                </div>
            </div> */}
        </div>
    )
}

export default NotSubmittedyet
