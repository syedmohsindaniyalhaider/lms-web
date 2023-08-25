import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../../lib/axios'

export const chatService = createAsyncThunk(
    'chat',
    async (userId: any, thunkAPI) => {
        try {
            const res = await axios.post(
                'https://lms-be.up.railway.app/chat/users'
            )
            return
            // return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)
