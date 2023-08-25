import React, { forwardRef, useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import Pencilhld from '/assets/images/Maskgroup-1.svg'
import Date from '/assets/images/Date.svg'
import moment from 'moment'
import Ranking from '/assets/icons/ranking.svg'
const LearningJoCards = forwardRef((props: any, ref: any) => {
    const { classStatus, classCode, classes, date } = props
    const [value, setValue] = useState<number | null>(2)
    const stars = [Ranking, Ranking, Ranking]
    return (
        <div className='flex' ref={ref}>
            <div className='bg-white rounded-lg '>
                <div className='flex justify-between '>
                    <div className='bg-[#F0A901] rounded-tl-lg rounded-br-lg h-[30px] font-medium font-author text-white md:text-[17px] px-3 pt-[1px]'>
                        Level 01
                    </div>
                    <div className='border-2 border-[#F0A901] rounded-xl px-[8px] pt-1 w-[110px] h-[50px] items-center flex -mt-[18px] mr-[20px] bg-white'>
                        <Box
                            className=' '
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <div className='flex'>
                                {stars.map((item, index) => (
                                    <Image
                                        key={index}
                                        src={item}
                                        alt=''
                                        height='30'
                                        width='30'
                                    />
                                ))}
                            </div>
                        </Box>
                    </div>
                </div>
                <div className='flex my-3 px-2 gap-2 w-[360px] max-w-[360px]  pb-2'>
                    <div className=' flex-shrink-0 rounded-lg overflow-hidden mx-2 h-[139px] w-[125px]'>
                        <Image
                            className='rounded'
                            alt=''
                            src={Pencilhld}
                        ></Image>
                    </div>
                    <div>
                        <div className=' md:text-[22px] font-author    font-[596] py-2'>
                            <h1 className='leading-[20px] -mt-1 font-author '>
                                {classes?.classTitle}
                            </h1>
                        </div>
                        <div className='bg-[#DBE6E3] h-[32px] font-author w-fit rounded-2xl font-semibold text-[#0F5647] text-[16px] lg:text-[15px] my-2 px-2 py-1'>
                            {classStatus}
                        </div>
                        {date && (
                            <div className='flex items-center gap-1'>
                                <div className='w-[15px] h-[15px]'>
                                    <Image alt='' src={Date}></Image>
                                </div>
                                <div className='font-semibold lg:font-medium font-author '>
                                    {moment(date, 'DD/MM/YYYY').format(
                                        'dddd Do MMM'
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[5px]'>
                <div className='h-[4px] w-[7px] bg-[#0F5647] rounded-r-xl'></div>
                <div className='h-[4px] w-[8px] bg-[#0F5647] rounded-xl'></div>
                <div className='h-[4px] w-[8px] bg-[#0F5647] rounded-xl'></div>
                <div className='h-[4px] w-[8px] bg-[#0F5647] rounded-xl'></div>
                <div className='h-[4px] w-[8px] bg-[#0F5647] rounded-xl'></div>
                <div className='h-[4px] w-[8px] bg-[#0F5647] rounded-xl'></div>
                <div className='h-[4px] w-[6px] bg-[#0F5647] rounded-l-xl'></div>
            </div>
        </div>
    )
})

LearningJoCards.displayName = 'LearningJoCards'

export default LearningJoCards
