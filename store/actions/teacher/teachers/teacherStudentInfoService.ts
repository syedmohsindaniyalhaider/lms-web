import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudentsInfo = createAsyncThunk(
    'teacher/teacherStudentsInfo',

    async (studentDetails: any, thunkAPI) => {
        try {
            const res = await api.post(
                'teacher/course-students/info',
                studentDetails
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
