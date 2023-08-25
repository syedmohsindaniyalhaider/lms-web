import { ChevronLeftIcon, ClockIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import FileIcon from '/assets/icons/downloadfile.svg'
import Star from '/assets/icons/astaric.svg'
import LogicIcon from '/assets/icons/logic.svg'
import CreativityIcon from '/assets/icons/creativity.svg'
import CompletionIcon from '/assets/icons/complete.svg'
import ProfileImg from '/assets/images/review-profile.jpg'
import LinearProgress, {
    LinearProgressProps,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Rating } from '@mui/material'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { reviewProject } from '../../../store/actions/teacher/teachers/reviewProjectService'
import { useRouter } from 'next/router'
import moment from 'moment'
import ReviewModal from '../../ui/Modal/Review'
import ReviewProfile from '/assets/images/review-profile.jpg'
import ReviewBg from '/assets/images/review-bg.png'
import { baseURL } from '../../../helpers/url'

const ReviewProject = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { projectReview, teacherSingleProject } = useAppSelector(
        (state: RootState) => state.teacher
    )
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [creativity, setCreativity] = useState<number | null>(0)
    const [logic, setLogic] = useState<number | null>(0)
    const [completion, setCompletion] = useState<number | null>(0)
    const [review, setReview] = useState<any>('')

    const reviewSubmitHandler = () => {
        const data = {
            studentId: teacherSingleProject?.students?.studentId,
            projectId: teacherSingleProject?.projects?.projectId,
            creativity: creativity,
            logic: logic,
            completion: completion,
            review: review,
            checked: true,
        }
        handleClose()
        dispatch(reviewProject(data))
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex items-center'>
                        <ChevronLeftIcon className='h-[24px] text-[#355ADC] ' />
                        <p className='text-[#355ADC] font-author md:text-[16px] lg:text-[20px]'>
                            <Link href='/teacher/projects'>Go back</Link>
                        </p>
                    </div>
                    <h2 className='md:text-[25px] md:pl-[10px] md:text-[#131414] md:leading-[38px] font-bold font-author'>
                        Project
                    </h2>
                </div>
            </div>
            <div className='bg-white rounded-md  shadow-md mt-5 pb-1'>
                <p
                    className={
                        teacherSingleProject.checked === true
                            ? 'absolute px-4 py-2 z-10 font-author font-semibold bg-[#DBE6E3]  md:text-[14px] lg:text-[20px]   text-center text-[#0F5647] rounded-tl-md rounded-br-md'
                            : `absolute px-4 py-2 z-10 font-author font-semibold bg-[#FEE5E3]  md:text-[14px] lg:text-[20px]   text-center text-[#F94F46] rounded-tl-md rounded-br-md `
                    }
                >
                    {teacherSingleProject.checked === true
                        ? 'Marked'
                        : 'Not Marked'}
                </p>
                <div className='pt-[70px] pl-5'>
                    <h2 className='text-[#262626] text-[22px]  font-bold'>
                        {teacherSingleProject?.students?.fullName}
                    </h2>
                    <p className='text-[#355ADC] text-[20px] font-[500]'>
                        {' '}
                        {teacherSingleProject?.projects?.projectTitle}
                    </p>
                    <div className='flex justify-between'>
                        <div className='text-[#454545] text-[18px] font-semibold'>
                            {teacherSingleProject?.projects?.projectDescription}
                        </div>
                    </div>
                </div>
                <div
                    className={
                        teacherSingleProject.checked === true
                            ? 'flex justify-between pl-5 mt-4 bg-[#F5F5F5]'
                            : `flex justify-between pl-5 mt-4 bg-[#FEE5E3]`
                    }
                >
                    <div>
                        <h2
                            className={
                                teacherSingleProject?.checked === true
                                    ? 'mt-2 text-[#226456] text-[22px] font-[500]'
                                    : `mt-2 text-[#F95D55] text-[22px] font-[500]`
                            }
                        >
                            Submission Date
                        </h2>
                        <div className='flex items-center md:mb-[9px] md:pb-2 lg:pb-1 gap-2'>
                            <ClockIcon
                                className='text-[#131414]  '
                                height='18px'
                                width='18px'
                            />
                            <p className=' md:text-[16px] lg:text-[18px] text-[#131414] font-author font-semibold'>
                                {moment(
                                    teacherSingleProject?.projects?.startDate
                                ).format('Do MMM YYYY')}
                            </p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <button className='p-2 bg-[#F0A901]  rounded-[8px] text-white relative group overflow-hidden'>
                            <span className='relative font-author   text-[18px] lg:text-[22px]  z-40'>
                                <Link
                                    href={`/teacher/classes/${teacherSingleProject?.projects?.classId}?t=p`}
                                >
                                    Review Project
                                </Link>
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                        <button
                            type='button'
                            className='ml-3  bg-[#E1E6FA] px-[8px] md:py-[5px] rounded-[8px] text-[#355ADC] relative group overflow-hidden'
                        >
                            <Link
                                href={`${baseURL}/${teacherSingleProject?.projects?.file}`}
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

                <div className='relative m-4 flex  justify-center md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl'>
                    <Image
                        src={ReviewBg}
                        alt='review-project'
                        className='absolute object-fit h-full'
                    />
                    <div className='z-10'>
                        <div className=' text-white md:text-[16px] font-[700] xl:text-[34px] xl:leading-[38px] flex justify-center'>
                            Rate This Project
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='border-2 border-white h-[30px] w-[30px] rounded-2xl overflow-hidden'>
                                <Image
                                    src={ReviewProfile}
                                    alt=''
                                    height='30'
                                    width='30'
                                />
                            </div>
                            <div className='font-light text-white md:text-[14px] mf:font-[400] xl:text-[20px] xl:leading-[26px] pr-2 '>
                                Submitted by{' '}
                                {teacherSingleProject?.students?.fullName} on{' '}
                                {moment(
                                    teacherSingleProject?.projects?.startDate
                                ).format('Do MMMM YYYY')}
                            </div>
                        </div>
                        <div className='flex  justify-center p-2'>
                            {teacherSingleProject?.checked === false ? (
                                <button
                                    onClick={handleOpen}
                                    className=' flex items-center  bg-white px-[8px] md:py-[5px]   rounded-[8px] text-[#F0A901]'
                                >
                                    <Image src={Star} alt='' width='20' />
                                    <span className='relative flex ml-2 font-author  md:text-[15px] lg:text-[24px]  z-40'>
                                        Rate Project
                                    </span>
                                </button>
                            ) : (
                                <button className=' flex items-center  bg-white px-[8px] md:py-[5px]   rounded-[8px] text-[#F0A901]'>
                                    <span className='relative flex ml-2 font-author  md:text-[15px] lg:text-[24px]  z-40'>
                                        Rate will show here
                                    </span>
                                </button>
                            )}
                        </div>
                        <ReviewModal
                            modalOpen={open}
                            modalHandleClose={handleClose}
                            creativity={creativity}
                            setCreativity={setCreativity}
                            logic={logic}
                            setLogic={setLogic}
                            completion={completion}
                            setCompletion={setCompletion}
                            review={review}
                            setReview={setReview}
                            reviewSubmitHandler={reviewSubmitHandler}
                            comment={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewProject
