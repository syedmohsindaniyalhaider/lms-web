import React, { useEffect, useState } from 'react'
import arrowLeft from '/assets/icons/arrow-left.svg'
import Image from 'next/image'
import OtpInput from 'react18-input-otp'
import { useRouter } from 'next/router'
import { Slide } from 'react-awesome-reveal'
import api from '../lib/axios'
import { useAppDispatch, useAppSelector } from '../store'
import { otpVerification } from '../store/actions/auth/authOtpVerficationService'
import authSignIn from '../store/actions/auth/authSignInService'

type Props = {
    handleOtpScreens: string
    setUpdatePasswordScreen: (val: boolean) => void
}

const Otp = (props: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { authOtpVerification } = useAppSelector((state) => state.auth)
    const router = useRouter()
    const [otp, setOtp] = useState<string>('')
    const [otpError, setOtpError] = useState<boolean>(false)
    const handleOtpChange = (val: React.SetStateAction<string>) => {
        setOtp(val)
    }

    const otpSubmitHandler = async () => {
        if (props.handleOtpScreens === 'reset') {
            props.setUpdatePasswordScreen(true)
            if (otp !== '1234') {
                setOtpError(true)
            } else {
                setOtpError(false)
            }
        } else if (props.handleOtpScreens === 'login') {
            dispatch(
                otpVerification({
                    phoneNumber: props.phoneNumber,
                    otp: otp,
                })
            )
        }
    }

    useEffect(() => {
        if (authOtpVerification !== 'approved') {
            setOtpError(true)
        } else {
            setOtpError(false)
            dispatch(
                authSignIn({
                    email: '',
                    password: '',
                    phoneNumber: props?.phoneNumber,
                })
            )
            setTimeout(() => {
                router.push(`${user?.role}`)
            }, 1000)
        }
    }, [authOtpVerification])
    return (
        <>
            <Slide direction='up'>
                <h1 className='text-[50px] text-[#131414] font-bold'>
                    {props.handleOtpScreens === 'login'
                        ? 'Enter OTP to login'
                        : 'Reset your password'}
                </h1>
                <p className='max-w-[480px] text-[22px] text-[#131414] font-[320] pb-2 leading-tight'>
                    {props.handleOtpScreens === 'login'
                        ? 'Enter the 4-digit OTP send to your phone number.'
                        : 'We send you a 4-digit OTP on your registered email address. Enter here to reset your password'}
                </p>
            </Slide>
            <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                placeholder='____'
                className={`font-medium my-7 w-[6.6rem] rounded text-center flex justify-center align-bottom mr-2 border-2 ${
                    otpError ? 'border-red-500' : 'border-[#D9D9D9]'
                }`}
                inputStyle='mx-1 pt-4 pb-2  h-24 text-[30px] border-none focus:ring-0 bg-transparent placeholder:border-[#D9D9D9]'
                isInputNum={true}
            />
            {otpError && (
                <p className='pb-4 text-red-500 cursor-pointer text-[20px]'>
                    Entered OTP is not correct.
                </p>
            )}
            <p className='font-medium text-[22px] pb-4'>
                Didn’t get the code?{' '}
                <span className='text-primary underline'>Resend</span>
            </p>
            <button
                disabled={otp?.length < 4 ? true : false}
                onClick={otpSubmitHandler}
                className={`rounded-lg border py-3 disabled font-semibold text-[22px] w-full text-white flex items-center justify-center ${
                    otp?.length < 4
                        ? 'bg-[#BFBFBF] cursor-not-allowed'
                        : 'bg-[#2147CD]  group overflow-hidden relative'
                }`}
            >
                <span className='relative font-author  md:text-[15px] lg:text-[22px]  z-40'>
                    {props.handleOtpScreens === 'login' ? 'Login' : 'Next'}
                </span>
                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
            </button>
        </>
    )
}

export default Otp
