import { createSlice } from '@reduxjs/toolkit'
import studentCourseClassesReport from './courseClassesProjectsReportService'
import studentCourseProjectsRating from './courseProjectsRatingService'
import studentCourseProjectsReport from './courseProjectsReportService'
import studentCourseQuizzesReport from './courseQuizzesReportService'
import studentLifeTimeReport from './lifetimeReportService'

const studentCourseClasses: any = []
const studentQuizzes: any = []
const studentProjects: any = []
const projectRating: any = []
const studentLifeTimeReports: any = []

const initialState = {
    studentCourseClasses: studentCourseClasses,
    studentQuizzes: studentQuizzes,
    studentProjects: studentProjects,
    projectRating: projectRating,
    studentLifeTimeReports: studentLifeTimeReports,
    showValue: 0,
    isLoading: true,
}

export const reportsSlice = createSlice({
    name: 'reportsSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(studentCourseClassesReport.pending, (state) => {})
            .addCase(
                studentCourseClassesReport.fulfilled,
                (state, action: any) => {
                    state.studentCourseClasses = action.payload
                    state.isLoading = false
                }
            )
            .addCase(
                studentCourseClassesReport.rejected,
                (state, action: any) => {}
            )
            .addCase(studentCourseQuizzesReport.pending, (state) => {})
            .addCase(
                studentCourseQuizzesReport.fulfilled,
                (state, action: any) => {
                    state.studentQuizzes = action.payload
                    state.isLoading = false
                }
            )
            .addCase(
                studentCourseQuizzesReport.rejected,
                (state, action: any) => {}
            )
            .addCase(studentCourseProjectsReport.pending, (state) => {})
            .addCase(
                studentCourseProjectsReport.fulfilled,
                (state, action: any) => {
                    state.studentProjects = action.payload
                    state.isLoading = false
                }
            )
            .addCase(
                studentCourseProjectsReport.rejected,
                (state, action: any) => {}
            )
            .addCase(studentCourseProjectsRating.pending, (state) => {})
            .addCase(
                studentCourseProjectsRating.fulfilled,
                (state, action: any) => {
                    state.projectRating = action.payload
                    state.isLoading = false
                }
            )
            .addCase(
                studentCourseProjectsRating.rejected,
                (state, action: any) => {}
            )
            .addCase(studentLifeTimeReport.pending, (state) => {})
            .addCase(studentLifeTimeReport.fulfilled, (state, action: any) => {
                state.studentLifeTimeReports = action.payload
                state.isLoading = false
            })
            .addCase(studentLifeTimeReport.rejected, (state, action: any) => {})
    },
})

export default reportsSlice.reducer
