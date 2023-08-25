import { createSlice } from '@reduxjs/toolkit'
import { allProjects } from './projectService'
import api from '../../../../lib/axios'
import { projectUpload } from './projectUpload'

const projects: any = []

const initialState = {
    projects: projects,
    isError: false,
    isLoading: false,
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(allProjects.pending, (state) => {
                state.isError = true
            })
            .addCase(allProjects.fulfilled, (state, action) => {
                state.isError = false
                state.projects = action.payload
            })
            .addCase(allProjects.rejected, (state, action) => {
                state.isError = true
            })
            .addCase(projectUpload.pending, (state) => {
                state.isLoading = true
            })
            .addCase(projectUpload.fulfilled, (state, action) => {
                state.isLoading = false
                state.projects = action.payload
            })
            .addCase(projectUpload.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

export default projectsSlice.reducer
