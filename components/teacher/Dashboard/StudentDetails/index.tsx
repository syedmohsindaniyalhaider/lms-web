import React, { useState } from 'react'
import chevLeftBlue from '../../../../assets/icons/chevLeftBlue.svg'
import { useRouter } from 'next/router'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Image from 'next/image'
import {
    RootState,
    useAppSelector,
    useAppDispatch,
} from '../../../../store/index'
import { teacherStudentsInfo } from '../../../../store/actions/teacher/teachers/teacherStudentInfoService'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { teacherStudentCourses } from '../../../../store/actions/teacher/teachers/teacherStudentCourseService'
import StudentInfo from './StudentInfo'
import CourseInfo from './CourseInfo'
import CourseClasses from './CourseClasses'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const StudentDetails = () => {
    const {
        teacherAllStudents,
        teacherSingleStudentInfo,
        teacherStudentCourseInfo,
        isLoading,
    } = useAppSelector((state: RootState) => state?.teacher)
    const { user } = useAppSelector((state: RootState) => state.user)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState('')
    const [id, setId] = useState('')
    const [selectedIndex, setSelectedIndex] = useState<any>('')
    const [selectedValue, setSelectedValue] = useState<any>('')

    const filter = teacherAllStudents?.filter((ele: any) => {
        if (search !== '') {
            return ele?.students?.fullName
                .toLowerCase()
                .includes(search.toLowerCase())
        } else {
            return teacherAllStudents
        }
    })

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
                <h1 className='md:text-[20px] lg:text-[25px] xl:text-[24px] font-extrabold text-[#131414]'>
                    Total Students
                </h1>
                <div className='w-[100%] flex gap-5 pt-2'>
                    <div className='md:w-[30%] lg:w-[20%] xl:w-[25%] bg-[white] rounded-md shadow py-3 px-2  '>
                        <div className='rounded-md border-[1.5px] overflow-hidden'>
                            <div className='flex items-center justify-start bg-[#FBEAC0] px-2  py-1'>
                                <h2 className='text-[#131414] font-semibold md:text-[18px] xl:text-[20px]'>
                                    Students
                                </h2>
                            </div>
                            <div className='overflow-scroll modelScroll p-2'>
                                <div className='flex items-center border-b-[1px] border-[#8C8C8C] mb-2'>
                                    <h2 className='text-[#131414] font-[450] md:text-[14px] xl:text-[16px]'>
                                        Select Student
                                    </h2>
                                </div>
                                <input
                                    placeholder='Search'
                                    type='text'
                                    value={search}
                                    className='rounded-[4px] border-[#BFBFBF] w-full my-2 leading-tight font-[450] md:text-[14px] xl:text-[16px]  px-2 py-1'
                                    onChange={(e: any) =>
                                        setSearch(e.target.value)
                                    }
                                />
                                <div className='space-y-2'>
                                    {filter?.map((ele: any, index: any) => (
                                        <div
                                            key={index}
                                            className={
                                                selectedValue ==
                                                ele?.students?.studentId
                                                    ? 'bg-[#F0A901]  border-[1px] rounded-[4px] px-2 py-2 leading-none hover:cursor-pointer'
                                                    : `bg-[#FCFCFC] border-[1px] rounded-[4px] px-2 py-2 leading-none hover:cursor-pointer`
                                            }
                                        >
                                            <div
                                                onClick={() => {
                                                    const data = {
                                                        teacherId:
                                                            user?.clientId,
                                                        studentId:
                                                            ele?.students
                                                                ?.studentId,
                                                    }
                                                    dispatch(
                                                        teacherStudentCourses(
                                                            data
                                                        )
                                                    )
                                                    setId(
                                                        ele?.students?.studentId
                                                    )
                                                    setSelectedValue(
                                                        ele?.students?.studentId
                                                    )
                                                }}
                                            >
                                                <h2
                                                    className={
                                                        selectedValue ==
                                                        ele?.students?.studentId
                                                            ? 'text-white leading-none font-[450] md:text-[14px] xl:text-[16px]'
                                                            : 'text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px]'
                                                    }
                                                >
                                                    {ele?.students?.fullName !==
                                                    null
                                                        ? ele?.students
                                                              ?.fullName
                                                        : ele?.students
                                                              ?.primaryEmail}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-[70%] lg:w-[80%] xl:w-[75%] bg-[white] rounded-md shadow p-4 relative'>
                        <div className='pb-4'>
                            <h2 className='text-[#131414] font-bold md:text-[20px] xl:text-[22px] py-1'>
                                Courses
                            </h2>
                            <Stack direction='row' spacing={1}>
                                {teacherStudentCourseInfo?.map(
                                    (ele: any, index: any) => {
                                        return (
                                            <div
                                                key={ele?.courses?.courseId}
                                                onClick={() => {
                                                    const studentDetails = {
                                                        teacherId:
                                                            user.clientId,
                                                        studentId: id,
                                                        courseId:
                                                            ele?.courses
                                                                ?.courseId,
                                                    }
                                                    setSelectedIndex(index)
                                                    dispatch(
                                                        teacherStudentsInfo(
                                                            studentDetails
                                                        )
                                                    )
                                                }}
                                            >
                                                <Chip
                                                    style={
                                                        selectedIndex === index
                                                            ? {
                                                                  backgroundColor:
                                                                      '#F0A901',
                                                                  color: 'white',
                                                                  cursor: 'pointer',
                                                              }
                                                            : {
                                                                  cursor: 'pointer',
                                                              }
                                                    }
                                                    label={`${ele?.courses?.courseName}`}
                                                />
                                            </div>
                                        )
                                    }
                                )}
                            </Stack>
                        </div>
                        {isLoading === true ? (
                            <CircularProgress />
                        ) : teacherSingleStudentInfo?.length !== 0 ? (
                            <>
                                <div>
                                    <StudentInfo />
                                    <div className='w-[100%] lg:flex md:space-y-3 lg:space-y-0 lg:gap-3 my-2'>
                                        <CourseInfo />
                                        <div className='lg:w-[40%] flex gap-3 relative'>
                                            <div className=' md:py-2 lg:py-0 w-[50%] border-[2px] rounded-md flex items-center justify-center '>
                                                <div className=''>
                                                    <h2 className='text-[#131414]  font-semibold md:text-[15px] lg:text-[18px] leading-none  flex items-center justify-center '>
                                                        Courses Covered
                                                    </h2>
                                                    <div className='flex items-center space-y-1 justify-center gap-3 '>
                                                        <h1 className='font-extrabold md:text-[24px] xl:text-[28px] text-[#63B082]'>
                                                            42 %
                                                        </h1>
                                                        <div className='flex items-center justify-center'>
                                                            <CircularProgressbar
                                                                value={50}
                                                                className='h-[50px] accent-[#63B082]'
                                                                stroke-width={
                                                                    10
                                                                }
                                                                styles={buildStyles(
                                                                    {
                                                                        textColor:
                                                                            '#63B082',

                                                                        pathColor:
                                                                            '#63B082',
                                                                    }
                                                                )}
                                                                // Rotation of path a}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-[50%] border-[2px] rounded-md flex items-center justify-center '>
                                                <div className=''>
                                                    <h2 className='text-[#131414]  font-semibold md:text-[15px] leading-none  flex items-center justify-center '>
                                                        Remaining
                                                    </h2>
                                                    <div className='flex items-center space-y-1 justify-center gap-3 '>
                                                        <h1 className='font-extrabold md:text-[24px] xl:text-[28px] text-[28px] text-[#679CDA]'>
                                                            58 %
                                                        </h1>
                                                        <div className='flex items-center justify-center space-y-2 '>
                                                            <CircularProgressbar
                                                                value={58}
                                                                className='h-[50px] accent-[#679CDA]'
                                                                strokeWidth={10}
                                                                styles={buildStyles(
                                                                    {
                                                                        textColor:
                                                                            '#63B082',

                                                                        pathColor:
                                                                            '#679CDA',
                                                                    }
                                                                )}
                                                                // Rotation of path a}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CourseClasses />
                            </>
                        ) : teacherStudentCourseInfo?.length === 0 ? (
                            'please select student'
                        ) : (
                            'please select course'
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails
