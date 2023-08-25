import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const classScheduleUpdate = createAsyncThunk(
    'course/classes/update-schedule',
    async (classDetails: any, thunkAPI) => {
        try {
            const res = await api.patch(
                '/classes/update-schedule',
                classDetails
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
