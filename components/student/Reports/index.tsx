import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Apostrophe from '/assets/icons/apostrophe.svg'
import share from '/assets/icons/share-illustration.svg'
import facebookIcon from '/assets/icons/facebookIcon.svg'
import whatsappIcon from '/assets/icons/whatsappIcon.svg'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// import ProgressBar from "../ProgressBar";
// import ProgressBar2 from "../ProgressBar2";
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import CompletedTask from './CompletedTask'
import ReportCharts from './ReportCharts'
import Chart from './Chart'
import ProjectCart from './ProjectCart'
import { RootState, useAppSelector, useAppDispatch } from '../../../store'
import { studentCourse } from '../../../store/actions/student/course/courseService'
import { studentsService } from '../../../store/actions/student/students/studentService'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import ProgressBar from './ProgressBar'
import studentCourseClassesReport from '../../../store/actions/student/reports/courseClassesProjectsReportService'
import studentCourseQuizzesReport from '../../../store/actions/student/reports/courseQuizzesReportService'
import studentCourseProjectsRating from '../../../store/actions/student/reports/courseProjectsRatingService'
import studentCourseProjectsReport from '../../../store/actions/student/reports/courseProjectsReportService'
import studentLifeTimeReport from '../../../store/actions/student/reports/lifetimeReportService'
import BreadCrumb from '../../ui/Breadcrumb'

const Reports = (props: any) => {
    const dispatch = useAppDispatch()
    const {
        studentCourseClasses,
        projectRating,
        studentLifeTimeReports: studentReport,
    }: any = useAppSelector((state: RootState) => state.studentReports)
    const { course } = useAppSelector((state: RootState) => state.studentCourse)
    const { user } = useAppSelector((state: RootState) => state.user)
    const { profile } = useAppSelector((state: RootState) => state.student)

    const [courseFilter, setCourseFilter] = useState<any>(0)
    const handleChange = (event: SelectChangeEvent) => {
        setCourseFilter(event.target.value)
        const data = {
            studentId: user.clientId,
            courseId: event.target.value,
            classStatus: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseClassesReport(data))
        }

        const data1 = {
            studentId: user.clientId,
            courseId: event.target.value,
            status: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseQuizzesReport(data1))
        }

        const data2 = {
            studentId: user.clientId,
            courseId: event.target.value,
            status: 'completed',
        }
        if (event.target.value !== '') {
            dispatch(studentCourseProjectsReport(data2))
        }

        const data3 = {
            studentId: user.clientId,
            courseId: event.target.value,
        }

        if (event.target.value !== '') {
            dispatch(studentCourseProjectsRating(data3))
        }
    }

    //student lifetrack Report
    const studentLifeTimeClasses = studentReport
        ?.map((ele: any) => ele.students?.classes)
        .flat(Infinity)
        ?.filter((x: any) => x?.classStatus === 'completed')

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

    //logic Percentage
    const logic = projectRating[0]?.students?.projects.map(
        (ele: any) => ele.logic
    )
    const LifeTimeLogic = studentReport[0]?.students?.projects?.map(
        (ele: any) => ele.logic
    )
    const logicPercentage = getPercentage(logic)
    const lifeTimeLogicPercentage = getPercentage(LifeTimeLogic)

    //creativity Percentage
    const creativity = projectRating[0]?.students?.projects.map(
        (ele: any) => ele.creativity
    )
    const LifeTimeCreativity = studentReport[0]?.students?.projects?.map(
        (ele: any) => ele.creativity
    )
    const creativityPercentage = getPercentage(creativity)
    const lifeTimeCreativityPercentage = getPercentage(LifeTimeCreativity)

    //completion Percentage
    const completion = projectRating[0]?.students?.projects.map(
        (ele: any) => ele.completion
    )
    const LifeTimeCompletion = studentReport[0]?.students?.projects?.map(
        (ele: any) => ele.completion
    )
    const completionPercentage = getPercentage(completion)
    const lifeTimeCompletionPercentage = getPercentage(LifeTimeCompletion)

    useEffect(() => {
        dispatch(
            studentLifeTimeReport({
                studentId: user?.clientId,
            })
        )
        dispatch(studentCourse(user?.clientId))
    }, [user])

    useEffect(() => {
        dispatch(studentsService())
    }, [])

    return (
        <>
            <div className='font-author'>
                <div className='container mx-auto'>
                    <div className='flex justify-between '>
                        <div className=''>
                            <div className='flex items-center'>
                                <BreadCrumb />
                            </div>
                            <div className='md:text-[22px] lg:text-[34px] font-[700]'>{`${
                                profile?.fullName || 'Sarah'
                            }'s Report Card`}</div>
                        </div>
                        <div>
                            <div className=''>
                                <div className='flex justify-end mb-2'>
                                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                                        <Select
                                            style={{
                                                backgroundColor: '#355ADC',
                                                color: 'white',
                                            }}
                                            value={courseFilter}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={0}>
                                                Lifetime Report
                                            </MenuItem>
                                            {course?.map((item: any) => (
                                                <MenuItem
                                                    key={item?.courseId}
                                                    value={item?.courseId}
                                                >
                                                    {item?.courses?.courseName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <span className='text-[#8C8C8C] font-[500] lg:text-[20px]'>
                                    {/* Report Card generated on: */}
                                </span>{' '}
                            </div>
                        </div>
                    </div>
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
                                        {studentCourseClasses[0]?.students
                                            ?.classes?.length === undefined
                                            ? studentLifeTimeClasses?.length
                                            : studentCourseClasses[0]?.students
                                                  ?.classes?.length}
                                    </div>
                                    <div className='md:text-[14px] font-[500] lg:text-[20px]'>
                                        Classes Done
                                    </div>
                                </div>
                                <div>
                                    <div className='md:text-[28px] md:font-[700] lg:text-[52px] lg:font-[500]'>
                                        {studentCourseClasses[0]?.students
                                            ?.quizzes?.length === undefined
                                            ? studentReport[0]?.students
                                                  ?.quizzes?.length
                                            : studentCourseClasses[0]?.students
                                                  ?.quizzes?.length}
                                    </div>
                                    <div className='md:text-[14px] font-[500] lg:text-[20px]'>
                                        Quizzes Completed
                                    </div>
                                </div>{' '}
                                <div>
                                    <div className='md:text-[28px] md:font-[700] lg:text-[52px] lg:font-[500]'>
                                        {studentCourseClasses[0]?.students
                                            ?.projects?.length === undefined
                                            ? studentReport[0]?.students
                                                  ?.projects?.length
                                            : studentCourseClasses[0]?.students
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
                            {/* <Image src={student[0].img} alt="" /> */}
                        </div>

                        <p className='mt-2 ml-8 font-[500] lg:text-[24px]'>
                            {/* {student[0].description} */}
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
                                    <p className='px-6 pt-6 text-[#131414] text-[17px] text-[596]'>
                                        {/* Last 10 quizzes score{" "} */}
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <ProjectCart />
                                <div>
                                    <p className='px-6 pt-6 text-[#131414] text-[17px] text-[596]'>
                                        {/* Last 10 projects score{" "} */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 border-[1.5px] '>
                        <h3 className='font-[500] text-[20px] px-4 pt-4'>
                            {' '}
                            Creativity Percentage
                        </h3>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        projectRating.length == 0
                                            ? 0
                                            : creativityPercentage
                                    }
                                    textColor='#63B082'
                                    heading='Creativity'
                                    description={`Student showed the ability to think out-of-the-box or give unique answers.`}
                                />
                            </div>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        projectRating.length == 0
                                            ? 0
                                            : logicPercentage
                                    }
                                    textColor='#679CDA'
                                    heading='Logic'
                                    description={`Student showed the ability to think out-of-the-box or give unique answers.`}
                                />
                            </div>
                            <div className='col-span-4'>
                                <ProgressBar
                                    value={
                                        projectRating.length == 0
                                            ? 0
                                            : completionPercentage
                                    }
                                    textColor='#E8746C'
                                    heading='Concentration'
                                    description={`Student gives undivided attention in class and is extraordinarily focused while attempting each activity.`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='py-2'></div>
                </div>
                <div className='my-6 bg-white rounded-xl'></div>
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
