import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherProfileImage = createAsyncThunk(
    '/teacherProfile',
    async (formData: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/profile-image', formData)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
