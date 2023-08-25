import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
import { quiz_answer } from './types/answerType'

// class details of specific course
export const answerOfQuiz = createAsyncThunk(
    'quiz/update-answer',
    async (data: any, thunkAPI) => {
        try {
            const response = await api.post('/questions/update-answer', {
                studentId: data.studentId,
                questionId: data.questionId,
                answer: data.answer,
                quizId: data.quizId,
            })
            return response.data
        } catch (error: any) {
            console.log('Error in ClassesQuizService =>::', error)
            //   return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
