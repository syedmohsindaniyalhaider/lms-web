import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherStudentProjects = createAsyncThunk(
    'teacherProjects',
    async (teacherId: number, thunkAPI) => {
        try {
            const res = await api.post('teacher/projects', {
                teacherId: teacherId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
