import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const communicationSettings = createAsyncThunk(
    'student/communication-settings',

    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/student/update-communication', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
