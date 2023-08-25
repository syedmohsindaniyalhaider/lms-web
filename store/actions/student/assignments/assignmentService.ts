import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
export const allAssignments = createAsyncThunk(
    'student/assignments',
    async (studentId: number, thunkAPI) => {
        try {
            const res = await api.get(`/assignments/${studentId}`)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
