import { createSlice } from '@reduxjs/toolkit'
import { createMeeting } from './createMeetingService'
import { zoomSignature } from './signatureService'

const initialState = {
    meetingId: -1,
    meetingPassword: '',
    meetingUrl: '',
    signature: '',
}

export const zoomSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createMeeting.pending, (state) => {})
            .addCase(createMeeting.fulfilled, (state, action: any) => {
                state.meetingId = action.payload.id
                state.meetingPassword = action.payload.password
                state.meetingUrl = action.payload.join_url
            })
            .addCase(createMeeting.rejected, (state, action: any) => {})
            .addCase(zoomSignature.pending, (state) => {})
            .addCase(zoomSignature.fulfilled, (state, action: any) => {
                state.signature = action.payload
            })
            .addCase(zoomSignature.rejected, (state, action: any) => {})
    },
})

export default zoomSlice.reducer
