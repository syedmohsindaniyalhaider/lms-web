import React, { useEffect } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { teacherAllClasses } from '../../../store/actions/teacher/classes/allClassesService'
import { teacherRecentClass } from '../../../store/actions/teacher/classes/teacherClassesSlice'
import UpcomingClass from './UpcomingClass'
import Help from './Help/Help'
import { teacherStudentProjects } from '../../../store/actions/teacher/projects/teacherProjectService'
import TeacherClasses from './TeacherClasses'
import MyCourses from './MyCourses/index'

const Dashboard = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { teacherClasses, loading, teacherUpcomingClass } = useAppSelector(
        (state: RootState) => state.teacherClasses
    )

    useEffect(() => {
        if (!loading) {
            dispatch(teacherRecentClass())
        }
    }, [teacherClasses, loading])

    useEffect(() => {
        dispatch(teacherAllClasses(user?.clientId))
        dispatch(teacherStudentProjects(user?.clientId))
    }, [user])

    return (
        <>
            <Help />
            <UpcomingClass upcomingClass={teacherUpcomingClass} />
            <MyCourses />
            <TeacherClasses />
        </>
    )
}

export default Dashboard
