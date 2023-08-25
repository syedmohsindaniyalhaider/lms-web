import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// import { update_quiz_type } from "./types/quizType";

export const updateQuizReview = createAsyncThunk(
    'classes/quiz/review',
    async (studentQuiz: any, thunkAPI) => {
        try {
            const response = await api.post('/quizzes/review', studentQuiz)
            return response.data
        } catch (error: any) {
            console.log('Error in ClassesQuizService =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
