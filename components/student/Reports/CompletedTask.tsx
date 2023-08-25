// import React, { Component } from "react";
import Slider from 'react-slick'

// import data
import { REPORTBUILT_DATA, ReportBuilt_types } from '../dummy-data/report-built'

//   icons
import Image from 'next/image'
import arrowSlickIcon from '/assets/icons/ArrowSlick.svg'
import arrowSlickRightIcon from '/assets/icons/ArrowSlickRight.svg'
import reportCompletedIcon from '/assets/images/report-completed.svg'

//  Material UI stars
import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

function SampleNextArrow(props: any) {
    const { onClick } = props
    return (
        <div className='w-[300px] pl-3 flex mb-10'>
            <Image
                alt='arrow-slick-icon'
                src={arrowSlickRightIcon}
                onClick={onClick}
            />
        </div>
    )
}

function SamplePrevArrow(props: any) {
    const { onClick } = props
    return (
        <div className='w-[300px] pr-3 flex mb-10'>
            <Image
                alt='arrow-slick-icon'
                src={arrowSlickIcon}
                onClick={onClick}
            />
        </div>
    )
}

function CompletedTask() {
    // const [value, setValue] = React.useState<number | null>(2);

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: 'custom-flex',
        responsive: [
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1123,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1379,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1555,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 2200,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    }
    return (
        <>
            <h1 className='md:text-[22px] font-[700] lg:text-[28px] pl-12 py-6'>
                What did Sara Baker Build?
            </h1>
            <Slider {...settings}>
                {REPORTBUILT_DATA.map((ele: ReportBuilt_types) => (
                    <div key={ele.id} className='pb-6 '>
                        <div className='flex gap-4 '>
                            <div className='w-[80px] h-[130px] overflow-hidden '>
                                <Image
                                    src={reportCompletedIcon}
                                    alt='task completed'
                                    height='200'
                                    width='80'
                                    className='rounded-lg bg-blue-600 object-cover'
                                />
                            </div>
                            <div>
                                <h3 className='font-[500] md:leading-[20px] lg:text-[22px] lg:leading-[26px]'>
                                    {ele.title}
                                </h3>
                                <div>
                                    <Box
                                        // sx={{
                                        //   "& > legend": { mt: 2 },
                                        // }}
                                        className='lg:pb-2 py-2'
                                    >
                                        <Typography component='legend'></Typography>
                                        <Rating
                                            name='simple-controlled'
                                            value={ele.star}
                                            readOnly
                                        />
                                    </Box>
                                </div>
                                <button className='bg-[#444754] hover:bg-[#444754] px-4 py-2 rounded-lg text-white'>
                                    View Project
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default CompletedTask
