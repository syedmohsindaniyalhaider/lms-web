import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const projectUpload = createAsyncThunk(
    'projects/student/upload',
    async (data: any, thunkAPI) => {
        try {
            const response = await api.post('/projects/upload', data)
            return response.data
        } catch (error: any) {
            console.log('Error in Project Upload =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
