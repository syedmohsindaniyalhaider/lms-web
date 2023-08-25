import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const studentsService = createAsyncThunk(
    'students',
    async (thunkAPI) => {
        try {
            const res = await api.get('/student')
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
