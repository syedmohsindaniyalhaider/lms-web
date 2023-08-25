import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// all student quizzes
export const studentQuizzes = createAsyncThunk(
    'student/quizzes',
    async (studentId: number, thunkAPI) => {
        try {
            const res = await api.post('/student/quizzes', {
                studentId: studentId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
