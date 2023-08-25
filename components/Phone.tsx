import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'
import arrow from '/assets/icons/arrow-down.svg'
import arrowLeft from '/assets/icons/arrow-left.svg'
import arrowUp from '/assets/icons/arrow-yellow.svg'
import Otp from './Otp'
import { Fade } from 'react-awesome-reveal'
import { useAppDispatch, useAppSelector } from '../store'
import { authOtpInitiate } from '../store/actions/auth/authOtpService'
import { phoneButtonStyle, phoneInputStyle } from '../helpers/phone-input-style'

const Phone = ({ setHideText }: any) => {
    const dispatch = useAppDispatch()
    const { phoneSuccess, phoneError, isLoading, message } = useAppSelector(
        ({ auth }) => auth
    )
    const [dropDown, showDropDown] = useState<boolean>(false)
    const [otpActive, setOtpActive] = useState<boolean>(false)
    const [phoneActive, setPhoneActive] = useState<boolean>(true)
    const [phoneNumber, setPhoneNumber] = useState<any>('')
    const [error, setError] = useState<boolean>(false)
    const submitHandler = async () => {
        dispatch(
            authOtpInitiate({
                phoneNumber: phoneNumber,
            })
        )
    }

    useEffect(() => {
        if (phoneSuccess) {
            setOtpActive(true)
            setPhoneActive(false)
            setHideText(false)
            setError(false)
        } else {
            setError(phoneError)
            setOtpActive(false)
            setPhoneActive(true)
        }
    }, [phoneSuccess, phoneError, setHideText])

    console.log(phoneNumber)

    return (
        <>
            <div className='flex flex-col'>
                {otpActive && (
                    <>
                        <Fade direction={otpActive ? 'up' : 'down'}>
                            <Image
                                src={arrowLeft}
                                alt='icons'
                                className='hover:cursor-pointer'
                                onClick={() => {
                                    setOtpActive(false)
                                    setPhoneActive(true)
                                    setHideText(true)
                                }}
                            />
                        </Fade>
                        <Otp
                            phoneNumber={phoneNumber}
                            handleOtpScreens={'login'}
                            setUpdatePasswordScreen={() => false}
                        />
                    </>
                )}
                {phoneActive && (
                    <>
                        <PhoneInput
                            placeholder='Enter phone number'
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            inputClass='phoneInput'
                            inputStyle={phoneInputStyle}
                            buttonStyle={phoneButtonStyle}
                        />
                        <Fade direction='left'>
                            <div className='flex gap-4 mb-8'>
                                <div className='relative  '>
                                    <div
                                        className=' cursor-pointer group '
                                        onClick={() =>
                                            showDropDown(
                                                (prevState) => !prevState
                                            )
                                        }
                                    >
                                        {/* <input
                      placeholder="+92"
                      maxLength={3}
                      disabled
                      value={`+${ddValue}`}
                      className={`text-[22px] ${
                        dropDown
                          ? "border-primary"
                          : "group-hover:border-opacity-60  group-hover:border-primary"
                      }
                  placeholder-black p-3  w-[7rem] rounded-xl border-2`}
                    /> */}
                                        <div
                                            className={`absolute  ${
                                                dropDown
                                                    ? '-rotate-180 top-[28%] right-5 ov'
                                                    : ''
                                            }
                  ${error ? 'border-red-500' : ''}

                   duration-300 transition-hover ease-in-out right-4 top-[33%] max-w-[2rem]`}
                                        >
                                            <Image
                                                src={
                                                    !dropDown ? arrow : arrowUp
                                                }
                                                alt='arrow'
                                            />
                                        </div>
                                    </div>

                                    {dropDown && (
                                        <Fade>
                                            <div className='absolute mt-2 w-full h-auto shadow-2xl  bg-white rounded-md'>
                                                <ul className='flex text-center flex-col gap-2 py-4 z-50  text-[22px] max-h-[300px] overflow-auto'>
                                                    {/* {ddValueArray.map((i) => (
                            <li
                              key={i.value}
                              onClick={() => {
                                setDDValue(i.value);
                                showDropDown(false);
                              }}
                              className="hover:bg-[#BFBFBF70]  active:bg-primary cursor-pointer py-2 w-full"
                            >
                              +{i.value}
                            </li>
                          ))} */}
                                                </ul>
                                            </div>
                                        </Fade>
                                    )}
                                </div>
                                {/* <input
                  placeholder="Enter your phone number"
                  type="number"
                  className="text-[22px] w-full text-[#8C8C8C] hover:border-primary focus:ring-primary focus:border-primary hover:border-opacity-60 p-4  rounded-xl border-2"
                  value={props.phoneNumber}
                  onChange={(e) => {
                    props.setPhoneNumber(e.target.value);
                  }}
                /> */}
                            </div>
                        </Fade>

                        <button
                            disabled={phoneNumber?.length < 10 ? true : false}
                            onClick={submitHandler}
                            className={`text-white rounded-lg py-[10px] font-[600] ${
                                phoneNumber?.length < 10
                                    ? 'cursor-not-allowed bg-[#BFBFBF]'
                                    : 'bg-[#2147CD] group overflow-hidden relative'
                            }`}
                        >
                            <span className='relative font-author md:text-[15px] lg:text-[22px] z-40'>
                                Next
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                        {error && (
                            <p className='text-red-500 py-2 text-[22px]'>
                                {message}
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Phone
