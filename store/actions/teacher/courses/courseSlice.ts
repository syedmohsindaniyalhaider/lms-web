import { createSlice } from '@reduxjs/toolkit'
import { allCoursesService } from '../courses/allCourseService'
import { teacherCourseService } from './teacherCourseService'

let courses: any = []
let teacherCourses: any = []
const initialState: any = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    courses: courses,
    teacherCourses: teacherCourses,
}

export const allCourseSlice = createSlice({
    name: 'allCourses',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(allCoursesService.pending, (state) => {
                state.loading = true
            })
            .addCase(allCoursesService.fulfilled, (state, action: any) => {
                state.courses = action?.payload
                state.loading = false
            })
            .addCase(allCoursesService.rejected, (state, action: any) => {})
            .addCase(teacherCourseService.pending, (state) => {
                state.loading = true
            })
            .addCase(teacherCourseService.fulfilled, (state, action: any) => {
                state.teacherCourses = action.payload
                state.loading = false
            })
            .addCase(teacherCourseService.rejected, (state, action: any) => {})
    },
})

export default allCourseSlice.reducer
