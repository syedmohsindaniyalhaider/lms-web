import { createSlice } from '@reduxjs/toolkit'
import { allNotification } from './notificationsService'
type notification_type = {
    notificationId: number
    to: number
    userId: number
    content: string
    contentId: number
    date: string
    time: string
    status: boolean
}

const notifications: notification_type[] = []
const initialState = {
    notifications: notifications,
}
export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        receiveNotification: (state, action) => {
            if (!!state.notifications) {
                state.notifications = [...state.notifications, action.payload]
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(allNotification.pending, (state) => {})
            .addCase(allNotification.fulfilled, (state, action) => {
                state.notifications = action.payload
            })
            .addCase(allNotification.rejected, (state) => {})
    },
})
export const { receiveNotification } = notificationSlice.actions
export default notificationSlice.reducer
