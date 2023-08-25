import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

// class details of specific course
export const paginateTeacherClasses = createAsyncThunk(
    'teacher/paginateTeacherClasses',
    async (data: any, thunkAPI) => {
        const { teacherId, page } = data
        try {
            const res = await api.get(
                `/teacher/classes/${teacherId}?page=${page}`
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
