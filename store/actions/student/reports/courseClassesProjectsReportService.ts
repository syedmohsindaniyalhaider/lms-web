import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

const studentCourseClassesReport = createAsyncThunk(
    'student/course-classes/report',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/student/student-course-class/details',
                data
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export default studentCourseClassesReport
