import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../../lib/axios'

export const readNotification = createAsyncThunk(
    'notification/read',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.patch('/notification/read', {
                data,
            })
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)
