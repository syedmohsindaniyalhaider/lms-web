import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const allQuizzesService = createAsyncThunk(
    'all-quizzes',
    async (thunkAPI) => {
        try {
            const res = await api.get('/quizzes')
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
