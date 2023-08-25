import React from 'react'
import Image from 'next/image'
import Bq1 from '../../assets/images/Black-quiz-1.png'
import Bq2 from '../../assets/images/Black-quiz-2.png'
import Watch from '../../assets/images/WatchVector.svg'
function AsgGrid() {
    return (
        <>
            <div className='bg-white lg:w-[340px] md:w-[250px] min-w-[250px] shadow-lg max-w-[250px]  rounded-lg'>
                <div className='relative z-50 bg-[#FEE5E3] lg:text-[16px] md:text-[12px] text-center items-center font-bold text-[#F94F46] lg:w-[125px] md:w-[100px] p-2 rounded-br-lg'>
                    Yet to Start
                </div>
                {/* Card */}
                <div className='p-4 -z-50 -mt-10'>
                    <div className=' rounded-lg overflow-hidden lg:h-[140px] md:h-[100px]'>
                        <Image src={Bq1} height='160' alt='assignments-icons' />
                    </div>
                    <div className='lg:text-[24px] md:text-[20px] text-[#262626] font-bold pt-5 pb-2'>
                        Class Quizz
                    </div>
                    <div className='text-[#454545] lg:text-[16px] md:text-[14px]  font-semibold '>
                        Q # 12: Color Psycology in Design
                    </div>
                    <div className='bg-[#FFF8F8] my-5 -mx-4 px-4 py-2'>
                        <div className='text-[#454545] font-semibold lg:text-[15px] md:text-[12px] items-center '>
                            10/100 marks reserved for timely submission
                        </div>
                        <div className='flex gap-3 pt-2'>
                            <div className='items-center inline-block pt-[2px]'>
                                <Image src={Watch} alt='assignments-icons' />
                            </div>
                            <div className='text-[#F94F46] lg:text-[16px] md:text-[12px] font-bold items-center'>
                                2 pm - 31st August, 2022
                            </div>
                        </div>
                    </div>
                </div>
                <div className='-mt-5 pl-4 pb-4'>
                    <button className='bg-[#F0A901]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'>
                        <span className='relative z-40'>START QUIZ</span>
                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-yellow-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-yellow-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AsgGrid
