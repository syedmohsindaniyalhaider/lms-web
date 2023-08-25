import React, { useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Icon from '../../../assets/images/camera.png'
import avatarSvg from '/assets/icons/avatar.svg'
import ProfileSetting from './Settings'
import { RootState, useAppSelector, useAppDispatch } from '../../../store'
import { teacherProfile } from '../../../store/actions/teacher/teachers/teacherProfileService'
import moment from 'moment'
import Breadcrumb from '../../ui/Breadcrumb'
import { baseURL } from '../../../helpers/url'
import Link from 'next/link'

const TeacherProfile = () => {
    const dispatch = useAppDispatch()
    const { teacherProfileInfo } = useAppSelector(
        (state: RootState) => state.teacher
    )
    const { user } = useAppSelector((state: RootState) => state.user)

    const [file, setFile] = useState<any>()

    const onChange = (file: ChangeEvent) => {
        const { files } = file.target as HTMLInputElement
        if (files && files.length !== 0) {
            setFile(files[0])
        }
    }

    const profileImageHandler = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('teacherId', `${user?.clientId}`)
        await axios({
            url: `${baseURL}/${user?.role}/profile-image`,
            method: 'post',
            data: formData,
        }).then((r) => r)
        await dispatch(teacherProfile(user?.clientId))
    }

    useEffect(() => {
        if (file) {
            profileImageHandler()
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
                                    <Link href={`/teacher/reports`}>
                                        See Your Report Card
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative z-[1] w-fit flex flex-col items-center py-8 px-20 my-4 border-2 border-[#F0A901] rounded-2xl text-center bg-white'>
                    <div className='relative'>
                        {teacherProfileInfo?.profileImage !== null ? (
                            <img
                                src={`${baseURL}/${teacherProfileInfo?.profileImage}`}
                                alt='image'
                                className='relative w-20 h-20 object-cover rounded-full'
                            />
                        ) : (
                            <Image
                                src={avatarSvg}
                                alt='user-avatar'
                                className='relative w-20 '
                            />
                        )}

                        <form encType='multipart/form-data'>
                            <label
                                htmlFor='profileUpload'
                                className='bg-transparent cursor-pointer'
                            >
                                <Image
                                    height='45'
                                    src={Icon}
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
                        {teacherProfileInfo?.firstName || 'Username'}
                    </h1>
                    <h3 className='text-[14px]'>
                        Joined EduKids on
                        {moment(teacherProfileInfo?.joiningDate).format(
                            'Do MMMM, YYYY'
                        )}
                    </h3>
                </div>

                <ProfileSetting teacherProfile={teacherProfileInfo} />
            </div>
        </>
    )
}

export default TeacherProfile
