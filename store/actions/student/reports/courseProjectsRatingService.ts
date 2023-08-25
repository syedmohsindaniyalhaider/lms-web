import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

const studentCourseProjectsRating = createAsyncThunk(
    'student/course-project/rating',
    async (data3: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/report-card/student-reportcard-rating',
                data3
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export default studentCourseProjectsRating
