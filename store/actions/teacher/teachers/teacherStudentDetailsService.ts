import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudentDetails = createAsyncThunk(
    'teacher/teacher-student-details',

    async (data: any, thunkAPI) => {
        try {
            const res = await api.get('teacher/student-details', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
