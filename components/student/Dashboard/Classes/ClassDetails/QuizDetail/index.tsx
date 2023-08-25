import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import poorFace from '/assets/icons/poorFace.svg'
import fairFace from '/assets/icons/fairFace.svg'
import goodFace from '/assets/icons/goodFace.svg'
import very_good_Face from '/assets/icons/very_good_Face.svg'
import excellentFace from '/assets/icons/excellentFace.svg'
import QuizResult from './Result'
import QuizMarks from './Marks'
import QuizQuestion from './Questions'
import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../../../store'
import { toggleScreens } from '../../../../../../store/actions/student/quiz/quizSlice'
import { updateQuizReview } from '../../../../../../store/actions/student/quiz/updateQuizReview'

function QuizDetail({ quizDetails, loader, classId }: any) {
    // const { quizzes } = quizDetails;

    const { user } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()
    const showValue = useAppSelector(
        (state: RootState) => state.quizzes.showValue
    )

    const [review, setReview] = useState(0)
    const [feedback, setFeedBack] = useState('')

    const formSubmitHandler = (e: any) => {
        e.preventDefault()
    }

    const toggleReview = (val: number) => {
        setReview(val)
    }

    useEffect(() => {
        dispatch(toggleScreens(0))
    }, [])

    return (
        <>
            <div className='py-4'>
                <div
                    className={`relative w-[100%] ${
                        showValue === 0 ? '' : 'hidden'
                    }`}
                >
                    {quizDetails?.quizzes?.students.length > 0 &&
                    quizDetails?.quizzes?.students[0]?.status ===
                        'completed' ? (
                        <QuizMarks quizMarks={quizDetails?.quizzes} />
                    ) : (
                        <QuizQuestion quizQuestion={quizDetails?.quizzes} />
                    )}
                </div>
                <div
                    className={`relative w-[100%] ${
                        showValue === 1 ? '' : 'hidden'
                    }`}
                >
                    <div className='bg-[#DBE6E3] flex justify-center py-3 rounded-t-lg'>
                        <h1 className='md:text-[12px] md:font-[600] lg:text-[22px] text-[#0F5647]'>
                            Hurrah! You have completed this Quiz
                            <span className='text-[#131414]'>(BEG-C37b)</span>
                        </h1>
                    </div>
                    <div className='bg-[#F7F9F7]'>
                        <h1 className='text-center py-8 md:text-[18px] md:font-[500] lg:text-[28px] lg:font-[600]'>
                            How was your quiz!
                        </h1>
                        <div className='flex justify-center gap-8 font-[500] lg:text-[22px] text-[#8C8C8C]'>
                            <div
                                className={`text-center hover:translate-y-1 cursor-pointer${
                                    review == 1 ? 'hover:translate-y-0' : ''
                                }`}
                                onClick={() => {
                                    toggleReview(1)
                                }}
                            >
                                <div
                                    className={`${
                                        review == 1
                                            ? 'bg-[#FBEAC0] h-[70px] w-[70px] rounded-full flex justify-center border-2 border-[#F0A901]'
                                            : ''
                                    } `}
                                >
                                    <Image src={poorFace} alt='Icon' />
                                </div>
                                <h3
                                    className={`${
                                        review == 1 ? 'font-[500]' : ''
                                    }`}
                                >
                                    Poor
                                </h3>
                            </div>
                            <div
                                className={`text-center hover:translate-y-1 cursor-pointer ${
                                    review == 2 ? 'hover:translate-y-0' : ''
                                }`}
                                onClick={() => {
                                    toggleReview(2)
                                }}
                            >
                                <div
                                    className={`${
                                        review == 2
                                            ? 'bg-[#FBEAC0] h-[70px] w-[70px] rounded-full flex justify-center border-2 border-[#F0A901]'
                                            : ''
                                    } `}
                                >
                                    <Image src={fairFace} alt='Icon' />
                                </div>
                                <h3
                                    className={`${
                                        review == 2 ? 'font-[500]' : ''
                                    }`}
                                >
                                    Fair
                                </h3>
                            </div>
                            <div
                                className={`text-center hover:translate-y-1 cursor-pointer ${
                                    review == 3 ? 'hover:translate-y-0' : ''
                                }`}
                                onClick={() => {
                                    toggleReview(3)
                                }}
                            >
                                <div
                                    className={`${
                                        review == 3
                                            ? 'bg-[#FBEAC0] h-[70px] w-[70px] rounded-full flex justify-center border-2 border-[#F0A901]'
                                            : ''
                                    } `}
                                >
                                    <Image src={goodFace} alt='Icon' />
                                </div>
                                <h3
                                    className={`${
                                        review == 3 ? 'font-[500]' : ''
                                    }`}
                                >
                                    Good
                                </h3>
                            </div>
                            <div
                                className={`text-center hover:translate-y-1 cursor-pointer ${
                                    review == 4 ? 'hover:translate-y-0' : ''
                                }`}
                                onClick={() => {
                                    toggleReview(4)
                                }}
                            >
                                <div
                                    className={`${
                                        review == 4
                                            ? 'bg-[#FBEAC0] h-[70px] w-[70px] rounded-full flex justify-center border-2 border-[#F0A901]'
                                            : ''
                                    } `}
                                >
                                    <Image src={very_good_Face} alt='Icon' />
                                </div>
                                <h3
                                    className={`${
                                        review == 4 ? 'font-[500]' : ''
                                    }`}
                                >
                                    Very Good
                                </h3>
                            </div>
                            <div
                                className={`text-center hover:translate-y-1 cursor-pointer ${
                                    review == 5 ? 'hover:translate-y-0' : ''
                                }`}
                                onClick={() => {
                                    toggleReview(5)
                                }}
                            >
                                <div
                                    className={`${
                                        review == 5
                                            ? 'bg-[#FBEAC0] h-[70px] w-[70px] rounded-full flex justify-center border-2 border-[#F0A901]'
                                            : ''
                                    } `}
                                >
                                    <Image src={excellentFace} alt='Icon' />
                                </div>
                                <h3
                                    className={`${
                                        review == 5 ? 'font-[500]' : ''
                                    }`}
                                >
                                    Excellent
                                </h3>
                            </div>
                        </div>

                        <div className=''>
                            <form
                                className='py-6 w-full flex-col flex justify-center items-center '
                                onSubmit={formSubmitHandler}
                            >
                                <textarea
                                    value={feedback}
                                    placeholder='Tell us more'
                                    className='w-[400px] h-[117px] p-2 focus:border-[#0F5647] focus:ring-0'
                                    onChange={(e: any) =>
                                        setFeedBack(e.target.value)
                                    }
                                ></textarea>
                                <br></br>
                                <p className='font-[400] lg:text-[22px] text-[#454545]'>
                                    We read 100% of feedbacks!
                                </p>
                                <p className='font-[400] lg:text-[22px] text-[#454545]'>
                                    Your answer helps us get better :
                                </p>
                                <button
                                    type='submit'
                                    className='bg-[#F0A901]  lg:w-[220px] my-6 px-8 py-4 mb-10 rounded-md text-[#FFFFFF] md:text-[15px]
               lg:text-[22px] font-[500] disabled:bg-[#BFBFBF]'
                                    disabled={!review ? true : false}
                                    onClick={() => {
                                        const studentQuiz: any = {
                                            quizId: quizDetails?.quizzes
                                                ?.quizId,
                                            studentId:
                                                quizDetails?.quizzes
                                                    ?.students[0].studentId,
                                            review: review,
                                            feedback: feedback,
                                        }
                                        dispatch(updateQuizReview(studentQuiz))
                                        !review
                                            ? true
                                            : dispatch(toggleScreens(2))
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='flex justify-center -mt-10'>
                        <button
                            className={`lg:text-[22px]  font-[500] px-40 py-2 rounded-[44px] text-[#355ADC]
               bg-[#E1E6FA] border-[12px] border-[#F3F5FD] hover:bg-[#355ADC] hover:border-[#E1E6FA]
                hover:text-[#FFFFFF]`}
                            onClick={() => dispatch(toggleScreens(2))}
                        >
                            Skip
                        </button>
                    </div>
                </div>
                <div className={`${showValue === 2 ? '' : 'hidden'}`}>
                    <QuizResult quizResult={quizDetails?.quizzes} />
                </div>
                <div className={`${showValue === 3 ? '' : 'hidden'}`}>
                    <QuizMarks quizMarks={quizDetails?.quizzes} />
                </div>
            </div>
        </>
    )
}

export default QuizDetail
