import React, { useState } from 'react'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
import ChatProfile1 from '/assets/images/Profile1.svg'
import ChatProfile2 from '/assets/images/Profile2.svg'
import ChatProfile3 from '/assets/images/Profile3.svg'
import Attache from '/assets/icons/AttachIcon.svg'
import Send from '/assets/icons/send-2.svg'
import SaraIcon from '/assets/icons/sara.svg'
import {
    CHATWIDGET,
    chatwidget_types,
    CHAT_DATA,
    mychat_types,
} from '../dummy-data/chatwidget-data'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'

const ChatWidget = (props: any) => {
    const [arrow, setArrow] = useState<boolean>(false)
    const [shift, setShift] = useState<boolean>(true)

    return (
        <div>
            {/* chat widget */}
            <div className={shift ? 'visible' : 'hidden'}>
                {/* <Slide direction="right" when={props.showMessage}> */}
                <div
                    className={`${
                        props.mesgemenu
                            ? 'z-50  bg-white overflow-y-scroll scroll-hide h-[885px] w-[450px] md:w-[400px] right-0 '
                            : ' hidden z-50 relative  md:w-[400px] '
                    }`}
                >
                    <div
                        className={`  ${
                            props.mesgemenu
                                ? 'z-50 bg-[#F0A901] sticky top-0 font-author md:text-[17px] lg:text-[24px] p-[10px] font-semibold text-white'
                                : 'bg-[#F0A901] font-author md:text-[17px] lg:text-[24px] p-[10px] font-medium text-white'
                        }`}
                    >
                        Messages
                    </div>

                    <div className='border-b-[1px]  md:p-[10px] lg:p-[10px] border-[#F0A901]'>
                        <div className='flex justify-between items-center pb-2'>
                            <h2 className='md:text-[16px] lg:text-[24px] text-[#131414] font-bold'>
                                Your Teacher’s
                            </h2>
                            <div
                                onClick={() => {
                                    setArrow((arrow) => !arrow)
                                }}
                                className={`w-[30px] h-[30px] rounded-full bg-[#FBF2DC] md:mr-8 lg:mr-3 p-[5px] ${
                                    arrow ? ' bg-[#F0A901]' : ''
                                }`}
                            >
                                {arrow ? (
                                    <ChevronDownIcon
                                        className=' rounded-full text-white'
                                        width='20px'
                                    />
                                ) : (
                                    <ChevronUpIcon
                                        className='text-[#000000]'
                                        width='20px'
                                    />
                                )}
                            </div>
                        </div>
                        <div className={arrow ? ' pt-3 hidden' : ' pt-3'}>
                            <h3 className='px-[5px] lg:text-[15px] text-center bg-[#F5F5F5] rounded-md'>
                                You can only chat with the teacher’s that are
                                assigned to you.
                            </h3>
                            <div className='flex overflow-x-scroll scroll-hide gap-5 items-center pt-4'>
                                {CHATWIDGET.map((value: chatwidget_types) => (
                                    <div
                                        className='flex flex-col justify-center text-center w-[100%]'
                                        key={value.id}
                                    >
                                        <div className='m-auto w-[50px] h-[50px] rounded-full border-1'>
                                            <Image src={value.img} alt='/' />
                                        </div>
                                        <p className='md:text-[14px] text-[#131414] lg:text-[16px] font-[490] font-author w-[100px]'>
                                            {value.title}
                                        </p>
                                        <p className='md:text-[12px] lg:text-[14px]  font-author text-[#8C8C8C]'>
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=' font-author '>
                        <div className=' border-b-[1px] p-4 '>
                            <h1 className='md:text-[16px] lg:text-[24px] leading-4 font-bold '>
                                My Chats
                            </h1>
                        </div>
                        {CHAT_DATA.map((item: mychat_types) => (
                            <div
                                key={item.id}
                                className='grid grid-cols-12 p-4 border-b-[1px] hover:bg-[#FBF2DC]  group-hover:w-1/2 
                    group-hover:transition-out duration-300 '
                                onClick={() => {
                                    setShift(!shift)
                                }}
                            >
                                <div className='col-span-2'>
                                    <div className=' w-[50px] h-[40px] pt-2 rounded-full border-1 relative'>
                                        <div
                                            className={
                                                item.online
                                                    ? ' absolute z-20   w-[10px] h-[10px] rounded-full border-1 bg-green-500'
                                                    : ' absolute z-20  w-[10px] h-[10px] rounded-full border-1 bg-red-500'
                                            }
                                        ></div>
                                        <Image
                                            className=''
                                            src={item.img}
                                            alt='/'
                                        />
                                    </div>
                                </div>
                                <div className='col-span-8'>
                                    <p className='md:text-[16px] lg:text-[22px] font-[490] text-[#131414]'>
                                        {item.name}
                                    </p>
                                    <p className='md:text-[14px] lg:text-[20px] font-[300]'>
                                        {item.task}
                                    </p>
                                </div>
                                <div className='col-span-2 text-[#8C8C8C] md:text-[12px] '>
                                    <p>{item.time}</p>
                                    {item.icon > 0 && (
                                        <div className='w-[20px] h-[20px] md:ml-[10px] bg-[#355ADC] text-white  rounded-full border-1'>
                                            <h4 className=' pl-[7px]'>
                                                {item.icon}
                                            </h4>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* conversation */}
            <div className={shift ? 'hidden' : 'visible'}>
                <div className='relative overflow-y-scroll bg-white md:w-[400px] h-[80vh] right-0 '>
                    <div className='sticky top-0 z-50'>
                        <div className=' bg-[#F0A901]  font-author md:text-[17px] lg:text-[24px] pl-[10px] pb-[10px] pt-[10px] font-medium text-white'>
                            Messages
                        </div>
                        <div className='bg-white border-b-[1px] p-[10px] border-[#F5F5F5] flex items-center justify-between '>
                            <div className='flex gap-3 items-center'>
                                <ArrowNarrowLeftIcon
                                    width='25px'
                                    onClick={() => {
                                        setShift(!shift)
                                    }}
                                />
                                <div className=' rounded-full border-1'>
                                    <Image
                                        className='  w-[50px] h-[5  0px] '
                                        src={ChatProfile1}
                                        alt=''
                                    />
                                </div>
                                <div className='flex-col pl-3 '>
                                    <p className='md:text-[16px] font-bold font-author lg:text-[18px]'>
                                        Zubair Aziz
                                    </p>
                                    <p className='text-[#8C8C8C] font-author md:text-[14px] text-[15px]'>
                                        (English Teacher)
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-1 md:text-[14px] leading-4 text-[18px] items-center '>
                                <div className='w-[10px] h-[10px] rounded-full border-1 bg-green-500'></div>
                                Online
                            </div>
                        </div>
                    </div>
                    {/* chatbody */}
                    <div className='p-4'>
                        <div className=' bg-[#F0A901] w-[50px] h-[50px] pl-[3px] pb-[2px] rounded-full border-2 border-[#F0A901]'>
                            <Image src={SaraIcon} alt='/' />
                        </div>
                        <div className='bg-[#FBF2DC] rounded-tl-md rounded-full mt-3 ml-[15px] p-2'>
                            Thank you! For guiding me in this matter.
                        </div>
                        <p className='pt-3 text-[#8C8C8C] font-author'>
                            2:53 pm
                        </p>
                    </div>
                    <div className='p-4  '>
                        <div className='bg-[#F0A901] w-[50px] h-[50px] pl-[3px] pb-[2px] rounded-full border-2 border-[#F0A901]'>
                            <Image src={SaraIcon} alt='/' />
                        </div>
                        <div className='bg-[#FBF2DC] rounded-tl-md rounded-full mt-3 ml-[15px] p-2'>
                            Thank you! For guiding me in this matter.
                        </div>
                        <p className='pt-3 text-[#8C8C8C] font-author'>
                            2:53 pm
                        </p>
                    </div>
                    <div className='p-4  '>
                        <div className='bg-[#F0A901] w-[50px] h-[50px] pl-[3px] pb-[2px] rounded-full border-2 border-[#F0A901]'>
                            <Image src={SaraIcon} alt='/' />
                        </div>
                        <div className='bg-[#FBF2DC] rounded-tl-md rounded-full mt-3 ml-[15px] p-2'>
                            Thank you! For guiding me in this matter.
                        </div>
                        <p className='pt-3 text-[#8C8C8C] font-author'>
                            2:53 pm
                        </p>
                    </div>
                    <div className='p-4  '>
                        <div className='bg-[#F0A901] w-[50px] h-[50px] pl-[3px] pb-[2px] rounded-full border-2 border-[#F0A901]'>
                            <Image src={SaraIcon} alt='/' />
                        </div>
                        <div className='bg-[#FBF2DC] rounded-tl-md rounded-full mt-3 ml-[15px] p-2'>
                            Thank you! For guiding me in this matter.
                        </div>
                        <p className='pt-3 text-[#8C8C8C] font-author'>
                            2:53 pm
                        </p>
                    </div>
                    <div className='p-4  '>
                        <div className='bg-[#F0A901] w-[50px] h-[50px] pl-[3px] pb-[2px] rounded-full border-2 border-[#F0A901]'>
                            <Image src={SaraIcon} alt='/' />
                        </div>
                        <div className='bg-[#FBF2DC] rounded-tl-md rounded-full mt-3 ml-[15px] p-2'>
                            Thank you! For guiding me in this matter.
                        </div>
                        <p className='pt-3 text-[#8C8C8C] font-author'>
                            2:53 pm
                        </p>
                    </div>
                </div>
                <div className='bg-[#F3F5FD]  border-t-[1px] flex justify-between h-[50px] p-[10px]'>
                    <form className='ml-[20px] text-[#5B5C62] md:text-[16px] text-[20px]'>
                        <input
                            className='border-none focus:outline-none bg-[#F3F5FD]'
                            placeholder='Type your message...'
                        />
                    </form>
                    <div className='flex gap-2 mr-[30px]'>
                        <div className='md:w-[30px] md:h-[30px] pl-[10px] pt-[5px] rounded-full border-1 bg-[#E1E4F1]'>
                            {/* <input type="file" /> */}
                            <Image src={Attache} alt='' width='12' />
                        </div>
                        <div className='w-[30px] h-[30px] pl-[7px] pt-[7px] rounded-full border-1 bg-[#F0A901] '>
                            <Image src={Send} alt='' width='15' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWidget
