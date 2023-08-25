import React, { useState, useEffect, memo } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CompletedAssignment from './Completed'
import { RootState, useAppSelector } from '../../../../store'
import { useRouter } from 'next/router'
import PendingAssignments from './Pending'
import { useAssignments } from '../../../../hooks/useAssignments'

const MemoizedPendingAssignments = memo(PendingAssignments)
const MemoizedCompletedAssignment = memo(CompletedAssignment)

const Assignments = () => {
    const router = useRouter()
    const { assignments } = useAppSelector(
        (state: RootState) => state.assignments
    )
    const [pendingAssignments, completedAssignments] =
        useAssignments(assignments)
    const [tabs, setTabs] = useState(true)

    return (
        <div className=' bg-green'>
            <div className='py-5 flex justify-between border-b-[3.5px] border-b-[#D9D9D9]  '>
                <div className='relative'>
                    <div className='flex justify-between md:gap-5 pl-5'>
                        <div
                            className={
                                !tabs
                                    ? 'lg:text-[19px] xl:text-[24px] md:text-[16px] lg:font-extrabold hover:cursor-pointer md:font-bold text-[#8C8C8C]'
                                    : 'lg:text-[19px] xl:text-[24px] md:text-[16px] lg:font-extrabold hover:cursor-pointer md:font-bold'
                            }
                            onClick={() => {
                                setTabs(true)
                            }}
                        >
                            Pending Assignments
                        </div>
                        <div
                            className={
                                tabs
                                    ? 'lg:text-[19px] xl:text-[24px] md:text-[16px]  lg:font-extrabold md:font-bold hover:cursor-pointer text-[#8C8C8C]'
                                    : 'lg:text-[19px] xl:text-[24px] md:text-[16px]  lg:font-extrabold md:font-bold hover:cursor-pointer'
                            }
                            onClick={() => {
                                setTabs(false)
                            }}
                        >
                            Completed Assignments
                        </div>
                    </div>
                    <div className='absolute lg:top-[47px] md:top-[43px] xl:mt-[7px]'>
                        <hr
                            className={
                                !tabs
                                    ? 'lg:w-[185px] md:w-[160px] xl:w-[230px]  bg-[#F0A901] h-1.5 rounded-lg lg:translate-x-[205px] xl:translate-x-[250px] md:translate-x-[180px]  duration-500'
                                    : 'lg:w-[165px] md:w-[140px] xl:w-[205px] bg-[#F0A901] h-1.5 rounded-lg lg:-translate-x-[-20px] md:translate-x-[20px] duration-700'
                            }
                        />
                    </div>
                </div>
                <div className='flex justify-between md:gap-1 lg:gap-4 md:pr-1 '>
                    <div
                        className='text-[#355ADC] font-bold text-[15px]  divide-x-2 hover:cursor-pointer'
                        onClick={() => router.push('/student/quizzes')}
                    >
                        All Quizzes
                    </div>
                    <div className='w-[2px] bg-[#A4B5EF] rounded-lg  '></div>
                    <div
                        className='text-[#355ADC] font-bold text-[15px] hover:cursor-pointer'
                        onClick={() => router.push('/student/projects')}
                    >
                        All Projects
                    </div>
                </div>
            </div>

            <div className='  py-5 relative'>
                {tabs ? (
                    <div className='flex overflow-auto scroll-hide mx-2'>
                        {pendingAssignments?.length > 0 ? (
                            pendingAssignments?.map(
                                (assignment: any, index: any) => (
                                    <MemoizedPendingAssignments
                                        key={index}
                                        assignments={assignment}
                                    />
                                )
                            )
                        ) : (
                            <div>Take class to see assignments</div>
                        )}
                    </div>
                ) : (
                    <div className='flex overflow-auto gap-3 scroll-hide mx-2'>
                        {completedAssignments?.length > 0 ? (
                            completedAssignments.map(
                                (assignment: any, index: any) => (
                                    <MemoizedCompletedAssignment
                                        key={index}
                                        assignments={assignment}
                                    />
                                )
                            )
                        ) : (
                            <div>No completed assignments</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Assignments
