import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

const studentCourseProjectsReport = createAsyncThunk(
    'student/course-project/report',
    async (data2: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/student/student-course/projects',
                data2
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export default studentCourseProjectsReport
