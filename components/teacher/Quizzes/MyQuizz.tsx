import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Box, Grid, Tab, Typography } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import UnMarkQuiz from './UnMarkQuiz'
import MarkQuiz from './MarkQuiz'
import { RootState, useAppSelector } from '../../../store'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Typography component='div'>{children}</Typography>
            )}
        </div>
    )
}

const MyQuizz = () => {
    const { teacherStudentQuizzes } = useAppSelector(
        (state: RootState) => state.teacherQuizzes
    )
    const [value, setValue] = React.useState(1)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const unMarkStudentQuiz = teacherStudentQuizzes?.map(
        (ele: any) => ele.students
    )

    return (
        <div>
            <div className='flex justify-between  '>
                <div>
                    <div className='flex items-center'>
                        <ChevronLeftIcon className='h-[24px] text-[#355ADC] ' />
                        <p className='text-[#355ADC] font-author md:text-[16px] lg:text-[20px]'>
                            <Link href='/dashboard'>Go back to Dashboard</Link>
                        </p>
                    </div>
                    <h2 className='md:text-[25px] md:pl-[10px] md:text-[#131414] md:leading-[38px] font-bold font-author'>
                        My Projects
                    </h2>
                </div>
            </div>

            <Grid container>
                <Grid item md={12}>
                    <Box>
                        <Box
                            sx={{
                                position: 'relative',
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <div className='my-2  flex items-center absolute bottom-[10px] '></div>
                            <Tabs
                                centered
                                className='pt-[20px] pl-24'
                                value={value}
                                onChange={handleChange}
                                aria-label='basic tabs example'
                                textColor='inherit'
                                TabIndicatorProps={{
                                    style: {
                                        background: '#355ADC',
                                        height: '3px',
                                    },
                                }}
                            >
                                <Tab
                                    className='mr-2 pb-4 font-author'
                                    disableRipple
                                    sx={{
                                        color:
                                            value === 0 ? '#131414' : '#8C8C8C',
                                        fontWeight: '900',
                                        textTransform: 'none',
                                        fontSize: '28px',
                                    }}
                                    label={`UnMark Quizzes (0)`}
                                />
                                <Tab
                                    className='pb-4 font-author'
                                    disableRipple
                                    sx={{
                                        color:
                                            value === 1 ? '#131414' : '#8C8C8C',
                                        fontWeight: '900',
                                        textTransform: 'none',
                                        fontSize: '28px',
                                    }}
                                    label={`Mark Quizzes  (0)`}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div className='mt-4'>
                                {' '}
                                <UnMarkQuiz unMarkQuiz={unMarkStudentQuiz} />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='mt-4'>
                                <MarkQuiz />
                            </div>
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default MyQuizz
