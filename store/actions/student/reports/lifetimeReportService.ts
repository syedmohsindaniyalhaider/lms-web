import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

const studentLifeTimeReport = createAsyncThunk(
    'student/life-time/report',
    async (lifeTimeData: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/student/life-time/report',
                lifeTimeData
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export default studentLifeTimeReport
