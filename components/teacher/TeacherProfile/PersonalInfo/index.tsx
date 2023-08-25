import React, { useState } from 'react'
import Image from 'next/image'
import editStudentProfileIcon from '/assets/icons/editStudentProfile.svg'
import { useAppSelector } from '../../../../store'
import TeacherEditInfo from './EditPersonalInfo'
import { Grid } from '@mui/material'

function TeacherPersonalInfo(props: any) {
    const [userTeacher, setUserTeacher] = useState<boolean>(false)
    const { teacherProfileInfo } = useAppSelector((state) => state.teacher)

    const toggleEdit = () => {
        setUserTeacher(true)
    }

    return (
        <>
            {userTeacher ? (
                <TeacherEditInfo
                    userTeacher={!userTeacher}
                    teacherProfileInfo={teacherProfileInfo}
                    setData={props.setData}
                    setUserTeacher={setUserTeacher}
                />
            ) : (
                <div
                    className={`border-2 m-4 border-gray-300 rounded-md py-6 relative `}
                >
                    <div
                        className={`float-right space-x-1 cursor-pointer absolute top-2 right-3 flex`}
                        onClick={toggleEdit}
                    >
                        <Image
                            src={editStudentProfileIcon}
                            alt='edit-student-profile'
                        />
                        <span className='text-[#355ADC] font-[494] md:text-[15px] lg:text-[20px] p-3'>
                            Edit Profile
                        </span>
                    </div>
                    <div className=''>
                        {/* form */}
                        <form className='p-4'>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        First Name:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.firstName
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='firstName'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.firstName ||
                                            'Not available'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Last Name:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.lastName
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='lastName'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.lastName ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Contact No:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.contactNo
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='contactNo'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.contactNo ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Email:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none w-full ${
                                            teacherProfileInfo?.email
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='email'
                                        name='email'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.email ||
                                            'Not available'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Date of Birth:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.dob
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='dob'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.dob ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Gender:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.gender
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.gender ||
                                            'Not Available'
                                        }
                                        name='gender'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Education:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.education
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='education'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.education ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author '>
                                        Current Residential Address:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none w-full ${teacherProfileInfo?.address}, ${teacherProfileInfo?.country} ? 'text-[#131414]' : 'text-[#8C8C8C]'}`}
                                        type='text'
                                        name='address'
                                        readOnly
                                        value={
                                            `${teacherProfileInfo?.address}, ${teacherProfileInfo?.country}` ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <label className='font-semibold font-author'>
                                        Post Code:
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        className={`p-0 focus:ring-0 border-none ${
                                            teacherProfileInfo?.postCode
                                                ? 'text-[#131414]'
                                                : 'text-[#8C8C8C]'
                                        }`}
                                        type='text'
                                        name='postCode'
                                        readOnly
                                        value={
                                            teacherProfileInfo?.postCode ||
                                            'Not Available'
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default TeacherPersonalInfo
