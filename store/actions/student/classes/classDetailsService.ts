import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const classDetails = createAsyncThunk(
    'student/class-details',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post(`/classes/details`, data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
