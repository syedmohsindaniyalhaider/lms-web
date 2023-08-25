import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './Assignments.css'
import SliderProduct from './SliderProduct'

function HomeSlider() {
    const PreviousBtn = (props: any) => {
        const { className, onClick } = props

        return (
            <div className={className} onClick={onClick}>
                {/* <ArrowBackIosIcon style={{ color: "black" }} /> */}
            </div>
        )
    }

    const NextBtn = (props: any) => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                {/* <ArrowForwardIosIcon style={{ color: "black" }} /> */}
            </div>
        )
    }

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <>
            <div className=' bg-[#FBF2DC] h-[444px]'>
                <Slider className='pt-[10px] ' {...settings}>
                    <div className='mt-[22px] '>
                        <SliderProduct />
                    </div>
                    <div className='mt-[22px]'>
                        <SliderProduct />
                    </div>
                    <div className='mt-[22px]'>
                        <SliderProduct />
                    </div>
                    <div className='mt-[22px]'>
                        <SliderProduct />
                    </div>
                    <div className='mt-[22px]'>
                        <SliderProduct />
                    </div>
                    <div className='mt-[22px]'>
                        <SliderProduct />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default HomeSlider
