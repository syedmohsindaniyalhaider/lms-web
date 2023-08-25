import { Hidden } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import coolKid from '/public/cool-kid-study.svg'
import familyValues from '/public/family-value.svg'
import happyBunch from '/public/happy-bunch-chatting.svg'

function Cards() {
    return (
        <>
            <div className='my-8'>
                <h3
                    className='text-center text-[#131414] font-author md:text-[20px] md:font-[700] md:leading-[22px] 
          lg:text-[28px] lg:font-[600] lg:leading-[32px]'
                >
                    Get rewards, just follow these 3 steps
                </h3>
            </div>

            <div className='relative flex my-4 items-center justify-center'>
                <div className='absolute z-10 flex gap-1 w-[100%] justify-center'>
                    <div className='border-b-8 border-dashed border-yellow-500 h-2 w-[50%] flex justify-center'></div>
                </div>
                <div className='z-20'>
                    <div className='flex md:gap-4 lg:gap-6 items-center justify-center'>
                        <div
                            className='bg-white p-4 max-w-[300px] flex flex-col items-center justify-center rounded-xl 
            shadow-xl'
                        >
                            <div className=''>
                                <Image src={familyValues} alt='happy-bunch' />
                            </div>
                            <div>
                                <h1
                                    className='md:font-[600] md:leading-[20px] lg:text-[24px] lg:leading-[28px] text-center 
                font-author py-1'
                                >
                                    1. Share invite link
                                </h1>
                                <p
                                    className='font-author text-center text-[#454545] md:text-[14px] md:font-[400] 
                md:leading-[18px] lg:text-[20px] lg:leading-[26px]'
                                >
                                    Share your unique invite link. You can get
                                    rewarded for unlimited friends!
                                </p>
                            </div>
                        </div>

                        <div className='bg-white mx-5 px-4 py-6 max-w-[300px] flex flex-col items-center justify-center rounded-xl shadow-xl'>
                            <div className=''>
                                <Image src={coolKid} alt='coolKid' />
                            </div>
                            <div>
                                <h1
                                    className='md:font-[600] md:leading-[20px] lg:text-[24px] lg:leading-[28px] text-center 
                font-author py-1'
                                >
                                    2. Friend joins via link
                                </h1>
                                <p
                                    className='font-author text-center text-[#454545] md:text-[14px] md:font-[400] 
                md:leading-[18px] lg:text-[20px] lg:leading-[26px]'
                                >
                                    Friend registers via invite link & joins a
                                    program - Coding, Math & more.
                                </p>
                            </div>
                        </div>

                        <div className='bg-white p-4 max-w-[300px] flex flex-col items-center justify-center rounded-xl shadow-xl'>
                            <div className=''>
                                <Image
                                    src={happyBunch}
                                    alt='family-values'
                                    height='340'
                                />
                            </div>
                            <div>
                                <h1
                                    className='md:font-[600] md:leading-[20px] lg:text-[24px] lg:leading-[28px] text-center 
                font-author py-1'
                                >
                                    3. Get your reward
                                </h1>
                                <p
                                    className='font-author text-center text-[#454545] md:text-[14px] md:font-[400] 
                md:leading-[18px] lg:text-[20px] lg:leading-[26px]'
                                >
                                    You & your friend get up to £100 EACH in
                                    Gift cards/vouchers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
