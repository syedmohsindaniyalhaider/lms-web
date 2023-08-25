import api from '../../../lib/axios'
import { verify } from 'jsonwebtoken'
import { createAsyncThunk } from '@reduxjs/toolkit'
// specific user
export const userDetails = createAsyncThunk(
    'user-details',
    async (thunkAPI) => {
        try {
            const res = await api.post(`/users/me`)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
