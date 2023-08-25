import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Cricle from '../../../public/info-circle.png'
import Image from 'next/image'
function ProgressBar({ heading, description, textColor, value }: any) {
    return (
        <div>
            <div className='py-4'>
                <div className='flex md:items-center md:px-[100px] items-center'>
                    <h2 className='text-[#131414] text-left  font-semibold md:text-[20px] leading-none  flex items-center justify-center '>
                        {heading}
                    </h2>
                    <div className='w-[50px] h-[50px] pt-3 px-2'>
                        <Image src={Cricle} alt='image' />
                    </div>
                </div>
                <div className='flex items-center space-y-1 justify-center gap-3 '>
                    <h1
                        style={{ color: textColor }}
                        className={`font-extrabold md:text-[24px] xl:text-[38px] text-[28px] `}
                    >
                        {value === 0 ? 0 : value.toFixed(2)}%
                    </h1>
                    <div className='flex items-center justify-center space-y-2 '>
                        <CircularProgressbar
                            value={value}
                            className='h-[120px] accent-[#679CDA]'
                            strokeWidth={10}
                            styles={buildStyles({
                                textColor: textColor,
                                pathColor: textColor,
                            })}
                            // Rotation of path a}
                        />
                    </div>
                </div>
                <p className='py-4 px-4'>{description}</p>
            </div>
        </div>
    )
}

export default ProgressBar
