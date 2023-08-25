import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// quiz by class Id
export const allClassQuizzes = createAsyncThunk(
    'quizzes',
    async (classId: number, thunkAPI) => {
        try {
            const res = await api.post('/classes/quiz', {
                classId: classId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
