import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const reviewProject = createAsyncThunk(
    '/review-project',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/teacher/review-project', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
