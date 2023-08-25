import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'
// class details of specific course
export const allCoursesService = createAsyncThunk(
    '/Courses',
    async (thunkAPI) => {
        try {
            const res = await api.get('/course')
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
