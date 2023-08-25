import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../../../lib/axios'

export const classStatusUpdate = createAsyncThunk(
    'course/classes/update-status',
    async (classDetails: any, thunkAPI) => {
        try {
            const res = await api.patch('/classes/update-status', {
                classId: classDetails.classId,
                classStatus: classDetails.classStatus,
                scheduledAt: classDetails.scheduledAt,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
