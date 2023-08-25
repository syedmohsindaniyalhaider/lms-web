import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// class details of specific course
export const addAvailability = createAsyncThunk(
    '/teacher/add-availability',
    async (payload: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/add-availability', payload)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            // return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
