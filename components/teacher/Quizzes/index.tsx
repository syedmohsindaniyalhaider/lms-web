import React, { useEffect } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import ProjectImg from '/assets/images/project5.png'
import { ClockIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import Img from '/public/Vector.svg'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import UnMarkQuiz from './UnMarkQuiz'
import MarkedQuiz from './MarkQuiz'
import { teacherQuizzes } from '../../../store/actions/teacher/quizzes/teacherQuizzesService'
import { student } from '../../../store/actions/student/students/types/studentType'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    const { projects } = useAppSelector((state: RootState) => state.projects)
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

const Quizzes = () => {
    const [value, setValue] = React.useState(1)
    const { user } = useAppSelector((state) => state.user)
    const { teacherStudentQuizzes } = useAppSelector(
        (state: RootState) => state.teacherQuizzes
    )
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        dispatch(teacherQuizzes(user?.clientId))
    }, [])

    const quizzes = teacherStudentQuizzes
        ?.map((ele: any) => ele.students)
        .flat(Infinity)

    const completedQuizzes = quizzes?.filter(
        (x: any) => x?.status === 'completed'
    )
    const pendingQuizzes = quizzes?.filter((x: any) => x?.status === 'pending')

    return (
        <>
            <div className='flex justify-between  '>
                <div>
                    <div className='flex items-center'>
                        <ChevronLeftIcon className='h-[24px] text-[#355ADC] ' />
                        <p className='text-[#355ADC] font-author md:text-[16px] lg:text-[20px]'>
                            <Link href='/teacher'>Go back to Dashboard</Link>
                        </p>
                    </div>
                    <h2 className='md:text-[25px] md:pl-[10px] md:text-[#131414] md:leading-[38px] font-bold font-author'>
                        Quizzes
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
                                    label={`Pending (${pendingQuizzes?.length})`}
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
                                    label={`Completed  (${completedQuizzes?.length})`}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div className='mt-4'>
                                <Grid container spacing={2}>
                                    {pendingQuizzes?.map(
                                        (ele: any, index: any) => (
                                            <UnMarkQuiz
                                                key={index}
                                                quizzes={ele}
                                            />
                                        )
                                    )}
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='mt-4'>
                                <Grid container spacing={2}>
                                    {completedQuizzes?.map(
                                        (ele: any, index: any) => (
                                            <MarkedQuiz
                                                key={index}
                                                quizzes={ele}
                                            />
                                        )
                                    )}
                                </Grid>
                            </div>
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Quizzes
