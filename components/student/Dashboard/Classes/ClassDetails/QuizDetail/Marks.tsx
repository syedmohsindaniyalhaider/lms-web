import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import arrowLeft from '/assets/icons/arrowLeft.svg'
import arrowRight from '/assets/icons/arrowRight.svg'
import quizDummyImage from '/assets/icons/quizDummyImage.svg'
import quizResultIcon from '/assets/icons/quizResultIcon.svg'
import quizResultTrueIcon from '/assets/icons/quizResultTrueIcon.svg'
import quizResultRedIcon from '/assets/icons/quizResultRedIcon.svg'
import quizResultFalseIcon from '/assets/icons/quizResultFalseIcon.svg'
import resultFalseRedIcon from '/assets/icons/resultFalseRedIcon.svg'
// import AnswerKey from "../../"
import { RootState, useAppSelector } from '../../../../../../store'

const Marks = ({ quizMarks }: any) => {
    const { quizzes } = useAppSelector((state: RootState) => state.quizzes)
    const [quizNumber, setQuizNumber] = useState(0)
    const [data, setData] = useState<any>()
    const [questionHandler, setQuestionHandler] = useState<any>()

    const countHandler = (add: string) => {
        if (add === 'plus') {
            quizNumber < quizMarks?.questions.length - 1
                ? setQuizNumber((prevNumber) => prevNumber + 1)
                : setQuizNumber(0)
        } else {
            quizNumber > 0
                ? setQuizNumber((prevNumber) => prevNumber - 1)
                : setQuizNumber(quizMarks?.questions.length - 1)
        }
        setQuestionHandler(quizMarks?.questions[quizNumber])
    }

    useEffect(() => {
        if (quizMarks?.questions?.length > 0)
            setQuestionHandler(quizMarks?.questions[quizNumber])
    }, [quizMarks?.questions, quizNumber])

    return (
        <>
            <div className='bg-[#DBE6E3] text-center py-2'>
                <h1 className='text-[#0F5647] md:text-[12px] md:font-[600] xl:text-[22px]'>
                    Hurrah! You have completed this Quiz{' '}
                    <span className='text-[#131414] xl:text-[20px]'>
                        {quizMarks?.quizDescription}
                    </span>
                </h1>
            </div>
            <div className='flex bg-white items-center justify-between'>
                <div className=' flex gap-4  p-6 text-[#0F5647] bg-white md:text-[18px] font-[500] lg:text-[24px]'>
                    {quizMarks?.questions?.map((ele: any, index: any) => (
                        <div
                            key={ele?.questionId}
                            className={`flex h-9 w-9 rounded-full border-[#0F5647] border-2 items-center justify-center
          
          ${
              quizNumber === index &&
              ele?.students[0]?.answer === ele?.correctAnswer
                  ? 'bg-[#0F5647] border-[#0F5647] text-white'
                  : quizNumber === index &&
                    ele?.students[0]?.answer !== ele?.correctAnswer
                  ? 'bg-[#F94F46] border-[#F94F46] text-white'
                  : 'text-[#0F5647]'
          } `}
                            onClick={() => setQuizNumber(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                <div className='flex px-4'>
                    {/* <div className="bg-[#FEE5E3] w-[38px] h-[38px] rounded-full px-2 py-1">
         <Image src={AnswerKey} alt="image" width="20" height='20' />
       </div>
       <p>Exit Answer Key</p> */}
                </div>
            </div>
            <div className='bg-[#F7F9F7] flex'>
                <div className='w-[50%] p-4 space-y-2 border-r-2 border-[#DBE6E3]'>
                    <h1 className='font-[600] xl:text-[20px]'>Question:</h1>
                    <h3 className='font-[400] xl:text-[22px] pb-3'>
                        {quizMarks?.questions?.length > 0 &&
                            quizMarks?.questions[quizNumber]?.question}
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
                    <div className='flex-col flex h-max bg-[#F3F5FD] px-4 py-8'>
                        <h1 className='font-[600] xl:text-[20px]'>Solution:</h1>
                        <p className='font-[400] xl:text-[22px] xl:leading-[28px]'>
                            <span className='text-blue-600 bold pr-2'>
                                &quot;
                                {quizMarks?.questions?.length > 0 &&
                                    quizMarks?.questions[quizNumber]
                                        ?.correctAnswer}
                                &quot;
                            </span>
                            is the correct answer
                        </p>
                    </div>
                </div>
                <div className='bg-[#F7F9F7] w-[50%] '>
                    <div
                        className={`bg-inherit flex justify-center gap-4 py-2 m-4 border-[1px] border-[#0F5647] text-[#0F5647] rounded-md 
            font-[500] xl:text-[22px] ${
                quizMarks?.questions?.length > 0 &&
                quizMarks?.questions[quizNumber]?.correctAnswer ===
                    quizMarks?.questions[quizNumber]?.students[0]?.answer
                    ? ''
                    : 'border-[#F94F46]'
            } `}
                    >
                        {quizMarks?.questions?.length > 0 &&
                        quizMarks?.questions[quizNumber]?.correctAnswer ===
                            quizMarks?.questions[quizNumber]?.students[0]
                                ?.answer ? (
                            <Image src={quizResultIcon} alt='Icon' />
                        ) : (
                            <Image src={resultFalseRedIcon} alt='Icon' />
                        )}
                        <h1 className='xl-text-[22px] font-[500]'>
                            {quizMarks?.questions?.length > 0 &&
                            quizMarks?.questions[quizNumber]?.correctAnswer ===
                                quizMarks?.questions[quizNumber]?.students[0]
                                    ?.answer ? (
                                <span>Correct Answer - Great Job</span>
                            ) : (
                                <span className='text-[#F94F46]'>
                                    Wrong Answer - Do better next time
                                </span>
                            )}
                        </h1>
                    </div>
                    <h1 className='xl:text-[20px] font-[600] mx-4'>
                        Multiple Choices:
                    </h1>
                    {/*  */}
                    {quizMarks?.questions?.length > 0 &&
                        quizMarks?.questions[quizNumber]?.options?.map(
                            (ele: any, index: any) => (
                                <div
                                    key={ele?.questionId}
                                    className={`flex justify-between items-center px-6 p-2 m-4 border-2 border-[#F0F0F0] rounded-md ${
                                        quizMarks?.questions[quizNumber]
                                            ?.correctAnswer ===
                                            quizMarks?.questions[quizNumber]
                                                ?.students[0]?.answer &&
                                        ele ===
                                            questionHandler?.students[0]?.answer
                                            ? 'bg-[#DBE6E3]'
                                            : quizMarks?.questions[quizNumber]
                                                  ?.correctAnswer !==
                                                  quizMarks?.questions[
                                                      quizNumber
                                                  ]?.students[0]?.answer &&
                                              ele ===
                                                  quizMarks?.questions[
                                                      quizNumber
                                                  ]?.students[0]?.answer
                                            ? 'bg-[#FEE5E3] text-[#F94F46]'
                                            : ele ===
                                              quizMarks?.questions[quizNumber]
                                                  ?.correctAnswer
                                            ? 'bg-[#DBE6E3]'
                                            : 'bg-[#F0F0F0]'
                                    }`}
                                >
                                    {/* updated */}
                                    <div>
                                        <h1
                                            className={`font-[500] xl-[22px] py-1 ${
                                                quizMarks?.questions?.length >
                                                    0 &&
                                                quizMarks?.questions[quizNumber]
                                                    ?.correctAnswer ===
                                                    quizMarks?.questions[
                                                        quizNumber
                                                    ]?.students[0]?.answer
                                                    ? 'text-[#0F5647]'
                                                    : ''
                                            }`}
                                        >
                                            ({index + 1})
                                            {quizMarks?.questions?.length > 0 &&
                                            quizMarks?.questions[quizNumber]
                                                ?.correctAnswer ===
                                                quizMarks?.questions[quizNumber]
                                                    ?.students[0]?.answer &&
                                            ele ===
                                                questionHandler?.students[0]
                                                    ?.answer ? (
                                                <span>
                                                    {' '}
                                                    It is the correct answer
                                                </span>
                                            ) : quizMarks?.questions[quizNumber]
                                                  ?.correctAnswer !==
                                                  quizMarks?.questions[
                                                      quizNumber
                                                  ]?.students[0]?.answer &&
                                              ele ===
                                                  quizMarks?.questions[
                                                      quizNumber
                                                  ]?.students[0]?.answer ? (
                                                <span className='text-[#F94F46]'>
                                                    {' '}
                                                    Your Answer
                                                </span>
                                            ) : ele ===
                                              quizMarks?.questions[quizNumber]
                                                  ?.correctAnswer ? (
                                                <span className='text-[#0F5647]'>
                                                    {' '}
                                                    It was the correct answer
                                                </span>
                                            ) : (
                                                ''
                                            )}
                                        </h1>
                                        <p className='font-[400] md:text-[14px] xl:text-[20px] text-[#131414]'>
                                            {ele}
                                        </p>
                                    </div>
                                    <div>
                                        {quizMarks?.questions?.length > 0 &&
                                        quizMarks?.questions[quizNumber]
                                            ?.correctAnswer ===
                                            quizMarks?.questions[quizNumber]
                                                ?.students[0]?.answer &&
                                        ele ===
                                            quizMarks?.questions[quizNumber]
                                                ?.students[0]?.answer ? (
                                            <Image
                                                src={quizResultTrueIcon}
                                                alt='icon'
                                            />
                                        ) : quizMarks?.questions[quizNumber]
                                              ?.correctAnswer !==
                                              quizMarks?.questions[quizNumber]
                                                  ?.students[0]?.answer &&
                                          ele ===
                                              quizMarks?.questions[quizNumber]
                                                  ?.students[0]?.answer ? (
                                            <Image
                                                src={quizResultFalseIcon}
                                                alt='icon'
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </div>
        </>
    )
}

export default Marks
