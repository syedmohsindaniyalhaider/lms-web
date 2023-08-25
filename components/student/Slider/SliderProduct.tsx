import React, { useState } from 'react'
import Image from 'next/image'
import Pencil from '/assets/images/Pencilholder.png'

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import es from 'date-fns/locale/es';

function SliderProduct() {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <div className='flex items-center'>
                <div className='flex z-0 flex-row gap-1'>
                    <div className='w-3 h-2 bg-secondary text-secondary rounded-[40%] '></div>
                    <div className='w-3 h-2 bg-secondary text-secondary rounded-[40%] '></div>
                    <div className='w-3 h-2 bg-secondary text-secondary rounded-[40%] '></div>
                    <div className='w-3 h-2 bg-secondary text-secondary rounded-[40%] '></div>
                </div>

                <div className=' z-50 min-w-[367px]  bg-white w-[367px] h-[203px] top-[25px] left-[109px] shadow-md rounded-md flex flex-col  items-start p-0 gap-[15px] '>
                    <div className='flex flex-row justify-between w-full'>
                        <p className='w-[84px] h-[34px] bg-[#F0A901] rounded-tl-[8px] rounded-br-[8px] text-center py-[5px] text-white font-Author font-semibold text-[20px] leading-[24px] pl-[5px] pr-[5px] '>
                            level 01
                        </p>
                        <p className='mr-10 w-[146px] h-[56px] box-border bg-white border-[1.5px] border-[#F0A901] rounded-md mt-[-22px] shadow-[0px_2px_10px_rgba(240,169,1,0.25)]  '>
                            icons
                        </p>
                    </div>

                    <div className='flex flex-row w-full justify-around '>
                        <div>
                            <Image
                                className='absolute rounded-md'
                                src={Pencil}
                                alt='Picture of the author'
                                width={125}
                                height={139}
                            />
                        </div>
                        <div className='w-[200px] h-[48px] '>
                            <p className='text-[22px] leading-[24px]'>
                                Introduction to User Interface
                            </p>
                            <p className='bg-[#DBE6E3] w-[92px] h-[32px] text-center pt-1.5 rounded-[100px] mt-[10px] text-[14px] font-[596] text-secondary pl-2 pr-2'>
                                Completed
                            </p>

                            <div className='mt-[25px] flex flex-row content-center items-center'>
                                {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   locale="es" /> */}
                                {/* <span><DateRangeIcon /></span> <p className='text-[15px] pl-2 family-Author font-[494]'>Monday,12-08-2020</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' z-50 min-w-[367px]  bg-white w-[367px] h-[203px] top-[25px] left-[109px] shadow-md rounded-md flex flex-col  items-start p-0 gap-[15px] '>
                    <div className='flex flex-row justify-between w-full'>
                        <p className='w-[84px] h-[34px] bg-[#F0A901] rounded-tl-[8px] rounded-br-[8px] text-center py-[5px] text-white font-Author font-semibold text-[20px] leading-[24px] pl-[5px] pr-[5px] '>
                            level 01
                        </p>
                        <p className='mr-10 w-[146px] h-[56px] box-border bg-white border-[1.5px] border-[#F0A901] rounded-md mt-[-22px] shadow-[0px_2px_10px_rgba(240,169,1,0.25)]  '>
                            icons
                        </p>
                    </div>

                    <div className='flex flex-row w-full justify-around '>
                        <div>
                            <Image
                                className='absolute rounded-md'
                                src={Pencil}
                                alt='Picture of the author'
                                width={125}
                                height={139}
                            />
                        </div>
                        <div className='w-[200px] h-[48px] '>
                            <p className='text-[22px] leading-[24px]'>
                                Introduction to User Interface
                            </p>
                            <p className='bg-[#DBE6E3] w-[92px] h-[32px] text-center pt-1.5 rounded-[100px] mt-[10px] text-[14px] font-[596] text-secondary pl-2 pr-2'>
                                Completed
                            </p>

                            <div className='mt-[25px] flex flex-row content-center items-center'>
                                {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   locale="es" /> */}
                                <span>{/* <DateRangeIcon /> */}</span>{' '}
                                <p className='text-[15px] pl-2 family-Author font-[494]'>
                                    Monday,12-08-2020
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderProduct
