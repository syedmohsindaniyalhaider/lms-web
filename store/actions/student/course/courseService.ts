import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const studentCourse = createAsyncThunk(
    'student-course-classes',
    async (studentId: any, thunkAPI) => {
        try {
            const res = await api.post('/student/courses', {
                studentId: studentId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const courseService = {
    studentCourse,
}
