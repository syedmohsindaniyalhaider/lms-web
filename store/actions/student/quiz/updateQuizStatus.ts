import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// import { update_quiz_type } from "./types/quizType";

// class details of specific course
export const updateQuizStatus = createAsyncThunk(
    'classes/quiz',
    async (studentQuiz: any, thunkAPI) => {
        try {
            const response = await api.post('/quizzes/status', {
                quizId: studentQuiz.quizId,
                studentId: studentQuiz.studentId,
                status: 'completed',
            })
            return response.data
        } catch (error: any) {
            console.log('Error in ClassesQuizService =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
