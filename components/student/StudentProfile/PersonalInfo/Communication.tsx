import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Switch } from '@headlessui/react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { BackdropProps } from '@mui/material'
import { useFormik } from 'formik'
import { communicationSettings } from '../../../../store/actions/student/students/communicationSettingsService'
import { useAppDispatch } from '../../../../store'

function Communication(props: any) {
    const dispatch = useAppDispatch()
    const [remainder, setRemainder] = useState<boolean>(false)
    const [progress, setProgress] = useState<boolean>(false)
    const [offers, setOffers] = useState<boolean>(false)

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }
    const formik: any = useFormik({
        initialValues: {
            email: false,
            sms: false,
            whatsapp: false,
            unsubscribe: false,
        },
        onSubmit: async (values) => {
            const data = {
                studentId: props.studentId,
                settings: { ...values, remainder, progress, offers },
            }
            dispatch(communicationSettings(data))
        },
    })

    return (
        <div
            className={`rounded-lg border-2 mx-4 px-4 py-10 my-5 border-[#D9D9D9]  `}
        >
            <form onSubmit={formik.handleSubmit}>
                <div className='text-[#454545] font-[494] text-[14px] lg:text-[20px] xl:text-[18px] pb-3 font-author'>
                    Control what you hear from us and how. This will help us
                    improve your experience through relevant and timely
                    communication.
                </div>
                <div className='font-[596] md:text-[16px] lg:text-[22px] pb-2'>
                    How do you want us to keep in touch?
                </div>
                <div className='flex gap-3 pb-2'>
                    <div className='flex gap-2 items-center'>
                        <input
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type='checkbox'
                            value={formik.values.email}
                            className='text-[#f0a901] rounded-sm border-[2px] border-[#D9D9D9] bg-[#FAFBFC] focus:ring-0'
                        />
                        <div>Email</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input
                            id='sms'
                            name='sms'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type='checkbox'
                            value={formik.values.sms}
                            className='text-[#f0a901] rounded-sm border-[2px] border-[#D9D9D9] bg-[#FAFBFC] focus:ring-0'
                        />
                        <div>SMS</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input
                            id='whatsapp'
                            name='whatsapp'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type='checkbox'
                            value={formik.values.whatsapp}
                            className='text-[#f0a901] rounded-sm border-[2px] border-[#D9D9D9] bg-[#FAFBFC] focus:ring-0'
                        />
                        <div>WhatsApp</div>
                    </div>
                </div>
                <div className='font-[596] md:text-[16px] lg:text-[22px] pb-2'>
                    Receive notification about:
                </div>
                <div className='flex justify-between pb-2'>
                    <div>
                        <div className='font-author font-[375] md:text-[18px] lg:text-[20px]'>
                            Curriculum Reminders
                        </div>
                        <div className='text-[#8C8C8C] md:text-[13px] lg:text-[16px] md:w-[280px] font-author'>
                            Important reminders on Almir Chughtais completion
                            and expiry of projects, quizzes, and classes.
                        </div>
                    </div>
                    <div className=''>
                        <Switch
                            id='reminder'
                            name='reminder'
                            checked={remainder}
                            onChange={() => setRemainder(!remainder)}
                            className={classNames(
                                remainder ? 'bg-[#F0A901]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-[2px] border-transparent transition-colors duration-500 ease-in-out  '
                            )}
                        >
                            <span className='sr-only'>Use setting</span>
                            <span
                                aria-hidden='true'
                                className={classNames(
                                    remainder
                                        ? 'translate-x-5'
                                        : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-500 ease-in-out'
                                )}
                            />
                        </Switch>
                    </div>
                </div>
                <div className='flex justify-between pb-2'>
                    <div>
                        <div className='font-author font-[375] md:text-[18px] lg:text-[20px]'>
                            Curriculum Progress
                        </div>
                        <div className='text-[#8C8C8C] md:text-[13px] lg:text-[16px] md:w-[280px] font-author'>
                            Critical updates on completion of projects, quizzes,
                            website, and report card generation.
                        </div>
                    </div>
                    <div className=''>
                        <Switch
                            id='progress'
                            name='progress'
                            checked={progress}
                            onChange={() => setProgress(!progress)}
                            className={classNames(
                                progress ? 'bg-[#F0A901]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out  '
                            )}
                        >
                            <span className='sr-only'>Use setting</span>
                            <span
                                aria-hidden='true'
                                className={classNames(
                                    progress
                                        ? 'translate-x-5'
                                        : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-500 ease-in-out'
                                )}
                            />
                        </Switch>
                    </div>
                </div>
                <div className='flex justify-between pb-2 '>
                    <div>
                        <div className='font-author font-[375] md:text-[18px] lg:text-[20px]'>
                            Edukids FutureSchool News and Offers
                        </div>
                        <div className='text-[#8C8C8C] md:text-[13px] lg:text-[16px] md:w-[280px] font-author'>
                            Relevant referral programs you and your friends can
                            benefit from.
                        </div>
                    </div>
                    <div className=''>
                        <Switch
                            id='offers'
                            name='offers'
                            checked={offers}
                            onChange={() => setOffers(!offers)}
                            className={classNames(
                                offers ? 'bg-[#F0A901]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out  '
                            )}
                        >
                            <span className='sr-only'>Use setting</span>
                            <span
                                aria-hidden='true'
                                className={classNames(
                                    offers ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-500 ease-in-out'
                                )}
                            />
                        </Switch>
                    </div>
                </div>
                <div className='font-[596] md:text-[16px] lg:text-[22px] pb-2'>
                    Calling Preferences
                </div>
                <div className='flex gap-2 border-b-2 border-[#D9D9D9] -mx-4 px-4 pb-4 items-center'>
                    <input
                        id='unsubscribe'
                        name='unsubscribe'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='checkbox'
                        value={formik.values.unsubscribe}
                        className='text-[#f0a901] rounded-sm border-2 border-[#D9D9D9] bg-[#FAFBFC] focus:ring-0'
                    />
                    <div>Unsubscribe me from calls</div>
                </div>
                <div className=' flex justify-end space-x-4 pt-6 pb-3'>
                    <div>
                        <button
                            className='bg-white font-semibold px-4 py-2  rounded-[8px] border-[2px] border-[#F0A901] relative 
                group overflow-hidden  w-[100px]'
                        >
                            <span className='relative z-40'>CANCEL</span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#F0A901]  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-[#F0A901] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='bg-[#F0A901] font-semibold px-4 py-[10px] rounded-[8px] text-white 
                relative group overflow-hidden'
                        >
                            <span className='relative z-40'>SAVE CHANGES</span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Communication
