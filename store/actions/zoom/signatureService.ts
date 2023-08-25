import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../../lib/axios'

// class details of specific course
export const zoomSignature = createAsyncThunk(
    'zoom/get-signature',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/zoom', data)
            return res.data.signature
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
