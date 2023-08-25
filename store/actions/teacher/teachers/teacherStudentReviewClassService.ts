import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudentReviewClass = createAsyncThunk(
    '/review-class/student',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/teacher/review-class/student', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
