import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudents = createAsyncThunk(
    'teacher/teacherStudents',

    async (teacherId: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/teacher-students', {
                teacherId: teacherId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
