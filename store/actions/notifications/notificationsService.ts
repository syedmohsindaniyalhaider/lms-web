import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../../lib/axios'

export const allNotification = createAsyncThunk(
    'notification',
    async (userId: any, thunkAPI) => {
        try {
            const res = await api.get(`/notification/${userId}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)
