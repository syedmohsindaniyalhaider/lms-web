import { createSlice } from '@reduxjs/toolkit'
import { reviewProject } from './reviewProjectService'
import { teacherProfile } from './teacherProfileService'
import { updateTeacherProfile } from './updateTeacherProfileService'
import { teacherStudents } from './teacherStudentsService'
import { teacherStudentsInfo } from './teacherStudentInfoService'
import { teacherStudentCourses } from './teacherStudentCourseService'
import { teacherProject } from './teacherProjectsService'
import { teacherProfileImage } from './profileService'
import { teacherStudentDetails } from './teacherStudentDetailsService'

const teacherAllStudents: any = []
const teacherSingleStudentInfo: any = []
const teacherStudentCourseInfo: any = []
const teacherAllProject: any = []
let teacherSingleProject: any = {}
let teacherStudentDetail: any = {}

const initialState = {
    teacherProfileInfo: {
        firstName: null,
        lastName: null,
        contactNo: null,
        email: null,
        dob: null,
        gender: null,
        education: null,
        address: null,
        country: null,
        postCode: null,
        teacherId: null,
        userId: null,
        profileImage: null,
        joiningDate: null,
    },
    projectReview: {
        creativity: null,
        logic: null,
        completion: null,
        review: null,
    },
    teacherAllStudents: teacherAllStudents,
    teacherSingleStudentInfo: teacherSingleStudentInfo,
    teacherStudentCourseInfo: teacherStudentCourseInfo,
    teacherAllProject: teacherAllProject,
    teacherSingleProject: teacherSingleProject,
    teacherStudentDetail: teacherStudentDetail,
    isLoading: false,
}

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        teacherReviewProject: (state, action: any) => {
            state.teacherSingleProject = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(teacherProfile.pending, (state) => {})
            .addCase(teacherProfile.fulfilled, (state, action: any) => {
                state.teacherProfileInfo = action.payload
            })
            .addCase(teacherProfile.rejected, (state) => {})
            .addCase(updateTeacherProfile.pending, (state) => {})
            .addCase(updateTeacherProfile.fulfilled, (state, action: any) => {
                state.teacherProfileInfo = action.payload
            })
            .addCase(updateTeacherProfile.rejected, (state) => {})
            //review project
            .addCase(reviewProject.pending, (state) => {})
            .addCase(reviewProject.fulfilled, (state, action: any) => {
                state.projectReview = action.payload
            })
            .addCase(reviewProject.rejected, (state) => {})
            .addCase(teacherStudents.pending, (state) => {})
            .addCase(teacherStudents.fulfilled, (state, action: any) => {
                state.teacherAllStudents = action.payload
            })
            .addCase(teacherStudents.rejected, (state) => {})
            .addCase(teacherStudentsInfo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(teacherStudentsInfo.fulfilled, (state, action: any) => {
                state.teacherSingleStudentInfo = action.payload
                state.isLoading = false
            })
            .addCase(teacherStudentsInfo.rejected, (state) => {})
            //
            .addCase(teacherStudentCourses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(teacherStudentCourses.fulfilled, (state, action: any) => {
                state.teacherStudentCourseInfo = action.payload
                state.isLoading = false
            })
            .addCase(teacherStudentCourses.rejected, (state) => {})
            .addCase(teacherProject.pending, (state) => {})
            .addCase(teacherProject.fulfilled, (state, action: any) => {
                state.teacherAllProject = action.payload
            })
            .addCase(teacherProject.rejected, (state) => {})
            .addCase(teacherStudentDetails.pending, (state) => {})
            .addCase(teacherStudentDetails.fulfilled, (state, action: any) => {
                state.teacherStudentDetail = action.payload
            })
            .addCase(teacherStudentDetails.rejected, (state) => {})
    },
})
export const { teacherReviewProject } = teacherSlice.actions
export default teacherSlice.reducer
