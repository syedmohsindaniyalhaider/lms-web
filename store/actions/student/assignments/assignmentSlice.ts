import { createSlice } from '@reduxjs/toolkit'
import { allAssignments } from './assignmentService'

const assignment: any = []

const initialState = {
    assignments: assignment,
    isError: false,
}

export const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(allAssignments.pending, (state) => {
                state.isError = true
            })
            .addCase(allAssignments.fulfilled, (state, action) => {
                state.isError = false
                state.assignments = action.payload
            })
            .addCase(allAssignments.rejected, (state, action) => {
                state.isError = true
            })
    },
})

export default assignmentsSlice.reducer
