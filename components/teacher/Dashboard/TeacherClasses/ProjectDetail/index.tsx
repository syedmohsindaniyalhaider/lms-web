import React, { useState, useEffect } from 'react'
import calendar from '/assets/icons/calendar-tick.svg'
import FileIcon from '/assets/icons/downloadfile.svg'
import InfoIcon from '/assets/icons/info-circle.svg'
import ClockIcon from '/assets/icons/clockIcon.svg'
// import { PDFViewer } from "@react-pdf/renderer";
// import axios from "axios";
// import { Document } from "react-pdf";
// import { RootState, useAppSelector } from "../../../../../../store";
import Image from 'next/image'

import moment from 'moment'
import Link from 'next/link'

const ProjectDetail = ({ projectDetails }: any) => {
    return (
        <>
            <div
                className={`py-4 ${
                    projectDetails?.projects?.students?.length > 0 &&
                    projectDetails?.projects?.students[0]?.status ===
                        'completed'
                        ? 'bg-[#FBF2DC]'
                        : 'bg-[#FBF2DC]'
                } shadow rounded-t-lg flex justify-between items-center px-4 mt-5 `}
            >
                <div className='flex items-end gap-3'>
                    <div className='md:flex-col lg:flex-row lg:space-x-2 md:text-[14px] md:font-[700] xl:text-[26px] xl:font-[600]'>
                        <p className=' lg:inline text-[#355ADC] '>
                            {projectDetails?.classCode}:
                        </p>
                        <p className='lg:inline '>
                            {projectDetails?.projects?.projectTitle}
                        </p>
                    </div>
                </div>
                <div className='flex font-medium text-[16px] lg:text-[18px] gap-2 md:mt-5 lg:mt-0'>
                    <div className='flex items-center'>
                        <Image src={calendar} alt='' height='25' width='25' />
                    </div>
                    <div className='flex items-center md:text-[14px] md:font-[700] xl:text-[26px] xl:font-[600]'>
                        {`${moment(projectDetails?.projects?.endDate).format(
                            'Do dddd MMM'
                        )}`}
                    </div>
                </div>
            </div>
            <div className='shadow-md '>
                <div className='bg-[white] p-4'>
                    <div className='font-[600] md:text-[18px] xl:text-[22px]'>
                        Project Goal:
                    </div>
                    <div className='text-[#454545] font-[400] md:pt-2 xl:text-[18px]'>
                        {projectDetails?.projects?.projectDescription}
                    </div>
                </div>
            </div>
            <div className=' md:py-3 lg:py-4 bg-[#FCFCFC] shadow rounded-lg flex justify-between items-center px-4 mt-5 '>
                {projectDetails?.projects?.students?.length > 0 &&
                projectDetails?.projects?.students[0]?.status ===
                    'completed' ? (
                    <h2 className='text-[#0F5647] md:text-[13px] lg:text-[22px] font-[500]'>
                        This project has been marked as completed.
                    </h2>
                ) : (
                    <h2 className='flex gap-2 text-[#131414] md:text-[13px] lg:text-[22px] font-[500]'>
                        <Image src={ClockIcon} alt='' />
                        {`Submit before: ${moment(
                            projectDetails?.projects?.endDate
                        ).format('Do dddd MMM')} - 2 days, 13 hours, 48 min`}
                    </h2>
                )}
                <div>
                    <button className='md:p-[7px] lg:p-2 bg-[#F0A901] rounded-[8px] text-white relative group overflow-hidden'>
                        <span className='relative font-author md:text-[15px] lg:text-[22px] z-40'>
                            Review Project
                        </span>
                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                    </button>

                    <button
                        type='button'
                        className='ml-3  bg-[#E1E6FA] px-[8px] md:py-[5px] rounded-[8px] text-[#355ADC] relative group overflow-hidden'
                    >
                        <Link
                            href={`https://lms-be.up.railway.app/${projectDetails?.projects?.file}`}
                            target='_blank'
                            download
                        >
                            <span className='relative flex p-1 font-author  md:text-[15px] lg:text-[22px]  z-40'>
                                Download Project
                                <Image
                                    src={FileIcon}
                                    alt=''
                                    width='20'
                                    className='rounded-lg pl-1'
                                />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* <div className=" bg-[#FFFFFF] pb-4 mt-3 rounded-lg shadow">
        <div className="p-2 flex gap-2">
          <div className="w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none">
                Creativity
              </h1>
              <Image src={InfoIcon} alt="" />
            </div>
            <div className="mt-4">
              <Rating
                name="simple-controlled"
                // value={projects?.students[0]?.creativity || 0}
                readOnly
              />
            </div>
          </div>
          <div className="w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none">
                Logic
              </h1>
              <Image src={InfoIcon} alt="" />
            </div>
            <div className="mt-4">
              <Rating
                name="simple-controlled"
                value={projects?.students[0]?.logic || 0}
                readOnly
              />
            </div>
          </div>
          <div className="w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none">
                Completion
              </h1>
              <Image src={InfoIcon} alt="" />
            </div>
            <div className="mt-4">
              <Rating
                name="simple-controlled"
                value={projects?.students[0]?.completion || 0}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="border-[1.5px]  rounded-md mt-3 mx-4  ">
          <h2 className="text-[#131414] md:text-[18px] lg:text-[22px] font-[596] pl-3 pt-3">
            Teacher’s Comment
          </h2>
          {projects?.students?.length > 0 &&
          projects?.students[0]?.status === "completed" ? (
            <p className="px-3 py-3 lg:text-[20px]">
              {projects?.students[0]?.review}
            </p>
          ) : (
            <p className="px-3 py-3 lg:text-[20px] text-[#BFBFBF]">
              Nothing to show.
            </p>
          )}
        </div>
      </div> */}
        </>
    )
}

export default ProjectDetail
