import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RootState, useAppSelector } from '../../../store'
import chevLeftIcon from '/assets/icons/chevLeftBlue.svg'

const Breadcrumb = () => {
    const { user } = useAppSelector((state: RootState) => state.user)
    return (
        <div className='flex gap-4'>
            <Image src={chevLeftIcon} alt='chev-left-icon' width='7' />
            <h3 className='text-[#355ADC] font-author md:text-[16px] lg:text-[20px]'>
                <Link href={!!user && `/${user?.role}`}>
                    Go Back To Dashboard
                </Link>
            </h3>
        </div>
    )
}

export default Breadcrumb
