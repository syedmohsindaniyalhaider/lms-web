import { createSlice } from '@reduxjs/toolkit'
import { allClassQuizzes } from './allClassQuizzesService'
import { allQuizzesService } from './allQuizzesService'
import { updateQuizStatus } from './updateQuizStatus'

type questions_type = {
    question: string
    correctAnswer: string
    options: []
    answer: string
    quizId: number
}

type quiz_type = {
    quizId: number
    classId: number
    quizTitle: string
    quizDescription: string
    questions: questions_type[]
    correctAnswer: number
    answer: number
    startTime: string
    endTime: string
    totalMarks: number
    obtainedMarks: number
    result: number
    status: string
    file: string
}

const quizzes: any = []
const lastest_Quiz: any = []
const allQuizzes: quiz_type[] = []

const initialState = {
    quizzes: quizzes,
    latestQuiz: lastest_Quiz,
    allQuizzes: allQuizzes,
    showValue: 0,
    isLoading: true,
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        toggleScreens: (state, action) => {
            state.showValue = action.payload
        },
        lastestQuiz: (state) => {
            // const filterQuiz = state.quizzes.filter(
            //   (ele: any) => ele?.status !== "completed"
            // );
            if (!state.isLoading) {
                state.latestQuiz = state.quizzes?.reduce(function (
                    a: any,
                    b: any
                ) {
                    return a?.submitDate < b?.submitDate ? a : b
                },
                0)
            }
            // moment().isAfter(state.quizzes[0].submitDate);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(allClassQuizzes.pending, (state) => {})
            .addCase(allClassQuizzes.fulfilled, (state, action: any) => {
                state.quizzes = action.payload
                // const quiz = action.payload;
                // const newquiz = moment().isAfter(quiz[0]?.submitDate);
                // if (newquiz === false) {
                //   state.quizzes = action.payload;
                // }
                state.isLoading = false
            })
            .addCase(allClassQuizzes.rejected, (state, action: any) => {})
            .addCase(updateQuizStatus.pending, (state, action: any) => {})
            .addCase(updateQuizStatus.fulfilled, (state, action: any) => {
                const data = action.payload
                const studentQuizUpdate = {
                    quizId: data?.quizId,
                    studentId: data?.studentId,
                    obtainedMarks: data?.obtainedMarks,
                    result: data?.result,
                    status: data?.status,
                }
                // const quizIndex = state.quizzes.findIndex((ele:any)=> ele?.quizId === data?.quizId)
                // const quiz = state.quizzes[quizIndex];
                // const studentIndex = quiz?.students?.findIndex((ele:any)=> ele?.studentId === data?.studentId)
                // state.quizzes[quizIndex].students[studentIndex] = action.payload;
            })
            .addCase(updateQuizStatus.rejected, (state, action: any) => {})
            .addCase(allQuizzesService.pending, (state) => {})
            .addCase(allQuizzesService.fulfilled, (state, action: any) => {
                state.allQuizzes = action.payload
                state.isLoading = false
            })
            .addCase(allQuizzesService.rejected, (state, action: any) => {})
    },
})

export const { toggleScreens, lastestQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer
