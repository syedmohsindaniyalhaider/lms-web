import React from 'react'
import Image from 'next/image'
import classesIcon from '/assets/icons/classesIcon.svg'
import Calendar from './Calendar'
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import 'reactjs-popup/dist/index.css'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import UpcomingClasses from '../../../components/student/Classes/Upcoming'
import CompletedClasses from '../../../components/student/Classes/Completed'
import NotCompletedClasses from '../../../components/student/Classes/NotCompleted'
import { studentAllClasses } from '../../../store/actions/student/classes/allClassesService'
import Breadcrumb from '../../ui/Breadcrumb'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

const TabPanel = (props: TabPanelProps) => {
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

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const MyClasses = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const { classes: studentClasses, isLoading } = useAppSelector(
        (state: RootState) => state.classes
    )

    const [upcomingClasses, setUpcomingClasses] = useState<any>([])
    const [notCompletedClasses, setNotCompletedClasses] = useState<any>([])
    const [completedClasses, setCompletedClasses] = useState<any>([])
    const totalUpcomingClasses = upcomingClasses?.reduce(
        (sum: any, a: any) => sum + a?.classes?.length,
        0
    )
    const totalCompletedClasses = completedClasses.reduce(
        (sum: any, a: any) => sum + a?.classes?.length,
        0
    )
    const totalNotCompletedClasses = notCompletedClasses.reduce(
        (sum: any, a: any) => sum + a?.classes?.length,
        0
    )
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    console.log('studentClasses', studentClasses)

    useEffect(() => {
        dispatch(studentAllClasses(user?.clientId))
    }, [dispatch, user])

    useEffect(() => {
        if (!isLoading) {
            // * Get All Classes of all courses for individual student
            setUpcomingClasses(
                studentClasses?.map((ele: any) => {
                    return {
                        classes: ele.classes
                            ?.filter(
                                (x: any) =>
                                    x.classStatus === 'pending' ||
                                    x.classStatus !== 'completed'
                            )
                            .flat(Infinity),
                        availabilities: ele?.availabilities,
                        courseDescription: ele?.courseDescription,
                        courseId: ele?.courseId,
                        courseName: ele?.courseName,
                        studentId: ele?.studentId,
                        teacherEmail: ele?.teacherEmail,
                        teacherFirstName: ele?.teacherFirstName,
                        teacherId: ele?.teacherId,
                        teacherLastName: ele?.teacherLastName,
                        teacherProfile: ele?.teacherProfile,
                    }
                })
            )
            setCompletedClasses(
                studentClasses?.map((ele: any) => {
                    return {
                        classes: ele.classes
                            ?.filter((x: any) => x.classStatus === 'completed')
                            .flat(Infinity),
                        availabilities: ele?.availabilities,
                        courseDescription: ele?.courseDescription,
                        courseId: ele?.courseId,
                        courseName: ele?.courseName,
                        studentId: ele?.studentId,
                        teacherEmail: ele?.teacherEmail,
                        teacherFirstName: ele?.teacherFirstName,
                        teacherId: ele?.teacherId,
                        teacherLastName: ele?.teacherLastName,
                        teacherProfile: ele?.teacherProfile,
                    }
                })
            )
            setNotCompletedClasses(
                studentClasses?.map((ele: any) => {
                    return {
                        classes: ele.classes
                            ?.filter((x: any) => x.classStatus !== 'completed')
                            .flat(Infinity),
                        availabilities: ele?.availabilities,
                        courseDescription: ele?.courseDescription,
                        courseId: ele?.courseId,
                        courseName: ele?.courseName,
                        studentId: ele?.studentId,
                        teacherEmail: ele?.teacherEmail,
                        teacherFirstName: ele?.teacherFirstName,
                        teacherId: ele?.teacherId,
                        teacherLastName: ele?.teacherLastName,
                        teacherProfile: ele?.teacherProfile,
                    }
                })
            )
        }
    }, [studentClasses, isLoading])

    return (
        <>
            <div className='w-auto'>
                <div className='flex justify-between'>
                    <div>
                        <Breadcrumb />
                        <div>
                            <h1 className='font-extrabold text-[22px] text-[#131414]'>
                                My Classes & Calendar
                            </h1>
                        </div>
                    </div>
                    <div className='w-[400px] text-[14px] mb-4 bg-white h-[80px] flex justify-between items-center px-4'>
                        <div className='w-[40px] h-[40px]'>
                            <Image
                                src={classesIcon}
                                alt='classes-icon'
                                className=''
                            />
                        </div>
                        <div className='flex-col'>
                            <div>
                                <h3>
                                    <span className='font-bold'>12</span> Credit
                                    remaining
                                </h3>
                            </div>
                            <div>
                                <h3 className='text-[#F0A901] underline'>
                                    view credit history
                                </h3>
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#F94F46]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'>
                                <span className='relative z-40'>
                                    {' '}
                                    Buy More Credit
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#f31409] group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#f31409] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mx-6 bg-[#FBF2DC] pt-6'>
                    <Calendar />
                </div>
            </div>
            <div className=' pr-4 py-6 mt-6'>
                <div className=''>
                    <Grid container>
                        <Grid item md={12} lg={12}>
                            <Box>
                                <div className='flex items-center'>
                                    <h1 className='text-[#131414] md:text-[18px] font-[600] lg:text-[28px]'>
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
                                                label={`Upcoming (${
                                                    totalUpcomingClasses || 0
                                                })`}
                                                {...a11yProps(0)}
                                            />
                                            <Tab
                                                disableRipple
                                                className={`font-author md:text-[16px] md:font-[600] lg:text-[24px] capitalize
                      ${value === 1 ? 'text-[#355ADC]' : ''}
                      `}
                                                label={`Completed (${
                                                    totalCompletedClasses || 0
                                                })`}
                                                {...a11yProps(1)}
                                            />
                                            <Tab
                                                disableRipple
                                                className={`font-author md:text-[16px] md:font-[600] lg:text-[24px] capitalize
                      ${value === 2 ? 'text-[#355ADC]' : ''}
                      `}
                                                label={`Not Completed (${
                                                    totalNotCompletedClasses ||
                                                    0
                                                })`}
                                                {...a11yProps(2)}
                                            />
                                        </Tabs>
                                    </Box>
                                </div>
                                <TabPanel value={value} index={0}>
                                    {upcomingClasses?.map((item: any) => (
                                        <UpcomingClasses
                                            key={item?.classes?.classId}
                                            classes={item?.classes}
                                            teacherId={item?.teacherId}
                                            studentId={item?.studentId}
                                            courseName={item?.courseName}
                                            availabilities={
                                                item?.availabilities
                                            }
                                            teacherFirstName={
                                                item?.teacherFirstName
                                            }
                                            teacherLastName={
                                                item?.teacherLastName
                                            }
                                            teacherProfile={
                                                item?.teacherProfile
                                            }
                                        />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    {completedClasses?.map((item: any) => (
                                        <CompletedClasses
                                            {...item}
                                            key={item?.classes?.classId}
                                            teacherProfile={
                                                item?.teacherProfile
                                            }
                                        />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {notCompletedClasses?.map((item: any) => (
                                        <NotCompletedClasses
                                            classes={item?.classes}
                                            key={item?.classes?.classId}
                                            teacherFirstName={
                                                item?.teacherFirstName
                                            }
                                            teacherLastName={
                                                item?.teacherLastName
                                            }
                                            teacherProfile={
                                                item?.teacherProfile
                                            }
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

export default MyClasses

{
    /* <button
          className="bg-[#355ADC] -mt-10 lg:-mt-0 rounded-md px-4 py-2 text-white float-right flex 
          items-center space-x-2"
          onClick={handleOpen}
        >
          <Image src={squareClassesIcon} alt="classes-icon" />
          <p className="md:text-[15px] md:font-[500] lg:text-[22px] lg:font-[500] ">
            Schedule a Class
          </p>
        </button> */
}
