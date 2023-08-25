import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// icons

import sideIcon from '/assets/icons/Side_menu_icon.svg'
import sideMenuColouredIcon from '/assets/icons/SideMenuColoured.svg'
import dashboardIcon from '/assets/icons/dashboard.svg'
import dashboardColoredIcon from '/assets/icons/dashboard2.svg'
import bookIcon from '/assets/icons/book_menu.svg'
import bookBlackIcon from '/assets/icons/bookBlack.svg'
import quizIcon from '/assets/icons/quizes.svg'
import quizBlackIcon from '/assets/icons/quizesBlack.svg'
import cubeIcon from '/assets/icons/3dcube.svg'
import cubeBlackIcon from '/assets/icons/3dcubeBlack.svg'
import inviteIcon from '/assets/icons/invite.svg'
import inviteBlackIcon from '/assets/icons/inviteBlack.svg'
import giftIcon from '/assets/icons/gift.svg'
import reportCardIcon from '/assets/icons/report_card.svg'
import reportCardBlackIcon from '/assets/icons/reportBlack.svg'
import privacyIcon from '/assets/icons/privacy.svg'
import privacyBlackIcon from '/assets/icons/privacyBlack.svg'
import { RootState, useAppSelector } from '../../../store'

const Sidebar = () => {
    const { user } = useAppSelector((state: RootState) => state.user)
    const [role, setRole] = useState('')
    const [value, setValue] = useState<boolean>(true)
    const [dashboard, setDashboard] = useState<boolean>(false)
    const [classes, setClasses] = useState<boolean>(false)
    const [quiz, setQuiz] = useState<boolean>(false)
    const [project, setProject] = useState<boolean>(false)
    const [invite, setInvite] = useState<boolean>(false)
    const [report, setReport] = useState<boolean>(false)
    const [privacy, setPrivacy] = useState<boolean>(false)

    const toggleMenu = useCallback(() => {
        setValue((value) => !value)
    }, [value])

    const toggleItem = (value: string) => {
        setDashboard(value === 'dashboard')
        setClasses(value === 'class')
        setQuiz(value === 'quiz')
        setProject(value === 'project')
        setInvite(value === 'invite')
        setReport(value === 'report')
        setPrivacy(value === 'privacy')
    }

    useEffect(() => {
        setRole(user?.role)
    }, [user])

    return (
        <div
            className='bg-white h-[100vh] shadow-md  fixed text-[#508479] font-semibold'
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
        >
            {/* <div className="relative"> */}
            {/* <div onClick={toggleMenu} className="cursor-pointer">
        {value ? (
          <Image src={sideIcon} alt="Image" />
        ) : (
          <Image src={sideMenuColouredIcon} alt="Image" />
        )}
      </div> */}
            {/* <div
        className={`z-50 absolute h-[100vh] bg-[#FFFFFF] transition-all duration-200 ease-in-out top-[103%]
          lg:top-[112%] -left-[14px] shadow-md ${
            value
              ? " overflow-hidden w-[90px] ease-in-out duration-300 transition-all"
              : "w-[280px] py-2 ease-in-out duration-300 transition-all"
          }`}
      > */}
            <div
                className={`transition-all duration-200 ease-in-out ${
                    value
                        ? ' overflow-hidden w-[90px] ease-in-out duration-300 transition-all'
                        : 'w-[280px] py-2 ease-in-out duration-300 transition-all'
                }`}
            >
                <Link href={role ? `/${role}` : '/'}>
                    <div
                        className={`cursor-pointer flex relative group items-center justify-left space-x-2 py-4 pl-[30px] 
              ${dashboard && 'bg-[#FBF2DC] text-black duration-300'}`}
                        onClick={() => toggleItem('dashboard')}
                    >
                        <div className='min-w-[55px] z-40 mt-2'>
                            {dashboard ? (
                                <Image src={dashboardIcon} alt='' />
                            ) : (
                                <Image src={dashboardColoredIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` 
                ${value ? 'hidden min-w-[180px]' : 'z-50 min-w-[180px]'}
                ${dashboard ? 'text-black' : ''} `}
                        >
                            <h1>Dashboard</h1>
                        </div>
                        <span
                            className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
                <Link href={role ? `/${role}/classes` : '/'}>
                    <div
                        className={`cursor-pointer flex relative group items-center justify-left space-x-2 py-4 pl-[30px] ${
                            classes && 'bg-[#FBF2DC]'
                        }`}
                        onClick={() => toggleItem('class')}
                    >
                        <div className='min-w-[50px] z-40 mt-2'>
                            {classes ? (
                                <Image src={bookBlackIcon} alt='' />
                            ) : (
                                <Image src={bookIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` ${
                                value
                                    ? 'hidden min-w-[180px]'
                                    : 'z-50 min-w-[180px]'
                            } ${classes ? 'text-black' : ''} `}
                        >
                            <h1>My Classes & Calendar</h1>
                        </div>
                        <span
                            className='absolute z-0 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
                <Link href={role ? `/${role}/quizzes` : '/'}>
                    <div
                        className={`cursor-pointer flex relative group items-center justify-left space-x-2 py-4 pl-[30px] ${
                            quiz && 'bg-[#FBF2DC]'
                        }`}
                        onClick={() => toggleItem('quiz')}
                    >
                        <div className='min-w-[50px] z-40 mt-2'>
                            {quiz ? (
                                <Image src={quizBlackIcon} alt='' />
                            ) : (
                                // <Image src={book} alt="" />
                                <Image src={quizIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` ${
                                value
                                    ? 'hidden min-w-[180px]'
                                    : 'z-50 min-w-[180px]'
                            } 
            ${quiz ? 'text-black' : ''}`}
                        >
                            {!!role && role === 'student'
                                ? 'My Quizzes'
                                : 'Quizzes'}
                        </div>
                        <span
                            className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
                <Link href={role ? `/${role}/projects` : '/'}>
                    <div
                        className={`cursor-pointer flex relative group justify-left items-center space-x-2 py-4 pl-[30px] ${
                            project && 'bg-[#FBF2DC]'
                        }`}
                        onClick={() => toggleItem('project')}
                    >
                        <div className='min-w-[50px] z-40 mt-2'>
                            {project ? (
                                <Image src={cubeBlackIcon} alt='' />
                            ) : (
                                <Image src={cubeIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` ${
                                value
                                    ? 'hidden min-w-[180px]'
                                    : 'z-50 min-w-[180px]'
                            } 
          ${project ? 'text-black' : ''} `}
                        >
                            {!!role && role === 'student'
                                ? 'My Projects'
                                : 'Projects'}
                        </div>
                        <span
                            className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
                {/*  */}
                {!!role && role === 'student' ? (
                    <Link href={role ? `/${role}/invite` : '/'}>
                        <div
                            className={`cursor-pointer flex relative group justify-left items-center space-x-2 py-4 pl-[30px] ${
                                invite && 'bg-[#FBF2DC]'
                            }`}
                            onClick={() => toggleItem('invite')}
                        >
                            <div className='min-w-[50px] z-40 mt-2'>
                                {invite ? (
                                    <Image src={inviteBlackIcon} alt='' />
                                ) : (
                                    <Image src={inviteIcon} alt='' />
                                )}
                            </div>
                            <div
                                className={` ${
                                    value
                                        ? 'hidden min-w-[130px] bg-black'
                                        : 'z-50 min-w-[130px]'
                                } ${invite ? 'text-black' : ''}`}
                            >
                                {!!role && role === 'student'
                                    ? 'Invite & Get $100'
                                    : ''}
                            </div>
                            <div
                                className={` ${
                                    value ? 'hidden' : 'pl-4 z-40'
                                } `}
                            >
                                <Image src={giftIcon} alt='' />
                            </div>
                            <span
                                className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                            ></span>
                        </div>
                    </Link>
                ) : (
                    ''
                )}

                <Link href={role ? `/${role}/reports` : '/'}>
                    <div
                        className={`cursor-pointer flex relative group justify-left items-center space-x-2 py-4 pl-[30px] ${
                            report && 'bg-[#FBF2DC]'
                        }`}
                        onClick={() => toggleItem('report')}
                    >
                        <div className='min-w-[50px] z-40 mt-2'>
                            {report ? (
                                <Image src={reportCardBlackIcon} alt='' />
                            ) : (
                                <Image src={reportCardIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` ${
                                value
                                    ? 'hidden min-w-[180px]'
                                    : 'z-50 min-w-[180px]'
                            } 
          ${report ? 'text-black' : ''}  `}
                        >
                            {!!role && role === 'student'
                                ? 'My Report Card'
                                : 'Report Card'}
                        </div>
                        <span
                            className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
                <Link href={role ? `/${role}/privacy` : '/'}>
                    <div
                        className={`cursor-pointer relative group flex justify-left items-center space-x-2 py-4 pl-[30px] ${
                            privacy && 'bg-[#FBF2DC]'
                        }`}
                        onClick={() => toggleItem('privacy')}
                    >
                        <div className='min-w-[50px] z-40 mt-2'>
                            {privacy ? (
                                <Image src={privacyBlackIcon} alt='' />
                            ) : (
                                <Image src={privacyIcon} alt='' />
                            )}
                        </div>
                        <div
                            className={` ${
                                value
                                    ? 'hidden min-w-[180px]'
                                    : 'z-50 min-w-[180px]'
                            } 
            ${privacy ? 'text-black' : ''} `}
                        >
                            <h1>Privacy Policy</h1>
                        </div>
                        <span
                            className='absolute z-20 bottom-0 h-full -left-2 w-0 bg-[#FBF2DC] transition-all 
            group-hover:w-[100%] duration-300'
                        ></span>
                    </div>
                </Link>
            </div>
            {/* </div> */}
        </div>
    )
}
export default Sidebar
