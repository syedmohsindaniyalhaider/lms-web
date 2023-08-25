import { useState, useEffect } from 'react'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import squareClassesIcon from '/assets/icons/SquareClasses.svg'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import moment from 'moment'
import { NextPage } from 'next'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { teacherAllClasses } from '../../../store/actions/teacher/classes/allClassesService'
import { classStatusUpdate } from '../../../store/actions/teacher/classes/classStatusUpdateService'
import UpcomingCalendar from '../../../components/teacher/MyClasses/Calendar/UpcommingCalendar'
import CompletedCalendar from '../../../components/teacher/MyClasses/Calendar/CompletedCalendar'
import NotCompletedCalendar from '../../../components/teacher/MyClasses/Calendar/NotCompletedCalendar'
import ClassesCalendar from '../../../components/teacher/MyClasses/Calendar/ClassesCalendar'
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
                <Typography component='div' sx={{ pt: '10px' }}>
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

const Index: NextPage = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { teacherClasses, loading } = useAppSelector(
        (state: RootState) => state.teacherClasses
    )
    const [upcomingClasses, setUpcomingClasses] = useState<any>([])
    const [notCompletedClasses, setNotCompletedClasses] = useState<any>([])
    const [completedClasses, setCompletedClasses] = useState<any>([])
    const [value, setValue] = useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        dispatch(teacherAllClasses(+user?.clientId))
    }, [dispatch, user])

    useEffect(() => {
        if (!loading) {
            // * Get All Classes of all courses for individual student
            setUpcomingClasses(
                teacherClasses?.filter(
                    (item: any) =>
                        item?.classStatus === 'pending' ||
                        item?.classStatus !== 'completed'
                )
            )
            setCompletedClasses(
                teacherClasses?.filter(
                    (item: any) => item?.classStatus === 'completed'
                )
            )
            setNotCompletedClasses(
                teacherClasses?.filter(
                    (item: any) => item?.classStatus !== 'completed'
                )
            )
        }
    }, [teacherClasses, loading])
    return (
        <>
            <div className=' pr-4 py-6 '>
                <div className=''>
                    <ClassesCalendar />
                    <Grid container>
                        <Grid item md={12} lg={12}>
                            <Box>
                                <div className='flex items-center pt-6'>
                                    <h1 className='text-[#323232] md:text-[18px] font-[600] lg:text-[28px]'>
                                        My Classes
                                    </h1>
                                    <Box>
                                        <Tabs
                                            className=' pl-7 font-author '
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
                                                className={`font-author md:text-[16px] md:font-[600] lg:text-[24px] capitalize
                      ${value === 0 ? 'text-[#355ADC]' : ''}
                      `}
                                                disableRipple
                                                label={`Upcoming (${upcomingClasses?.length})`}
                                                {...a11yProps(0)}
                                            />
                                            <Tab
                                                disableRipple
                                                className={`font-author md:text-[16px] md:font-[600] lg:text-[24px] capitalize
                      ${value === 1 ? 'text-[#355ADC]' : ''}
                      `}
                                                label={`Completed (${completedClasses?.length})`}
                                                {...a11yProps(1)}
                                            />
                                            <Tab
                                                disableRipple
                                                className={`font-author md:text-[16px] md:font-[600] lg:text-[24px] capitalize
                      ${value === 2 ? 'text-[#355ADC]' : ''}
                      `}
                                                label={`Not Completed (${notCompletedClasses?.length})`}
                                                {...a11yProps(2)}
                                            />
                                        </Tabs>
                                    </Box>
                                </div>
                                <TabPanel value={value} index={0}>
                                    {upcomingClasses?.map((item: any) => (
                                        <UpcomingCalendar
                                            {...item}
                                            key={item?.classId}
                                        />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    {completedClasses?.map((item: any) => (
                                        <CompletedCalendar
                                            {...item}
                                            key={item?.classId}
                                        />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {notCompletedClasses?.map((item: any) => (
                                        <NotCompletedCalendar
                                            {...item}
                                            key={item?.classId}
                                        />
                                    ))}
                                </TabPanel>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Index
