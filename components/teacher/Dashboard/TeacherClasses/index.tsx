import React, { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Arrow from '/assets/images/Arrow.svg'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import { teacherAllClasses } from '../../../../store/actions/teacher/classes/allClassesService'
import AllClasses from './AllClasses'
import { Slide } from 'react-awesome-reveal'
import { paginateTeacherClasses } from '../../../../store/actions/teacher/classes/paginateTeacherClasses'
import useInfiniteClasses from '../../../../hooks/useInfiniteClasses'
import { emptyPaginateClasses } from '../../../../store/actions/teacher/classes/teacherClassesSlice'
import { Grid, Skeleton } from '@mui/material'
const TeacherClasses = () => {
    const classesRef = useRef<any>(null)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { teacherClasses }: any = useAppSelector(
        (state: RootState) => state.teacherClasses
    )
    const { paginateClasses, isLoading }: any = useAppSelector(
        (state: RootState) => state.teacherClasses
    )

    const [_page, setPage] = useState<any>(1)
    const { handleScroll, loadClasses } = useInfiniteClasses(
        classesRef,
        user,
        _page,
        setPage
    )

    const [allClasses, setAllClasses] = useState([])
    const [completedClasses, setCompletedClasses] = useState([])
    const [notCompletedClasses, setNotCompletedClasses] = useState([])

    useEffect(() => {
        dispatch(emptyPaginateClasses())
        loadClasses()
    }, [])

    useEffect(() => {
        dispatch(teacherAllClasses(user?.clientId))
    }, [user])

    useEffect(() => {
        // * Get All Classes of all courses for individual student
        const allClassesOfStudents = teacherClasses?.map(
            (item: any) => item?.classes
        )
        setAllClasses(allClassesOfStudents?.flat(Infinity))
        setCompletedClasses(
            allClasses?.filter((item: any) => item?.classStatus === 'completed')
        )
        setNotCompletedClasses(
            allClasses?.filter((item: any) => item?.classStatus !== 'completed')
        )
    }, [teacherClasses])

    return (
        <>
            <div className='flex justify-between pb-4'>
                <div className='lg:text-[19px] md:text-[16px]  lg:font-extrabold md:font-bold'>
                    My Classes
                </div>
                {/* <div className='flex justify-between gap-4 md:pr-1 '>
                    <div className='text-[#355ADC] font-bold text-[15px]  divide-x-2'>
                        View Details
                    </div>
                    <div className='w-[2px] bg-[#A4B5EF] rounded-lg '></div>
                    <div className='text-[#355ADC] font-bold text-[15px]'>
                        Edit Schedule
                    </div>
                </div> */}
            </div>
            <div className='bg-white rounded-lg'>
                <div className='flex border-b-[1.5px] border-b-[#D9D9D9] justify-between  p-3 '>
                    <div className='flex gap-6 '>
                        <div>
                            <div className='font-semibold md:text-[14px] lg:text-[20px] font-author'>
                                Total Classes
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[32px] xl:text-[34px] font-author'>
                                {allClasses ? allClasses?.length : '0'}
                            </div>
                        </div>
                        <div>
                            <div className='font-semibold md:text-[14px] lg:text-[20px] font-author'>
                                Completed Classes
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[32px] xl:text-[34px] font-author'>
                                {completedClasses
                                    ? completedClasses?.length
                                    : '0'}
                            </div>
                        </div>
                        <div>
                            <div className='font-semibold md:text-[14px] lg:text-[20px] font-author'>
                                Remaining Classes
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[32px] xl:text-[34px] font-author'>
                                {notCompletedClasses
                                    ? notCompletedClasses?.length
                                    : '0'}
                            </div>
                        </div>
                        <div>
                            <div className='font-semibold md:text-[14px] lg:text-[20px] font-author'>
                                Credit Left
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[32px] xl:text-[34px] font-author'>
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-b-lg'>
                <div
                    className='relative flex overflow-x-scroll  px-4 custom-scroll'
                    ref={classesRef}
                    onScroll={handleScroll}
                >
                    <div className='flex gap-2'>
                        {isLoading === true ? (
                            <div className='py-6'>
                                <Grid container wrap='nowrap' spacing={4}>
                                    <Grid item lg={4}>
                                        <div className='relative  w-[210px] '>
                                            <div className=' rounded-md overflow-hidden'>
                                                <Skeleton
                                                    variant='rectangular'
                                                    width={210}
                                                    height={118}
                                                />
                                            </div>
                                            <div className='absolute right-6 -top-4 '>
                                                <Skeleton
                                                    variant='circular'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        <Skeleton width='70%' />
                                        <Skeleton width='50%' />
                                    </Grid>

                                    <Grid item lg={4}>
                                        <div className='relative  w-[210px] '>
                                            <div className=' rounded-md overflow-hidden'>
                                                <Skeleton
                                                    variant='rectangular'
                                                    width={210}
                                                    height={118}
                                                />
                                            </div>
                                            <div className='absolute right-6 -top-4 '>
                                                <Skeleton
                                                    variant='circular'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        <Skeleton width='70%' />
                                        <Skeleton width='50%' />
                                    </Grid>

                                    <Grid item lg={4}>
                                        <div className='relative  w-[210px] '>
                                            <div className=' rounded-md overflow-hidden'>
                                                <Skeleton
                                                    variant='rectangular'
                                                    width={210}
                                                    height={118}
                                                />
                                            </div>
                                            <div className='absolute right-6 -top-4 '>
                                                <Skeleton
                                                    variant='circular'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        <Skeleton width='70%' />
                                        <Skeleton width='50%' />
                                    </Grid>

                                    <Grid item lg={4}>
                                        <div className='relative  w-[210px] '>
                                            <div className=' rounded-md overflow-hidden'>
                                                <Skeleton
                                                    variant='rectangular'
                                                    width={210}
                                                    height={118}
                                                />
                                            </div>
                                            <div className='absolute right-6 -top-4 '>
                                                <Skeleton
                                                    variant='circular'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        <Skeleton width='70%' />
                                        <Skeleton width='50%' />
                                    </Grid>

                                    <Grid item lg={4}>
                                        <div className='relative  w-[210px] '>
                                            <div className=' rounded-md overflow-hidden'>
                                                <Skeleton
                                                    variant='rectangular'
                                                    width={210}
                                                    height={118}
                                                />
                                            </div>
                                            <div className='absolute right-6 -top-4 '>
                                                <Skeleton
                                                    variant='circular'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        <Skeleton width='70%' />
                                        <Skeleton width='50%' />
                                    </Grid>
                                </Grid>
                            </div>
                        ) : paginateClasses?.classes?.length > 0 ? (
                            paginateClasses?.classes?.map(
                                (ele: any, index: any) => (
                                    <AllClasses
                                        key={ele?.classes?.classId}
                                        classDate={ele?.date}
                                        classStatus={ele?.classStatus}
                                        {...ele.classes}
                                    />
                                )
                            )
                        ) : (
                            'No Classes found.'
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherClasses
