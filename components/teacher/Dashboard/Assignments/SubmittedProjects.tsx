import React from 'react'
import Image from 'next/image'
import Bq2 from '/assets/images/Black-quiz-2.png'
import Watch from '/assets/images/WatchBlack.svg'
import { useRouter } from 'next/router'

const SubmittedProjects = ({ teacherProject }: any) => {
    // const [value, setValue] = React.useState<number | null>(2);
    const router = useRouter()

    const studentSubmittedProject = teacherProject
    return (
        <>
            <div className='pr-2 '>
                <div className='bg-white shadow-lg  rounded-lg'>
                    <div className='relative z-10 bg-[#DBE6E3] lg:text-[16px] md:text-[14px] text-center items-center font-bold text-[#0F5647] lg:w-[125px] md:w-[100px] p-2 rounded-br-lg'>
                        Submitted
                    </div>
                    {/* Card */}
                    <div className='p-4 -z-50 -mt-10'>
                        <div className=' rounded-lg overflow-hidden lg:h-[120px] md:h-[110px] bg-red-600'>
                            <Image
                                alt='image'
                                src={Bq2}
                                className='object-cover lg:h-[120px] md:h-[110px] '
                            />
                        </div>
                        <h2 className='text-[#131414] text-[20px] font-semibold'>
                            Color Psychology
                        </h2>
                        <div className='text-[#355ADC] font-semibold text-[15px] '>
                            BEG-C37
                        </div>
                        <h2 className='text-[#454545] text-[18px] font-[400]'>
                            Q # 12: Color Psychology in Design
                        </h2>
                        <div className='bg-[#F5F5F5] my-5 -mx-4 px-4 py-2 lg:mt-[5px]'>
                            <div className='text-[##131414] font-semibold lg:text-[15px] md:text-[14px] items-center '>
                                Student Name{' '}
                            </div>
                            <div className='flex gap-3  items-center'>
                                <div className='items-center inline-block pt-[2px] md:pt-0 text-[#131414;]'>
                                    <Image alt=' ' src={Watch}></Image>
                                </div>
                                <div className='text-[#262626] lg:text-[16px] md:text-[14px] font-semibold items-center'>
                                    31st August, 2022 - 2 pm
                                </div>
                            </div>
                            <div className='rounded-full w-[100px] mt-1 flex items-center justify-center bg-[#336F63]'>
                                <h2 className='text-[18px] font-[400] text-[#FFFFFF]'>
                                    Score: 08/10
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='-mt-5 pl-4 pb-4'>
                        <button
                            className='bg-[#F0A901]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'
                            onClick={() =>
                                router.push('teacher/classes/review')
                            }
                        >
                            <span className='relative z-40'>
                                REVIEW PROJECT
                            </span>
                            <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#DF9D00]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                            <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#DF9D00] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmittedProjects
