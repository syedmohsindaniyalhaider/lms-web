import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteCookie } from 'cookies-next'
import { userDetails } from './userService'
import { userUpdatePassword } from './userUpdatePasswordService'

type User = {
    userId: number
    email: string
    status: string
    role: string
    clientId: number
}

type UserSlice = {
    user: User
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    message: string
}

const initialState: UserSlice = {
    user: {
        userId: -1,
        email: '',
        status: '',
        role: '',
        clientId: -1,
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

// Login user

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        emptyUser: (state) => {
            state.user = {
                userId: -1,
                email: '',
                status: '',
                role: '',
                clientId: -1,
            }
            deleteCookie('token')
            state.isSuccess = false
        },
    },
    extraReducers(builder) {
        builder
            .addCase(userDetails.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(userDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isSuccess = true
            })
            .addCase(userDetails.rejected, (state, action: any) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.user = action.payload
                state.message = action.payload
            })
            .addCase(userUpdatePassword.pending, (state) => {})
            .addCase(userUpdatePassword.fulfilled, (state, action: any) => {
                state.message = action.payload
            })
            .addCase(userUpdatePassword.rejected, (state) => {})
    },
})
export const { emptyUser } = userSlice.actions
export default userSlice.reducer
