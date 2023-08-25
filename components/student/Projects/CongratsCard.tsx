import React from 'react'
import Image from 'next/image'
import Star from '/public/star.svg'
import Emoji from '/public/Group.svg'
import Profile from '/assets/images/Feedbackpic.svg'
import Link from 'next/link'
const CongratsCard = () => {
    return (
        <>
            <div className='relative bg-gradient-to-r  from-[#355ADC] to-[#57067D] ml-4 rounded pb-10 mt-6'>
                <div className='flex items-center lg:p-[10px] lg:pt-[20px] md:pl-[10px] md:pt-[15px] '>
                    <Image src={Emoji} alt='' width='100' height='100' />
                    <p className='lg:pl-[15px] lg:text-[22px] md:text-[15px] text-[#F0A901] font-author md:pl-[10px]'>
                        Congratulations!
                        <span className='text-white'>
                            Yor project P-10 has marked as completed.
                        </span>
                    </p>
                </div>

                <div className='md:mt-[10px] md:m-[10px] md:h-[90px] lg:h-[85px] bg-[#FBF2DC] lg:ml-[25px] lg:mt-[0px] rounded-lg'>
                    <h1 className='md:p-[10px] lg:p-[10px] text-[#454545] text-[15px] font-semibold'>
                        Project Ratings
                    </h1>
                    <div className='flex items-center lg:pl-[8px] md:p-[4px] '>
                        <div>
                            <Image src={Star} alt='' />
                        </div>
                        <div className='lg:pl-[15px] md:pl-[10px] '>
                            <Image src={Star} alt='' />
                        </div>
                        <div className='lg:pl-[15px] md:pl-[10px] '>
                            <Image src={Star} alt='' />
                        </div>
                        <div className='lg:pl-[15px] md:pl-[10px] '>
                            <Image src={Star} alt='' />
                        </div>
                        <div className='lg:pl-[15px] md:pl-[10px] '>
                            <Image src={Star} alt='' />
                        </div>
                    </div>
                </div>

                <div className='md:mt-[30px]  md:h-[93px] md:m-[10px] lg:h-[100px] bg-white lg:ml-[25px] lg:mt-[20px]  rounded-lg'>
                    <p className='md:pl-[10px] lg:pl-[10px] pt-[5px] font-author lg:text-[18px] text-[#454545] font-semibold'>
                        Teachers Feedback
                    </p>
                    <p className='md:pl-[10px] lg:pl-[10px] lg:pt-[5px] font-author text-[#454545] lg:text-[20px]'>
                        Well done Zayn , keep it up!
                    </p>
                    <div className='md:pl-[10px] flex lg:pl-[10px] items-center'>
                        <Image src={Profile} alt='' />
                        <p className='font-author font-normal  pl-2 text-[#131414] lg:text-[20px]'>
                            James Faulknar
                        </p>
                        <p className='font-author  lg:text-[20px] w-[5px] h-[5px] bg-[#BFBFBF] rounded lg:ml-[10px]'></p>
                        <p className='font-author  lg:text-[20px] lg:ml-[10px]'>
                            1 day ago
                        </p>
                    </div>
                </div>

                <div className='absolute -bottom-8 left-[30%]'>
                    <button className=' m-2 px-[20px] py-[10px] bg-[#355ADC] mt-[33px] rounded-[8px] text-white relative group overflow-hidden'>
                        <span className='text-[#FFFFFF] lg:text-[20px] z-40  lg:leading-7 lg:font-[596]'>
                            {/* <Link href={`/student/classes/${upcomingClass?.classId}?t=c`}>
                View Project
              </Link> */}
                            View Project
                        </span>
                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-blue-400 opacity-20  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-blue-400 opacity-20 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CongratsCard
