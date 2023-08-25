import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

//addPreference Service
export const addPreference = createAsyncThunk(
    '/addPreference',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/preference/add', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

//get getPreference Service
export const getPreference = createAsyncThunk(
    '/getPreference',
    async (teacherId: any, thunkAPI) => {
        try {
            const res = await api.post('preference/', {
                teacherId: teacherId,
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

//delete deletePreference Service
export const deletePreference = createAsyncThunk(
    '/deletePreference',
    async (preferenceId: any, thunkAPI) => {
        try {
            const res = await api.delete('/preference/delete', {
                data: {
                    preferenceId: preferenceId,
                },
            })
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const preferenceService = {
    addPreference,
    getPreference,
    deletePreference,
}
