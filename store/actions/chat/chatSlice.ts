import { createSlice } from '@reduxjs/toolkit'
import { chatService } from './chatService'
type chat_type = {
    chatId: number
    name: string
    time: string
    date: string
    teacher: string
    teacherId: string
    student: string
    studentId: number
}
const chats: any = []
const initialState = {
    chats: chats,
}
export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(chatService.pending, (state) => {})
            .addCase(chatService.fulfilled, (state, action) => {
                state.chats = action.payload
            })
            .addCase(chatService.rejected, (state) => {})
    },
})
export default chatSlice.reducer
