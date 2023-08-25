import { createSlice } from '@reduxjs/toolkit'
import { studentQuizzes } from './studentQuizzesService'
import { student } from './types/studentType'
import { studentProjects } from './studentProjectsService'
import { updateStudentProfile } from './updateStudentProfileService'
import { studentProfile } from './studentProfileService'
import { communicationSettings } from './communicationSettingsService'
import { studentPreference } from './studentPreferenceService'

const allProjects: any = []

const initialState = {
    studentQuiz: [],
    student: [],
    allClasses: [],
    allProjects: allProjects,
    profile: {
        address: null,
        country: null,
        contactNo: null,
        dob: null,
        fullName: null,
        gender: null,
        parentName: null,
        primaryEmail: null,
        schoolName: null,
        secondaryEmail: null,
        studentId: null,
        userId: null,
        joiningDate: null,
        additionalContactNo: null,
        profileImage: null,
    },
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(studentQuizzes.pending, (state) => {})
            .addCase(studentQuizzes.fulfilled, (state, action: any) => {
                state.studentQuiz = action.payload
            })
            .addCase(studentQuizzes.rejected, (state, action: any) => {})
            .addCase(studentProjects.pending, (state, action: any) => {})
            .addCase(studentProjects.fulfilled, (state, action: any) => {
                state.allProjects = action.payload
                state.student = action.payload
            })
            .addCase(studentProjects.rejected, (state, action: any) => {})
            .addCase(studentProfile.pending, (state) => {})
            .addCase(studentProfile.fulfilled, (state, action: any) => {
                state.profile = action.payload
            })
            .addCase(studentProfile.rejected, (state) => {})
            .addCase(updateStudentProfile.pending, (state) => {})
            .addCase(updateStudentProfile.fulfilled, (state, action: any) => {
                state.profile = action.payload
            })
            .addCase(updateStudentProfile.rejected, (state) => {})
            .addCase(communicationSettings.pending, (state) => {})
            .addCase(communicationSettings.fulfilled, (state, action: any) => {
                state.profile = action.payload
            })
            .addCase(communicationSettings.rejected, (state) => {})
            .addCase(studentPreference.pending, (state) => {})
            .addCase(studentPreference.fulfilled, (state, action: any) => {
                state.profile = action.payload
            })
            .addCase(studentPreference.rejected, (state) => {})
    },
})

export default studentSlice.reducer
