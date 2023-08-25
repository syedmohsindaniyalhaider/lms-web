import React, {
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'

import JourneyDescription from './Description'
import LearningJoCards from './JourneyCards'
import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowLeft from '../../assets/images/ArrowLeft.svg'
import ArrowRight from '/assets/images/ArrowRight.svg'
import ArrowFront from '../../assets/images/Arrowfront.svg'
import Help from '../Help/Help'
import JourneyToggle from './JourneyToggle'
import Arrow from '/assets/images/Arrow.svg'
import { Slide, Fade } from 'react-awesome-reveal'
import { RootState, useAppSelector } from '../../../../store'

const weeks = [
    'week 1',
    'week 2',
    'week 3',
    'week 4',
    'week 5',
    'week 6',
    'week 7',
    'week 8',
    'week 9',
    'week 10',
    'week 11',
    'week 12',
    'week 13',
    'week 14',
    'week 15',
    'week 16',
]

const MemoizedLearningJoCards = memo(LearningJoCards)
const MemoizedJourneyToggle = memo(JourneyToggle)

const LearningJourney = () => {
    const { classes: studentClasses, isLoading } = useAppSelector(
        (state: RootState) => state.classes
    )
    const journeyRef = useRef<any>(null)
    const learningRef = useRef<any>(null)
    const [journeyWidth, setJourneyWidth] = useState<any>()
    const [learningWidth, setLearningWidth] = useState<any>()
    const [showSlider, SetShowSlider] = useState()
    const [journey, setJourney] = useState<boolean>(true)
    const [allStudentClasses, setAllStudentClasses] = useState<any>([])
    let a = 1

    const scrollHandler = useCallback(
        (scroll: boolean) => {
            if (scroll && learningWidth < journeyWidth) {
                setLearningWidth(
                    (prevVal: any) => prevVal + learningRef.current?.clientWidth
                )
            }

            if (!scroll && learningWidth > 300) {
                setLearningWidth(
                    (prevVal: any) => prevVal - learningRef.current?.clientWidth
                )
            }
            journeyRef.current.scrollTo(learningWidth, 0)
        },
        [journeyWidth, learningWidth]
    )

    useEffect(() => {
        setJourneyWidth(journeyRef.current?.clientWidth)
        setLearningWidth(learningRef.current?.clientWidth)
    }, [])

    const classesOfStudent = useMemo(
        () => studentClasses?.map((item: any) => item?.classes),
        [studentClasses]
    )

    useEffect(() => {
        setAllStudentClasses(classesOfStudent?.flat(Infinity))
    }, [studentClasses])

    return (
        <>
            <div>
                <div className='flex items-center '>
                    <div
                        className={`rotate-180 absolute z-10 md:hidden lg:block ${
                            !journey ? 'lg:hidden' : 'lg:block'
                        }`}
                    >
                        <Image
                            alt=''
                            src={Arrow}
                            height='65'
                            width='65'
                            onClick={() => scrollHandler(false)}
                        />
                    </div>
                    <div
                        ref={journeyRef}
                        className={
                            journey
                                ? `bg-[#FBF2DC] w-full rounded-lg  px-4 pl-14 py-6 flex md:mr-0  mt-4 overflow-x-scroll scroll-hide `
                                : 'hidden'
                        }
                    >
                        <JourneyDescription />
                        {isLoading === true ? (
                            <>
                                <div className='flex gap-10'>
                                    <div className='bg-slate-100  rounded-lg animate-pulse'>
                                        <div className='flex justify-between '>
                                            <div className=' rounded-tl-lg rounded-br-lg h-[30px] font-medium font-author text-white md:text-[17px] px-3 pt-[1px]'></div>
                                            <div className='border-2  bg-slate-200 rounded-xl px-[8px] pt-1 w-[110px] h-[50px] items-center flex -mt-[18px] mr-[20px] bg-white'></div>
                                        </div>
                                        <div className='flex my-3 px-2 gap-2 w-[360px] max-w-[360px]  pb-2'>
                                            <div className=' flex-shrink-0 rounded-lg overflow-hidden mx-2 h-[139px] w-[125px]'>
                                                <p className='bg-slate-200 rounded w-[100px] h-[100px] mt-4'></p>
                                            </div>
                                            <div>
                                                <div className=' md:text-[22px] font-author font-[596] py-2'>
                                                    <h1 className='leading-[20px] -mt-1 font-author '></h1>
                                                </div>
                                                <div className='h-2 bg-slate-200 rounded w-[170px] my-4 '></div>
                                                <div className='h-2 bg-slate-200 rounded w-[150px] my-4 '></div>
                                                <div className='h-2 bg-slate-200 rounded w-[150px] '></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-slate-100  rounded-lg animate-pulse'>
                                        <div className='flex justify-between '>
                                            <div className=' rounded-tl-lg rounded-br-lg h-[30px] font-medium font-author text-white md:text-[17px] px-3 pt-[1px]'></div>
                                            <div className='border-2 bg-slate-200 rounded-xl px-[8px] pt-1 w-[110px] h-[50px] items-center flex -mt-[18px] mr-[20px] bg-white'></div>
                                        </div>
                                        <div className='flex my-3 px-2 gap-2 w-[360px] max-w-[360px]  pb-2'>
                                            <div className=' flex-shrink-0 rounded-lg overflow-hidden mx-2 h-[139px] w-[125px]'>
                                                <p className='bg-slate-200 rounded w-[100px] h-[100px] mt-4'></p>
                                            </div>
                                            <div>
                                                <div className=' md:text-[22px] font-author font-[596] py-2'>
                                                    <h1 className='leading-[20px] -mt-1 font-author '></h1>
                                                </div>
                                                <div className='h-2 bg-slate-200 rounded w-[170px] my-4 '></div>
                                                <div className='h-2 bg-slate-200 rounded w-[150px] my-4 '></div>
                                                <div className='h-2 bg-slate-200 rounded w-[150px] '></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            allStudentClasses?.map((ele: any) => (
                                <MemoizedLearningJoCards
                                    key={ele?.classId}
                                    ref={learningRef}
                                    {...ele}
                                />
                            ))
                        )}
                    </div>

                    <div
                        className={` absolute right-10 mt-4 md:hidden ${
                            !journey ? 'lg:hidden' : 'lg:block'
                        }`}
                    >
                        <Image
                            alt=''
                            src={Arrow}
                            height='65'
                            width='65'
                            onClick={() => scrollHandler(true)}
                        />
                    </div>
                </div>
                <div
                    className={
                        journey
                            ? 'h-[60px] bg-[#DBE6E3] overflow-y-hidden flex scroll-hide gap-2 px-2 pt-2'
                            : 'hidden'
                    }
                >
                    {weeks.map((item, index) => {
                        return (
                            <div key={a++} className='max-w-[100px]'>
                                <div
                                    className={`flex items-center justify-center font-medium text-[#8C8C8C] relative ${
                                        index == 0 && ' text-[#0F5647]'
                                    }`}
                                >
                                    <div> {item} </div>
                                    {index == 0 && (
                                        <div className='h-2 w-2 rounded absolute bg-[#0F5647] ml-[72px]'></div>
                                    )}
                                </div>
                                <div className='flex gap-2 items-center justify-center '>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div className='h-[28px] rounded w-[4px] bg-[#C3D5D1]'></div>
                                    <div
                                        className={`h-[50px] w-[4px] rounded -mt-[10px] ${
                                            index == 0
                                                ? 'bg-[#F0A901]'
                                                : ' bg-[#C3D5D1]'
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={journey ? '' : 'mt-[250px]'}>
                <MemoizedJourneyToggle
                    journey={journey}
                    setJourney={setJourney}
                />
            </div>
        </>
    )
}

export default LearningJourney
