import { createSlice } from '@reduxjs/toolkit'
import { reportCardService } from './reportCardService'

const {
    teacherCourses,
    teacherStudents,
    studentCourseClasses,
    studentCourseQuizzes,
    studentCourseProject,
    studentCourseProjectRating,
} = reportCardService

const teacher_Courses: any = []
const teacher_Students: any = []
const student_CourseClasses: any = []
const student_CourseQuizzes: any = []
const student_CourseProject: any = []
const student_CourseProjectRating: any = []

const initialState = {
    teacher_Courses: teacher_Courses,
    teacher_Students: teacher_Students,
    student_CourseClasses: student_CourseClasses,
    student_CourseQuizzes: student_CourseQuizzes,
    student_CourseProject: student_CourseProject,
    student_CourseProjectRating: student_CourseProjectRating,
    showValue: 0,
    isLoading: true,
}

export const teacherReportCardSlice = createSlice({
    name: 'teacherReportCardSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(teacherCourses.pending, (state) => {})
            .addCase(teacherCourses.fulfilled, (state, action: any) => {
                state.teacher_Courses = action.payload
                state.isLoading = false
            })
            .addCase(teacherCourses.rejected, (state, action: any) => {})
            .addCase(teacherStudents.pending, (state) => {})
            .addCase(teacherStudents.fulfilled, (state, action: any) => {
                state.teacher_Students = action.payload
                state.isLoading = false
            })
            .addCase(teacherStudents.rejected, (state, action: any) => {})
            .addCase(studentCourseClasses.pending, (state) => {})
            .addCase(studentCourseClasses.fulfilled, (state, action: any) => {
                state.student_CourseClasses = action.payload
                state.isLoading = false
            })
            .addCase(studentCourseClasses.rejected, (state, action: any) => {})
            .addCase(studentCourseQuizzes.pending, (state) => {})
            .addCase(studentCourseQuizzes.fulfilled, (state, action: any) => {
                state.student_CourseQuizzes = action.payload
                state.isLoading = false
            })
            .addCase(studentCourseQuizzes.rejected, (state, action: any) => {})
            .addCase(studentCourseProject.pending, (state) => {})
            .addCase(studentCourseProject.fulfilled, (state, action: any) => {
                state.student_CourseProject = action.payload
                state.isLoading = false
            })
            .addCase(studentCourseProject.rejected, (state, action: any) => {})
            .addCase(studentCourseProjectRating.pending, (state) => {})
            .addCase(
                studentCourseProjectRating.fulfilled,
                (state, action: any) => {
                    state.student_CourseProjectRating = action.payload
                    state.isLoading = false
                }
            )
            .addCase(
                studentCourseProjectRating.rejected,
                (state, action: any) => {}
            )
    },
})

export default teacherReportCardSlice.reducer
