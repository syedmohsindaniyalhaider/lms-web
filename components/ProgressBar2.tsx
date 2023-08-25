import React from 'react'
import { Box, Paper, Typography, Grid, Container } from '@mui/material'
import Info from '../assets/icons/info-circle.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Image from 'next/image'

const itemsData = [
    {
        id: 1,
        title: 'Passion & Perseverance',
        percentage: '99%',
        pathColor: '#63B082',
        textColor: '#63B082',
        value: 99,
        des: 'Sara showed immense patience and persistence in class.',
    },
    {
        id: 2,
        title: 'Growth Mindset',
        percentage: '95%',
        pathColor: '#679CDA',
        textColor: '#679CDA',
        value: 95,
        des: 'Sara showed their ability to take feedback constructively, and continuously learn and grow from them.',
    },
    {
        id: 3,
        title: 'Delayed Gratification',
        percentage: '100%',
        pathColor: '#E8746C',
        textColor: '#E8746C',
        value: 100,
        des: 'Sara showed patience to fully understand a concept, without rushing to get to the answer.',
    },
]

function ProgressBar1() {
    return (
        <>
            <div className=''>
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
                                {itemsData.map((ele) => (
                                    <Grid
                                        item
                                        sm={4}
                                        md={4}
                                        lg={4}
                                        key={ele.id}
                                    >
                                        <div className='lg:px-8 md:px-4 md:py-7 lg:py-7'>
                                            <div className='flex py-2'>
                                                <p
                                                    className='md:text-[18px] md:leading-[22px] lg:text-[24px] font-author font-[600] 
                        lg:leading-[28px] h-12'
                                                >
                                                    {ele.title}
                                                </p>
                                                <div className='md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] md:mx-2 mx-3'>
                                                    <Image src={Info} alt='' />
                                                </div>
                                            </div>

                                            <div className='flex items-center'>
                                                <p
                                                    className={`pr-3 md:text-[32px] lg:text-[52px] font-[600] font-author text-[${ele.textColor}]`}
                                                >
                                                    {ele.percentage}
                                                </p>
                                                <div
                                                    style={{
                                                        width: 90,
                                                        height: 90,
                                                    }}
                                                    className='flex pr-2'
                                                >
                                                    <CircularProgressbar
                                                        styles={buildStyles({
                                                            textColor:
                                                                '#b71c1c',
                                                            pathColor:
                                                                ele.pathColor,

                                                            //trailColor: "#01411C"
                                                        })}
                                                        className='h-auto w-[150px]'
                                                        value={ele.value}
                                                    />
                                                </div>
                                            </div>

                                            <Typography
                                                className='lg:py-6 font-author md:py-4 text-[#131414] lg:text-[20px] 
                      lg:leading-[26px] font-[400] md:text-[14px] md:leading-[18px] '
                                            >
                                                Sara showed the ability to think
                                                out-of-the-box or give unique
                                                answers.
                                            </Typography>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProgressBar1
