import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import circleAdd from '/assets/icons/circleAdd.svg'
import circleCross from '/assets/icons/circleCross.svg'
import { allCoursesService } from '../../../../store/actions/teacher/courses/allCourseService'
import { preferenceService } from '../../../../store/actions/teacher/preferences/preferenceService'
import { teacherCourseService } from '../../../../store/actions/teacher/courses/teacherCourseService'
import cross from '/assets/icons/cross.svg'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import Modal from '@mui/material/Modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CoursePreference = () => {
    const dispatch = useAppDispatch()
    const { courses } = useAppSelector((state: RootState) => state?.courses)

    const { addPreference, getPreference, deletePreference } = preferenceService
    const { coursePreference } = useAppSelector(
        (state: RootState) => state.preferenceSlice
    )
    const { user } = useAppSelector((state: RootState) => state.user)
    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [search, setSearch] = useState('')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [preferences, setPreference] = useState<any>([])

    const deleteHandler = (course: any) => {
        const arr = preferences
        arr.splice(arr.indexOf(course), 1)
        setPreference([...arr])
    }

    const addPreferences = () => {
        const data = {
            preferences,
            teacherId: user.clientId,
        }
        if (preferences.length !== 0) {
            dispatch(addPreference(data))
            handleClose()
            toast.success('preferences added successfully')
        } else {
            toast.error('please add preferences')
        }
    }

    const filteredCourses = courses?.filter((ele: any) => {
        if (search !== '') {
            return ele.courseName.toLowerCase().includes(search.toLowerCase())
        } else {
            return courses
        }
    })

    useEffect(() => {
        dispatch(getPreference(user?.clientId))
        dispatch(allCoursesService())
    }, [user])

    useEffect(() => {
        const data = {
            teacherId: user?.clientId,
        }
        dispatch(teacherCourseService(data))
    }, [user])

    return (
        <>
            <div className='flex bg-white gap-5 md:px-[20px] pb-[20px] lg:pb-4 xl:pb-0 '>
                <button className='bg-[#F0A901]  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[10px] xl:py-[10px] lg:py-[7px] rounded-[8px] text-white relative group overflow-hidden'>
                    <span className='relative z-40' onClick={handleOpen}>
                        COURSE PREFERENCES
                    </span>
                    <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#eeb736]  group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                    <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#eeb736] group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                </button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                className='flex items-center justify-center'
            >
                <div className='bg-white  lg:w-[50%] rounded-md p-[20px]  lg:max-h-[90%] overflow-scroll modelScroll'>
                    <h1 className='md:text-[#131414] md:font-bold text-[24px] '>
                        Add Course Preferences
                    </h1>
                    <p className='text-[#355ADC] font-[600] pt-2 leading-tight'>
                        You can add up-to 06 courses
                    </p>
                    <p className='text-[#131414] font-[600]'>
                        Add Course that you want to teach in coming semester.
                    </p>
                    {toggle === false && (
                        <div className='w-[100%] flex gap-[20px] pt-[10px] relative '>
                            <div className='w-[50%] '>
                                <div className='flex items-start justify-between '>
                                    <h2 className='font-semibold text-[#131414] md:text-[18px]'>
                                        Select Course
                                    </h2>
                                </div>
                                <div className='bg-[#8C8C8C]   rounded h-[1.5px]'></div>
                                {/* Select date */}
                                <input
                                    placeholder='Search'
                                    type='text'
                                    value={search}
                                    className='rounded-[4px] border-[#BFBFBF] w-full my-2 text-[18px] font-[494]'
                                    onChange={(e: any) =>
                                        setSearch(e.target.value)
                                    }
                                />

                                <div className='h-[250px] overflow-y-scroll modelScroll'>
                                    {' '}
                                    {filteredCourses?.map(
                                        (course: any, index: any) => (
                                            <div
                                                key={index}
                                                className={`flex items-center justify-between border-[#BFBFBF] w-full text-[18px] border-[1px] rounded-[4px] p-2 mb-2 text-[#131414] font-semibold  hover:cursor-pointer ${
                                                    preferences.includes(
                                                        course
                                                    ) === true
                                                        ? 'bg-[#F0A901]'
                                                        : 'hover:bg-[#FBEAC0]'
                                                }`}
                                            >
                                                <h2>{course.courseName}</h2>
                                                {!preferences.includes(
                                                    course
                                                ) && (
                                                    <Image
                                                        src={circleAdd}
                                                        alt='image'
                                                        className='h-5 w-5'
                                                        onClick={() => {
                                                            if (
                                                                preferences.length ===
                                                                6
                                                            ) {
                                                                setToggle(true)
                                                            } else {
                                                                if (
                                                                    !preferences.some(
                                                                        (
                                                                            obj: any
                                                                        ) =>
                                                                            obj.courseTitle ===
                                                                            course.courseName
                                                                    )
                                                                ) {
                                                                    setPreference(
                                                                        [
                                                                            ...preferences,
                                                                            {
                                                                                courseTitle:
                                                                                    course.courseName,
                                                                            },
                                                                        ]
                                                                    )
                                                                }
                                                            }
                                                        }}
                                                    />
                                                )}
                                                {preferences.includes(
                                                    course
                                                ) && (
                                                    <Image
                                                        src={circleCross}
                                                        alt='image'
                                                        className='h-5 w-5'
                                                        onClick={() =>
                                                            deleteHandler(
                                                                course
                                                            )
                                                        }
                                                    />
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className=''>
                                    <h2 className='font-semibold md:text-[18px]'>
                                        Preference
                                    </h2>
                                    <div className='bg-[#8C8C8C]   rounded  h-[1.5px]'></div>
                                </div>
                                <div className='h-[250px] overflow-scroll modelScroll mt-2'>
                                    {coursePreference?.map(
                                        (ele: any, index: any) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className=' flex items-center justify-between border-[#BFBFBF] w-full text-[18px] border-[1px] rounded-[4px] p-2 mb-2 text-[#131414] font-semibold hover:cursor-pointer bg-[#F8D88D]'
                                                >
                                                    <h2>{ele.courseTitle}</h2>

                                                    <Image
                                                        src={cross}
                                                        alt='image'
                                                        className='h-3 w-3'
                                                        onClick={() => {
                                                            dispatch(
                                                                deletePreference(
                                                                    ele.preferenceId
                                                                )
                                                            )
                                                            toast.success(
                                                                'preference delete'
                                                            )
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                    {preferences?.map(
                                        (course: any, index: any) => (
                                            <div
                                                key={index}
                                                className=' flex items-center justify-between border-[#BFBFBF] w-full text-[18px] border-[1px] rounded-[4px] p-2 mb-2 text-[#131414] font-semibold hover:cursor-pointer bg-[#F8D88D]'
                                            >
                                                <h2>{course.courseTitle}</h2>
                                                <Image
                                                    src={cross}
                                                    alt='image'
                                                    className='h-3 w-3'
                                                    onClick={() =>
                                                        deleteHandler(course)
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>

                                <div className='flex gap-5 my-[20px] ml-[20px]'>
                                    <button
                                        className='bg-white  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[6px]  rounded-[8px] text-black relative group overflow-hidden w-[50%] border-[#F0A901] border-[2px]'
                                        onClick={handleClose}
                                    >
                                        <span className='relative z-40'>
                                            Cancel
                                        </span>
                                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#dbcaa2]   group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-[#dbcaa2] group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                                    </button>

                                    <button
                                        className='bg-[#F0A901]  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[6px]  rounded-[8px] text-white relative group overflow-hidden w-[50%]'
                                        onClick={addPreferences}
                                    >
                                        <span className='relative z-40'>
                                            Save
                                        </span>
                                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#d2a94b]   group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-[#d2a94b] group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {toggle && (
                        <div
                            className='w-[100%] h-[400px] bg-[#a49f9f] flex items-center justify-center hover:cursor-pointer'
                            onClick={() => setToggle(false)}
                        >
                            <div
                                className=' bg-white 
              w-[50%]'
                            >
                                <div className='flex items-center justify-center bg-[#FBF2DC]'>
                                    <h1 className='md:text-[#2e3e3e] md:font-bold text-[24px] '>
                                        Attention
                                    </h1>
                                </div>

                                <div className='flex items-center justify-center text-center'>
                                    <p className='text-[#131414] font-[600] w-[200px] leading-tight py-2'>
                                        You can only add up-to 06 courses
                                    </p>
                                </div>
                                <div className='flex items-center justify-center pb-2'>
                                    <button
                                        className='bg-[#F0A901]  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[4px]  rounded-[8px] text-white relative group overflow-hidden w-[30%]'
                                        onClick={() => {
                                            setToggle(false)
                                        }}
                                    >
                                        <span className='relative z-40'>
                                            OK
                                        </span>
                                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-[#d2a94b]   group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-[#d2a94b] group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default CoursePreference
