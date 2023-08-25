import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import { RootState, useAppSelector, useAppDispatch } from '../../../../store'
import { addAvailability } from '../../../../store/actions/teacher/classes/addAvailabilityService'
import { useSelector } from 'react-redux'
import Modal from '@mui/material/Modal'
import upcomingClockSvg from '/assets/icons/upcomingClock.svg'
import { getAvailability } from '../../../../store/actions/teacher/classes/getAvailabilityService'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TeacherAvailability = () => {
    const dispatch = useAppDispatch()
    const { availabilities } = useSelector(
        (state: RootState) => state.teacherClasses
    )
    const { user } = useAppSelector((state: RootState) => state.user)
    const [_availabilities, setAvailabilities] = useState<any>([])
    const [open, setOpen] = useState(false)
    const [dates, setDates] = useState<any>([])
    const [dateToggle, setDateToggle] = useState(false)
    const [timeToggle, setTimeToggle] = useState(false)
    const [slotTime, setSlotTime] = useState<any>()
    const [checked, setChecked] = useState<boolean>(false)
    const [checked1, setChecked1] = useState<boolean>(false)
    const [date, setDate] = useState('')
    //slots of 24 Hours
    const startAndEndTimes: any = []
    for (let i = 0; i < 24; i++) {
        startAndEndTimes.push({
            startTime: moment()
                .set({ hour: i, minute: 0, second: 0 })
                .format('hh:mm A'),
            endTime: moment()
                .set({ hour: i + 1, minute: 0, second: 0 })
                .format('hh:mm A'),
            status: false,
        })
    }

    //Dates of 1 week
    const getDate = () => {
        const now = moment()
        const nextWeekStart = moment(now).add(0, 'weeks').startOf('week')
        const nextWeekEnd = moment(now).add(0, 'weeks').endOf('week')
        const datesInWeek: any = []
        let date = nextWeekStart
        while (date <= nextWeekEnd) {
            datesInWeek.push(moment(date.clone()).format('dddd DD-MM-YYYY'))
            date = date.clone().add(1, 'd')
        }
        setDates(datesInWeek)
        setDate(datesInWeek[0])
    }

    //toggle Functions
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
        getDate()
    }

    //Add Availability
    const handleSubmit = () => {
        const formatDate = moment(date, 'dddd DD-MM-YYYY').format('DD-MM-YY')
        const fullWeekDates = dates?.map((ele: any) =>
            moment(ele, 'dddd DD-MM-YYYY').format('DD-MM-YY')
        )

        const Availability = {
            teacherId: user.clientId,
            date: date === 'Full Week' ? fullWeekDates : formatDate,
            hours:
                slotTime === 'Full Time' ? startAndEndTimes : _availabilities,
        }
        dispatch(addAvailability(Availability))
        toast.success('Availabilities Added Successfully')
        handleClose()
    }

    const handleDate = (date: any) => {
        const mydate = moment(date, 'dddd DD-MM-YYYY').format('DD-MM-YY')
        const data = {
            teacherId: user?.clientId,
            date: mydate,
        }
        dispatch(getAvailability(data))
    }

    useEffect(() => {
        if (availabilities?.length > 0) {
            setAvailabilities(availabilities?.hours)
        } else {
            setAvailabilities([])
        }
    }, [availabilities])

    return (
        <>
            <div className='flex 2xl:justify-between md:justify-between'>
                <div>
                    <div className='lg:w-[250px] h-[110%] w-full'>
                        <p className='text-[#454545] md:px-[20px] md:text-[14px] lg:text-[20px] lg:font-medium xl:text-[18px] text-left pt-[5px] lg:pt-[4px]'>
                            Availabilities of Teachers
                        </p>
                    </div>
                    <div className='flex bg-white gap-5 md:px-[20px] pb-[20px] lg:pb-4 xl:pb-0 md:mt-[20px]'>
                        <button
                            className='bg-[#355ADC]  font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[10px] xl:py-[10px] lg:py-[7px] rounded-[8px] text-white relative group overflow-hidden'
                            onClick={handleOpen}
                        >
                            <span className='relative z-40 text-[18px]'>
                                ADD AVAILABILITY
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-blue-800   group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                        </button>
                    </div>
                    <p className='leading-none xl:leading-[1] px-[20px] md:text-[14px] xl:text-[14px] xl:mt-[20px] text-[#8C8C8C]'>
                        Add availability for next week so student can schedule
                        class.
                    </p>
                </div>
                <div className=' -mt-[60px]'>
                    <div className=''>
                        <Image
                            alt=''
                            className=''
                            height={280}
                            width={200}
                            objectFit='cover'
                            src={upcomingClockSvg}
                        ></Image>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                    className='flex items-center justify-center'
                >
                    <div className='bg-white  lg:w-[50%] rounded-md p-[20px]  lg:h-[auto]'>
                        <h1 className='md:text-[#131414] md:font-bold text-[24px] '>
                            Add Availability
                        </h1>
                        <p className='text-[#131414] font-[500]'>
                            Add availability to lock date and time so that
                            students can schedule classes.
                        </p>
                        <div className='w-[100%] flex gap-[20px] pt-[10px]'>
                            <div className='w-[50%]'>
                                <div className='flex items-start justify-between '>
                                    <h2 className='font-semibold'>
                                        Select Date
                                    </h2>
                                    <div className='flex items-center gap-1 lg:gap-3'>
                                        <input
                                            type='checkbox'
                                            checked={checked1}
                                            value={date}
                                            className='focus:outline-[white] accent-black focus:ring-[0px] border-black text-black hover:cursor-pointer'
                                            onChange={(e: any) => {
                                                setChecked1(e.target.checked)

                                                if (e.target.checked === true) {
                                                    setDate('Full Week')
                                                    setDateToggle(false)
                                                } else {
                                                    setDateToggle(true)
                                                }
                                            }}
                                        />
                                        <h2 className='font-[500]'>
                                            Available Full Week
                                        </h2>
                                    </div>
                                </div>
                                <div className='bg-[#8C8C8C]   rounded  h-[2px]'></div>
                                {/* Select date */}
                                <div
                                    className='h-[35px] bg-[#F0A901] rounded-[5px] mt-2 flex items-center justify-between p-2 hover:cursor-pointer'
                                    onClick={() => {
                                        setDateToggle(!dateToggle)
                                        setChecked1(false)
                                        setDate(dates[0])
                                    }}
                                >
                                    <p className='font-[500] text-white'>
                                        {date}
                                    </p>
                                    {!dateToggle && (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='2.5'
                                            stroke='white'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                            />
                                        </svg>
                                    )}
                                    {dateToggle && (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='2.5'
                                            stroke='white'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M4.5 15.75l7.5-7.5 7.5 7.5'
                                            />
                                        </svg>
                                    )}
                                </div>
                                {dateToggle && (
                                    <div className='mt-2'>
                                        {dates?.map((ele: any, index: any) => (
                                            <div
                                                key={index}
                                                id={ele}
                                                className=' h-[35px] hover:bg-[#FBEAC0] hover:cursor-pointer border-[1px] border-[#BFBFBF]  text-[#595959] hover:text-[black] flex items-center justify-center font-[500]'
                                                onClick={(e: any) => {
                                                    setDate(e.target.id)
                                                    setDateToggle(false)
                                                    handleDate(ele)
                                                }}
                                            >
                                                {ele}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='w-[50%]'>
                                <div className='flex items-start justify-between '>
                                    <h2 className='font-semibold'>
                                        Select Time
                                    </h2>
                                    <div className='flex  items-center gap-1 lg:gap-3'>
                                        <input
                                            type='checkbox'
                                            className='focus:outline-[white] accent-black focus:ring-[0px] border-black text-black'
                                            checked={checked}
                                            onChange={(e) => {
                                                setChecked(e.target.checked)
                                                if (e.target.checked === true) {
                                                    setSlotTime('Full Time')
                                                    setTimeToggle(true)
                                                } else {
                                                    setSlotTime('')
                                                    setTimeToggle(false)
                                                }
                                            }}
                                        />
                                        <h2 className='font-[500]'>
                                            Available Full Time
                                        </h2>
                                    </div>
                                </div>
                                <div className='bg-[#8C8C8C]   rounded  h-[2px]'></div>
                                {timeToggle && (
                                    <div
                                        className='h-[35px] bg-[#F0A901] rounded-[5px] mt-2 flex items-center justify-between p-2 hover:cursor-pointer'
                                        onClick={() => {
                                            setTimeToggle(false)
                                            setChecked(false)
                                        }}
                                    >
                                        <p className='font-[500] text-white'>
                                            {slotTime}
                                        </p>

                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='2.5'
                                            stroke='white'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                            />
                                        </svg>
                                    </div>
                                )}

                                {timeToggle === false && (
                                    <div className='mt-2 overflow-y-scroll w-full h-[50vh]'>
                                        {startAndEndTimes?.map(
                                            (ele: any, index: any) => (
                                                <div
                                                    key={index}
                                                    id={ele}
                                                    className={`h-[35px]  border-[1px] border-[#BFBFBF]   hover:text-[black] flex items-center justify-center font-[500] 
                          ${
                              _availabilities?.find(
                                  (item: any) =>
                                      item.startTime === ele.startTime
                              )
                                  ? 'bg-[#F0A901] hover:bg-[#F0A901] hover:cursor-pointer text-[white]'
                                  : 'hover:bg-[#FBEAC0] hover:cursor-pointer text-[#595959]'
                          }
                          `}
                                                    onClick={() => {
                                                        const arr1 =
                                                            _availabilities?.find(
                                                                (item: any) =>
                                                                    item.startTime ===
                                                                    ele.startTime
                                                            )
                                                        if (arr1) {
                                                            const newArr = [
                                                                ..._availabilities,
                                                            ]
                                                            newArr?.splice(
                                                                newArr.indexOf(
                                                                    arr1
                                                                ),
                                                                1
                                                            )
                                                            setAvailabilities([
                                                                ...newArr,
                                                            ])
                                                        } else {
                                                            setAvailabilities(
                                                                (
                                                                    prevVal: any
                                                                ) => [
                                                                    ...prevVal,
                                                                    {
                                                                        ...ele,
                                                                        status: false,
                                                                    },
                                                                ]
                                                            )
                                                        }
                                                    }}
                                                >
                                                    {ele.startTime +
                                                        ' - ' +
                                                        ele.endTime}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
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
                                        onClick={handleSubmit}
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
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default TeacherAvailability
