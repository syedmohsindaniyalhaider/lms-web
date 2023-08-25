import React from 'react'
import Image from 'next/image'
import calendarIcon from '/assets/images/calendar-tick.svg'
import Link from 'next/link'
import moment from 'moment'
import { RootState, useAppSelector, useAppDispatch } from '../../../../store'
import TeacherAvailability from '../TeacherAvailability/index'
import { useRouter } from 'next/router'
import { teacherZoomClassDetails } from '../../../../store/actions/teacher/classes/teacherClassesSlice'

const UpcomingClass = (props: any) => {
    const { upcomingClass } = props
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const latestDate = moment().isAfter(upcomingClass?.date)
    const router = useRouter()
    const goToZoom = () => {
        dispatch(teacherZoomClassDetails(upcomingClass))
        router.push('/teacher/zoom')
    }

    return (
        <div className='  lg:flex md:space-y-4 lg:space-y-0 lg:space-x-4'>
            <div className='py-4 bg-white drop-shadow-xl lg:w-[52%]  px-[20px] rounded-[8px] overflow-hidden '>
                {upcomingClass?.classStatus === 'pending' ? (
                    <>
                        <div className='flex justify-between w-full   items-center  md:py-[15px] xl:py-[15px] lg:py-[10px]'>
                            <h1 className=' lg:text-[20px] xl:text-[28px] md:text-[20px] font-[700]'>
                                Upcoming Class
                            </h1>
                            <button className='bg-[#E7D7EE] text-[#57067D] rounded-[22px] py-[8px] md:px-[20px] md:py-2 px-[25px] xl:px-[28px] lg:px-[24px] lg:text-[22px] font-bold lg:py-1 lg:font-author'>
                                {upcomingClass?.courseName}
                            </button>
                        </div>
                        <div className='bg-[#F5F5F5] flex  py-[15px] md:py-3 md:-mx-5 md:px-4  space-x-2 items-center xl:py-[15px] lg:py-[10px]'>
                            <Image alt='' className='' src={calendarIcon} />
                            <h3 className='text-[#454545]  lg:text-[16px] xl:text-[20px] md:text-[16px] xl:font-medium'>
                                {latestDate === false
                                    ? moment(
                                          upcomingClass?.date,
                                          'DD/MM/YYYY'
                                      ).format('dddd Do MMM') +
                                      ', ' +
                                      upcomingClass?.classes?.startTime +
                                      ' - ' +
                                      upcomingClass?.classes?.endTime
                                    : 'no upcoming class'}
                            </h3>
                        </div>

                        <div className='bg-white  py-[5px]'>
                            <h1 className='text-[#454545] font-bold items-center  md:text-[16px] xl:text-[24px] lg:text-[18px]  lg:font-semibold'>
                                {upcomingClass?.classes?.classTitle}
                            </h1>
                            <p className='py-3 md:text-[14px] font-[400] lg:text-[20px]'>
                                {upcomingClass?.classes?.description}...
                                <span className='underline pl-1 text-[#F0A901]'>
                                    <Link
                                        href={`/teacher/classes/${upcomingClass?.classId}?t=c`}
                                    >
                                        View Details
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className='flex bg-white gap-5 pb-[20px] lg:pb-4 xl:pb-0'>
                            <button className='bg-[#355ADC]  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[10px] xl:py-[10px] lg:py-[7px] rounded-[8px] text-white relative group overflow-hidden'>
                                <span className='relative z-40 text-[18px] font-author'>
                                    SYSTEM CHECK
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                            </button>
                            {/* <Link href="/zoom"> */}
                            <button
                                onClick={goToZoom}
                                className='bg-[#BFBFBF] font-author font-semibold px-[20px] lg:px-[20px] md:px-[15px]  py-[10px] rounded-[8px] text-white text-[18px]'
                            >
                                {user?.role === 'student'
                                    ? 'JOIN CLASS'
                                    : 'START CLASS'}
                            </button>
                            {/* </Link> */}
                        </div>
                    </>
                ) : (
                    'No Upcoming Class'
                )}
            </div>
            {/* availabity here */}
            <div className='bg-white drop-shadow-xl lg:w-[48%]  shadow-sm md:pb-[20px] xl:pb-0 rounded-[8px] overflow-hidden '>
                <div className='bg-white  items-center py-[12px] '>
                    <h1 className=' lg:text-[20px] xl:text-[28px] md:text-[20px] font-extrabold md:px-[20px]'>
                        Availability
                    </h1>
                    {/* <div className="bg-[#F5F5F5] flex  py-[15px] md:py-3  md:px-4  space-x-2 items-center xl:py-[15px] lg:py-[10px] mt-[10px]">
            <Image alt="" className="" src={calendarIcon} />
            <h3 className="text-[#454545]  lg:text-[16px] xl:text-[18px] md:text-[16px] xl:font-medium">
              Monday 24th Sep, 7:30 pm - 8:30 pm
            </h3>
          </div> */}
                </div>
                <TeacherAvailability />
            </div>
        </div>
    )
}
export default UpcomingClass
