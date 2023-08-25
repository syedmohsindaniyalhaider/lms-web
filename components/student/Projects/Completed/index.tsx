import React from 'react'
import Image from 'next/image'
import Clock from '/public/Clock.svg'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { Hidden } from '@mui/material'
import ProjectImg from '/assets/images/project5.png'
import Link from 'next/link'
import moment from 'moment'

function CompletedProjects(props: any) {
    const [value, setValue] = React.useState<number | null>(2)

    return (
        <>
            <div className='container my-4 w-full rounded border-solid border-2 border-[#D9D9D9]'>
                <p className='absolute z-10 bg-[#DBE6E3] font-author font-semibold lg:h-[44px] md:h-[30px] md:w-[80px] md:text-[14px] lg:text-[20px] md:pt-[5px] lg:w-[134px] text-center text-[#0F5647] rounded-br-md'>
                    Completed
                </p>
                <div>
                    <div className='md:flex'>
                        <div className='lg:grid lg:grid-cols-12  md:flex-col md:w-[50%] lg:w-[100%] md:border-r-2 lg:border-0'>
                            <div className='lg:col-span-4 flex md:px-4 md:py-2 lg:p-[10px] md:h-[130px]  lg:h-[200px] '>
                                <Image
                                    src={ProjectImg}
                                    alt=''
                                    className='rounded-lg'
                                />
                            </div>

                            <div className='lg:col-span-5 lg:flex'>
                                <div className='md:px-4 md:py-2 lg:p-[10px] '>
                                    <h2 className='md:text-[18px] py-2 lg:text-[26px] font-author font-[596] md:text-[#454545] lg:text-[#131414] lg:leading-8 md:leading-[22px] '>
                                        {props?.projectTitle}
                                    </h2>

                                    <Box sx={{ '& > legend': { mt: 2 } }}>
                                        <Rating
                                            className='text-[26px] py-1 hidden lg:flex'
                                            name='simple-controlled'
                                            value={value}
                                            size='large'
                                            onChange={(event, newValue) => {
                                                setValue(newValue)
                                            }}
                                        />
                                    </Box>
                                    <div className='md:bg-[#F5F5F5] lg:bg-transparent md:px-3 lg:px-0'>
                                        <p className='text-[#454545] md:text-[14px] lg:text-[20px] py-1 text-[494]'>
                                            Submitted Date
                                        </p>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center w-[16px] h-[16px]'>
                                                <Image src={Clock} alt='' />
                                            </div>
                                            <p className='py-1 font-[494] md:text-[14px] lg:text-[20px] text-[#131414] '>
                                                {moment(
                                                    props?.startDate
                                                ).format(
                                                    'h a - Do MMMM, YYYY'
                                                ) || '2 pm - 31st August, 2022'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-3 mx-4 py-4   '>
                                <button className='lg:px-[7px] lg:py-[12px] md:px-[7px] md:py-[5px] bg-[#F0A901] lg:float-right rounded-[8px] text-white relative group overflow-hidden'>
                                    <span className='relative uppercase font-author md:text-[15px] lg:text-[18px]  tracking-wide z-40'>
                                        <Link
                                            href={`/student/classes/${props?.classId}?t=p`}
                                        >
                                            REVIEW PROJECT
                                        </Link>
                                    </span>
                                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                                </button>
                            </div>
                        </div>
                        {/* hidden on laptop */}
                        <div className='md:w-[50%] lg:w-[100%] lg:hidden'>
                            <div className='px-4  py-2 '>
                                <h2 className='md:text-[18px] leading-8 text-[#262626] font-[596]'>
                                    Teacher’s Feedback
                                </h2>
                            </div>
                            <Box>
                                <Rating
                                    className='text-[26px] py-1 px-4 lg:hidden'
                                    name='simple-controlled'
                                    value={value}
                                    size='large'
                                    onChange={(event, newValue) => {
                                        setValue(newValue)
                                    }}
                                />
                            </Box>
                            <div className='mx-3 my-3 lg:hidden  md:p-[6px]  lg:mt-3  lg:w-[98%]  bg-[#F0F0F0] rounded-lg'>
                                <p className='text-[14px] p-[10px] font-author font-[375] text-[#262626] '>
                                    {props?.projectDescription ||
                                        'Project Description'}
                                </p>
                            </div>
                            <div className='flex md:px-4 lg:hidden items-center'>
                                <div className='md:w-[20px]   md:h-[20px] lg:w-[30px] lg:h-[30px] rounded-full overflow-hidden'>
                                    {/* <Image src={val.userPic} alt="" /> */}
                                </div>
                                <p className='md:text-[18px] text-[#131414]'>
                                    Syed Mohsin
                                </p>
                                <p className=' bg-[#BFBFBF] w-[5px] h-[5px] rounded ml-[10px]'></p>
                                <p className='pl-[10px] md:text-[12px] text-[#262626]'>
                                    {moment(props?.startDate).fromNow() ||
                                        '12:00 PM'}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* hidden on tab */}
                    <div className='px-4 md:hidden lg:block '>
                        <h2 className='lg:text-[22px] leading-8 text-[#262626] font-[596]'>
                            Teacher’s Feedback
                        </h2>
                    </div>
                    <div className='mx-3 my-3 md:hidden lg:block  md:p-[6px]  lg:mt-3 lg:w-[98%]  bg-[#F0F0F0] rounded-lg'>
                        <p className='lg:text-[20px] px-8 font-author font-[375] text-[#262626] '>
                            {props?.projectDescription}
                        </p>
                        <div className='flex items-center'>
                            <div className='md:w-[20px]  md:h-[20px] lg:w-[30px] lg:h-[30px] rounded-full overflow-hidden'>
                                {/* <Image src={val.userPic} alt="" /> */}
                            </div>
                            <p className='lg:text-[20px] text-[#131414] font-[500]'>
                                Syed Mohsin
                            </p>

                            <p className='pl-[10px] lg:text-[20px] text-[#262626] font-[500]'>
                                12:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompletedProjects
