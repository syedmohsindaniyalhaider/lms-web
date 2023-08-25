import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
export const updateStudentProfile = createAsyncThunk(
    'student/update-profile',

    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/student/update-profile', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
