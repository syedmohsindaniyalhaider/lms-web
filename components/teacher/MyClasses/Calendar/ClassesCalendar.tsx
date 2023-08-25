import React from 'react'
import Image from 'next/image'
import CalendarSlider from './CalendarSlider'
import Link from 'next/link'
import Breadcrumb from '../../../ui/Breadcrumb'

function ClassesCalendar() {
    return (
        <>
            <div className='w-auto'>
                <div className='flex justify-between'>
                    <div>
                        <Breadcrumb />
                        <div>
                            <h1 className='font-extrabold text-[22px] text-[#131414] pb-4'>
                                My Classes & Calendar
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='mx-6 bg-[#FBF2DC] pt-6'>
                    <CalendarSlider />
                </div>
            </div>
        </>
    )
}

export default ClassesCalendar
