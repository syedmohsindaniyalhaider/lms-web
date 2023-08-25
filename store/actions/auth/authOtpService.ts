import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../lib/axios'
// class details of specific course
export const authOtpInitiate = createAsyncThunk(
    'auth-initiate',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/auth/initiate-verification', data)
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
