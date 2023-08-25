import { createSlice } from '@reduxjs/toolkit'
import { studentAllClasses } from './allClassesService'
import { classScheduleUpdate } from './classScheduleUpdateService'
import { paginateStudentClasses } from './paginateStudentClasses'
import { paginateStudentClassDetail } from '../../../actions/student/classes/paginateStudentClassDetailsService'
// import { class_type } from "./types/classesTypes";
import moment from 'moment'
import { classDetails } from './classDetailsService'
import { classStatusUpdate } from './classStatusUpdateService'
import _uniqBy from 'lodash/uniqBy'

type classType = {
    classes: {
        activities: []
        classCode: string
        classId: number
        classTitle: string
        courseId: number
        date: string
        description: string
        documents: []
        endTime: string
        startTime: string
    }
    classStatus: string
    scheduledAt: string
}

type availabilitiesType = {
    availabilityId: number
    date: string
    hours: []
    teacherId: number
}

type class_type = {
    studentId: number
    teacherId: number
    teacherEmail: string
    teacherFirstName: string
    teacherLastName: string
    courseDescription: string
    courseName: string
    classes: classType[]
    availabilities: availabilitiesType[]
}

const classes: class_type[] = []
const newClasses: any[] = []
const upcoming_Class: any = {}
const paginateClassDetail: any = []
const studentClassDetails: any = []

const initialState = {
    classes: classes,
    classDetails: studentClassDetails,
    isLoading: false,
    upcomingClass: {},
    teacherId: -1,
    paginateClasses: [],
    lastPage: false,
    paginateClassDetail: paginateClassDetail,
    upcoming_Class: upcoming_Class,
}

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        emptyPaginateClasses: (state) => {
            state.paginateClasses = []
        },
        recentUpcomingClass: (state) => {
            const classes = state.classes?.map((ele: any) =>
                ele?.classes?.map((item: any) => {
                    return {
                        ...item,
                        courseName: ele?.courseName,
                    }
                })
            )
            const allClasses = classes?.flat(Infinity)
            const filterPendingClasses = allClasses?.filter(
                (ele: any) => ele?.classStatus === 'pending'
            )

            state.upcomingClass = filterPendingClasses?.reduce(function (
                a: any,
                b: any
            ) {
                return a?.classes?.date < b?.classes?.date
                    ? a
                    : a?.classes?.date === b?.classes?.date
                    ? moment(a?.classes?.startTime, 'h:mma').isBefore(
                          moment(b?.classes?.startTime, 'h:mma')
                      )
                        ? a
                        : b
                    : b

                // return a?.classes?.date < b?.classes?.date ? a : b;
            },
            0)
        },
    },
    extraReducers(builder) {
        builder
            .addCase(studentAllClasses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(studentAllClasses.fulfilled, (state, action: any) => {
                state.classes = action.payload
                // state.teacherId = action.payload[0]?.classes?.courses?.teacherId;
                state.isLoading = false
            })
            .addCase(studentAllClasses.rejected, (state, action: any) => {
                state.isLoading = false
            })
            .addCase(classScheduleUpdate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(classScheduleUpdate.fulfilled, (state, action: any) => {
                const classId = action.payload?.classId
                // const classIndex = state.classes.findIndex(
                //   (item: class_type) => item?.classId === classId
                // );
                state.classes = state.classes.filter(
                    (ele: any) => ele?.classId !== classId
                )
                state.isLoading = false
            })
            .addCase(classScheduleUpdate.rejected, (state) => {})
            .addCase(classStatusUpdate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(classStatusUpdate.fulfilled, (state, action: any) => {
                // const classId = action.payload?.classId;
                // const classIndex = state.classes.findIndex(
                //   (item: class_type) => item?.classId === classId
                // );
                // state.classes = state.classes.filter(
                //   (ele: any) => ele?.classId !== classId
                // );
                state.isLoading = false
            })
            .addCase(classStatusUpdate.rejected, (state) => {})
            .addCase(classDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(classDetails.fulfilled, (state, action: any) => {
                state.classDetails = action.payload
                state.isLoading = false
            })
            .addCase(classDetails.rejected, (state) => {})
            .addCase(paginateStudentClasses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                paginateStudentClasses.fulfilled,
                (state: any, action: any) => {
                    const { classes } = action.payload
                    state.paginateClasses = _uniqBy(
                        [...state.paginateClasses, ...classes],
                        'id'
                    ) // only add new classes that do not already exist in state
                    state.lastPage = action.payload.lastPage
                    // state.paginateClasses = state.paginateClasses.concat(...classes);
                    state.isLoading = false
                }
            )
            .addCase(paginateStudentClasses.rejected, (state) => {})
            .addCase(paginateStudentClassDetail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                paginateStudentClassDetail.fulfilled,
                (state, action: any) => {
                    state.paginateClassDetail = action.payload
                    state.isLoading = false
                }
            )
            .addCase(paginateStudentClassDetail.rejected, (state) => {})
    },
})

export const { recentUpcomingClass, emptyPaginateClasses } =
    classesSlice.actions
export default classesSlice.reducer
