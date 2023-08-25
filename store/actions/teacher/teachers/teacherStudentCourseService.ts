import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudentCourses = createAsyncThunk(
    'teacher/teacherStudentCourses',

    async (data: any, thunkAPI) => {
        try {
            const res = await api.post(
                'teacher/student-specific-course/info',
                data
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
