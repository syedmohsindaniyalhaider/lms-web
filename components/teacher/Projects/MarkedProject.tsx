import React from 'react'
import { Grid } from '@mui/material'
import ProjectImg from '/assets/images/project5.png'
import { ClockIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import { teacherReviewProject } from '../../../store/actions/teacher/teachers/teacherSlice'
import { useAppDispatch } from '../../../store'

const MarkedProjects = ({ projects }: any) => {
    const dispatch = useAppDispatch()
    const studentSubmittedProjects = projects?.filter(
        (ele: any) => ele.checked === true
    )
    return (
        <>
            {studentSubmittedProjects?.map((ele: any) => {
                return (
                    <>
                        <Grid item xs={12} md={6} lg={4}>
                            <div className='flex '>
                                <div className=''>
                                    <div className='shadow-lg  bg-white border-solid rounded-[8px] border-[1.5px]'>
                                        <p className='absolute px-4 py-2 z-10 font-author font-semibold bg-[#DBE6E3]  md:text-[14px] lg:text-[20px]   text-center text-[#0F5647] rounded-tl-md rounded-br-md '>
                                            Marked
                                        </p>

                                        <div className='pt-[20px] pr-[20px] pl-[20px] rounded-[8px] '>
                                            <Image
                                                className='rounded-[8px] '
                                                src={ProjectImg}
                                                alt='/'
                                            />
                                        </div>
                                        <div className=''>
                                            <h3 className='p-[16px] font-author pt-1 text-[16px] lg:text-[22px] text-[#131414] font-bold'>
                                                {ele?.projects?.projectTitle}
                                                <h4 className='text-[#355ADC] font-author font-[500] text-[12px] lg:text-[16px]'>
                                                    {ele?.projects?.fileName}
                                                </h4>
                                            </h3>
                                            <h4 className='md:text-[14px] pl-[16px] lg:text-[18px] text-[#454545] font-author mb-[10px]'>
                                                {
                                                    ele?.projects
                                                        ?.projectDescription
                                                }
                                            </h4>

                                            <div className=' bg-[#FFF8F8]   md:pl-[10px] md:pr-[10px] md:pt-[5px] md:pb-[5px] lg:pl-[14px] '>
                                                <div className='text-[#131414] md:text-[18px] lg:text-[24px] font-semibold'>
                                                    {ele?.students?.fullName}
                                                </div>
                                                <div className='flex items-center md:mb-[9px] md:pb-2 lg:pb-1 gap-2'>
                                                    <ClockIcon
                                                        className='text-[#FA6962]  '
                                                        height='18px'
                                                        width='18px'
                                                    />
                                                    <p className=' md:text-[16px] lg:text-[18px] text-[#FA6962] font-author font-[500]'>
                                                        {moment(
                                                            ele?.projects
                                                                ?.startDate
                                                        ).format('Do MMM YYYY')}
                                                    </p>
                                                </div>
                                                {/* <div className="inline-block bg-[#FA6962] px-4 rounded-[50px]">
                          <h1 className="text-white text-[16px]">
                            <strong>Score:</strong> Yet to determine
                          </h1>
                        </div> */}
                                            </div>
                                            <div className='my-6 mx-4'>
                                                <Link
                                                    href={`/teacher/projects/unmarked?pid=${ele?.projects.projectId}`}
                                                    className='p-4 bg-[#F0A901]  rounded-[8px] text-white relative group overflow-hidden'
                                                >
                                                    <span
                                                        onClick={() =>
                                                            dispatch(
                                                                teacherReviewProject(
                                                                    ele
                                                                )
                                                            )
                                                        }
                                                        className='relative uppercase text-[18px] font-author  z-40'
                                                    >
                                                        Review Project
                                                    </span>
                                                    <span className='rounded-r-[8px] hover:rounded-r-[8px] absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                                    <span className='rounded-l-[8px] hover:rounded-l-[8px] absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </>
                )
            })}
        </>
    )
}

export default MarkedProjects
