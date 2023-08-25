import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import arrowLeft from '/assets/icons/arrowLeft.svg'
import arrowRight from '/assets/icons/arrowRight.svg'

import { useAppDispatch, useAppSelector, RootState } from '../../../../../store'

const QuizDetail = ({ quizDetails }: any) => {
    const [quizNumber, setQuizNumber] = useState(0)

    const [questionHandler, setQuestionHandler] = useState<any>()

    const countHandler = (add: string) => {
        if (add === 'plus') {
            quizNumber < quizDetails?.questions.length - 1
                ? setQuizNumber((prevNumber) => prevNumber + 1)
                : setQuizNumber(0)
        } else {
            quizNumber > 0
                ? setQuizNumber((prevNumber) => prevNumber - 1)
                : setQuizNumber(quizDetails?.questions.length - 1)
        }
        setQuestionHandler(quizDetails?.questions[quizNumber])
    }

    useEffect(() => {
        if (quizDetails?.questions?.length > 0)
            setQuestionHandler(quizDetails?.questions[quizNumber])
    }, [quizDetails?.questions, quizNumber])
    return (
        <div className='-ml-[62px] -mr-[70px]'>
            <div className='flex gap-4 p-6 text-[#0F5647] bg-white md:text-[18px] font-[500] lg:text-[24px]'>
                {quizDetails?.questions?.map((ele: any, index: any) => (
                    <div
                        key={ele?.questionId}
                        className={`h-9 w-9 rounded-full border-[#0F5647] border-2 flex items-center justify-center
          
          `}
                        onClick={() => setQuizNumber(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <div className='bg-[#F7F9F7] flex'>
                <div className='w-[50%] p-4 space-y-2 border-r-2 border-[#DBE6E3] '>
                    <h1 className='font-[600] xl:text-[20px]'>Question:</h1>
                    <h3 className='font-[400] xl:text-[22px] pb-3'>
                        {quizDetails?.questions?.length > 0 &&
                            quizDetails?.questions[quizNumber]?.question}
                    </h3>
                    <div className='flex justify-between '>
                        <button
                            className='border-2 border-transparent hover:border-[#F0A901] flex items-center gap-2 rounded-lg 
              text-[14px] font-[500] lg:text-[500] p-2 '
                            onClick={() => countHandler('minus')}
                        >
                            <Image src={arrowLeft} alt='icon' />
                            <span className='md:text-[14px] lg:text-[22px] font-[500]'>
                                Previous Question
                            </span>
                        </button>
                        <button
                            className='border-2 border-transparent hover:border-[#F0A901] flex items-center gap-2 rounded-lg 
              text-[14px] font-[500] lg:text-[500] p-2'
                            onClick={() => countHandler('plus')}
                        >
                            <span className='md:text-[14px] lg:text-[22px] font-[500]'>
                                Next Question
                            </span>
                            <Image src={arrowRight} alt='icon' />
                        </button>
                    </div>
                    <div className='flex-col flex h-max bg-[#F3F5FD] -mx-4 px-4 py-8'>
                        <h1 className='font-[600] xl:text-[20px]'>Solution:</h1>
                        <p className='font-[400] xl:text-[22px] xl:leading-[28px]'>
                            <span className='text-blue-600 bold pr-2'>
                                &quot;
                                {quizDetails?.questions?.length > 0 &&
                                    quizDetails?.questions[quizNumber]
                                        ?.correctAnswer}
                                &quot;
                            </span>
                            is the correct answer
                        </p>
                    </div>
                </div>
                <div className='bg-[#F7F9F7] w-[50%] '>
                    <h1 className='xl:text-[20px] font-[600] mx-4'>
                        Multiple Choices:
                    </h1>
                    {quizDetails?.questions?.length > 0 &&
                        quizDetails?.questions[quizNumber]?.options?.map(
                            (ele: any, index: any) => (
                                <div
                                    key={ele?.questionId}
                                    className={`flex justify-between items-center px-6 p-2 m-4 border-2 border-[#F0F0F0] bg-[#F0F0F0] rounded-md `}
                                >
                                    {/* updated */}
                                    <div>
                                        <h1
                                            className={`font-[500] xl-[22px] py-1 `}
                                        >
                                            ({index + 1})
                                        </h1>
                                        <p className='font-[400] md:text-[14px] xl:text-[20px] text-[#131414]'>
                                            {ele}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    )
}

export default QuizDetail
