import React, { useState, useEffect } from 'react'
import chevLeftBlue from '../../../../assets/icons/chevLeftBlue.svg'
import clockIcon from '../../../../assets/icons/clockIcon.svg'

import studentProfile from '../../../../assets/images/User-Avatar.png'
import docDownload from '../../../../assets/icons/docDownload.svg'
import tagDoc from '../../../../assets/icons/tagDoc.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { RootState, useAppSelector } from '../../../../store'

const TeacherStudentCourses = () => {
    const { teacherCourses } = useAppSelector(
        (state: RootState) => state?.courses
    )
    const [singleCourse, setSingleCourse] = useState<any>([])
    const [tab, setTab] = useState('upcoming')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const baseURL = process.env[process.env.NODE_ENV]
    const router = useRouter()
    console.log('singleCourse', singleCourse)
    //toggle
    const toggle = (index: any) => {
        setSingleCourse(
            teacherCourses.filter(
                (x: any) => x.courseId == teacherCourses[index].courseId
            )
        )
        setSelectedIndex(index)
    }

    const upComingClasses = singleCourse[0]?.classes[0]?.teachers?.filter(
        (ele: any) => ele.classStatus === 'not scheduled'
    )

    const completedClasses = singleCourse[0]?.classes[0]?.teachers?.filter(
        (ele: any) => ele.classStatus === 'completed'
    )

    useEffect(() => {
        setSingleCourse([teacherCourses[0]])
    }, [])

    return (
        <div>
            <div>
                <div
                    className='flex gap-3  text-[#355ADC] cursor-pointer'
                    onClick={() => router.push('/teacher')}
                >
                    <Image src={chevLeftBlue} alt='image' />
                    <p className='font-[500] md:text-[18px]'>
                        Go back to Dashboard
                    </p>
                </div>
                <h1 className='md:text-[20px] py-1 lg:text-[23px] xl:text-[24px] font-extrabold text-[#131414]'>
                    My Courses
                </h1>
                <div className='w-[100%] flex gap-5 pt-2'>
                    <div className='md:w-[30%] lg:w-[25%] xl:w-[25%] bg-[white] rounded-md shadow py-3 px-2 max-h-[450px]'>
                        <div className='rounded-md border-[1.5px] overflow-hidden'>
                            <div className='flex items-center justify-start bg-[#FBEAC0] px-2 mb-5 py-1'>
                                <h2 className='text-[#131414] font-semibold md:text-[18px] lg:text-[20px] xl:text-[22px]'>
                                    Courses
                                </h2>
                            </div>
                            {/* Course preferences */}
                            <div className='h-[300px] overflow-scroll modelScroll'>
                                {teacherCourses?.map((ele: any, indx: any) => {
                                    return (
                                        <div key={indx}>
                                            <div
                                                onClick={() => toggle(indx)}
                                                className={
                                                    selectedIndex === indx
                                                        ? `bg-[#F0A901] py-1   border-[1px] px-2 leading-tight hover:cursor-pointer`
                                                        : 'bg-[#FCFCFC] py-1 border-[1px] px-2 leading-tight hover:cursor-pointer'
                                                }
                                            >
                                                <h2
                                                    className={
                                                        selectedIndex === indx
                                                            ? `text-white font-semibold md:text-[14px] 
                            lg:text-[16px] xl:text-[18px]`
                                                            : `text-[#131414] font-semibold md:text-[14px] 
                            lg:text-[16px] xl:text-[18px]`
                                                    }
                                                >
                                                    {ele?.course?.courseName}
                                                </h2>
                                                <h2
                                                    className={
                                                        selectedIndex === indx
                                                            ? 'text-white font-semibold md:text-[12px] lg:text-[14px] xl:text-[16px]'
                                                            : 'text-[#F0A901] font-semibold md:text-[12px] lg:text-[14px] xl:text-[16px]'
                                                    }
                                                >
                                                    {/* DES #01 */}
                                                </h2>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[70%] lg:w-[75%] xl:w-[75%] bg-[white] rounded-md shadow p-4'>
                        {singleCourse?.map((ele: any, index: any) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <h2 className='text-[#131414] font-semibold md:text-[14px] lg:text-[28px] xl:text-[18px]'>
                                            {ele?.course?.courseName}
                                        </h2>
                                        <div className='flex items-center justify-between'>
                                            <h2 className='text-[#355ADC] font-semibold md:text-[12px] lg:text-[16px] xl:text-[16px]'>
                                                {/* DES #01 */}
                                            </h2>
                                            <div className='flex items-center gap-3'>
                                                <Image
                                                    src={clockIcon}
                                                    alt='Image'
                                                    className='h-3 w-3 '
                                                />
                                                <h2 className='text-[#131414] font-[500] md:text-[14px] lg:text-[16px]'>
                                                    {ele?.course?.duration}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='h-[2px] bg-[#D9D9D9] rounded-full my-[2px]'></div>
                                    </div>
                                    <h2 className='text-[#131414] font-semibold md:text-[15px] lg:text-[17px] xl:text-[20px]'>
                                        Course Description
                                    </h2>

                                    <p className='leading-tight font-[494] text-[13px] lg:text-[15px] xl:text-[17px]  pt-1'>
                                        {ele?.course?.courseDescription}
                                    </p>

                                    <div className='rounded-md border-[1px] overflow-hidden my-3'>
                                        <div className='bg-[#FBEAC0] flex items-center justify-between  px-2 py-1 leading-none'>
                                            <h1 className='text-[#131414] font-[500] leading-none xl:text-[20px]'>
                                                Allocated Students (
                                                {singleCourse?.length})
                                            </h1>
                                            <button className='rounded-[4px] border-[1px] text-[#131414] font-semibold px-4 py-1 bg-[#FFFFFF] xl:text-[18px]'>
                                                See all
                                            </button>
                                        </div>
                                        <div className='p-2 flex gap-2 overflow-scroll modelScroll'>
                                            <div className='rounded-md bg-[#F1F5F4] min-w-[100px] pt-2 pb-1 px-1 space-y-1 min-h-max '>
                                                <div className='flex items-center justify-center'>
                                                    <div className=' rounded-full h-[40px] w-[40px] bg-white'>
                                                        {ele?.profileImage !==
                                                        null ? (
                                                            <img
                                                                src={`${baseURL}/${ele?.profileImage}`}
                                                                alt='Profile Picture'
                                                                className=' h-[40px] w-[40px] object-cover rounded-full'
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={
                                                                    studentProfile
                                                                }
                                                                alt='image'
                                                                className='object-cover'
                                                            />
                                                        )}
                                                    </div>
                                                </div>

                                                <h2 className='text-[#131414] font-semibold md:text-[15px] lg:text-[17px] xl:text-[19px] text-center '>
                                                    {ele?.studentName !== null
                                                        ? ele?.studentName
                                                        : 'No Name'}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[100%] gap-5 flex'>
                                        <div className='w-[60%]'>
                                            <div className='w-full rounded-sm bg-[#0F5647] flex justify-between items-center p-2'>
                                                <h2 className=' font-[500] md:text-[14px] lg:text-[16px] leading-none xl:text-[20px] text-[white]'>
                                                    Course Outline & Classes
                                                </h2>
                                                <div className='rounded flex items-center border-1 bg-[#FDFDFD] gap-1 px-1'>
                                                    <h2 className='text-[#0F5647] font-semibold md:text-[14px] lg:text-[17px] text-center '>
                                                        Download
                                                    </h2>
                                                    <Image
                                                        src={docDownload}
                                                        alt='image'
                                                        className='h-4 w-4 flex items-center'
                                                    />
                                                </div>
                                            </div>
                                            {/* Tabs Tabs */}
                                            <div className='w-full flex gap-5 items-center relative my-3'>
                                                <h2
                                                    className={`font-semibold md:text-[16px] leading-none xl:text-[18px] cursor-pointer ${
                                                        tab === 'upcoming'
                                                            ? 'text-[#355ADC]'
                                                            : 'text-[#8C8C8C]'
                                                    }`}
                                                    onClick={() =>
                                                        setTab('upcoming')
                                                    }
                                                >
                                                    Upcoming (
                                                    {upComingClasses?.length})
                                                </h2>
                                                <h2
                                                    className={`font-semibold md:text-[16px] leading-none xl:text-[18px] cursor-pointer ${
                                                        tab === 'completed'
                                                            ? 'text-[#355ADC]'
                                                            : 'text-[#8C8C8C]'
                                                    }`}
                                                    onClick={() =>
                                                        setTab('completed')
                                                    }
                                                >
                                                    Completed(
                                                    {completedClasses?.length})
                                                </h2>
                                                <div
                                                    className={`h-[4px] rounded-full bg-[#355ADC] absolute xl:w-[105px] top-[27px] lg:w-[90px] md:w-[85px] ${
                                                        tab === 'completed' &&
                                                        ' lg:translate-x-[109px] xl:translate-x-[120px] md:translate-x-[110px]'
                                                    }`}
                                                ></div>
                                            </div>
                                            <div className='h-[2px] rounded-full bg-[#D9D9D9]'></div>
                                            <div className='h-[200px] overflow-scroll modelScroll -space-y-1'>
                                                {tab === 'upcoming' ? (
                                                    <>
                                                        {upComingClasses?.map(
                                                            (
                                                                ele: any,
                                                                index: any
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className='py-2 w-full'
                                                                >
                                                                    <div className='rounded-md border-[1px] items-center p-2 space-y-1'>
                                                                        <div className='flex justify-between leading-none '>
                                                                            <h2 className='text-[#355ADC] font-[410]  md:text-[14px] lg:text-[16px]'>
                                                                                {
                                                                                    ele
                                                                                        ?.classes
                                                                                        ?.classCode
                                                                                }
                                                                            </h2>
                                                                            <div className='flex '>
                                                                                <h2 className='text-[#131414] font-[410] md:text-[16px] border-r-[1px] border-[#D9D9D9] pr-1'>
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.date
                                                                                    }
                                                                                </h2>

                                                                                <h2 className='text-[#131414] font-[410] md:text-[16px]  lg:text-[16px] pl-1'>
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.startTime
                                                                                    }{' '}
                                                                                    -
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.endTime
                                                                                    }
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <h2 className=' font-semibold md:text-[16px] leading-none xl:text-[18px] text-[#131414]'>
                                                                            {
                                                                                ele
                                                                                    ?.classes
                                                                                    ?.classTitle
                                                                            }
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </>
                                                ) : (
                                                    <>
                                                        {completedClasses?.map(
                                                            (
                                                                ele: any,
                                                                index: any
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className='py-2 w-full'
                                                                >
                                                                    <div className='rounded-md border-[1px] items-center p-2 space-y-1'>
                                                                        <div className='flex justify-between leading-none '>
                                                                            <h2 className='text-[#355ADC] font-[410]  md:text-[14px] lg:text-[16px]'>
                                                                                {
                                                                                    ele
                                                                                        ?.classes
                                                                                        ?.classCode
                                                                                }
                                                                            </h2>
                                                                            <div className='flex '>
                                                                                <h2 className='text-[#131414] font-[410] md:text-[16px] border-r-[1px] border-[#D9D9D9] pr-1'>
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.date
                                                                                    }
                                                                                </h2>

                                                                                <h2 className='text-[#131414] font-[410] md:text-[16px]  lg:text-[16px] pl-1'>
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.startTime
                                                                                    }{' '}
                                                                                    -
                                                                                    {
                                                                                        ele
                                                                                            ?.classes
                                                                                            ?.endTime
                                                                                    }
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <h2 className=' font-semibold md:text-[16px] leading-none xl:text-[18px] text-[#131414]'>
                                                                            {
                                                                                ele
                                                                                    ?.classes
                                                                                    ?.classTitle
                                                                            }
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className='w-[40%] rounded-sm border-[1px] overflow-hidden border-[#D9D9D9]'>
                                            <div className='bg-[#FBEAC0] flex items-center px-2 py-3'>
                                                <h2 className=' font-[500] md:text-[16px] leading-none xl:text-[20px] text-[#131414]'>
                                                    Suggested Books
                                                </h2>
                                            </div>
                                            <div className='flex flex-wrap p-2 space-y-1 gap-1'>
                                                {singleCourse[0]?.course?.books?.map(
                                                    (ele: any, index: any) => (
                                                        <Link
                                                            key={index}
                                                            href={`https://lms-be.up.railway.app/${ele}`}
                                                            target='_blank'
                                                            className='flex items-center gap-2 bg-[#E1E6FA] rounded-md md:px-2'
                                                            rel='noreferrer'
                                                        >
                                                            {/* <Image src={pdfIcon} alt="" width={35} height={35} /> */}
                                                            {ele
                                                                .split('\\')
                                                                .pop()}
                                                        </Link>
                                                        // <div
                                                        //   key={index}
                                                        //   className="flex  items-center justify-center rounded-md bg-[#F3F5FD] gap-3 px-3 py-1"
                                                        // >
                                                        //   <h2 className="text-[#355ADC] font-[500]  md:text-[14px] lg:text-[16px]">
                                                        //     {ele}
                                                        //   </h2>
                                                        //   <Image
                                                        //     src={tagDoc}
                                                        //     alt="image"
                                                        //     className="h-4 w-4"
                                                        //   />
                                                        // </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherStudentCourses
