import { createSlice } from '@reduxjs/toolkit'
import { teacherQuizzes } from './teacherQuizzesService'

let teacherStudentQuizzes: any = []
let teacherSingleQuiz: any = {}

const initialState = {
    teacherSingleQuiz: teacherSingleQuiz,
    teacherStudentQuizzes: teacherStudentQuizzes,
}

const teacherQuizSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        teacherReviewQuiz: (state, action: any) => {
            state.teacherSingleQuiz = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(teacherQuizzes.pending, (state) => {})
            .addCase(teacherQuizzes.fulfilled, (state, action: any) => {
                state.teacherStudentQuizzes = action.payload
            })
            .addCase(teacherQuizzes.rejected, (state) => {})
    },
})
export const { teacherReviewQuiz } = teacherQuizSlice.actions
export default teacherQuizSlice.reducer
