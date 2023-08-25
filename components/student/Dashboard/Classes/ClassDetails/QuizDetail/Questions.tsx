import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import arrowRight from '/assets/icons/arrowRight.svg'
import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../../../store'
import { answerOfQuiz } from '../../../../../../store/actions/student/questions/updateQuestionAnswer'
import { updateQuizStatus } from '../../../../../../store/actions/student/quiz/updateQuizStatus'
import { toggleScreens } from '../../../../../../store/actions/student/quiz/quizSlice'
import Img from '/public/Vector.svg'

// updated

const Questions = ({ quizQuestion }: any) => {
    const dispatch = useAppDispatch()
    const [green, setGreen] = useState<any>()
    const { user } = useAppSelector((state: RootState) => state.user)
    const [showButton, setShowButton] = useState<any>(false)

    const [selectedData, setSelectedData] = useState<any>({
        questionId: '',
        answer: '',
    })

    const [quizNumber, setQuizNumber] = useState(0)
    const [questionHandler, setQuestionHandler] = useState<any>(
        quizQuestion?.questions[quizNumber - 1]
    )

    const onAnswer = (questionNumber: number, answer: string) => {
        setGreen(answer)
        setShowButton(true)
        setSelectedData({
            questionId: questionNumber,
            answer: answer,
        })
    }

    const countHandler = () => {
        const studentQuiz = {
            quizId: quizQuestion?.quizId,
            studentId: user.clientId,
        }
        setGreen(-1)
        setShowButton(false)
        dispatch(
            answerOfQuiz({
                studentId: user?.clientId,
                answer: selectedData.answer,
                questionId: selectedData.questionId,
                quizId: quizQuestion?.quizId,
            })
        )
        if (quizNumber === quizQuestion?.questions.length - 1) {
            dispatch(updateQuizStatus(studentQuiz))
            dispatch(toggleScreens(1))
        }

        setQuizNumber((prev) => prev + 1)
    }

    useEffect(() => {
        if (quizQuestion?.questions?.length > 0)
            setQuestionHandler(quizQuestion?.questions[quizNumber])
    }, [quizQuestion?.questions, quizNumber])

    return quizQuestion?.questions?.length === 0 ? (
        <div>No quiz here</div>
    ) : (
        <div>
            <div className='-ml-[62px] -mr-[70px]'>
                <div className='bg-[#DBE6E3] text-center py-2'>
                    <h1 className='text-[#0F5647] md:text-[12px] md:font-[600] xl:text-[22px]'>
                        Please complete this Quiz
                        <span className='text-[#131414] xl:text-[20px]'>
                            #{' '}
                            {`${quizQuestion?.quizId} ${quizQuestion?.quizTitle}`}
                        </span>
                    </h1>
                </div>
                <div className='bg-[#F7F9F7] py-4 '>
                    <div className='w-full flex flex-col items-center justify-center p-4 space-y-2 border-r-2 border-[#DBE6E3] '>
                        <h1 className='font-[600] xl:text-[20px]'>
                            Question:{quizNumber + 1}
                        </h1>
                        <h3 className='font-[400] xl:text-[22px] py-3 w-[50%] px-4'>
                            {questionHandler?.question}
                        </h3>
                        {/* <Image src={Img} alt="Question Image" /> */}
                        <div className='bg-[#F7F9F7] w-[50%] '>
                            {questionHandler?.options.map(
                                (ele: any, index: any) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            onAnswer(
                                                questionHandler?.questionId,
                                                ele
                                            )
                                        }}
                                        className={` flex items-center  gap-4  ${
                                            index === green
                                                ? 'bg-[#0F5647] text-white'
                                                : 'bg-[#F0F0F0] hover:bg-[#DBE6E3] hover:text-[#0F5647]'
                                        }   cursor-pointer p-2 m-4 border-2 border-[#F0F0F0] rounded-md`}
                                    >
                                        <h1 className='font-[500] xl:xl-[22px] py-1'>
                                            (
                                            {index === 0
                                                ? 'A'
                                                : index === 1
                                                ? 'B'
                                                : index === 2
                                                ? 'C'
                                                : index === 3
                                                ? 'D'
                                                : null}
                                            )
                                        </h1>
                                        {ele}
                                        <p className='font-[400] md:text-[14px] xl:text-[20px]'></p>
                                    </div>
                                )
                            )}
                            <div
                                className={`flex items-center ${
                                    showButton === true ? 'block' : 'hidden'
                                } justify-center `}
                            >
                                <button
                                    className='border-2 border-transparent bg-[#F0A90130] hover:border-[#F0A901] flex items-center gap-2 rounded-lg 
                         text-[14px] font-[500] lg:text-[500] p-2'
                                    onClick={countHandler}
                                >
                                    <span className='md:text-[14px] lg:text-[22px] font-[500]'>
                                        Next Question
                                    </span>
                                    <Image src={arrowRight} alt='icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
