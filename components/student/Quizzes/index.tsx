import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Img from '/assets/images/Vector.svg'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { studentQuizzes } from '../../../store/actions/student/students/studentQuizzesService'
import PendingQuizzes from './Pending'
import CompletedQuizzes from './Completed'
import BreadCrumb from '../../ui/Breadcrumb'

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
                <Typography component='div' sx={{ pt: '20px' }}>
                    {children}
                </Typography>
            )}
        </div>
    )
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}
const Quizzes = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { studentQuiz } = useAppSelector((state: RootState) => state.student)
    const pendingQuizzes = studentQuiz?.filter(
        (item: any) => item?.status === 'pending'
    )
    const completedQuizzes = studentQuiz?.filter(
        (item: any) => item?.status === 'completed'
    )
    const [value, setValue] = useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        dispatch(studentQuizzes(user?.clientId))
    }, [user])

    return (
        <>
            <div className='flex justify-between'>
                <div>
                    <div className='flex items-center'>
                        <BreadCrumb />
                    </div>
                    <h2 className='md:text-[25px]  md:pl-[10px] md:text-[#131414] md:leading-[38px] font-bold font-author'>
                        My Quizzes
                    </h2>
                </div>
                <div>
                    <div className='flex bg-white md:w-[336px] md:h-[60px] lg:w-[436px] lg:h-[77px]  rounded-md md:pt-[20px] lg:pt-[25px] drop-shadow-lg md:mr-[10px] justify-center text-center '>
                        <p className='font-author text-[#131414] md:text-[14px] lg:text-[20px]'>
                            How you are performing?
                        </p>
                        <p className='pl-[10px] font-author  md:text-[14px] lg:text-[20px] text-[#F0A901] underline'>
                            <Link href='/student/reports'>
                                See Your Report Card
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Grid container>
                <Grid item md={12} lg={12}>
                    <Box>
                        <Box
                            sx={{
                                position: 'relative',
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <div className='my-2  flex items-center absolute bottom-[10px] '>
                                <div className=' p-1.5 pl-[10px] flex'>
                                    <Image
                                        src={Img}
                                        alt='quiz-icon'
                                        height='15'
                                        width='15'
                                    />
                                    <div className='mx-2  font-author font-[500] md:text-[16px] text-[2px] flex '>
                                        Filter By
                                    </div>
                                </div>
                            </div>
                            <Tabs
                                className='pt-[20px]  pl-24 font-[Author]'
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
                                    className='mr-2 pb-4 font-author text-[25px] '
                                    disableRipple
                                    sx={{
                                        color:
                                            value === 0 ? '#131414' : '#8C8C8C',
                                        fontWeight: '900',
                                        textTransform: 'none',
                                        fontSize: '28px',
                                    }}
                                    label={`Pending Quizzes (${
                                        pendingQuizzes?.length > 0
                                            ? pendingQuizzes?.length
                                            : '0'
                                    })`}
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    disableRipple
                                    className='pb-4 font-author text-[25px]'
                                    sx={{
                                        color:
                                            value === 1 ? '#131414' : '#8C8C8C',
                                        fontWeight: '900',
                                        textTransform: 'none',
                                        fontSize: '28px',
                                    }}
                                    label={`Completed Quizzes (${
                                        completedQuizzes?.length > 0
                                            ? completedQuizzes?.length
                                            : '0'
                                    })`}
                                    {...a11yProps(1)}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div className='bg-white  rounded-lg shadow-lg'>
                                <div className='p-4'>
                                    {pendingQuizzes?.length > 0 ? (
                                        <Grid container spacing={2}>
                                            {pendingQuizzes?.map((ele: any) => (
                                                <PendingQuizzes
                                                    key={ele.quizId}
                                                    {...ele}
                                                />
                                            ))}
                                        </Grid>
                                    ) : (
                                        <>No Pending Quizzes</>
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='bg-white  rounded-lg shadow-lg '>
                                <div className='p-4'>
                                    {completedQuizzes?.length > 0 ? (
                                        <Grid container spacing={2}>
                                            {completedQuizzes?.map(
                                                (ele: any) => (
                                                    <CompletedQuizzes
                                                        key={ele.quizId}
                                                        {...ele}
                                                    />
                                                )
                                            )}
                                        </Grid>
                                    ) : (
                                        <>No Completed Quizzes</>
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Quizzes
