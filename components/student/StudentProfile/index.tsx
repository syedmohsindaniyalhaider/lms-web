import React, { ChangeEvent, useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import chevLeftIcon from '/assets/icons/chevLeftBlue.svg'
import cameraSvg from '/assets/icons/camera.svg'
import avatarSvg from '/assets/icons/avatar.svg'
import Settings from './Settings'
import Breadcrumb from '../../ui/Breadcrumb'
import CircularProgress from '@mui/material/CircularProgress'
import { RootState, useAppSelector, useAppDispatch } from '../../../store'
import moment from 'moment'
import { studentProfile } from '../../../store/actions/student/students/studentProfileService'
import { baseURL } from '../../../helpers/url'
import Link from 'next/link'

const StudentProfile = () => {
    const dispatch = useAppDispatch()
    const { profile } = useAppSelector((state: RootState) => state.student)
    const { user } = useAppSelector((state: RootState) => state.user)
    const [file, setFile] = useState<any>()

    const onChange = (file: ChangeEvent) => {
        const { files } = file.target as HTMLInputElement
        if (files && files.length !== 0) {
            setFile(files[0])
        }
    }

    const uploadProfileImage = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('studentId', `${user?.clientId}`)
        await axios({
            url: `${baseURL}/${user?.role}/profile-image`,
            method: 'post',
            data: formData,
        }).then((r) => r)
        await dispatch(studentProfile(user?.clientId))
    }

    useEffect(() => {
        if (file) {
            uploadProfileImage()
        }
    }, [file])

    return (
        <>
            <div className=' h-screen bg-[#F3F4F7] w-auto'>
                <div className='py-3 flex justify-between'>
                    <div>
                        <Breadcrumb />
                        <div>
                            <h1 className='font-extrabold text-[22px]'>
                                My Profile
                            </h1>
                        </div>
                    </div>
                    <div className='w-[400px] xl:w-[420px] text-[16px] bg-white h-[60px] rounded-lg shadow-lg flex justify-between items-center px-4'>
                        <div className='flex gap-4'>
                            <div>
                                <h3 className='text-[16px] md:font-semibold xl:font-bold'>
                                    How you are performing?
                                </h3>
                            </div>
                            <div>
                                <h3 className='text-[#F0A901] underline cursor-pointer text-[18x] md:font-semibold xl:font-bold'>
                                    <Link href={`/student/reports`}>
                                        See Your Report Card
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative z-[1] w-fit flex flex-col items-center py-8 px-20 my-4 border-2 border-[#F0A901] rounded-2xl text-center bg-white'>
                    <div className='relative'>
                        {profile?.profileImage !== null ? (
                            <img
                                src={`${baseURL}/${profile?.profileImage}`}
                                alt='Profile Picture'
                                className='relative w-20 h-20 object-cover rounded-full'
                            />
                        ) : (
                            <Image
                                src={avatarSvg}
                                alt='user-avatar'
                                className='relative w-20'
                            />
                        )}

                        <form encType='multipart/form-data'>
                            <label
                                htmlFor='profileUpload'
                                className='bg-transparent cursor-pointer'
                            >
                                <Image
                                    height='45'
                                    src={cameraSvg}
                                    alt='user-avatar'
                                    className='bg-[#FBF2DC] rounded-[20px] p-[10px] absolute -bottom-[10px] -right-[15px]'
                                />
                            </label>
                            <input
                                type='file'
                                id='profileUpload'
                                onChange={onChange}
                                name='profileUpload'
                                className='hidden'
                            />
                        </form>
                    </div>
                    <h1 className='font-bold mt-4'>
                        {profile?.fullName || 'Username'}
                    </h1>
                    <h3 className='text-[14px]'>
                        Joined EduKids on{' '}
                        {moment(profile?.joiningDate).format('Do MMMM, YYYY')}
                    </h3>
                </div>

                <Settings />
            </div>
        </>
    )
}

export default StudentProfile
