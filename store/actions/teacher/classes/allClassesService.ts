import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// class details of specific course
export const teacherAllClasses = createAsyncThunk(
    'course/classes',

    async (teacherId: number, thunkAPI) => {
        try {
            const res = await api.post('/teacher/classes', {
                teacherId: teacherId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
