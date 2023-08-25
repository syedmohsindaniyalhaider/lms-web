import React, { memo, useEffect } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { recentUpcomingClass } from '../../../store/actions/student/classes/classesSlice'
import Assignments from './Assignments'
import Classes from './Classes'
import UpcomingClass from './UpcomingClass'
import Help from './Help/Help'
import LearningJourney from './LearningJourney'
import { allAssignments } from '../../../store/actions/student/assignments/assignmentService'
import { studentAllClasses } from '../../../store/actions/student/classes/allClassesService'

const Dashboard = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { classes, isLoading, upcomingClass } = useAppSelector(
        (state: RootState) => state.classes
    )

    // updated

    useEffect(() => {
        if (!isLoading) {
            dispatch(recentUpcomingClass())
        }
    }, [classes, isLoading])

    useEffect(() => {
        dispatch(allAssignments(user?.clientId))
        dispatch(studentAllClasses(user?.clientId))
    }, [user, dispatch])

    return (
        <>
            <Help />
            <LearningJourney />
            <UpcomingClass upcomingClass={upcomingClass} />
            <Assignments />
            <Classes />
        </>
    )
}

export default Dashboard
