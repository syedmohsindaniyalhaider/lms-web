import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const studentProfileImage = createAsyncThunk(
    '/studentProfileImage',
    async (formData: any, thunkAPI) => {
        try {
            const res = await api.post('/student/profile-image', formData)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
