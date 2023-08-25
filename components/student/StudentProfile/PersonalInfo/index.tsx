import React, { useState } from 'react'
import Image from 'next/image'
import StudentEditInfo from './EditPersonalInfo'
import editStudentProfileIcon from '/assets/icons/editStudentProfile.svg'
import { useAppSelector } from '../../../../store'
import { Grid } from '@mui/material'

function StudentPersonalInfo(props: any) {
    const [user, setUser] = useState<boolean>(false)
    const { profile } = useAppSelector((state) => state.student)

    const toggleEdit = () => {
        setUser(true)
    }

    return (
        <>
            {user ? (
                <StudentEditInfo
                    user={!user}
                    profile={profile}
                    setData={props.setData}
                    setUser={setUser}
                    className=''
                    // profile={props.profile}
                />
            ) : (
                <div
                    className={`border-2 m-4 border-gray-300 rounded-md py-6 relative `}
                    // ${
                    //   props.profile.personal && "hidden"
                    // }
                >
                    <div
                        className={`float-right space-x-1 cursor-pointer absolute top-2 right-3 flex`}
                        onClick={toggleEdit}
                    >
                        <Image
                            src={editStudentProfileIcon}
                            alt='edit-student-profile'
                        />
                        <span className='text-[#355ADC] md:text-[15px] lg:text-[20px] font-[494] mb-[2px]'>
                            Edit Profile
                        </span>
                    </div>

                    {/* form */}
                    <form className='p-4'>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author w-full'>
                                    Full Name:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none ${
                                        profile?.fullName
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='fullName'
                                    readOnly
                                    value={profile?.fullName || 'Not Available'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    Parent’s Name
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none  ${
                                        profile?.parentName
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='parentName'
                                    readOnly
                                    value={
                                        profile?.parentName || 'Not Available'
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
                                        profile?.contactNo
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='contactNo'
                                    readOnly
                                    value={
                                        profile?.contactNo || 'Not Available'
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    Additional Contact Number:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none ${
                                        profile?.additionalContactNo
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='contactNo'
                                    readOnly
                                    value={
                                        profile?.additionalContactNo ||
                                        'Not Available'
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    Primary Email Id:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none w-full ${
                                        profile?.primaryEmail
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='primaryEmail'
                                    readOnly
                                    value={
                                        profile?.primaryEmail || 'Not Available'
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    Additional Email Id:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none w-full ${
                                        profile?.secondaryEmail
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='secondaryEmail'
                                    readOnly
                                    value={
                                        profile?.secondaryEmail ||
                                        'Not Available'
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
                                    className={`p-0 focus:ring-0 border-none w-full ${
                                        profile?.dob
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='dob'
                                    readOnly
                                    value={profile?.dob || 'Not Available'}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    Gender:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none w-full ${
                                        profile?.gender
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    readOnly
                                    value={profile?.gender || 'Not Available'}
                                    name='gender'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label className='font-semibold font-author'>
                                    School/College Name:
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    className={`p-0 focus:ring-0 border-none w-full ${
                                        profile?.schoolName
                                            ? 'text-[#131414]'
                                            : 'text-[#8C8C8C]'
                                    }`}
                                    type='text'
                                    name='education'
                                    readOnly
                                    value={
                                        profile?.schoolName || 'Not Available'
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
                                    className={`p-0 focus:ring-0 border-none w-full ${profile?.address}, ${profile?.country} ? 'text-[#131414]' : 'text-[#8C8C8C]'}`}
                                    type='text'
                                    name='address'
                                    readOnly
                                    value={
                                        `${profile?.address}, ${profile?.country}` ||
                                        'Not Available'
                                    }
                                />
                            </Grid>

                            {/* <Grid item xs={12} md={6}>
                  <label className="font-semibold font-author">
                    Your Timezone:
                  </label>
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    className="focus:ring-0 border-none"
                    type="text"
                    name="postCode"
                    readOnly
                    // value={profile?.postCode || "Not Available"}
                  />
                </Grid> */}
                        </Grid>
                    </form>
                </div>
            )}
        </>
    )
}

export default StudentPersonalInfo
