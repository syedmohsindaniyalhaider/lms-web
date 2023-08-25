import React, { useState, Component, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Slider from 'react-slick'
import ArrowRight from '/assets/images/ArrowRight.svg'
import PendingCards from './SubmittedQuizzes'
import SubmittedProjects from './SubmittedProjects'
const Assignments = (props: any) => {
    const [penComState, setpenComState] = useState(true)
    const router = useRouter()
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: '',
        responsive: [
            {
                breakpoint: 2550,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    infinite: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
                    infinite: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                },
            },
        ],
    }
    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <div className=''>
                    <Image alt='' src={ArrowRight}></Image>
                </div>
            </div>
        )
    }
    const slide = ['', '', '', '', '', '', '', '', '', '', '', '']

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <div className='rotate-180 '>
                    <Image alt='' src={ArrowRight}></Image>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className=' bg-green     '>
                <div className='py-5 mr-4  flex  justify-between border-b-[3.5px] border-b-[#D9D9D9]  '>
                    <div className='relative'>
                        <div className='flex justify-between md:gap-[100px] pl-5'>
                            <div
                                className={
                                    !penComState
                                        ? 'lg:text-[19px] xl:text-[24px] md:text-[16px] lg:font-extrabold hover:cursor-pointer md:font-bold text-[#8C8C8C]'
                                        : 'lg:text-[19px] xl:text-[24px] md:text-[16px] lg:font-extrabold hover:cursor-pointer md:font-bold'
                                }
                                onClick={() => {
                                    setpenComState(true)
                                }}
                            >
                                Submitted Quizzes
                            </div>
                            <div
                                className={
                                    penComState
                                        ? 'lg:text-[19px] xl:text-[24px] md:text-[16px]  lg:font-extrabold md:font-bold hover:cursor-pointer text-[#8C8C8C]'
                                        : 'lg:text-[19px] xl:text-[24px] md:text-[16px]  lg:font-extrabold md:font-bold hover:cursor-pointer'
                                }
                                onClick={() => {
                                    setpenComState(false)
                                }}
                            >
                                Submitted Projects
                            </div>
                        </div>
                        <div className='absolute lg:top-[47px] md:top-[43px] xl:mt-[7px]'>
                            <hr
                                className={
                                    !penComState
                                        ? 'lg:w-[200px] md:w-[160px] xl:w-[230px]  bg-[#F0A901] h-1.5 rounded-lg lg:translate-x-[225px] xl:translate-x-[270px] md:translate-x-[220px]  duration-500'
                                        : 'lg:w-[165px] md:w-[140px] xl:w-[205px] bg-[#F0A901] h-1.5 rounded-lg lg:-translate-x-[-20px] md:translate-x-[20px] duration-700'
                                }
                            />
                        </div>
                    </div>

                    <div className='flex justify-between md:gap-1 lg:gap-4 md:pr-1 '>
                        <div
                            className='text-[#355ADC] font-bold text-[15px]  divide-x-2 hover:cursor-pointer'
                            onClick={() => router.push('/teacher/quizzes')}
                        >
                            All Quizzes
                        </div>
                        <div className='w-[2px] bg-[#A4B5EF] rounded-lg '></div>
                        <div
                            className='text-[#355ADC] font-bold text-[15px] hover:cursor-pointer'
                            onClick={() => router.push('/teacher/projects')}
                        >
                            All Projects
                        </div>
                    </div>
                </div>
                <div className=' mx-5  py-5 relative'>
                    {penComState ? (
                        <div className='py-2 example'>
                            <Slider {...settings}>
                                {slide.map((item: any, index: any) => (
                                    <div key={index} className='pr-2'>
                                        <PendingCards />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className='py-2 example'>
                            <Slider {...settings}>
                                {slide.map((item: any, index: any) => (
                                    <div key={index} className='pr-2'>
                                        <SubmittedProjects
                                            teacherProject={props.projects}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Assignments
