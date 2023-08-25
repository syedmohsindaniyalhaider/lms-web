import React, { useState } from 'react'
import StudentPersonalInfo from './PersonalInfo'
import Image from 'next/image'
// icons
import settingIcon from '/assets/icons/setting-icon.svg'
import ChangePassword from './ChangePassword'
import Communication from './PersonalInfo/Communication'
import Preferences from './PersonalInfo/Preferences'
import YourOrders from './PersonalInfo/YourOrders'
import Courses from './PersonalInfo/Courses'
import { RootState, useAppSelector } from '../../../store'
import studentProfileBackgroundIcon from '/assets/icons/studentProfileBackground.svg'

const Settings = (props: any) => {
    const [personal, setPersonal] = useState<boolean>(true)
    const [password, setPassword] = useState<boolean>(false)
    const [communication, setCommunication] = useState<boolean>(false)
    const [preferences, setPreferences] = useState<boolean>(false)
    const [orders, setOrders] = useState<boolean>(false)
    const [courses, setCourses] = useState<boolean>(false)
    const { profile } = useAppSelector((state: RootState) => state.student)

    const tabHandler = (value: string) => {
        setPersonal(value === 'personal')
        setPassword(value === 'password')
        setCommunication(value === 'communication')
        setPreferences(value === 'preferences')
        setOrders(value === 'orders')
        setCourses(value === 'courses')
    }

    const [data, setData] = useState({
        fullName: 'Sara Backer',
        parentName: 'Lisa Backer',
        contact: '+44 7453272477',
        additionalContact: '+44 7453272477',
        email: 'Sarabacker@gmail.com',
        additionalEmail: 'Sarabacker@gmail.com',
        Dob: '',
        gender: 'Other',
        school: '',
        currentAddress: 'Home no, building, street name',
        timeZone: '',
    })

    return (
        <div className='relative'>
            <div className='absolute -top-[293px] right-[300px] hidden xl:block'>
                <Image
                    src={studentProfileBackgroundIcon}
                    alt='background-image'
                    width='600'
                />
            </div>
            <div className='h-[75px] rounded-t-lg bg-[#F0A901] flex gap-2 items-center px-4 font-semibold font-author  '>
                <Image src={settingIcon} alt='' />
                <h1 className='text-white text-[2 px]'>Profile Settings</h1>
            </div>
            <div className='grid grid-cols-3 gap-4  bg-[#FFFFFF]'>
                <div
                    className={`col-span-1 font-normal pt-4 pl-4 mb-6 rounded-md`}
                >
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${personal ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('personal')}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${password ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('password')}
                    >
                        Change Password
                    </button>
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${communication ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('communication')}
                    >
                        Communication Settings
                    </button>
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${preferences ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('preferences')}
                    >
                        Preferences
                    </button>
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${orders ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('orders')}
                    >
                        Your Orders
                    </button>
                    <button
                        className={`p-4  hover:bg-[#FDF2D9] w-full text-[#454545] font-[494]
              text-left ${courses ? ' bg-[#FDF2D9]' : 'bg-[#FEFCF5]'} `}
                        onClick={() => tabHandler('courses')}
                    >
                        Your Courses
                    </button>
                </div>
                <div className='col-span-2 '>
                    <div className={` ${personal ? '' : 'hidden'} `}>
                        <StudentPersonalInfo data={data} setData={setData} />
                    </div>
                    <div className={` ${password ? '' : 'hidden'} `}>
                        <ChangePassword userId={profile?.userId} />
                    </div>
                    <div className={` ${communication ? '' : 'hidden'} `}>
                        <Communication studentId={profile?.studentId} />
                    </div>
                    <div className={preferences ? '' : 'hidden'}>
                        <Preferences studentId={profile?.studentId} />
                    </div>
                    <div className={` ${orders ? '' : 'hidden'} `}>
                        <YourOrders />
                    </div>
                    <div className={` ${courses ? '' : 'hidden'} `}>
                        <Courses />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
