import React, { useState, useEffect } from 'react'
import calendar from '/assets/icons/calendar-tick.svg'
import FileIcon from '/assets/icons/downloadfile.svg'
import InfoIcon from '/assets/icons/info-circle.svg'
import ClockIcon from '/assets/icons/clockIcon.svg'
// import { Document } from "react-pdf";
import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../../../store'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { ExclamationCircleFilled } from '@ant-design/icons'
import moment from 'moment'
import Link from 'next/link'
import { projectUpload } from '../../../../../../store/actions/student/projects/projectUpload'
import axios from 'axios'
import { baseURL } from '../../../../../../helpers/url'

const ProjectDetail = ({ projectDetails }: any) => {
    const dispatch = useAppDispatch()
    const [file, setFile] = useState<any>(null)

    const fileHandler = (e: any) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        const uploadProjectHandler = async () => {
            if (file === null) return
            const formData: any = new FormData()
            formData.append(
                'studentId',
                projectDetails?.projects?.students[0]?.studentId
            )
            formData.append('projectId', projectDetails?.projects?.projectId)
            formData.append('file', file)

            await axios({
                url: `${baseURL}/projects/upload`,
                method: 'post',
                data: formData,
            }).then((r) => r)
        }
        uploadProjectHandler()
    }, [file])
    return (
        <>
            <div
                className={`py-4 ${
                    projectDetails?.projects?.students?.length > 0 &&
                    projectDetails?.projects?.students[0]?.status ===
                        'completed'
                        ? 'bg-[#FBF2DC]'
                        : 'bg-[#FEE5E3]'
                } shadow-[0px_2px_15px_0px_#0000001F] rounded-t-lg flex justify-between items-center px-4 mt-5 `}
            >
                <div className='flex items-center gap-3'>
                    <div className='md:flex-col lg:flex-row lg:space-x-2 md:text-[14px] md:font-[700] xl:text-[26px] xl:font-[600]'>
                        <p className=' lg:inline text-[#355ADC] '>
                            {projectDetails?.classCode}:
                        </p>
                        <p className='lg:inline '>
                            {projectDetails?.projects?.projectTitle}
                        </p>
                    </div>
                    {projectDetails?.projects?.students?.length > 0 &&
                    projectDetails?.projects?.students[0]?.status ===
                        'completed' ? (
                        <div className='text-[14px] text-[#0F5647] flex gap-1 items-center'>
                            <div className='h-1 w-1 rounded-2xl bg-[#0F5647]'></div>
                            <span className='md:text-[14px] font-[500] lg:text-[20px] '>
                                Completed
                            </span>
                        </div>
                    ) : (
                        <div className='text-[14px] text-[#F94F46] flex gap-1 items-center'>
                            <div className='h-1 w-1 rounded-2xl bg-[#F94F46]'></div>
                            <span className='md:text-[14px] font-[500] lg:text-[20px] '>
                                Not Completed
                            </span>
                        </div>
                    )}
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
            <div className='shadow-[0px_2px_15px_0px_#0000001F]'>
                <div className='bg-[white] p-4'>
                    <div className='font-[600] md:text-[18px] xl:text-[22px]'>
                        Project Goal:
                    </div>
                    <div className='text-[#454545] font-[400] md:pt-2 xl:text-[18px]'>
                        {projectDetails?.projects?.projectDescription}
                    </div>
                </div>
            </div>
            <div className=' md:py-3 lg:py-4 bg-[#FCFCFC] shadow-[0px_2px_15px_0px_#0000001F] rounded-lg flex justify-between items-center px-2 lg:px-4 mt-5 '>
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
                    {projectDetails?.projects?.students?.length > 0 &&
                    projectDetails?.projects?.students[0]?.status ===
                        'completed' ? (
                        <button className='md:p-[7px] lg:p-2 bg-[#F0A901] rounded-[8px] text-white relative group overflow-hidden'>
                            <span className='relative font-author md:text-[15px] lg:text-[22px] z-40'>
                                Review Project
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    ) : (
                        <>
                            <form encType='multipart/form-data'>
                                <label
                                    htmlFor='fileUpload'
                                    className='px-1 py-[7px] lg:px-2 lg:py-[12px] bg-[#F0A901] rounded-[8px] text-white relative group overflow-hidden hover:cursor-pointer'
                                >
                                    <span className='relative font-author text-[15px] lg:text-[22px] z-40'>
                                        Upload Project
                                    </span>
                                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300 rounded-r-lg'></span>
                                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300 rounded-l-lg'></span>
                                </label>
                                <input
                                    type='file'
                                    id='fileUpload'
                                    name='fileUpload'
                                    onChange={fileHandler}
                                    className='z-10 hidden'
                                />
                            </form>
                        </>
                    )}

                    {/* <span className="relative font-author md:text-[15px] lg:text-[22px] z-40">
              Upload Project
            </span>
            <span className="absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 "></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300"></span> */}

                    <button
                        type='button'
                        className='ml-2 bg-[#E1E6FA] p-1 rounded-[8px] text-[#355ADC] relative group overflow-hidden'
                    >
                        <Link
                            href={`${baseURL}/${projectDetails?.projects?.file}`}
                            target='_blank'
                            download
                        >
                            <span className='relative flex font-author text-[15px] lg:text-[22px] z-40'>
                                Download
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
            <div className=' bg-[#FFFFFF] pb-4 mt-3 rounded-lg shadow-[0px_2px_15px_0px_#0000001F]'>
                <div className='p-2 flex gap-2'>
                    <div className='w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none'>
                                Creativity
                            </h1>
                            <Image src={InfoIcon} alt='' />
                        </div>
                        <div className='mt-4'>
                            <Rating
                                name='simple-controlled'
                                value={
                                    projectDetails?.projects?.students[0]
                                        ?.creativity || 0
                                }
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none'>
                                Logic
                            </h1>
                            <Image src={InfoIcon} alt='' />
                        </div>
                        <div className='mt-4'>
                            <Rating
                                name='simple-controlled'
                                value={
                                    projectDetails?.projects?.students[0]
                                        ?.logic || 0
                                }
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='w-[33%] rounded-md border-[1.5px] p-2 bg-[#FFFFFF]'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-[#131414] font-[600] md:text-[18px] xl:text-[20px] leading-none'>
                                Completion
                            </h1>
                            <Image src={InfoIcon} alt='' />
                        </div>
                        <div className='mt-4'>
                            <Rating
                                name='simple-controlled'
                                value={
                                    projectDetails?.projects?.students[0]
                                        ?.completion || 0
                                }
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className='border-[1.5px]  rounded-md mt-3 mx-4  '>
                    <h2 className='text-[#131414] md:text-[18px] lg:text-[22px] font-[596] pl-3 pt-3'>
                        Teacher’s Comment
                    </h2>
                    {projectDetails?.projects?.students?.length > 0 &&
                    projectDetails?.projects?.students[0]?.status ===
                        'completed' ? (
                        <p className='px-3 py-3 lg:text-[20px]'>
                            {projectDetails?.projects?.students[0]?.review}
                        </p>
                    ) : (
                        <p className='px-3 py-3 lg:text-[20px] text-[#BFBFBF]'>
                            Nothing to show.
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectDetail
