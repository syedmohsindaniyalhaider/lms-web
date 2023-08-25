import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const paginateStudentClassDetail = createAsyncThunk(
    'student/paginateStudentClassDetail',
    async (data: any, thunkAPI) => {
        const { studentId, page } = data
        try {
            const res = await api.post(
                `/classes/student-class/details?page=${page}`,
                {
                    studentId: studentId,
                }
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
