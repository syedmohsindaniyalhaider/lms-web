import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authSignIn } from './authSignInService'
import { deleteCookie, setCookie } from 'cookies-next'
import { User } from './types/user'
import { authOtpInitiate } from './authOtpService'
import { otpVerification } from './authOtpVerficationService'
import { PURGE } from 'redux-persist'
// updated
type AuthState = {
    // isAuthenticated: boolean;
    // role: string;
    isLoading: boolean
    isError: boolean
    phoneError: boolean
    isSuccess: boolean
    phoneSuccess: boolean
    message: string
    authOtpInitiate: {}
    authOtpVerification: {}
    // otpVerified: false;
}

const initialState: AuthState = {
    authOtpInitiate: {},
    authOtpVerification: {},
    // isAuthenticated: false,
    // role: "",
    isLoading: false,
    isError: false,
    phoneError: false,
    isSuccess: false,
    phoneSuccess: false,
    message: '',
    // otpVerified: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.isLoading = false
            state.isError = false
            state.phoneError = false
            state.message = ''
            state.isSuccess = false
            state.phoneSuccess = false
        },
        logout: (state) => {
            // state.isAuthenticated = false;
            state.isLoading = false
            deleteCookie('token')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authSignIn.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(authSignIn.fulfilled, (state, action) => {
                state.isLoading = false
                setCookie('token', action.payload.access_token)
                state.isSuccess = true
                state.isError = false
            })

            .addCase(authSignIn.rejected, (state, action: any) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                // state.isAuthenticated = false;
                state.message = action.payload
            })
            //auth-otp

            .addCase(authOtpInitiate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(authOtpInitiate.fulfilled, (state, action) => {
                state.isLoading = false
                state.phoneError = false
                state.phoneSuccess = true
                state.authOtpInitiate = action?.payload
            })

            .addCase(authOtpInitiate.rejected, (state, action: any) => {
                state.isLoading = false
                state.phoneSuccess = false
                state.phoneError = true
                state.message = action?.payload
            })

            //Otp-verification
            .addCase(otpVerification.pending, (state) => {
                state.isLoading = true
            })
            .addCase(otpVerification.fulfilled, (state, action) => {
                state.isLoading = false
                state.authOtpVerification = action?.payload
            })

            .addCase(otpVerification.rejected, (state, action: any) => {})
            .addCase(PURGE, () => {
                return initialState
            })
    },
})

export const { resetAuth, logout } = authSlice.actions
export default authSlice.reducer
