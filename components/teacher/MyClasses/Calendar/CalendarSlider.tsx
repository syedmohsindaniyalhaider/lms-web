/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import moment from 'moment'

// icons
import arrowSlickIcon from '/assets/icons/ArrowSlick.svg'
import arrowSlickRightIcon from '/assets/icons/ArrowSlickRight.svg'
import leftChevIcon from '/assets/icons/leftChev.svg'
import rightChevIcon from '/assets/icons/rightChevArrow.svg'
import { RootState } from '../../../../store'
import { useSelector } from 'react-redux'

const SampleNextArrow = (props: any) => {
    const { onClick } = props
    return (
        <div className='w-[300px] h-[300px] pt-[35px]'>
            <Image
                alt='arrow-slick-icon'
                src={arrowSlickRightIcon}
                onClick={onClick}
            />
        </div>
    )
}

const SamplePrevArrow = (props: any) => {
    const { onClick } = props
    return (
        <div className='w-[300px] h-[300px] pt-[35px]'>
            <Image
                alt='arrow-slick-icon'
                src={arrowSlickIcon}
                onClick={onClick}
            />
        </div>
    )
}

const CalendarSlider = () => {
    const { teacherClasses, loading } = useSelector(
        (state: RootState) => state.teacherClasses
    )
    const [allStudentClasses, setAllStudentClasses] = useState<any>([])
    const [value, setValue] = useState(moment())
    const [popup, setPopup] = useState(moment().format('YYYY-MM-DD'))
    const startDay = value.clone().startOf('month').startOf('week')
    const endDay = value.clone().endOf('month').endOf('week')
    const days = startDay.clone().subtract(1, 'day')

    const calendar: any = []
    const currentDate = moment().format('YYYY-MM-DD')

    while (days.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => days.add(1, 'day').clone())
        )
    }

    const eventHandler = (e: any) => {
        setPopup(e)
    }

    const currentMonthName = () => {
        return value.format('MMMM')
    }

    const currentYearName = () => {
        return value.format('YYYY')
    }

    const currentDayName = () => {
        return value.format('D')
    }

    const preMonth = () => {
        return value.clone().subtract(1, 'month')
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }

    const dates = teacherClasses?.map((i: any) => i.classes?.date)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'custom-flex flex-row space-x-6 ',
        centerMode: false,
        centerPadding: '5px',
        speed: 500,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1123,
                settings: {
                    slidesToShow: 9,
                },
            },

            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 11,
                },
            },
            {
                breakpoint: 2200,
                settings: {
                    slidesToShow: 13,
                },
            },
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 13,
                },
            },
        ],
    }

    useEffect(() => {
        // * Get All Classes of all courses for individual student
        const allClassesOfTeacher = teacherClasses?.map(
            (item: any) => item?.classes
        )
        setAllStudentClasses(allClassesOfTeacher?.flat(Infinity))
    }, [teacherClasses])

    return (
        <>
            <div>
                <div className='bg-white ml-3 px-4 py-2  rounded-full flex justify-between w-[200px]'>
                    <div>
                        <Image
                            className='pt-1'
                            onClick={() => setValue(preMonth())}
                            src={leftChevIcon}
                            alt='left-shev-icon'
                        />
                    </div>
                    <div>
                        <h1>
                            {currentDayName()} {currentMonthName()}{' '}
                            {currentYearName()}
                        </h1>
                    </div>
                    <div>
                        <Image
                            className='pt-1'
                            onClick={() => setValue(nextMonth())}
                            src={rightChevIcon}
                            alt='right-shev-icon'
                        />
                    </div>
                </div>
                <div className='px-1'>
                    <Slider {...settings}>
                        {calendar?.map((week: any, index: any) =>
                            week?.map((day: any, i: any) => (
                                <div key={i} className='h-[270px]'>
                                    <div key={i} className=''>
                                        <div className='flex mx-3'>
                                            {teacherClasses?.map(
                                                (i: any, index: any) =>
                                                    i.classes?.date.includes(
                                                        day.format('YYYY-MM-DD')
                                                    ) ? (
                                                        <div key={index}>
                                                            <p
                                                                className={`mx-[1px] w-[7px] h-[7px] rounded-md text-center ${
                                                                    i.classStatus ===
                                                                    'pending'
                                                                        ? 'bg-red-600'
                                                                        : ''
                                                                }
                                  ${
                                      i.classStatus === 'completed'
                                          ? 'bg-[#0F5647]'
                                          : ''
                                  }
                                  
                                  `}
                                                            ></p>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )
                                            )}
                                        </div>

                                        <h1 className='text-[#D9D9D9] font-medium ml-2'>
                                            {day.format('ddd')}
                                        </h1>
                                    </div>

                                    {dates?.includes(
                                        day.format('YYYY-MM-DD')
                                    ) ? (
                                        teacherClasses?.map(
                                            (i: any, index: any) =>
                                                i?.classes?.date.includes(
                                                    day.format('YYYY-MM-DD')
                                                ) ? (
                                                    <div
                                                        key={index}
                                                        onClick={() =>
                                                            eventHandler(
                                                                moment(
                                                                    day
                                                                ).format(
                                                                    'YYYY-MM-DD'
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <div
                                                            className={`h-[45px]  min-h-[45px] w-[45px] min-w-[45px] text-center pt-[9px] bg-[#D9D9D9] rounded-2xl mt-2 text-white   
                          
                          ${i.classStatus === 'pending' ? 'bg-[#F94F46]' : ''}
                          ${i.classStatus === 'completed' ? 'bg-[#0F5647]' : ''}
                          
                        
                          

                          `}
                                                            onClick={() =>
                                                                setValue(day)
                                                            }
                                                        >
                                                            <h1>
                                                                {' '}
                                                                {day
                                                                    .format('D')
                                                                    .toString()}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ''
                                                )
                                        )
                                    ) : (
                                        <div
                                            onClick={() =>
                                                eventHandler(
                                                    moment(day).format(
                                                        'YYYY-MM-DD'
                                                    )
                                                )
                                            }
                                        >
                                            <div
                                                className={`h-[45px] min-h-[45px] w-[45px] min-w-[45px] text-center pt-[9px] bg-[#D9D9D9] rounded-2xl mt-2 text-white
                             ${
                                 day
                                     .format('YYYY-MM-DD')
                                     .includes(currentDate) &&
                                 !dates?.includes(day.format('YYYY-MM-DD'))
                                     ? 'bg-[#A4B5EF]'
                                     : ''
                             } `}
                                                onClick={() => setValue(day)}
                                            >
                                                <h1>
                                                    {day.format('D').toString()}
                                                </h1>
                                            </div>
                                        </div>
                                    )}

                                    {popup === day.format('YYYY-MM-DD') &&
                                    dates?.includes(
                                        day.format('YYYY-MM-DD')
                                    ) ? (
                                        <div
                                            className='relative left-[20px]  w-2.5 h-[30px] border-l-2 border-dashed 
                                       border-[#355ADC]'
                                        >
                                            <div
                                                className='flex absolute top-[100%] -left-[155px] min-w-[320px] w-auto h-[160px] bg-[#FFFFFF]
                                        rounded-md border-2 '
                                            >
                                                {teacherClasses?.map(
                                                    (i: any, index: any) =>
                                                        i.classes?.date?.includes(
                                                            day.format(
                                                                'YYYY-MM-DD'
                                                            )
                                                        ) ? (
                                                            <div
                                                                className={`rounded-md w-[100%]  ${
                                                                    i.classStatus ===
                                                                    'pending'
                                                                        ? 'border-2 border-[#F94F46]'
                                                                        : ''
                                                                } ${
                                                                    i.classStatus ===
                                                                    'completed'
                                                                        ? 'border-2 border-[#0F5647]'
                                                                        : ''
                                                                }`}
                                                                key={index}
                                                            >
                                                                <h1 className='rounded-md bg-[#D9D9D9] p-2 w-auto font-bold'>
                                                                    {moment(
                                                                        i
                                                                            ?.classes
                                                                            ?.date
                                                                    ).format(
                                                                        'YYYY-MM-DD'
                                                                    )}
                                                                </h1>
                                                                <div className='flex items-center h-[70%] pl-3'>
                                                                    <h3 className='text-[16px]'>
                                                                        {
                                                                            i
                                                                                ?.classes
                                                                                ?.description
                                                                        }
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            ''
                                                        )
                                                )}
                                            </div>
                                        </div>
                                    ) : day
                                          .format('YYYY-MM-DD')
                                          ?.includes(currentDate) &&
                                      !dates?.includes(
                                          day.format('YYYY-MM-DD')
                                      ) ? (
                                        <div
                                            className='relative left-[20px] w-2.5 h-[30px] border-l-2 border-dashed 
                        border-[#355ADC]'
                                        >
                                            <div
                                                className='absolute top-[100%] -left-[155px] md:w-[320px] w-[330px] h-[160px] bg-[#FFFFFF]
                        rounded-md border-2 border-[#355ADC]'
                                            >
                                                <h1 className=' rounded-md bg-[#D9D9D9] p-2 font-bold'>
                                                    {moment(
                                                        currentDate,
                                                        'YYYY-MM-DD'
                                                    ).format('Do MMMM YYYY')}
                                                </h1>
                                                <div className='flex items-center h-[70%] pl-3'>
                                                    <h3 className='text-[16px]'>
                                                        You have nothing in
                                                        Calendar for today.
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            ))
                        )}
                    </Slider>
                </div>
                {calendar?.map((week: any, index: any) =>
                    week?.map((day: any, idx: any) =>
                        popup === day?.format('YYYY-MM-DD') &&
                        dates?.includes(day?.format('YYYY-MM-DD')) ? (
                            teacherClasses?.map((i: any, indx: any) =>
                                i.classes?.date?.includes(
                                    day.format('YYYY-MM-DD')
                                ) ? (
                                    <div key={index} className='-mt-[100px] '>
                                        <div
                                            key={idx}
                                            className={`w-full h-[35px] bg-[#E1E6FA] mt-[] ${
                                                i.classStatus === 'pending'
                                                    ? 'bg-[#fff4f4] '
                                                    : ''
                                            } ${
                                                i.classStatus === 'completed'
                                                    ? 'bg-[#dbe6e3] '
                                                    : ''
                                            } `}
                                        ></div>
                                        <div
                                            key={indx}
                                            className={`w-full h-[35px] bg-[#CDD6F6] mt-[] ${
                                                i.classStatus === 'pending'
                                                    ? 'bg-[#FED3D1] '
                                                    : ''
                                            } ${
                                                i.classStatus === 'completed'
                                                    ? 'bg-[#C3D5D1] '
                                                    : ''
                                            }`}
                                        ></div>
                                        <div
                                            className={`w-full h-[35px] bg-[#A4B5EF] mt-[] ${
                                                i.classStatus === 'pending'
                                                    ? 'bg-[#FCB0AC] '
                                                    : ''
                                            } ${
                                                i.classStatus === 'completed'
                                                    ? 'bg-[#93B3AC] '
                                                    : ''
                                            }`}
                                        ></div>
                                    </div>
                                ) : (
                                    ''
                                )
                            )
                        ) : popup === day.format('YYYY-MM-DD') &&
                          !dates?.includes(day.format('YYYY-MM-DD')) ? (
                            <div className='-mt-[100px] '>
                                <div className='w-full h-[35px] bg-[#E1E6FA]'></div>
                                <div className='w-full h-[35px] bg-[#CDD6F6]'></div>
                                <div className='w-full h-[35px] bg-[#A4B5EF]'></div>
                            </div>
                        ) : (
                            ''
                        )
                    )
                )}
            </div>
        </>
    )
}

export default CalendarSlider
