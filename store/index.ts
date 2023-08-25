import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import authSlice from './actions/auth/authSlice'
import classesSlice from './actions/student/classes/classesSlice'
import quizSlice from './actions/student/quiz/quizSlice'
import projectsSlice from './actions/student/projects/projectSlice'
import studentSlice from './actions/student/students/studentSlice'
import userSlice from './actions/users/userSlice'
import teacherClassesSlice from './actions/teacher/classes/teacherClassesSlice'
import zoomSlice from './actions/zoom/zoomSlice'
import notificationSlice from './actions/notifications/notificationsSlice'
import chatSlice from './actions/chat/chatSlice'
import teacherSlice from './actions/teacher/teachers/teacherSlice'
import reportsSlice from './actions/student/reports/reportsSlice'
import allCourseSlice from './actions/teacher/courses/courseSlice'
import preferenceSlice from './actions/teacher/preferences/preferenceSlice'
import teacherReportCardSlice from './actions/teacher/report-card/reportCardSlice'
import courseSlice from './actions/student/course/courseSlice'
import teacherProjectsSlice from './actions/teacher/projects/projectSlice'
import assignmentSlice from './actions/student/assignments/assignmentSlice'
import teacherQuizSlice from './actions/teacher/quizzes/teacherQuizzesSlice'
import storage from 'redux-persist/lib/storage/session'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'

// using session storage for now, will update that later

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ["classes"],
}

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    classes: classesSlice,
    quizzes: quizSlice,
    projects: projectsSlice,
    student: studentSlice,
    studentCourse: courseSlice,
    zoom: zoomSlice,
    notification: notificationSlice,
    chat: chatSlice,
    studentReports: reportsSlice,
    courses: allCourseSlice,
    preferenceSlice,
    teacher: teacherSlice,
    teacherQuizzes: teacherQuizSlice,
    teacherClasses: teacherClassesSlice,
    teacherReportCard: teacherReportCardSlice,
    teacherProjects: teacherProjectsSlice,
    assignments: assignmentSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

// export default the store

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
