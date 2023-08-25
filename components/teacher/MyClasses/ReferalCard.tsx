import React from 'react'
import Image from 'next/image'
import Green from '/assets/images/Green.svg'
import Red from '/assets/images/red.svg'
import Link from 'next/link'

function ReferalCard(props: any) {
    return (
        <>
            <div
                className={`rounded-lg border-2 md:w-[275px] max-w-[330px] 2xl:w-[330px] min-w-[275px] ${
                    props?.classStatus === 'cancelled'
                        ? 'bg-[#FFF8F8] border-[#FEE5E3]'
                        : 'bg-[#F5F8F8] border-[#DBE6E3]'
                }`}
            >
                <div className='px-3 py-3.5 flex gap-3 '>
                    <div className=''>
                        <div className='flex items-center gap-3'>
                            <div className='font-author text-[22px] 2xl:text-[26px] font-extrabold'>
                                Class {props?.classCode}
                            </div>
                            <div
                                className={`rounded-xl h-1 w-1 ${
                                    props?.classStatus === 'cancelled'
                                        ? 'bg-[#F94F46]'
                                        : 'bg-[#0F5647]'
                                }`}
                            ></div>
                            <div
                                className={`font-author text-[18px] 2xl:text-[22px] font-medium ${
                                    props?.classStatus === 'cancelled'
                                        ? 'text-[#F94F46]'
                                        : 'text-[#0F5647]'
                                }`}
                            >
                                {props?.classStatus}
                            </div>
                        </div>
                        <div className='flex font-author -mt-1'>
                            <div className='font-semibold border-r-2 border-[#D9D9D9] pr-[10px] text-[13px] 2xl:text-[17px]'>
                                {props?.date}
                            </div>
                            <div className='font-semibold pl-[10px] text-[13px] 2xl:text-[17px]'>
                                {props?.startTime}
                            </div>
                        </div>
                    </div>
                    <div className='-mt-8 '>
                        <Image
                            alt=''
                            src={
                                props?.classStatus === 'cancelled' ? Red : Green
                            }
                        />
                    </div>
                </div>
                <div className='bg-white px-3 py-3.5'>
                    <div className='text-[22px] 2xl:text-[26px] font-author font-semibold'>
                        What is your best topic?
                    </div>
                    <div className='font-author 2xl:text-[18px]'>
                        {props?.description}
                    </div>
                </div>
                <div className='px-3 bg-white pb-4 rounded-b-lg'>
                    <button className='bg-[#717688]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'>
                        <span className='relative z-40'>
                            <Link href={`/classes/${props?.classCode}`}>
                                VIEW CLASS DETAILS
                            </Link>
                        </span>
                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#4d5161]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#4d5161] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReferalCard
