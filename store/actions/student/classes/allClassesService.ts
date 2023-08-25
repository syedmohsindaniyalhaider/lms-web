import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const studentAllClasses = createAsyncThunk(
    'student/course-classes',
    async (studentId: number, thunkAPI) => {
        try {
            const res = await api.get(`/classes/${studentId}`)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
