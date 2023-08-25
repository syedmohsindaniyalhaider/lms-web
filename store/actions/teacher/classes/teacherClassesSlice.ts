import { createSlice } from '@reduxjs/toolkit'
import { teacherAllClasses } from './allClassesService'
import { classStatusUpdate } from './classStatusUpdateService'
import { addAvailability } from './addAvailabilityService'
import { getAvailability } from './getAvailabilityService'
import { teacherClassDetails } from './classDetailsService'
import { paginateTeacherClasses } from './paginateTeacherClasses'
import { paginateTeacherClassDetails } from './paginateTeacherClassDetailsService'
export type class_type = {
    classId: number
    courseId: number
    address: string
    classCode: string
    roomCode: string
    description: string
    date: string
    classStatus: ''
    startTime: string
    endTime: string
    scheduledAt: string
}
const classes: class_type[] = []
const addAvailabilities: any = []
const availabilities: any = []
const paginateClasses: any = []
const zoomClassDetails: any = {}

const upcomingClass: class_type = {
    classId: 0,
    courseId: 0,
    address: '',
    classCode: '',
    roomCode: '',
    description: '',
    date: '',
    classStatus: '',
    startTime: '',
    endTime: '',
    scheduledAt: '',
}

const initialState = {
    teacherClasses: classes,
    teacherClassDetails: {},
    paginateClasses: [],
    zoomClassDetails: zoomClassDetails,
    lastPage: false,
    isLoading: true,
    addAvailabilities: addAvailabilities,
    availabilities: availabilities,
    loading: true,
    isSuccess: false,
    teacherUpcomingClass: upcomingClass,
    paginateTeacherClassDetail: [],
}

export const teacherClassesSlice = createSlice({
    name: 'teacher-classes',
    initialState,
    reducers: {
        teacherZoomClassDetails: (state, action: any) => {
            state.zoomClassDetails = action.payload
        },
        emptyPaginateClasses: (state) => {
            state.paginateClasses = []
        },
        teacherRecentClass: (state) => {
            const filterPendingClasses = state.teacherClasses?.filter(
                (ele: any) => ele?.classStatus === 'pending'
            )
            state.teacherUpcomingClass = filterPendingClasses?.reduce(function (
                a: any,
                b: any
            ) {
                return a?.classes?.date < b?.classes?.date ? a : b
            },
            0)
        },
    },

    extraReducers(builder) {
        builder
            .addCase(teacherAllClasses.pending, (state) => {
                state.loading = true
            })
            .addCase(teacherAllClasses.fulfilled, (state, action: any) => {
                state.teacherClasses = action?.payload

                state.loading = false
            })
            .addCase(teacherAllClasses.rejected, (state, action: any) => {
                // state.isLoading = false;
            })
            .addCase(classStatusUpdate.pending, (state) => {
                state.loading = true
            })
            .addCase(classStatusUpdate.fulfilled, (state, action: any) => {
                // const classId = action.payload?.map((i:any) => i.classId);
                // const classIndex = state.teacherClasses.findIndex(
                //   (item: class_type) => item?.classId === classId
                // );
                // state.teacherClasses[classIndex] = action.payload;
                // state.loading = false;
            })
            .addCase(classStatusUpdate.rejected, (state) => {})
            .addCase(addAvailability.pending, (state) => {
                state.loading = true
                // state.isRejected = false;
            })
            .addCase(addAvailability.fulfilled, (state, action: any) => {
                state.loading = false
                state.isSuccess = true
                state.addAvailabilities = [
                    ...state.addAvailabilities,
                    action.payload,
                ]
            })
            .addCase(addAvailability.rejected, (state, action: any) => {
                state.loading = false
            })
            .addCase(getAvailability.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(getAvailability.fulfilled, (state, action: any) => {
                state.loading = false
                state.availabilities = action.payload
                state.isSuccess = true
            })
            .addCase(getAvailability.rejected, (state, action: any) => {
                state.loading = false
            })

            // teacher class details

            .addCase(teacherClassDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(teacherClassDetails.fulfilled, (state, action: any) => {
                state.teacherClassDetails = action.payload
                state.isLoading = false
            })
            .addCase(teacherClassDetails.rejected, (state) => {
                console.log('Rejected')
            })
            // paginate teacher classes
            .addCase(paginateTeacherClasses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(paginateTeacherClasses.fulfilled, (state, action: any) => {
                const { classes } = action.payload

                state.paginateClasses = action.payload
                state.lastPage = action.payload.lastPage
                state.isLoading = false
            })
            .addCase(paginateTeacherClasses.rejected, (state) => {
                console.log('Rejected')
            })

            .addCase(paginateTeacherClassDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                paginateTeacherClassDetails.fulfilled,
                (state, action: any) => {
                    state.paginateTeacherClassDetail = action.payload
                    state.isLoading = false
                }
            )
            .addCase(paginateTeacherClassDetails.rejected, (state) => {
                console.log('Rejected')
            })
    },
})

export const {
    teacherRecentClass,
    emptyPaginateClasses,
    teacherZoomClassDetails,
} = teacherClassesSlice.actions
export default teacherClassesSlice.reducer
