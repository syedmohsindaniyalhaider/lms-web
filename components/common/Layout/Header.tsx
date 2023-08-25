import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import EduKids from '/assets/icons/EduKids.svg'
import Image from 'next/image'
import messages from '/assets/icons/messages.svg'
import MessageIcon from '/assets/icons/messages2.svg'
import notification from '/assets/icons/notification.svg'
import NotifyImg from '/assets/icons/notification2.svg'
import avatar from '/assets/icons/avatar.svg'
import chev_down from '/assets/icons/chev_down.svg'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import ChatWidget from '../../student/Messages/ChatWidget'
import Notification from '../../student/Notification/Notification'
import { allNotification } from '../../../store/actions/notifications/notificationsService'
import { receiveNotification } from '../../../store/actions/notifications/notificationsSlice'
import { studentProfile } from '../../../store/actions/student/students/studentProfileService'
import { teacherProfile } from '../../../store/actions/teacher/teachers/teacherProfileService'
import { baseURL } from '../../../helpers/url'

const Header = ({ socket }: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { profile } = useAppSelector((state: RootState) => state.student)
    const { teacherProfileInfo } = useAppSelector(
        (state: RootState) => state.teacher
    )
    const { notifications } = useAppSelector((state) => state.notification)
    const [role, setRole] = useState('')
    const [showNotification, setShowNotification] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        setRole(user?.role)
        dispatch(allNotification(user?.userId))
        // dispatchRolesMap[user?.role];

        if (user?.role === 'student') {
            dispatch(studentProfile(user?.clientId))
        } else if (user?.role === 'teacher') {
            dispatch(teacherProfile(user?.clientId))
        }
    }, [dispatch, user])

    // useEffect(() => {
    //   if (!!socket) {
    //     socket.on("notificationToClient", (data: any) => {
    //       dispatch(receiveNotification(data));
    //     });
    //   }
    // }, [socket]);

    return (
        <>
            <div className='z-50 fixed w-[100%] h-[7vh] mt-0'>
                <div className='flex bg-white justify-between px-10'>
                    <div className='flex items-center'>
                        <Link
                            href={
                                !!role && role === 'student'
                                    ? '/student'
                                    : '/teacher'
                            }
                        >
                            <Image src={EduKids} alt='Image' />
                        </Link>

                        <div className='ml-5'>
                            <form>
                                <input
                                    type='text'
                                    className='bg-gray-50 border hover:border-primary hover:border-opacity-80 focus:ring-2 focus:ring-[#F0A901] focus:border-0 focus:outline-none
                   text-gray-900 rounded-3xl  w-[300px]  py-2 px-4 text-[19px]'
                                    placeholder='Search Here'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        {/* message widget */}
                        <div className='md:pr-[10px] lg:pr-[15px]'>
                            <div
                                className={`border-2 border-yellow-500   p-2 mt-3 rounded-full  h-[42px] w-[45px] relative ${
                                    !showMessage
                                        ? ''
                                        : 'border-2 border-yellow-500 bg-[#F0A901]  p-2 mt-3 rounded-full  h-[42px] w-[45px] relative'
                                }`}
                            >
                                <div
                                    onClick={() => {
                                        setShowMessage((val) => !val)
                                        setShowNotification(false)
                                    }}
                                    className='cursor-pointer'
                                >
                                    {!showMessage ? (
                                        <Image src={messages} alt='' />
                                    ) : (
                                        <Image src={MessageIcon} alt='' />
                                    )}
                                </div>
                                <div className=' absolute -right-2 -top-2 rounded-full bg-[#F94F46] w-[20px] h-[20px]'>
                                    <h1 className='text-white font-[700] text-[12px] pl-[7px]'>
                                        2
                                    </h1>
                                </div>
                                {/* messages widget */}
                                <Slide
                                    direction={showMessage ? 'right' : 'left'}
                                >
                                    <div className='absolute md:left-[-149px] top-[15px]'>
                                        <ChatWidget
                                            mesgemenu={showMessage}
                                            showMessage={showMessage}
                                        />
                                    </div>
                                </Slide>
                            </div>
                        </div>
                        {/* notification widget */}
                        <div className=' relative md:pr-[10px] lg:pr-[15px]'>
                            <div
                                className={`border-2 border-yellow-500   p-2 mt-3 rounded-full  h-[42px] w-[45px] relative ${
                                    showNotification
                                        ? 'border-2 border-yellow-500 bg-[#F0A901]  p-2 mt-3 rounded-full  h-[42px] w-[45px] relative'
                                        : ''
                                }`}
                            >
                                <div
                                    onClick={() => {
                                        setShowMessage(false)
                                        setShowNotification((val) => !val)
                                    }}
                                    className='cursor-pointer'
                                >
                                    {showNotification ? (
                                        <Image
                                            className=''
                                            src={NotifyImg}
                                            alt='Image'
                                        />
                                    ) : (
                                        <Image src={notification} alt='Image' />
                                    )}
                                </div>
                                {!!notifications && notifications.length > 0 ? (
                                    <div className='absolute -right-2 -top-2 rounded-full bg-[#F94F46]  w-[20px] h-[20px]'>
                                        <h1 className='text-white font-[700] text-[12px] pl-[7px]'>
                                            {notifications?.length}
                                        </h1>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <Slide
                                direction={showNotification ? 'right' : 'left'}
                            >
                                <div className='absolute md:left-[-255px] top-[10px]'>
                                    <Notification
                                        showNotification={showNotification}
                                    />
                                </div>
                            </Slide>
                        </div>
                        <div className='pt-2 mr-2'>
                            {/* <Image src={avatar} alt="" /> */}
                            {profile?.profileImage !== null ||
                            teacherProfileInfo?.profileImage ? (
                                <img
                                    src={`${baseURL}/${
                                        user?.role === 'student'
                                            ? profile?.profileImage
                                            : teacherProfileInfo?.profileImage
                                    }`}
                                    alt='Profile Picture'
                                    className='relative w-12 h-12 object-cover rounded-full'
                                />
                            ) : (
                                <Image
                                    src={avatar}
                                    alt='user-avatar'
                                    className='relative w-12'
                                />
                            )}
                        </div>
                        <div className='pt-2'>
                            <h2 className='md:text-[13px] lg:text-[15px] font-bold  lg:font-extrabold'>
                                <Link
                                    href={
                                        role
                                            ? `/${role}/profile`
                                            : `/${role}/profile`
                                    }
                                >
                                    {user?.role === 'student'
                                        ? profile?.fullName || user?.email
                                        : teacherProfileInfo?.firstName ||
                                          user?.email}
                                </Link>
                            </h2>
                        </div>
                        {/* <div className="pt-2 ml-2 mr-2">
              <Image src={chev_down} alt="" />
            </div> */}
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    )
}
export default Header
