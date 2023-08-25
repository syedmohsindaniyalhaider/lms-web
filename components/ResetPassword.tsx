import Image from 'next/image'
import React, { useState } from 'react'
import eye from '/assets/icons/eye.svg'
import eyeSlash from '/assets/icons/eye-slash.svg'
import { useRouter } from 'next/router'
import arrowLeft from '/assets/icons/arrow-left.svg'
import { Fade } from 'react-awesome-reveal'

type Props = {
    setUpdatePasswordScreen: (val: boolean) => void
}

const ResetPassword = (props: Props) => {
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [displayPass, setDisplayPass] = useState<boolean>(false)
    const [passwordInput2, setPasswordInput2] = useState<string>('')
    const [displayPass2, setDisplayPass2] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [error2, setError2] = useState<boolean>(false)
    const router = useRouter()

    const toggleDisplayPass = () => {
        setDisplayPass((prev) => !prev)
    }
    const toggleDisplayPass2 = () => {
        setDisplayPass2((prev) => !prev)
    }
    const isNotEmpty = (value: string) => value.trim() !== ''

    const isPasswordValid = (value: string) => {
        const re =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*[\]";:_<>. =+/\\]).{8,12}$/.test(
                value
            )
        return re
    }

    const updateSubmitHandler = () => {
        if (!isNotEmpty(passwordInput && passwordInput2)) {
            setError(true)
            return
        } else if (!isPasswordValid(passwordInput && passwordInput2)) {
            setError(true)
            setError2(false)
            return
        } else if (passwordInput !== passwordInput2) {
            setError2(true)
            setError(false)
            return
        } else {
            router.push('/login')
        }
    }

    return (
        <div className=''>
            <Fade direction='up'>
                <Image
                    src={arrowLeft}
                    alt='icons'
                    className='hover:cursor-pointer'
                    onClick={() => {
                        props.setUpdatePasswordScreen(false)
                    }}
                />
            </Fade>
            <div className='pb-8'>
                <h1 className='text-[46px] font-bold'>Reset your password</h1>
                <p className='max-w-[480px] text-[20px] font-[320] pb-2 leading-tight'>
                    Set a new password.
                </p>
            </div>
            <Fade direction='right'>
                <div className='relative w-[28rem] group mb-4'>
                    <input
                        onChange={(e) =>
                            setPasswordInput(e.currentTarget.value)
                        }
                        className={`border-2  w-full border-[#D9D9D9]
                ${
                    error
                        ? 'border-red-500  focus:outline-none '
                        : 'hover:border-primary focus:ring-primary focus:border-primary hover:border-opacity-60'
                } text-[22px] text-[#8C8C8C] rounded-lg p-4`}
                        placeholder='Type your new password'
                        type={displayPass ? 'text' : 'password'}
                    />

                    <div className='absolute right-[1.5rem] cursor-pointer top-[1.4rem]'>
                        <Image
                            onClick={toggleDisplayPass}
                            src={!displayPass ? eyeSlash : eye}
                            alt='password'
                        />
                    </div>
                </div>
                <div className='relative w-[28rem]  group mb-4'>
                    <input
                        onChange={(e) =>
                            setPasswordInput2(e.currentTarget.value)
                        }
                        className={`border-2 w-full border-[#D9D9D9]
                ${
                    error
                        ? 'border-red-500 focus:outline-none '
                        : 'hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60'
                } text-[22px] text-[#8C8C8C] rounded-lg p-4`}
                        placeholder='Type your password again'
                        type={displayPass2 ? 'text' : 'password'}
                    />

                    <div className='absolute right-[1.5rem] cursor-pointer top-[1.4rem]'>
                        <Image
                            onClick={toggleDisplayPass2}
                            src={!displayPass2 ? eyeSlash : eye}
                            alt='password'
                        />
                    </div>
                </div>
            </Fade>
            <button
                disabled={!isNotEmpty(passwordInput && passwordInput2)}
                onClick={updateSubmitHandler}
                className={`bg-gray rounded-lg border py-3 disabled font-semibold text-[22px] ${
                    isNotEmpty(passwordInput && passwordInput2)
                        ? 'bg-blue-600 cursor-pointer'
                        : 'bg-[#BFBFBF] cursor-not-allowed'
                }   w-[28rem] text-white flex items-center justify-center`}
            >
                Update Password
            </button>
            {error && (
                <p className='text-red-500 py-2 w-[28rem] text-[20px] '>
                    Password is not strong: it must contains be 8-12 characters,
                    Captial letters, special characters or numbers.
                </p>
            )}
            {error2 && (
                <p className='text-red-500 py-2 text-[20px]'>
                    Password does not match
                </p>
            )}
        </div>
    )
}

export default ResetPassword
