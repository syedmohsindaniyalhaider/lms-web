import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import StudentClasses from './StudentClasses'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Arrow from '/assets/images/Arrow.svg'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import { emptyPaginateClasses } from '../../../../store/actions/student/classes/classesSlice'
import { studentAllClasses } from '../../../../store/actions/student/classes/allClassesService'
import { Slide } from 'react-awesome-reveal'
import { paginateStudentClasses } from '../../../../store/actions/student/classes/paginateStudentClasses'
import useInfiniteClasses from '../../../../hooks/useInfiniteClasses'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Link from 'next/link'

const MemoizedStudentClasses = memo(StudentClasses)

const Classes = () => {
    // updated
    const classesRef = useRef<any>(null)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { classes: studentClasses }: any = useAppSelector(
        (state: RootState) => state.classes
    )
    const { paginateClasses, lastPage, isLoading }: any = useAppSelector(
        (state: RootState) => state.classes
    )
    const [_page, setPage] = useState(1)
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

    const allClassesOfStudents = useMemo(
        () => studentClasses?.map((item: any) => item?.classes),
        [studentClasses]
    )

    useEffect(() => {
        setAllClasses(allClassesOfStudents?.flat(Infinity))
        setCompletedClasses(
            allClasses?.filter((item: any) => item?.classStatus === 'completed')
        )
        setNotCompletedClasses(
            allClasses?.filter((item: any) => item?.classStatus !== 'completed')
        )
    }, [studentClasses])

    return (
        <>
            <div className='flex items-center justify-between pb-4'>
                <div className='lg:text-[25px] md:text-[16px]  lg:font-[700] md:font-bold'>
                    My Classes
                </div>
                <div className='flex justify-between gap-4 md:pr-1 '>
                    <div className='text-[#355ADC] font-bold text-[15px]  divide-x-2'>
                        <Link href={`/student/classes`}>View Details</Link>
                    </div>
                    <div className='w-[2px] bg-[#A4B5EF] rounded-lg '></div>
                    <div className='text-[#355ADC] font-bold text-[15px]'>
                        <Link href={`/student/classes`}>Edit Schedule</Link>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-t-lg'>
                <div className='flex border-b-[1.5px] border-b-[#D9D9D9] justify-between  p-3 '>
                    <div className='flex gap-6 '>
                        <div>
                            <div className='md:text-[14px] lg:text-[20px] font-author font-[400]'>
                                Total Classes
                            </div>
                            <div className='font-[494] md:text-[28px] lg:text-[52px] xl:text-[52px] font-author'>
                                {allClasses ? allClasses?.length : '0'}
                            </div>
                        </div>
                        <div>
                            <div className='md:text-[14px] lg:text-[20px] font-author font-[400]'>
                                Completed Classes
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[52px] xl:text-[52px] font-author'>
                                {completedClasses
                                    ? completedClasses?.length
                                    : '0'}
                            </div>
                        </div>
                        <div>
                            <div className='md:text-[14px] lg:text-[20px] font-author font-[400]'>
                                Remaining Classes
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[52px] xl:text-[52px] font-author'>
                                {notCompletedClasses
                                    ? notCompletedClasses?.length
                                    : '0'}
                            </div>
                        </div>
                        <div>
                            <div className=' md:text-[14px] lg:text-[20px] font-author font-[400]'>
                                Credit Left
                            </div>
                            <div className='font-semibold md:text-[28px] lg:text-[52px] xl:text-[52px] font-author'>
                                12
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#EB2C22]  font-semibold md:px-[15px] lg:px-[20px] py-[10px] mt-5 xl:mt-6 rounded-[8px] text-white relative group overflow-hidden -top-3'>
                            <span className='relative z-40'>
                                Buy More Credit
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-red-600 group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-red-600 group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-b-lg'>
                <div
                    className='relative flex overflow-x-scroll px-4 custom-scroll'
                    ref={classesRef}
                    onScroll={handleScroll}
                >
                    {isLoading && paginateClasses?.length === 0 ? (
                        <div className='py-6'>
                            <Grid container wrap='nowrap' spacing={4} gap={6}>
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
                    ) : (
                        <>
                            {paginateClasses?.length > 0 ? (
                                <div className='flex gap-2'>
                                    {paginateClasses?.map(
                                        (ele: any, index: any) => (
                                            <MemoizedStudentClasses
                                                key={ele?.classes?.classId}
                                                scheduledAt={ele?.scheduledAt}
                                                classStatus={ele?.classStatus}
                                                classDate={ele?.date}
                                                {...ele.classes}
                                            />
                                        )
                                    )}
                                </div>
                            ) : (
                                <div className='pt-2'>No Classes found.</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Classes

// const [toggleClasses, setToggleClasses] = useState(false);
// const [page, setPage] = useState<any>(1);

// const handleClasses = () => {
//   let data = {
//     studentId: user?.clientId,
//     page: page,
//   };
//   dispatch(paginateStudentClasses(data));
// };

// const handlePreviousClassesPage = () => {
//   setPage((prevPage: any) => (prevPage == 1 ? prevPage : prevPage - 1));
//   setToggleClasses(false);
// };

// const handleNextClassesPage = () => {
//   setPage((nextPage: any) => nextPage + 1);
//   setToggleClasses(true);
// };

{
    /* <div
            // onClick={handlePreviousClassesPage}
            className="rotate-180 z-10 absolute cursor-pointer"
          >
            <Image alt="" src={Arrow} />
          </div> */
}
{
    /* <Slide direction={toggleClasses ? "right" : "left"} triggerOnce> */
}

{
    /* </Slide> */
}
{
    /* <div
            // onClick={handleNextClassesPage}
            className="z-10 absolute right-1 cursor-pointer"
          >
            <Image alt="" src={Arrow} />
          </div> */
}

{
    /* ) : (
          <div className="p-4">No classes found</div>
        )} */
}

{
    /* {paginateClasses?.classes?.length > 0 ? ( */
}
