import React, { useEffect, useState } from 'react'
import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../../../store'
import { classDetails } from '../../../../../../store/actions/student/classes/classDetailsService'
import { toggleScreens } from '../../../../../../store/actions/student/quiz/quizSlice'

const Result = ({ quizResult }: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(
            classDetails({
                studentId: user?.clientId,
                classId: +quizResult?.classId,
            })
        )
    }, [quizResult?.classId, user])

    return (
        <>
            <div className='bg-[#DBE6E3] flex justify-center py-3 rounded-t-lg'>
                <h1 className='md:text-[12px] md:font-[600] lg:text-[22px] text-[#0F5647]'>
                    Hurrah! You have completed this Quiz
                    <span className='text-[#131414] pl-2'>
                        {quizResult?.quizDescription}
                    </span>
                </h1>
            </div>
            <div className='bg-[#F7F9F7] pb-12 text-[#131414]'>
                <h1 className='text-center py-8 md:text-[18px] md:font-[500] lg:text-[28px] lg:font-[600]'>
                    <span className='md:text-[50px]  lg:text-[74px]'>
                        {quizResult?.students[0]?.result}
                    </span>
                    Good Score! You did well {user?.email.slice(0, 10)}
                </h1>
                <div className=' flex justify-center'>
                    <div className='md:w-[70%] lg:w-[50%]'>
                        <div className='w-[100%]'>
                            <h1 className='md:text-[16px] lg:text-[20px] font-[494] text-[#454545]'>
                                Your Result
                            </h1>
                            <table className='bg-white w-[100%]'>
                                <tr className='bg-[#FBF2DC] md:text-[14px] lg:text-[20px] flex justify-between px-12 py-2'>
                                    <td>Question no.</td>
                                    <td>Result</td>
                                </tr>
                                {quizResult?.questions?.length > 0 &&
                                    quizResult?.questions?.map(
                                        (ele: any, index: any) => (
                                            <tr
                                                className='flex justify-between md:text-[14px] lg:text-[20px] px-12 py-2'
                                                key={ele?.quizId}
                                            >
                                                <td>Q{index + 1}</td>

                                                <td>
                                                    {ele?.answer ===
                                                    ele?.correctAnswer ? (
                                                        <div className='h-2 w-2 bg-[#0F5647] rounded-full'></div>
                                                    ) : (
                                                        <div className='h-2 w-2 bg-[#F94F46] rounded-full'></div>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                <div className=' flex justify-center'>
                                    <hr className='h-[2px] w-[90%] bg-[#F0F0F0] flex justify-center'></hr>
                                </div>
                                <div className='flex gap-2 items-center px-6 py-1'>
                                    <span>Correct</span>
                                    <div className='w-2 h-2 bg-[#0F5647] rounded-full'></div>
                                    <span>Incorrect</span>
                                    <div className='w-2 h-2 bg-[#F94F46] rounded-full'></div>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center -mt-10'>
                <button
                    className={`lg:text-[22px] font-[500] px-40 py-2 rounded-[44px] text-[#355ADC]
        bg-[#E1E6FA] border-[12px] border-[#F3F5FD] hover:bg-[#355ADC] hover:border-[#E1E6FA]
        hover:text-[#FFFFFF]`}
                    onClick={() => dispatch(toggleScreens(3))}
                >
                    View Test Result
                </button>
            </div>
        </>
    )
}

export default Result
