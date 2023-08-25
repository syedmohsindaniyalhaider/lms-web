import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../lib/axios'

export const userUpdatePassword = createAsyncThunk(
    'user/update-password',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch(`users/update-password`, data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
