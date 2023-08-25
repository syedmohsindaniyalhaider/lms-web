import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const paginateStudentClasses = createAsyncThunk(
    'student/paginate-student-classes',
    async (data: any, thunkAPI) => {
        try {
            const { studentId, page } = data
            const res = await api.get(
                `/student/classes/${studentId}?page=${page}`
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
