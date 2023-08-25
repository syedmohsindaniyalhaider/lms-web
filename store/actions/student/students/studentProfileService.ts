import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const studentProfile = createAsyncThunk(
    '/student-profile',
    async (studentId: number, thunkAPI) => {
        try {
            const res = await api.get(`/student/${studentId}`)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
