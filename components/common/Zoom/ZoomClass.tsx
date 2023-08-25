import React, { useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import leaveClassSvg from '/assets/images/Leaveclass.svg'
import calendarSvg from '/assets/images/calendar-tick.svg'
import VideoSDK from './VideoSDK'
import zoomContext from '../../../context/zoom-context'
import { useRouter } from 'next/router'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import Link from 'next/link'
import moment from 'moment'
import ReviewModal from '../../ui/Modal/Review'
import { teacherStudentDetails } from '../../../store/actions/teacher/teachers/teacherStudentDetailsService'
import { teacherStudentReviewClass } from '../../../store/actions/teacher/teachers/teacherStudentReviewClassService'
import Tick from '/assets/images/GreenTick.svg'
import Send from '/assets/images/send-sqaure-2.svg'
import Teacher from '/assets/images/teacher.png'
import { baseURL } from '../../../helpers/url'
// update

const ZoomClass = ({
    isSupportGalleryView,
    galleryViewWithoutSAB,
    open,
    handleClose,
    onLeaveOrJoinSession,
    status,
}: // setUpdateClassDetails,
any) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { upcomingClass }: any = useAppSelector(
        (state: RootState) => state.classes
    )
    const { zoomClassDetails } = useAppSelector(
        (state: RootState) => state.teacherClasses
    )
    const { teacherStudentDetail } = useAppSelector(
        (state: RootState) => state.teacher
    )
    const [creativity, setCreativity] = useState<number | null>(0)
    const [logic, setLogic] = useState<number | null>(0)
    const [completion, setCompletion] = useState<number | null>(0)
    const [review, setReview] = useState<any>('')

    const onLeaveHandler = () => {
        router.push(`/${user?.role}`)
    }

    const hostLeaveHandler = async () => {
        await onLeaveOrJoinSession()
        router.push(`/${user?.role}`)
    }

    const zoomClassReviewHandler = () => {
        const data = {
            studentId: teacherStudentDetail?.studentId,
            classId: zoomClassDetails?.classes?.classId,
            creativity: creativity,
            logic: logic,
            completion: completion,
        }
        handleClose()
        dispatch(teacherStudentReviewClass(data))
        setTimeout(() => {
            router.push(`/${user?.role}`)
        }, 2000)
    }

    const duration = moment.duration(2, 'minutes')

    useEffect(() => {
        if (user?.role === 'teacher') {
            dispatch(
                teacherStudentDetails({
                    teacherId: user?.clientId,
                    scheduledAt: zoomClassDetails?.scheduledAt,
                    date: zoomClassDetails?.date,
                })
            )
        }
    }, [])

    return (
        <>
            <div className='bg-[#F7F8FE] flex p-5 items-center justify-between'>
                <div className='flex items-center space-x-4 '>
                    <p className='md:text-[14px] lg:text-[20px] text-[#131414] font-author font-bold'>
                        {`${
                            user?.role === 'student'
                                ? upcomingClass?.classes?.classCode
                                : zoomClassDetails?.classes?.classCode
                        }: ${
                            user?.role === 'student'
                                ? upcomingClass?.classes?.description
                                : zoomClassDetails?.classes?.description
                        }`}
                    </p>
                    <div className='bg-[#F94F46] w-[8px] h-[8px] rounded-lg'></div>
                    <p className=' md:text-[14px] lg:text-[20px] text-[#F94F46]'>
                        Ongoing
                    </p>
                </div>
                {user?.role === 'teacher' && (
                    <button
                        onClick={hostLeaveHandler}
                        className='bg-[#F94F46] font-semibold px-[20px]  py-[10px] md:text-[14px] lg:text-[20px]
        flex gap-2 items-center rounded-[8px] text-white'
                    >
                        <Image alt='' src={leaveClassSvg} />
                        Leave Class
                    </button>
                )}
                {user?.role === 'student' && (
                    <button
                        onClick={onLeaveHandler}
                        className='bg-[#F94F46] font-semibold px-[20px]  py-[10px] md:text-[14px] lg:text-[20px]
        flex gap-2 items-center rounded-[8px] text-white'
                    >
                        <Image alt='' src={leaveClassSvg} />
                        Leave Class
                    </button>
                )}
            </div>
            {/* zoom screen */}
            {/* <div className="h-[80vh] mt-4 rounded-lg bg-[#242424]">
        <div className="text-white p-3 rounded-lg bg-black flex justify-between gap-4">
          <div className="flex items-center"> */}
            <VideoSDK
                isSupportGalleryView={isSupportGalleryView}
                galleryViewWithoutSAB={galleryViewWithoutSAB}
            />
            {user?.role === 'teacher' && (
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
                    reviewSubmitHandler={zoomClassReviewHandler}
                />
            )}
            {/* <Image alt="" src={Tick} width="40" />
            <h3 className="font-author text-[26px]">View</h3>
          </div>
          <div className="flex items-center gap-3">
            <Image alt="" src={Send} />
            <h3 className="text-[16px] font-author">Go Full Screen</h3>
          </div>
        </div>
        <div className="text-white md:w-[50vh] md:ml-[60vh]  text-center pt-[100px]">
          <Image src={Teacher} alt="" />
        </div>
      </div> */}

            {/* class details */}

            <div className='shadow-xl mt-4'>
                <div className='flex justify-between bg-[#FBF2DC] p-5'>
                    <h2 className='text-[#131414] md:text-[18px] lg:text-[26px] font-[494] font-author'>
                        Class Details
                    </h2>
                    <div className='flex items-center gap-3'>
                        <Image alt='calendar-svg' src={calendarSvg} />
                        <p className=' md:text-[14px] lg:text-[20px] text-[#131414] font-author'>
                            {moment(upcomingClass?.date, 'DD/MM/YYYY').format(
                                'Do MMMM YYYY , h:mm a'
                            )}{' '}
                        </p>
                    </div>
                </div>
                <div className='p-5 bg-white '>
                    <h2 className=' md:text-[18px] lg:text-[22px] text-[#131414] font-semibold'>
                        Description:
                    </h2>
                    <p className=' md:text-[16px] lg:text-[20px] text-[#454545] font-author font-[375]'>
                        {user?.role === 'student'
                            ? upcomingClass?.classes?.description
                            : zoomClassDetails?.classes?.description}
                    </p>
                </div>
                <div className='bg-[#FAFBFC] pb-7 flex justify-around '>
                    <div className='w-[50%] '>
                        <p className='md:text-[18px] lg:text-[22px] text-[#131414] font-author font-[596]'>
                            Class Activities
                        </p>
                        <div className='flex'>
                            {user?.role === 'student'
                                ? upcomingClass?.classes?.activities?.map(
                                      (ele: any, index: any) => (
                                          <Link
                                              key={index}
                                              href={`${baseURL}/${ele}`}
                                              target='_blank'
                                              className='flex items-center gap-2 bg-[#E1E6FA] rounded-md md:px-2'
                                              rel='noreferrer'
                                          >
                                              {/* <Image src={pdfIcon} alt="" width={35} height={35} /> */}
                                              {ele.split('\\').pop()}
                                          </Link>
                                      )
                                  )
                                : zoomClassDetails?.classes?.activities?.map(
                                      (ele: any, index: any) => (
                                          <Link
                                              key={index}
                                              href={`${baseURL}/${ele}`}
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

                    <div
                        className='md:w-[50%] lg:w-[40%]
           p-4 border-l-2 border-[#E1E6FA]'
                    >
                        <p className='md:text-[18px] lg:text-[22px] text-[#131414] font-author font-[596]'>
                            Class Documents
                        </p>
                        <div className='mt-[8px] '>
                            <div className='flex'>
                                {user?.role === 'student'
                                    ? upcomingClass?.classes?.documents?.map(
                                          (ele: any, index: any) => (
                                              <Link
                                                  key={index}
                                                  href={`${baseURL}/${ele}`}
                                                  target='_blank'
                                                  className='flex items-center gap-2 bg-[#E1E6FA] rounded-md md:px-2'
                                                  rel='noreferrer'
                                              >
                                                  {/* <Image src={pdfIcon} alt="" width={35} height={35} /> */}
                                                  {ele.split('\\').pop()}
                                              </Link>
                                          )
                                      )
                                    : zoomClassDetails?.classes?.documents?.map(
                                          (ele: any, index: any) => (
                                              <Link
                                                  key={index}
                                                  href={`${baseURL}/${ele}`}
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
                </div>
            </div>
        </>
    )
}

export default ZoomClass
