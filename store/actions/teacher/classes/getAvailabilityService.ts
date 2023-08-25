import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const getAvailability = createAsyncThunk(
    '/teacher/getAvailability',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/teachers-availability', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
