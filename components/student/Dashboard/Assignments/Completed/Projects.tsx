import React, { useState } from 'react'
import Bq2 from '/assets/images/Black-quiz-2.png'
import profile from '/assets/images/download.jpeg'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Image from 'next/image'
import Link from 'next/link'
import Bq1 from '/assets/images/Black-quiz-1.png'
import Watch from '/assets/images/WatchBlack.svg'
import moment from 'moment'
const Projects = ({ projects }: any) => {
    return (
        <>
            <div className='bg-white flex shadow-lg rounded-lg'>
                <div className='bg-white shadow-lg lg:w-[280px] md:w-[240px] min-w-[240px] rounded-lg'>
                    <div className='relative z-10 bg-[#DBE6E3] lg:text-[16px] md:text-[14px] text-center items-center font-bold text-[#0F5647] lg:w-[125px] md:w-[100px] p-2 rounded-br-lg'>
                        {projects?.students[0]?.status}
                    </div>

                    <div className='p-4 -z-50 -mt-10'>
                        <div className='rounded-lg overflow-hidden lg:h-[110px] md:h-[100px]'>
                            <Image alt='' src={Bq2} height='160'></Image>
                        </div>
                        <div className='lg:text-[24px] md:text-[20px] text-[#262626] font-bold lg:font-semibold lg:pt-3 pt-5 pb-2 lg:pb-0'>
                            {projects?.projectTitle}
                        </div>
                        <div className='text-[#454545] lg:text-[16px] md:text-[14px]  font-semibold '>
                            {projects?.projectDescription}
                        </div>
                        <div className='bg-[#F5F5F5] my-5 -mx-4 px-4 py-2 lg:mt-[5px]'>
                            <div className='text-[#454545] font-semibold lg:text-[15px] md:text-[14px] items-center '>
                                Submitted Date
                            </div>
                            <div className='flex gap-3 pt-2'>
                                <div className='items-center inline-block pt-[2px] md:pt-0 text-[#131414;]'>
                                    <Image alt='' src={Watch}></Image>
                                </div>
                                <div className='text-[#131414;] lg:text-[16px] md:text-[14px] font-bold items-center'>
                                    {moment(projects?.startDate).format(
                                        'Do MMMM,YYYY'
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='-mt-5 pl-4 pb-4'>
                        <button className='bg-[#717688]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'>
                            <Link
                                href={`/student/classes/${projects?.classId}?t=p`}
                            >
                                <span className='relative z-40'>
                                    REVIEW PROJECT
                                </span>
                            </Link>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#4d5161]  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#4d5161] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                </div>
                <div className='px-4 py-3 '>
                    <div className='text-[24px] font-bold'>
                        {' '}
                        Teachers Feedback
                    </div>
                    <Box
                        className='pt-3'
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating
                            className='text-[40px]'
                            name='simple-controlled'
                            value={projects?.students[0]?.completion}
                            size='large'
                            readOnly
                        />
                    </Box>
                    <div className='bg-[#F0F0F0] rounded-lg w-[260px] h-[240px] px-3 py-3 mt-3 text-[#262626]'>
                        {projects?.students[0]?.review
                            ? projects?.students[0]?.review
                            : 'No feedback'}
                    </div>
                    <div className='flex items-center gap-2 mt-3'>
                        <div className=' h-[30px] w-[30px] rounded-2xl overflow-hidden'>
                            <Image
                                alt=''
                                src={profile}
                                height='30'
                                width='30'
                            ></Image>
                        </div>
                        <div className='text-[16px] font-semibold'>
                            James Faulkner
                        </div>
                        <div className='bg-[#b6b1b1] h-[5px] w-[5px] rounded-2xl'></div>
                        <div className='text-[16px] font-semibold'>
                            2 days Ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
