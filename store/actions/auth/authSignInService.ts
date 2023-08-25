import api from '../../../lib/axios'
import { setCookie } from 'cookies-next'
import { createAsyncThunk } from '@reduxjs/toolkit'
// Login user
export const authSignIn = createAsyncThunk(
    'auth/sign-in',
    async (userData: any, thunkAPI) => {
        try {
            const res = await api.post('/auth/signin', userData)
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export default authSignIn
