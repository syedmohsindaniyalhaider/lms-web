import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Wallet from '/public/wallet.svg'
import Image from 'next/image'
import Avatar from '/assets/images/invite1.svg'
import Avatar1 from '/assets/images/invite2.svg'
import Avatar2 from '/assets/images/invite3.svg'
import Stars from '/assets/images/Bitmap.svg'
import pic from '/public/sammy-message-sent 1.png'
import Whatsapp from '/public/whatsapp 1.svg'
import Email from '/public/sms-tracking.svg'
import SMS from '/public/message.svg'
import BreadCrumb from '../../ui/Breadcrumb'

function ReferComp() {
    return (
        <div className='font-author'>
            <div className='flex'>
                <div>
                    <div className='flex items-center'>
                        <BreadCrumb />
                    </div>
                    <h2
                        className='md:text-[22px] md:font-[700] md:pl-[10px] md:text-[#131414] md:leading-[24px] 
           lg:text-[34px] lg:font-[700] lg:leading-[38px] font-Author'
                    >
                        Invite a friend & get $100
                    </h2>
                </div>
            </div>

            <div className='container mt-5 mx-auto lg:w-[100%] py-4 px-4  bg-gradient-to-r  from-[#F0A901] to-[#F94F46] rounded-[32px] '>
                <div className='lg:w-[100%] bg-[#FFFDFD]  rounded-[24px]'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px] '>
                            {' '}
                            <Image src={Wallet} alt='' />
                        </div>
                        <p
                            className='md:text-[18px] md:font-[500] md:leading-[22px] md:pl-[5px] lg:text-[20px] lg:pl-[10px]
             text-[#F0A901] lg:leading-[24px]'
                        >
                            REFERRAL REWARD
                        </p>
                    </div>

                    <div className='grid grid-cols-12'>
                        <div className='col-span-7 md:px-6 lg:px-6'>
                            <p className=' lg:text-[42px] lg:leading-[44px] md:text-[24px] md:leading-[28px] text-[#665D5D] md:font-[600] '>
                                Share the joy of learning! <br />
                                Get up to{' '}
                                <span className='text-[#F0A901]'>$100 </span>for
                                every friend who joins
                            </p>
                            <p className='text-[#665D5D] md:py-2 lg:px-2 lg:py-4 md:font-[600] lg:text-[28px] lg:font-[500]'>
                                Your friend gets up to £225 as well*
                            </p>
                            <div className='lg:w-[100%] md:w-[100%] md:h-[50px] md:my-2 lg:h-[78px] lg:my-2  rounded-[1000px] shadow-[0px_0px_20px_rgba(188,49,42,0.2)]'>
                                <div className='lg:px-6  md:py-2  md:px-6 items-center flex text-black justify-between'>
                                    <p className='md:text-[14px] md:font-[400] lg:text-[22px]'>
                                        https://whjr.co/AtjlC
                                    </p>
                                    <button
                                        className='md:w-[123px] md:h-[35px] md:text-[14px] md:font-[600] lg:text-[22px] lg:font-[500] lg:w-[183px] lg:my-1 lg:h-[56px] 
                  bg-[#F94F46] rounded-[1000px] text-white'
                                    >
                                        Copy Invite link
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <div className='flex items-center space-x-[-50px] lg:max-w-[150px] min-w-[130px]'>
                                    <div className=''>
                                        <Image
                                            src={Avatar}
                                            alt=''
                                            className='text-white '
                                        />
                                    </div>
                                    <div className=''>
                                        <Image
                                            src={Avatar1}
                                            alt=''
                                            className='text-white '
                                        />
                                    </div>
                                    <div className=''>
                                        <Image
                                            src={Avatar2}
                                            alt=''
                                            className='text-white '
                                        />
                                    </div>
                                </div>
                                <h3
                                    className=' font-author md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[20px]
                lg:leading-[26px] text-[#355ADC] '
                                >
                                    5000+ parents globally have invited their
                                    friends
                                </h3>
                                <Image src={Stars} alt='/' className='' />
                            </div>

                            {/* <mdDown> */}
                            <div className='py-4 '>
                                <p className='text-[#665D5D] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[20px] lg:font-[400] lg:leading-[26px]'>
                                    *When friend buys individual classes, the
                                    Amazon Gift Card reward is £225 for 80+
                                    classes | £125 for 48-79 classes | £25 for
                                    6-47 classes. T&Cs apply.
                                </p>
                            </div>
                            {/* </mdDown> */}
                        </div>

                        <div className='col-span-5 lg:px-4'>
                            <Image src={pic} alt='' />
                        </div>
                    </div>

                    <div className='md:w-[100%] md:h-[107px] lg:w-[100%] lg:h-[104px] rounded-[24px] shadow-[-5px_0px_25px_rgba(0,0,0,0.15)]'>
                        <div className='lg:flex justify-center items-center content-center align-center md:py-0 lg:py-6'>
                            <div className='lg:px-4 text-[#131414] lg:font-[596] lg:text-[20px]'>
                                <p
                                    className='text-center md:leading-[22px] md:text-[20px] md:font-semibold md:py-3 lg:text-[28px]
                lg:font-[600]'
                                >
                                    Share with friends
                                </p>
                            </div>
                            <div className='flex justify-center gap-3'>
                                <div className='py-2 md:px-3 flex gap-2 bg-[#4CAF50] items-center rounded-[8px] text-white'>
                                    <div className='flex items-center'>
                                        <Image
                                            src={Whatsapp}
                                            alt=''
                                            height='20'
                                        />
                                    </div>
                                    <p className='md:text-[15px] lg:text-[20px] lg:font-[500]'>
                                        Invite via WhatsApp
                                    </p>
                                </div>
                                <div className=' md:py-1 md:px-3 flex gap-2 bg-[#131414] items-center rounded-[8px] text-white'>
                                    <div className='flex items-center'>
                                        <Image src={Email} alt='' height='20' />
                                    </div>
                                    <p className='md:text-[15px] lg:text-[20px] lg:font-[500]'>
                                        Invite via Email
                                    </p>
                                </div>
                                <div className=' md:py-1 md:px-3 flex gap-2 bg-[#355ADC] items-center rounded-[8px] text-white'>
                                    <div className='flex items-center'>
                                        <Image src={SMS} alt='' height='20' />
                                    </div>
                                    <p className='md:text-[15px] lg:text-[20px] lg:font-[500]'>
                                        Receive via text
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferComp
