import { createSlice } from '@reduxjs/toolkit'
import { courseService } from './courseService'

const course: any = []

const { studentCourse } = courseService
const initialState = {
    course: course,
    showValue: 0,
    isLoading: true,
}

export const courseSlice = createSlice({
    name: 'courseSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(studentCourse.pending, (state) => {})
            .addCase(studentCourse.fulfilled, (state, action: any) => {
                state.course = action.payload
                state.isLoading = false
            })
            .addCase(studentCourse.rejected, (state, action: any) => {})
    },
})

export default courseSlice.reducer
