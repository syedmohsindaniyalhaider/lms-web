import React from 'react'
import Image from 'next/image'
// import Card from "/public/Rectangle 212.png";
// import Card2 from "/public/Rectangle 212 (1).png";
// import Card3 from "/public/Rectangle 212 (2).png";
import Card from '/public/invite_1.svg'
import Card2 from '/public/invite_2.svg'
import Card3 from '/public/invite_3.svg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowLeft from '/public/arrow-left.svg'
import ArrowRight from '/public/arrow-right.svg'

function SliderCards() {
    const CardData = [
        {
            id: 1,
            image: Card,
            title: 'Priyanka Copra',
            des: 'I thought if my child is learning so much about coding and it’s like a big necessity in today’s world then we a why not help others to get the new knowledge as well.',
        },
        {
            id: 2,
            image: Card2,
            title: 'Stephinie Underwood',
            des: 'This is a unique platform to build up strong technology fundamentals for a successful future. Helps in ideal utilization of downtime for kids, especially during Covid!',
        },
        {
            id: 3,
            image: Card3,
            title: 'Chris Jordan',
            des: 'I thought if my child is learning so much about coding and it’s like a big necessity in today’s world then we a why not help others to get the new knowledge as well.',
        },
        {
            id: 4,
            image: Card,
            title: 'Priyanka Copra',
            des: 'I thought if my child is learning so much about coding and it’s like a big necessity in today’s world then we a why not help others to get the new knowledge as well.',
        },
    ]

    return (
        <>
            <div className='rounded-xl -mt-8 z-0 overflow-hidden bg-[#FFF4F4] py-4 max-w-[100%] mx-auto p-4 relative flex justify-between'>
                <div className='h-60 w-60 rounded-full -top-20 -left-10 z-0  bg-[#FBF2DC] absolute'></div>
                <div className='h-80 w-80 rounded-full -bottom-36 -right-2 z-0 bg-[#FBF2DC] absolute'></div>
                <div className='relative overflow-x-scroll scroll-hide pt-[50px]'>
                    <div className='flex px-2'>
                        {CardData.map((ele: any) => (
                            <div className='px-2' key={ele.id}>
                                <div className='w-[465px] bg-white md:h-[220px] 2xl:h-[230px]'>
                                    <div className='flex h-full items-center lg:px-2 py-4 lg:gap-3'>
                                        <div className='flex h-full'>
                                            <Image
                                                src={ele.image}
                                                alt='Image'
                                                className=' object-fit'
                                            />
                                        </div>
                                        <div className='w-full md:text-[13px] lg:text-[15px] pr-6 lg:pr-0 lg:py-4'>
                                            <p className='font-author text-[20px] font-[596] '>
                                                {ele.title}
                                            </p>
                                            <p>{ele.des}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderCards
