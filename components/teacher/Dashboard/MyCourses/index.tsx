import React, { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { allCoursesService } from '../../../../store/actions/teacher/courses/allCourseService'
import { teacherCourseService } from '../../../../store/actions/teacher/courses/teacherCourseService'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { teacherStudents } from '../../../../store/actions/teacher/teachers/teacherStudentsService'

import CoursePreference from '../CoursePreference/index'
import Courses from './Courses'
import Students from './Students'
import Classes from './Classes'

const MyCourses = (props: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(teacherStudents(user?.clientId))
        dispatch(allCoursesService())
        dispatch(teacherCourseService(user?.clientId))
    }, [user, dispatch])
    return (
        <>
            <ToastContainer />
            <div className='rounded-md bg-[#FFFFFF] drop-shadow-xl my-4'>
                <div className=' flex items-center justify-between border-b-[2px] py-[20px]'>
                    <h1 className=' lg:text-[20px] xl:text-[25px] md:text-[20px] font-extrabold md:px-[20px]'>
                        My Courses, Students & Classes
                    </h1>
                    <CoursePreference />
                </div>
                <div className='grid grid-cols-12 p-5 gap-5'>
                    <Courses />
                    <Students />
                    <Classes />
                </div>
            </div>
        </>
    )
}

export default MyCourses
