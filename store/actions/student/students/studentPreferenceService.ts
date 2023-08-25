import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const studentPreference = createAsyncThunk(
    'student/student-preference',

    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/student/update-preferences', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
