import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../lib/axios'

export const teacherCourses = createAsyncThunk(
    '/teacherCourses',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/courses', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)
export const teacherStudents = createAsyncThunk(
    '/teacherStudents',
    async (data: any, thunkAPI) => {
        try {
            const res = await api.post('/teacher/students', data)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const studentCourseClasses = createAsyncThunk(
    '/teacherCouseClasses',
    async (dataa: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/student/student-course-class/details',
                dataa
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const studentCourseQuizzes = createAsyncThunk(
    '/teacher_Course_Quizzes',
    async (data1: any, thunkAPI) => {
        try {
            const res = await api.post('/student/student-course/quizzes', data1)
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const studentCourseProject = createAsyncThunk(
    '/teacher_Course_Project',
    async (payload: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/student/student-course/projects',
                payload
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const studentCourseProjectRating = createAsyncThunk(
    '/student_Couse_ProjectRating',
    async (data3: any, thunkAPI) => {
        try {
            const res = await api.post(
                '/report-card/student-reportcard-rating',
                data3
            )
            return res.data
        } catch (error: any) {
            console.log('Error is here =>::', error)
        }
    }
)

export const reportCardService = {
    teacherCourses,
    teacherStudents,
    studentCourseClasses,
    studentCourseQuizzes,
    studentCourseProject,
    studentCourseProjectRating,
}
