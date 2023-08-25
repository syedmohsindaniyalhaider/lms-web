import React from 'react'
import { Box, Paper, Typography, Grid, Container } from '@mui/material'
import Info from '../assets/icons/info-circle.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Image from 'next/image'

const itemsData = [
    {
        id: 1,
        title: ' Creativity',
        percentage: '94%',
        pathColor: '#63B082',
        textColor: '#63B082',
        value: 94,
        des: ' Sara showed the ability to think out-of-the-box or give unique answers.',
    },
    {
        id: 2,
        title: 'Logic',
        percentage: '92%',
        pathColor: '#679CDA',
        textColor: '#679CDA',
        value: 92,
        des: 'Sara showed the ability to break down a problem or a concept into simple steps.',
    },
    {
        id: 3,
        title: 'Concentration',
        percentage: '92%',
        pathColor: '#E8746C',
        textColor: '#E8746C',
        value: 97,
        des: 'Sara showed the ability to break down a problem or a concept into simple steps.',
    },
]

function ProgressBar() {
    return (
        <>
            <div className='w-[100%] '>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper
                            variant='outlined'
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) ',
                            }}
                        >
                            <Grid container>
                                {itemsData.map((ele) => {
                                    return (
                                        <div key={ele.id}>
                                            <Grid item sm={4} md={4} lg={4}>
                                                <div className='lg:px-8 md:mx-4 py-7'>
                                                    <div className='flex items-center py-2'>
                                                        <p className='md:text-[24px] lg:text-[28px]  font-author font-[596] leading-[32px]'>
                                                            {ele.title}
                                                        </p>
                                                        <div className='md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] md:mx-2 mx-3'>
                                                            <Image
                                                                src={Info}
                                                                alt=''
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='flex items-center  text-[40px]  '>
                                                        <p
                                                            className={`pr-8 font-[596]  font-author text-[${ele.textColor}]`}
                                                        >
                                                            {ele.percentage}
                                                        </p>
                                                        <div
                                                            style={{
                                                                width: 90,
                                                                height: 90,
                                                            }}
                                                        >
                                                            <CircularProgressbar
                                                                styles={buildStyles(
                                                                    {
                                                                        textColor:
                                                                            '#b71c1c',
                                                                        pathColor:
                                                                            ele.pathColor,

                                                                        //trailColor: "#01411C"
                                                                    }
                                                                )}
                                                                className='h-auto w-[150px]'
                                                                value={
                                                                    ele.value
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <Typography className='lg:py-6 font-author md:py-4 text-[#131414] lg:text-[18px] lg:leading-[26px] font-[375]'>
                                                        Sara showed the ability
                                                        to think out-of-the-box
                                                        or give unique answers.
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </div>
                                    )
                                })}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProgressBar
