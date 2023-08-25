import { createSlice } from '@reduxjs/toolkit'
import { teacherStudentProjects } from './teacherProjectService'

let projectTeachers: any = []

const initialState: any = {
    projectTeachers: projectTeachers,
    loading: false,
}

export const teacherProjectsSlice = createSlice({
    name: 'teacherProject',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(teacherStudentProjects.pending, (state) => {
                state.loading = true
            })
            .addCase(teacherStudentProjects.fulfilled, (state, action: any) => {
                state.projectTeachers = action?.payload
                state.loading = false
            })
            .addCase(
                teacherStudentProjects.rejected,
                (state, action: any) => {}
            )
    },
})

export default teacherProjectsSlice.reducer
