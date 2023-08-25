import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../../lib/axios'

// class details of specific course
export const createMeeting = createAsyncThunk(
    'zoom/create-meeting',
    async (meetingDetails: any, thunkAPI) => {
        try {
            const res = await api.post('/zoom/create-meeting', meetingDetails)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
