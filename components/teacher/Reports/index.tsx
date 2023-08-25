import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Apostrophe from '/assets/icons/apostrophe.svg'
import share from '/assets/icons/share-illustration.svg'
import facebookIcon from '/assets/icons/facebookIcon.svg'
import whatsappIcon from '/assets/icons/whatsappIcon.svg'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Chart from './Chart'
import { RootState, useAppSelector, useAppDispatch } from '../../../store'
import { reportCardService } from '../../../store/actions/teacher/report-card/reportCardService'
import { studentsService } from '../../../store/actions/student/students/studentService'
import ProgressBar from './ProgressBar'
import ProjectChart from './ProjectChart'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Breadcrumb from '../../ui/Breadcrumb'

const Reports = (props: any) => {
    const {
        teacherCourses,
        teacherStudents,
        studentCourseClasses,
        studentCourseQuizzes,
        studentCourseProject,
        studentCourseProjectRating,
    } = reportCardService
    const [courseFilter, setCourseFilter] = useState<any>(0)
    const [studentFilter, setStudentFilter] = useState<any>(0)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const {
        teacher_Courses,
        teacher_Students,
        student_CourseClasses,
        student_CourseQuizzes,
        student_CourseProject,
        student_CourseProjectRating,
    } = useAppSelector((state: RootState) => state.teacherReportCard)

    useEffect(() => {
        const data = {
            teacherId: user.clientId,
        }
        dispatch(teacherCourses(data))
    }, [user])

    useEffect(() => {
        dispatch(studentsService())
    }, [])

    const handle_Change = (event: any) => {
        setStudentFilter(event.target.value)
        const dataa = {
            studentId: event.target.value,
            courseId: courseFilter,
            classStatus: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseClasses(dataa))
        }

        const data1 = {
            studentId: event.target.value,
            courseId: courseFilter,
            status: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseQuizzes(data1))
        }

        const payload = {
            studentId: event.target.value,
            courseId: courseFilter,
            status: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseProject(payload))
        }

        if (event.target.value !== '') {
            dispatch(studentCourseProject(payload))
        }

        const data3 = {
            studentId: event.target.value,
            courseId: courseFilter,
        }
        if (event.target.value !== '') {
            dispatch(studentCourseProjectRating(data3))
        }

        const data2 = {
            studentId: event.target.value,
            courseId: courseFilter,
            status: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseProject(data2))
        }
    }

    const handleChange = (event: any) => {
        setCourseFilter(event.target.value)
        const data = {
            courseId: event.target.value,
        }
        if (event.target.value !== '') {
            dispatch(teacherStudents(data))
        }
    }

    const student = [
        {
            name: 'Sara Baker',
            date: '22-May-2022',
            description:
                'Sara is hardworking and bright. She is doing extremely well so far. Keep it up, Sara.',
            img: Apostrophe,
        },
    ]

    //Function for calculate avg and Percentage for ProgressBar
    const getPercentage = (data: any) => {
        let total = 0
        for (let i = 0; i < data?.length; i++) {
            total += data[i]
        }
        const avg = total / data?.length
        const percentage = (avg / total) * 100
        return percentage
    }

    //logic Percenatge
    const logic = student_CourseProjectRating[0]?.students?.projects.map(
        (ele: any) => ele.logic
    )
    const logicPercentage = getPercentage(logic)

    //creativity Percenatge
    const creativity = student_CourseProjectRating[0]?.students?.projects.map(
        (ele: any) => ele.creativity
    )

    const creativityPercentage = getPercentage(creativity)

    //completion Percenatge
    const completion = student_CourseProjectRating[0]?.students?.projects.map(
        (ele: any) => ele.completion
    )
    const completionPercentage = getPercentage(completion)
    return (
        <>
            <div className='font-author'>
                <div className='container mx-auto'>
                    <div className='flex justify-between '>
                        <div className=''>
                            <Breadcrumb />
                        </div>
                        <div>
                            <div className=''>
                                <div className='flex justify-end mb-2'>
                                    {teacher_Students?.length !== 0 && (
                                        <FormControl
                                            sx={{ m: 1, minWidth: 200 }}
                                        >
                                            <Select
                                                style={{
                                                    backgroundColor: '#355ADC',
                                                    color: 'white',
                                                }}
                                                value={studentFilter}
                                                onChange={handle_Change}
                                            >
                                                <MenuItem value={0}>
                                                    Select Student
                                                </MenuItem>
                                                {teacher_Students?.map(
                                                    (item: any) => (
                                                        <MenuItem
                                                            key={
                                                                item?.students
                                                                    ?.studentId
                                                            }
                                                            value={
                                                                item?.students
                                                                    ?.studentId
                                                            }
                                                        >
                                                            {item?.students
                                                                ?.fullName ===
                                                            null
                                                                ? item?.students
                                                                      ?.primaryEmail
                                                                : item?.students
                                                                      ?.fullName}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        </FormControl>
                                    )}

                                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                                        <Select
                                            style={{
                                                backgroundColor: '#355ADC',
                                                color: 'white',
                                            }}
                                            displayEmpty
                                            value={courseFilter}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={0}>
                                                Select Course
                                            </MenuItem>
                                            {teacher_Courses?.map(
                                                (item: any) => (
                                                    <MenuItem
                                                        key={item?.teacherId}
                                                        value={
                                                            item?.course
                                                                .courseId
                                                        }
                                                    >
                                                        {
                                                            item?.course
                                                                ?.courseName
                                                        }
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#8C8C8C] text-right font-[500] '>
                        Report Card generated on:
                    </p>
                    <div className='flex gap-2 mt-8'>
                        <div className='border-primary bg-white border-2 relative overflow-hidden rounded-lg py-28 w-[60%] px-4'>
                            <div className='h-24 w-24  absolute top-0 left-0 -m-4 bg-[#F1F5F4] rounded-full'></div>
                            <div className='h-32 w-32 flex items-center justify-center bg-[#F1F5F4] absolute bottom-0 right-0 -m-4 rounded-full text-center'>
                                <span className='md:text-[14px] font-[500] lg:text-[16]'>
                                    Lifetime data
                                </span>
                            </div>

                            <div className='flex z-10 justify-between text-center'>
                                <div>
                                    <div className='md:text-[28px] md:font-[700] lg:text-[52px] lg:font-[500]'>
                                        {student_CourseClasses[0]?.students
                                            ?.classes === undefined
                                            ? 0
                                            : student_CourseClasses[0]?.students
                                                  ?.classes?.length}
                                    </div>
                                    <div className='md:text-[14px] font-[500] lg:text-[20px]'>
                                        Classes Done
                                    </div>
                                </div>
                                <div>
                                    <div className='md:text-[28px] md:font-[700] lg:text-[52px] lg:font-[500]'>
                                        {student_CourseClasses[0]?.students
                                            ?.quizzes === undefined
                                            ? 0
                                            : student_CourseClasses[0]?.students
                                                  ?.quizzes?.length}
                                    </div>
                                    <div className='md:text-[14px] font-[500] lg:text-[20px]'>
                                        Quizes Completed
                                    </div>
                                </div>{' '}
                                <div>
                                    <div className='md:text-[28px] md:font-[700] lg:text-[52px] lg:font-[500]'>
                                        {student_CourseClasses[0]?.students
                                            ?.projects === undefined
                                            ? 0
                                            : student_CourseClasses[0]?.students
                                                  ?.projects?.length}
                                    </div>
                                    <div className='md:text-[14px] font-[500] lg:text-[20px]'>
                                        Project Submitted
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className='rounded-lg bg-white p-2'>
                                <h1 className='md:text-[14px] font-[600] lg:text-[24px]'>
                                    Overall Score:
                                </h1>
                                <p className='md:text-[14px] font-[400] lg:text-[16px]'>
                                    It is calculated by taking average of
                                    quizzes, projects and other performance
                                    parameters from the report card.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-primary py-8 my-4 rounded pl-10 text-white'>
                        <div className=''>
                            <Image src={student[0].img} alt='' />
                        </div>

                        <p className='mt-2 ml-8 font-[500] lg:text-[24px]'>
                            {student[0].description}
                        </p>
                    </div>
                </div>

                <div className='px-4 rounded-xl shadow bg-white  py-8'>
                    {/* <h1 className="font-semibold py-4 px-2">{`What did ${studentData?.fullName} Build?`}</h1> */}
                    <div className='py-2'>
                        <div className='grid grid-cols-12 gap-8'>
                            <div className='col-span-6'>
                                <Chart />
                                <div>
                                    <p className='px-6 pt-6 text-[##131414] text-[17px] text-[596]'>
                                        {/* Last 10 quizzes score{" "} */}
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <ProjectChart />
                                <div>
                                    <p className='px-6 pt-6 text-[##131414] text-[17px] text-[596]'>
                                        {/* Last 10 quizzes score{" "} */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 border-[1.5px] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        creativity !== undefined
                                            ? creativityPercentage
                                            : 0
                                    }
                                    textColor='#63B082'
                                    heading='Creativity'
                                    description='Sara showed the ability to think out-of-the-box or give unique answers.'
                                />
                            </div>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        logic !== undefined
                                            ? logicPercentage
                                            : 0
                                    }
                                    textColor='#679CDA'
                                    heading='Logic'
                                    description='Sara showed the ability to think out-of-the-box or give unique answers.'
                                />
                            </div>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        completion !== undefined
                                            ? completionPercentage
                                            : 0
                                    }
                                    textColor='#E8746C'
                                    heading='Concentration'
                                    description='Sara gives undivided attention in class and is extraordinarily focused while attempting each activity.'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='py-2'></div>
                </div>

                <div>
                    <div className='flex items-center justify-center'>
                        <Image src={share} alt='share-illustration' />
                    </div>
                    <h1 className='font-[600] text-center lg:text-[24px] lg:font-[500]  my-6'>
                        You can now share the report widely with your friends
                        and family so they’re equally proud.
                    </h1>
                    <div className='flex items-center my-6 gap-4 justify-center'>
                        <div
                            className='text-white rounded bg-[#4CAF50] flex items-center gap-3 px-4 py-3
            md:text-[14px] font-[500] md:leading-[12px] lg:text-[20px] lg:leading-[24px]'
                        >
                            <Image src={whatsappIcon} alt='Icon' />
                            Share via Whatsapp
                        </div>
                        <div
                            className='text-white rounded bg-[#3B5998] flex items-center gap-3 px-4 py-3
            md:text-[14px] font-[500] md:leading-[12px] lg:text-[20px] lg:leading-[24px]'
                        >
                            <Image src={facebookIcon} alt='Icon' />
                            Share via Facebook
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reports
