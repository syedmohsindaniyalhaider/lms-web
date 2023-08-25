import React, { useEffect, useState } from 'react'
import book from '/assets/icons/book.svg'
import arrowLeft from '/assets/icons/arrow-left.svg'
import calculator from '/assets/icons/calculator.svg'
import chat from '/assets/icons/message-text.svg'
import note from '/assets/icons/note-2.svg'
import eye from '/assets/icons/eye.svg'
import eyeSlash from '/assets/icons/eye-slash.svg'
import Image from 'next/image'
import Phone from '../../components/Phone'
import Otp from '../../components/Otp'
import { useRouter } from 'next/router'
import ResetPassword from '../../components/ResetPassword'
import { Fade } from 'react-awesome-reveal'
import { RootState, useAppDispatch, useAppSelector } from '../../store'
import CircularProgress from '@mui/material/CircularProgress'
import authSignIn from '../../store/actions/auth/authSignInService'
import { userDetails } from '../../store/actions/users/userService'
import { emptyUser } from '../../store/actions/users/userSlice'
import LoginCards from '../../components/ui/Cards/Login'

const isNotEmpty = (value: string) => value.trim() !== ''
const isEmailValid = (value: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)

const Login = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { isSuccess, isLoading, isError, message } = useAppSelector(
        (state: RootState) => state.auth
    )
    const {
        isSuccess: loginSuccess,
        isLoading: isLoginLoading,
        user,
    } = useAppSelector((state: RootState) => state.user)
    const [rejectError, setRejectError] = useState<string>('')
    const [emailInput, setEmailInput] = useState<string>('')
    const [hideText, setHideText] = useState<boolean>(true)
    const [emailOtpInput, setEmailOtpInput] = useState<string>('')
    const [updatePasswordScreen, setUpdatePasswordScreen] =
        useState<boolean>(false)
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [emailActive, setEmailActive] = useState<boolean>(true)
    const [phoneActive, setPhoneActive] = useState<boolean>(false)
    const [otpActive, setOtpActive] = useState<boolean>(false)
    const [displayPass, setDisplayPass] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [emailOtpError, setEmailOtpError] = useState<boolean>(false)
    const [handleOtpScreens, setHandleOtpScreens] = useState<string>('reset')
    const [emailOtp, setEmailOtp] = useState<boolean>(false)
    const [forgotPasswordScreen, setForgotPasswordScreen] =
        useState<boolean>(false)

    const toggleDisplayPass = () => {
        setDisplayPass((prev: boolean) => !prev)
    }

    const showEmailSection = () => {
        setEmailActive(true)
        setPhoneActive(false)
        setHideText(true)
    }

    const showPhoneSection = () => {
        setPhoneActive(true)
        setEmailActive(false)
        setHideText(true)
        setEmailOtpError(false)
        setRejectError('')
        setError(false)
        setEmailInput('')
        setPasswordInput('')
        setEmailOtp(false)
    }

    const emailOtpHandler = () => {
        const isFormValid =
            isNotEmpty(emailOtpInput) && isEmailValid(emailOtpInput)
        if (!isFormValid) {
            setEmailOtpError(true)
            return
        }
        setEmailOtpError(false)
        setOtpActive(true)
        setEmailOtp(false)
        setHideText(false)
    }

    const signInHandler = async () => {
        await dispatch(
            authSignIn({
                email: emailInput,
                phoneNumber: '',
                password: passwordInput,
            })
        )
        await dispatch(userDetails())
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        const isFormValid =
            isNotEmpty(emailInput) &&
            isEmailValid(emailInput) &&
            isNotEmpty(passwordInput)
        // isPasswordValid(passwordInput);
        if (!isFormValid) {
            setError(true)
        } else {
            setError(false)
            signInHandler()
            setEmailInput('')
            setPasswordInput('')
        }
    }

    useEffect(() => {
        dispatch(emptyUser())
    }, [])

    useEffect(() => {
        if (isError) {
            setRejectError(message)
        }
    }, [isError, message])

    useEffect(() => {
        if (loginSuccess && !isLoading && !!user?.role) {
            router.push(`/${user?.role}`)
        }
    }, [loginSuccess, user?.role, isLoading, dispatch])
    return (
        // hello jira
        <div className='p-12 xl:p-0 xl:pl-32 xl:pr-10'>
            <div className='fixed -bottom-96 -z-10 rounded-full -right-44 h-[950px] w-[950px] bg-[#FBF2DC]'></div>
            {/* top navbar */}
            <div className='container flex items-baseline justify-between mt-2'>
                <div className='text-[22px] font-[494]'>About us</div>
                <div className='font-bold text-[#F0A901] text-[42px] ml-4'>
                    EduKids
                </div>
                <div className='text-[22px] text-[#131414] font-[500]'>
                    Need Help?
                    <span className='text-[#F0A901] cursor-pointer'>
                        {' '}
                        Contact us
                    </span>
                </div>
            </div>
            <div className=' m-auto flex gap-4 xl:gap-0 md:flex-col lg:flex-row mt-12'>
                {/* left portion */}
                <div className='mt-8'>
                    {hideText && (
                        <>
                            <div>
                                {forgotPasswordScreen ? (
                                    <Fade direction={otpActive ? 'up' : 'down'}>
                                        <Image
                                            src={arrowLeft}
                                            alt='icons'
                                            className='hover:cursor-pointer'
                                            onClick={() => {
                                                setOtpActive(false)
                                                setEmailActive(true)
                                                setHideText(true)
                                                setForgotPasswordScreen(false)
                                                setPhoneActive(false)
                                                setEmailOtpInput('')
                                            }}
                                        />
                                    </Fade>
                                ) : (
                                    ''
                                )}
                                <h1 className='text-[50px] text-[#131414] font-bold'>
                                    {forgotPasswordScreen
                                        ? 'Forgot your password'
                                        : 'Login to your account'}
                                </h1>
                                {!forgotPasswordScreen ? (
                                    <p className='max-w-[480px] text-[#131414] text-[22px] font-[320] pb-2 leading-tight'>
                                        To start/continue your learning, please{' '}
                                        <span className='text-primary font-semibold'>
                                            login
                                        </span>{' '}
                                        to your account using your email address
                                        or phone number.
                                    </p>
                                ) : (
                                    <p className='max-w-[480px] text-[#131414] text-[22px] font-[320] pb-2 leading-tight'>
                                        Enter your email address or phone number
                                        associated with your account.
                                    </p>
                                )}
                            </div>
                            <div className='pt-6 pb-8 flex gap-4'>
                                <button
                                    onClick={() => {
                                        //
                                        showEmailSection()
                                        forgotPasswordScreen &&
                                            setEmailOtp(true)
                                    }}
                                    className={`px-2 border-2 font-author text-[24px] border-primary relative rounded-lg group font-semibold ${
                                        emailActive || emailOtp
                                            ? 'text-white  bg-primary bg-opacity-90'
                                            : ' text-black'
                                    }`}
                                >
                                    <p className='z-10'>Email Address</p>
                                    <span
                                        className={`absolute bottom-0 -z-10 left-1/2 w-0 h-full bg-primary group-hover:w-1/2 group-hover:transition-all ${
                                            emailActive ? '' : ' bg-opacity-20'
                                        }`}
                                    ></span>
                                    <span
                                        className={`${
                                            emailActive
                                                ? 'absolute bottom-0 -z-10 right-1/2 w-0 h-full bg-primary  group-hover:w-1/2 group-hover:transition-all'
                                                : 'absolute bottom-0 -z-10 right-1/2 w-0 h-full bg-primary bg-opacity-20 group-hover:w-1/2 group-hover:transition-all'
                                        }`}
                                    ></span>
                                </button>{' '}
                                <button
                                    onClick={() => {
                                        showPhoneSection()
                                    }}
                                    className={`${
                                        phoneActive
                                            ? 'border-2 border-primary relative rounded-lg group text-white p-2 font-author font-semibold text-[24px]  bg-primary bg-opacity-90'
                                            : 'border-2 rounded-lg relative group font-semibold text-[24px] text-black p-2  border-primary'
                                    }`}
                                >
                                    <p className='z-10'>Phone Number</p>
                                    <span
                                        className={`${
                                            phoneActive
                                                ? 'absolute bottom-0 -z-10 left-1/2 w-0 h-full bg-primary  group-hover:w-1/2 group-hover:transition-all'
                                                : 'absolute bottom-0 -z-10 left-1/2 w-0 h-full bg-primary bg-opacity-20 group-hover:w-1/2 group-hover:transition-all'
                                        }`}
                                    ></span>
                                    <span
                                        className={`${
                                            phoneActive
                                                ? 'absolute bottom-0 -z-10 right-1/2 w-0 h-full bg-primary  group-hover:w-1/2 group-hover:transition-all'
                                                : 'absolute bottom-0 -z-10 right-1/2 w-0 h-full bg-primary bg-opacity-20 group-hover:w-1/2 group-hover:transition-all'
                                        }`}
                                    ></span>
                                </button>
                            </div>
                        </>
                    )}
                    {emailActive && !forgotPasswordScreen && (
                        <form onSubmit={submitHandler}>
                            <div className='pb-4 flex flex-col'>
                                <Fade direction='right'>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setEmailInput(e.currentTarget.value)
                                        }
                                        className={`w-full border-2 mb-4 text-[22px] text-[#8C8C8C] border-[#D9D9D9] rounded-lg p-4 ${
                                            error
                                                ? 'border-red-500 focus:outline-none '
                                                : 'hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60'
                                        } `}
                                        placeholder='Enter your email address'
                                    />
                                </Fade>
                                <Fade direction='right'>
                                    <div className='relative w-full  group mb-4'>
                                        <input
                                            onChange={(e) =>
                                                setPasswordInput(
                                                    e.currentTarget.value
                                                )
                                            }
                                            className={`border-2 w-full border-[#D9D9D9]
                ${
                    error
                        ? 'border-red-500 focus:outline-none '
                        : 'hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60'
                } text-[22px] text-[#8C8C8C] rounded-lg p-4`}
                                            placeholder='Enter your password'
                                            type={
                                                displayPass
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                        <div className='absolute right-[14px] cursor-pointer top-[1.4rem]'>
                                            <Image
                                                onClick={toggleDisplayPass}
                                                src={
                                                    !displayPass
                                                        ? eyeSlash
                                                        : eye
                                                }
                                                alt='password'
                                            />
                                        </div>
                                    </div>
                                </Fade>
                                <p
                                    className='pb-4 text-red-500  max-w-fit cursor-pointer text-[22px]'
                                    onClick={() => {
                                        setEmailOtp(true)
                                        setEmailActive(false)
                                        setForgotPasswordScreen(true)
                                    }}
                                >
                                    Forgot Password ?
                                </p>
                                <button
                                    disabled={
                                        emailInput.length > 1 &&
                                        passwordInput.length > 1
                                            ? false
                                            : true
                                    }
                                    type='submit'
                                    className={`bg-gray rounded-lg border py-3 disabled font-semibold text-[24px] relative  ${
                                        emailInput.length > 1 &&
                                        passwordInput.length > 1
                                            ? 'bg-blue-600 cursor-pointer relative font-author  md:text-[15px] lg:text-[22px] z-40 group overflow-hidden '
                                            : 'bg-[#BFBFBF] cursor-not-allowed'
                                    }    text-white flex items-center justify-center`}
                                >
                                    <span className='relative flex gap-2 items-center justify-center font-author  md:text-[15px] lg:text-[22px] z-40'>
                                        Login
                                        {(isLoginLoading || isLoading) && (
                                            <CircularProgress size={20} />
                                        )}
                                    </span>
                                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                                </button>
                                {error && (
                                    <p className='text-red-500 py-2 text-[20px]'>
                                        Email or Password is not valid
                                    </p>
                                )}
                                <p className='text-red-500 py-2 text-[20px]'>
                                    {rejectError}
                                </p>
                            </div>
                        </form>
                    )}
                    {emailOtp && forgotPasswordScreen && (
                        <>
                            <Fade direction='right'>
                                <input
                                    onChange={(e) =>
                                        setEmailOtpInput(e.currentTarget.value)
                                    }
                                    className={`border-2 w-full ${
                                        emailOtpError
                                            ? 'border-red-500 focus:outline-none '
                                            : 'hover:border-primary focus:ring-primary focus:border-primary hover:border-opacity-60'
                                    }  mb-4 text-[22px]  rounded-lg p-4`}
                                    type='text'
                                    placeholder='Enter your email address'
                                />
                            </Fade>
                            <button
                                disabled={
                                    emailOtpInput.length === 0 ? true : false
                                }
                                onClick={emailOtpHandler}
                                className={`bg-gray rounded-lg border py-3 disabled font-semibold text-[22px] w-full text-white flex items-center justify-center ${
                                    emailOtpInput.length >= 1
                                        ? 'bg-blue-600 cursor-pointer relative font-author  md:text-[15px] lg:text-[22px] group overflow-hidden '
                                        : 'bg-[#BFBFBF] cursor-not-allowed'
                                }    text-white flex items-center justify-center`}
                            >
                                <span className='relative font-author  md:text-[15px] lg:text-[22px]  z-40'>
                                    Next
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                            </button>
                            {emailOtpError && (
                                <p className='text-red-500 py-2 text-[22px]'>
                                    Email is not valid
                                </p>
                            )}
                        </>
                    )}
                    {phoneActive && <Phone setHideText={setHideText} />}
                    {/* otp-verification-screen */}
                    {otpActive && !updatePasswordScreen && (
                        <>
                            <Fade direction={otpActive ? 'up' : 'down'}>
                                <Image
                                    src={arrowLeft}
                                    alt='icons'
                                    className='hover:cursor-pointer'
                                    onClick={() => {
                                        setOtpActive(false)
                                        setEmailActive(true)
                                        setHideText(true)
                                        setEmailOtp(true)
                                        setEmailOtpInput('')
                                    }}
                                />
                            </Fade>
                            {/* if we need to show on which email OTP is send */}
                            {/* email send to: {emailOtpInput} */}
                            <Otp
                                handleOtpScreens={handleOtpScreens}
                                setUpdatePasswordScreen={
                                    setUpdatePasswordScreen
                                }
                            />
                        </>
                    )}
                    {updatePasswordScreen && (
                        <ResetPassword
                            setUpdatePasswordScreen={setUpdatePasswordScreen}
                        />
                    )}
                </div>
                {/* right portion */}

                <div className='hidden lg:flex  flex-col m-auto'>
                    <Fade direction='right' delay={100}>
                        <div className='ml-12'>
                            <LoginCards
                                icon={book}
                                heading='Find best online courses'
                                detail='Browse 50+ subjects that you can learn on 
            our platform under our professional tutors.'
                            />
                        </div>
                    </Fade>
                    <Fade direction='right' delay={200}>
                        <div>
                            <LoginCards
                                icon={note}
                                heading='A well designed curriculum'
                                detail='We have an upto date curriculum for you to give you best learning experience.'
                            />{' '}
                        </div>
                    </Fade>
                    <Fade direction='right' delay={300}>
                        <div className='ml-12'>
                            <LoginCards
                                icon={calculator}
                                heading='Tests and reports'
                                detail='You will be having quizzes, assignments and
              projects with their reports in each subject.'
                            />
                        </div>
                    </Fade>
                    <Fade direction='right' delay={400}>
                        <div>
                            <LoginCards
                                icon={chat}
                                heading='Ask questions after the class'
                                detail='You can chat with your assigned teacher
              even after the class to get your doubts clear.'
                            />
                        </div>
                    </Fade>
                </div>
            </div>

            {/* blob bottom right */}
        </div>
    )
}

export default Login
