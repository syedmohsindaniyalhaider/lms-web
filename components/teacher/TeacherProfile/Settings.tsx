import React, { useState } from 'react'
import Image from 'next/image'
// icons
import settingIcon from '/assets/icons/setting-icon.svg'
import studentProfileBackgroundIcon from '/assets/icons/studentProfileBackground.svg'
import ChangePassword from './ChangePassword'
import TeacherPersonalInfo from './PersonalInfo'

const ProfileSetting = ({ teacherProfile }: any) => {
    const [personal, setPersonal] = useState<boolean>(true)
    const [password, setPassword] = useState<boolean>(false)

    const tabHandler = (value: string) => {
        setPersonal(value === 'personal')
        setPassword(value === 'password')
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

            <div className='h-[75px] rounded-t-lg bg-[#F0A901] flex gap-2 items-center px-6 font-semibold font-author  '>
                <Image src={settingIcon} alt='' />
                <h1 className='text-white  text-[24px]'>Profile Settings</h1>
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
                </div>
                <div className='col-span-2 '>
                    <div className={` ${personal ? '' : 'hidden'} `}>
                        <TeacherPersonalInfo data={data} setData={setData} />
                    </div>
                    <div className={` ${password ? '' : 'hidden'} `}>
                        <ChangePassword userId={teacherProfile?.userId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
