import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherProfile = createAsyncThunk(
    '/teacher-profile',
    async (teacherId: number, thunkAPI) => {
        try {
            const res = await api.get(`/teacher/${teacherId}`)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
