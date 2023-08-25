import React from 'react'
import Image from 'next/image'
import calendar from '/assets/icons/calendar-tick.svg'
import immg from '/assets/images/imm.jpg'
import star from '/assets/icons/astaric.svg'
import moment from 'moment'
import Link from 'next/link'
import ClassQuiz from './ClassQuiz'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import ClassProject from '../../../student/Dashboard/Classes/ClassDetails/ClassProject'
import CompletedQuizzes from '../../../student/Quizzes/Completed'

const ClassReview = ({ classDetails, loader }: any) => {
    return (
        <>
            {loader === true ? (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'grey.500',
                        }}
                    >
                        <CircularProgress color='inherit' />
                    </Box>
                </>
            ) : (
                <div className='font-author'>
                    <div className='py-4 bg-[#FBF2DC] rounded-t-lg flex justify-between items-center px-4 mt-5 md:-mx-3'>
                        <div className='flex items-end gap-3'>
                            <div className='md:flex-col lg:flex-row lg:space-x-2 md:text-[14px] md:font-[700] xl:text-[26px] xl:font-[600]'>
                                <p className=' lg:inline text-[#355ADC] '>
                                    {classDetails?.classes?.classCode}
                                </p>
                                <p className='lg:inline '>
                                    {classDetails?.classes?.classTitle}
                                </p>
                            </div>
                            <div className='text-[14px] text-[#0F5647] flex gap-1 items-center'>
                                <div className='h-1 w-1 rounded-2xl bg-[#0F5647]'></div>
                                <span className='md:text-[14px] md:font-[500] xl:text-[26px] xl:font-[600]'>
                                    {classDetails?.classStatus}
                                </span>
                            </div>
                        </div>
                        <div className='flex font-medium text-[16px] lg:text-[18px] gap-2 md:mt-5 lg:mt-0'>
                            <div className='flex items-center'>
                                <Image
                                    src={calendar}
                                    alt=''
                                    height='25'
                                    width='25'
                                />
                            </div>

                            <div className='flex items-center md:text-[14px] md:font-[700] xl:text-[26px] xl:font-[600]'>
                                {`${moment(classDetails?.classes?.date).format(
                                    'Do dddd MMM'
                                )} ${classDetails?.scheduledAt}`}
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md md:-mx-3'>
                        <div className='bg-[white] p-4'>
                            <div className='font-[600] md:text-[18px] xl:text-[22px]'>
                                Description:
                            </div>
                            <div className='text-[#454545] font-[400] md:pt-2 xl:text-[18px]'>
                                {classDetails?.classes?.description}
                            </div>
                        </div>
                        <div className='rounded-b-lg bg-[#FAFBFC] overflow-hidden flex '>
                            <div className='p-3 border-r-2 border-[#E1E6FA] md:w-[50%]'>
                                <div className='font-[600] md:text-[18px] xl:text-[22px]'>
                                    Class Activities
                                </div>
                                <div className=' text-[#355ADC] flex flex-wrap gap-3 py-2 xl:text-[20px] md:font-[400]'>
                                    {classDetails?.classes?.activities.map(
                                        (ele: any, index: any) => (
                                            <Link
                                                key={index}
                                                href={`https://lms-be.up.railway.app/${ele}`}
                                                target='_blank'
                                                className='flex items-center gap-2 bg-[#E1E6FA] rounded-md md:px-2'
                                                rel='noreferrer'
                                            >
                                                {/* <Image src={pdfIcon} alt="" width={35} height={35} /> */}
                                                {ele.split('\\').pop()}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className='p-3 md:w-[50%]'>
                                <div className='font-[600] md:text-[18px] xl:text-[22px]'>
                                    Class Documents
                                </div>
                                <p className='font-[400] md:text-[14px] xl:text-[16px] py-1'>
                                    Class Concepts
                                </p>
                                {classDetails?.classes?.activities.map(
                                    (ele: any, index: any) => (
                                        <Link
                                            key={index}
                                            href={`https://lms-be.up.railway.app/${ele}`}
                                            target='_blank'
                                            className='flex items-center gap-2 bg-[#E1E6FA] rounded-md md:px-2'
                                            rel='noreferrer'
                                        >
                                            {/* <Image src={pdfIcon} alt="" width={35} height={35} /> */}
                                            {ele.split('\\').pop()}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    {/* hero */}
                    {/* <div className="bgimage  pt-5 pb-6 flex h-[auto] justify-center md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl overflow-hidden my-4 -mx-3">
            <div>
              <div className=" text-white md:text-[16px] font-[700] xl:text-[34px] xl:leading-[38px] flex justify-center">
                How was your Class?
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="border-2 border-white h-[30px] w-[30px] rounded-2xl overflow-hidden">
                  <Image src={immg} alt="" height="30" width="30" />
                </div>
                <div className="font-light text-white md:text-[14px] mf:font-[400] xl:text-[20px] xl:leading-[26px] pr-2 ">
                  Taught by Cathy Durant on 9th August, 2022
                </div>
              </div>
              <div className="flex justify-center">
                <div className=" bgimage bg-white rounded-md flex items-center gap-2 px-3 mt-2">
                  <div className=" pt-2">
                    <Image src={star} alt="" />
                  </div>
                  <div className="font-[600] md:text-[18px] xl:text-[24px] text-[#F0A901] ">
                    Rate your class
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                    <div className='flex md:gap-4 md:-mx-3 mt-3 font-author'>
                        {/* <ClassQuiz {...classDetails?.classes?.quizzes} /> */}
                        {/* <ClassProject {...classDetails?.classes?.projects} /> */}
                    </div>
                    {/* <NotSubmittedyet /> */}
                    {/* <CompletedQuizzes /> */}
                </div>
            )}
        </>
    )
}

export default ClassReview
