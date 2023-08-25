import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// quiz by class Id
export const studentProjects = createAsyncThunk(
    'projects',
    async (studentId: number, thunkAPI) => {
        try {
            const res = await api.post('/student/projects', {
                studentId: studentId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
