import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

const studentCourseQuizzesReport = createAsyncThunk(
    'student/course-quizzes/report',
    async (data1: any, thunkAPI) => {
        try {
            const res = await api.post('/student/student-course/quizzes', data1)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export default studentCourseQuizzesReport
