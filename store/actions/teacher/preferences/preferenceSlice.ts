import { createSlice } from '@reduxjs/toolkit'
import { preferenceService } from './preferenceService'

const { addPreference, getPreference, deletePreference } = preferenceService
const coursePreference: any[] = []
const initialState = {
    coursePreference: coursePreference,
    loading: false,
    isSuccess: false,
}

export const preferenceSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addPreference.pending, (state) => {
                state.loading = true
            })
            .addCase(addPreference.fulfilled, (state: any, action: any) => {
                state.isSuccess = true
            })
            .addCase(addPreference.rejected, (state, action) => {})
            .addCase(getPreference.pending, (state) => {
                state.loading = true
            })
            .addCase(getPreference.fulfilled, (state, action) => {
                state.isSuccess = true
                state.coursePreference = action.payload
            })
            .addCase(getPreference.rejected, (state) => {})
            .addCase(deletePreference.pending, (state) => {
                state.loading = true
            })
            .addCase(deletePreference.fulfilled, (state, action) => {
                state.isSuccess = true
                state.coursePreference = state.coursePreference?.filter(
                    (ele: any) =>
                        ele.preferenceId !== action.payload.preferenceId
                )
            })
            .addCase(deletePreference.rejected, (state) => {
                state.loading = true
            })
    },
})

export default preferenceSlice.reducer
