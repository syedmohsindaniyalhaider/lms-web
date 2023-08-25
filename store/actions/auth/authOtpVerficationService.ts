import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../lib/axios'
// class details of specific course
export const otpVerification = createAsyncThunk(
    'otp-verification',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/auth/otp-verification', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
