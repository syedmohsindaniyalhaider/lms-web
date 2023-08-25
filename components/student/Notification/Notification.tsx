import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Clock from '/assets/images/NotifyClock.svg'
import { Slide } from 'react-awesome-reveal'
import { useAppSelector } from '../../../store'

const Notification = (props: any) => {
    const { notifications } = useAppSelector((state) => state.notification)
    return (
        // <div className="bg-gray-500 bg-opacity-75 transition-opacity ">
        // <Slide right when={props.showNotification}>
        // <Slide direction="right">
        <div
            className={`${
                props.showNotification
                    ? 'z-50 relative overflow-y-scroll scroll-hide bg-white rounded-tl-md h-[885px] w-[450px]'
                    : '  hidden '
            }`}
        >
            <div
                className={`sticky  md:text-[18px] lg:text-[24px] font-[500] p-[10px] text-white 
      ${
          props.showNotification
              ? 'z-50 bg-[#F0A901] w-full rounded-tl-lg '
              : 'z-50 '
      }`}
            >
                Notifications
            </div>
            <div className=''>
                {notifications?.map((ele: any) => (
                    <div key={ele?.notificationId}>
                        <div
                            className={`grid grid-cols-12 hover:bg-[#FBF2DC]  group-hover:w-1/2 
            group-hover:transition-out duration-300
            ${
                props.notify
                    ? 'z-50 border-b-[1px] md:p-[8px] lg:p-[10px] border-[#D9D9D9] '
                    : ''
            }`}
                        >
                            <div className='col-span-2 md:p-[15px]'>
                                <Image className='' src={Clock} alt='/' />
                            </div>
                            <div
                                className={`col-span-8 md:p-[5px]
              ${props.notify ? '' : ''}
              `}
                            >
                                <p
                                    className={`md:text-[16px] font-author lg:text-[20px] font-[490]
                ${props.notify ? '' : ''}
                `}
                                >
                                    {ele?.content}
                                </p>
                                <p className='col-span-2 md:text-[14px] lg:text-[16px] text-[#454545]'>
                                    {`${ele?.date} - ${ele?.time}`}
                                </p>
                            </div>
                            <div className='col-span-2 p-[1px] mt-4'>
                                {ele?.status && ele.btn && (
                                    <Image src={ele.btn} alt='/' />
                                )}
                                {/* notification are commented in slide because of backend if there is some image error in this component just ignore for now */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </Slide>
        // </div>
    )
}

export default Notification
