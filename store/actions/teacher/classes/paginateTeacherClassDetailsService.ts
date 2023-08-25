import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const paginateTeacherClassDetails = createAsyncThunk(
    'teacher/paginateTeacherClassDetail',
    async (data: any, thunkAPI) => {
        const { teacherId, page } = data
        try {
            const res = await api.post(
                `/classes/teacher-class/details?page=${page}`,
                {
                    teacherId: teacherId,
                }
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
