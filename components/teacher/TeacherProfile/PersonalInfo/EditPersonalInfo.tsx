import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import ReactFlagsSelect from 'react-flags-select'
import moment from 'moment'
import { useAppDispatch } from '../../../../store'
import { updateTeacherProfile } from '../../../../store/actions/teacher/teachers/updateTeacherProfileService'
import { Divider, Grid } from '@mui/material'

function EditPersonalInfo(props: any) {
    const { teacherProfileInfo, setUserTeacher } = props
    const dispatch = useAppDispatch()
    //   const [state, setState] = useState<Boolean>(true);
    const [selected, setSelected] = useState<any>({
        name: teacherProfileInfo?.country,
        code: '',
    })
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { getCode, getName } = require('country-list')
    const [gender, setGender] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ct = require('countries-and-timezones')
    const time = Intl.DateTimeFormat().resolvedOptions().timeZone
    const Timezone = ct.getTimezone(time)
    const timeZone = Timezone.name + ' GMT' + Timezone.utcoffsetStr
    const phoneRegExp = /^\+\d{1,3}\d{3,}$/

    const formik: any = useFormik({
        initialValues: {
            firstName: teacherProfileInfo?.firstName,
            lastName: teacherProfileInfo?.lastName,
            contactNo: teacherProfileInfo?.contactNo,
            email: teacherProfileInfo?.email,
            dob: teacherProfileInfo?.dob,
            education: teacherProfileInfo?.education,
            address: teacherProfileInfo?.address,
            postCode: teacherProfileInfo?.postCode,
            teacherId: teacherProfileInfo?.teacherId,
        },

        onSubmit: (values: any) => {
            props.setData({ ...values, gender, timeZone })
            setUserTeacher(!true)
            const data = {
                ...values,
                gender,
                country: selected?.name,
            }
            dispatch(updateTeacherProfile(data))
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('first name is required')
                .nullable(),
            contactNo: Yup.string()
                .required('phone no is required')
                .matches(phoneRegExp, '+XXXXXXXXX')
                .nullable(),
        }),
    })
    return (
        <>
            {!props.user && (
                <div
                    className={`border-2 m-4 border-gray-300 rounded-md py-6 relative ${
                        props?.teacherProfileInfo?.PersonalInfo && 'hidden'
                    }`}
                >
                    <div className='px-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        First Name
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='firstName'
                                        type='text'
                                        defaultValue={
                                            teacherProfileInfo?.firstName
                                        }
                                        name='firstName'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full border-2  border-[#D9D9D9] py-1   px-2 rounded-md  ${
                                            formik.touched.firstName &&
                                            formik.errors.firstName
                                                ? 'focus:border-red-500 focus:ring-0'
                                                : 'hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0'
                                        }`}
                                    />
                                    {formik.touched.firstName &&
                                        formik.errors.firstName && (
                                            <p className='text-red-500 font-medium font-author'>
                                                {formik.errors.firstName}
                                            </p>
                                        )}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Last Name
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='lastName'
                                        type='text'
                                        defaultValue={
                                            props?.teacherProfileInfo
                                                ?.lastName || ''
                                        }
                                        name='lastName'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className='border-2 w-full border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1  px-2 rounded-md '
                                    />
                                    {formik.touched.lastName &&
                                        formik.errors.lastName && (
                                            <p className='text-red-500 font-medium font-author mb-2'>
                                                {formik.errors.lastName}
                                            </p>
                                        )}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Contact Number:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='contactNo'
                                        type='text'
                                        defaultValue={
                                            props?.teacherProfileInfo?.contactNo
                                        }
                                        name='contactNo'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className=' w-full border-2 border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                    {formik.touched.contactNo &&
                                        formik.errors.contactNo && (
                                            <p className='text-red-500 font-medium font-author'>
                                                {formik.errors.contactNo}
                                            </p>
                                        )}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Email:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='email'
                                        type='text'
                                        defaultValue={teacherProfileInfo?.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='email'
                                        readOnly
                                        className=' w-full border-2  border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                    {formik.touched.email &&
                                        formik.errors.email && (
                                            <p className='text-red-500 font-medium font-author '>
                                                {formik.errors.email}
                                            </p>
                                        )}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Date of Birth
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='dob'
                                        name='dob'
                                        type='date'
                                        defaultValue={
                                            props?.teacherProfileInfo?.dob
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className=' w-full border-2  border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Gender
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className='flex space-x-3 '>
                                        <div>
                                            <input
                                                className='h-4 w-4 border-gray-300 text-[#f0a901] focus:ring-[#f0a901]  '
                                                type='radio'
                                                defaultChecked={
                                                    teacherProfileInfo?.gender ===
                                                    'Male'
                                                }
                                                name='gender'
                                                id='1'
                                                onClick={() => {
                                                    setGender('Male')
                                                }}
                                            />
                                            <span className='pl-2'>Male</span>
                                        </div>
                                        <div>
                                            <input
                                                className='h-4 w-4 border-gray-300 text-[#f0a901] focus:ring-[#f0a901]  '
                                                type='radio'
                                                defaultChecked={
                                                    teacherProfileInfo?.gender ===
                                                    'Female'
                                                }
                                                name='gender'
                                                id='2'
                                                onClick={() => {
                                                    setGender('Female')
                                                }}
                                            />
                                            <span className='pl-1'>Female</span>
                                        </div>
                                        <div>
                                            <input
                                                className='h-4 w-4 border-gray-300 text-[#f0a901] focus:ring-[#f0a901]  '
                                                type='radio'
                                                defaultChecked={
                                                    teacherProfileInfo?.gender ===
                                                    'Other'
                                                }
                                                name='gender'
                                                id='3'
                                                onClick={() => {
                                                    setGender('Other')
                                                }}
                                            />
                                            <span className='pl-1'>Other</span>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold  '>
                                        Education:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='education'
                                        type='text'
                                        defaultValue={
                                            props?.teacherProfileInfo?.education
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='education'
                                        className=' w-full border-2  border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Current Residential Address:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='address'
                                        type='text'
                                        defaultValue={`${teacherProfileInfo?.address}, ${teacherProfileInfo?.country}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='address'
                                        className=' w-full border-2  border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold'></label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <ReactFlagsSelect
                                        selected={selected?.code}
                                        onSelect={(code: any) => {
                                            setSelected({
                                                name: getName(code),
                                                code: code,
                                            })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold '>
                                        Post Code:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        id='postCode'
                                        type='text'
                                        defaultValue={
                                            props?.teacherProfileInfo?.postCode
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='postCode'
                                        className='w-full border-2  border-[#D9D9D9] hover:border-[#F8D88D] focus:border-[#F0A901] focus:ring-0 py-1 px-2 rounded-md '
                                    />
                                </Grid>

                                <hr className='border-gray-300 border-t w-full mt-4 h-[2px]' />
                                <Grid item xs={12}>
                                    <div className='flex justify-end gap-2'>
                                        <button
                                            className=' bg-white font-semibold px-4 py-2 rounded-[8px] border-2 border-[#F0A901] relative 
                group overflow-hidden  w-[150px] lg:w-[140px] xl:w-[140px]'
                                            onClick={() => {
                                                setUserTeacher(false)
                                            }}
                                        >
                                            <span className='relative z-40'>
                                                CANCEL
                                            </span>
                                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#f8efdd]  group-hover:w-1/2 group-hover:transition-out duration-100 '></span>
                                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-[#f8efdd] group-hover:w-1/2 group-hover:transition-out duration-100'></span>
                                        </button>

                                        <button
                                            className='bg-[#F0A901] font-semibold px-4 py-[10px] rounded-[8px] text-white 
                relative group overflow-hidden'
                                            type='submit'
                                        >
                                            <span className='relative z-40'>
                                                SAVE CHANGES
                                            </span>
                                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600  group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditPersonalInfo
