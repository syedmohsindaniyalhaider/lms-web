import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherCourseService = createAsyncThunk(
    '/teacherCourseService',
    async (teacherId: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/courses', {
                teacherId,
            })
            return res.data
        } catch (error: any) {}
    }
)
