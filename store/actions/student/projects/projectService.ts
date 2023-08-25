import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const allProjects = createAsyncThunk(
    'projects',
    async (classId: number, thunkAPI) => {
        try {
            const [request1, request2] = await Promise.all([
                api({
                    method: 'Post',
                    responseType: 'blob',
                    url: 'classes/projects',
                    data: {
                        classId: classId,
                    },
                }),
                await api.post('projects/get-all-files', {
                    classId: classId,
                }),
            ])

            return [request1.data, request2.data]
        } catch (error: any) {
            console.log('Error is here =>::', error)
            // return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
