import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import innerarrow from '/assets/icons/innerarrow.svg'
import ClassReview from './ClassReview'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import QuizDetail from './QuizDetail'
import ProjectDetail from './ProjectDetail'
import LockIcon from '@mui/icons-material/Lock'

import { RootState, useAppDispatch, useAppSelector } from '../../../../../store'
import { classDetails } from '../../../../../store/actions/student/classes/classDetailsService'
import { paginateStudentClassDetail } from '../../../../../store/actions/student/classes/paginateStudentClassDetailsService'
import { Tab } from '@mui/material'

const tabsMap: { [key: string]: any } = {
    c: 0,
    q: 1,
    p: 2,
}

function TabPanel(props: any) {
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
                <Box sx={{ p: 3 }}>
                    <Typography component='div'>{children}</Typography>
                </Box>
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

const ClassDetails = ({ classId, tab }: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const {
        classDetails: studentClassDetails,
        paginateClassDetail,
        isLoading,
    }: any = useAppSelector((state: RootState) => state.classes)

    const [value, setValue] = useState(tabsMap[tab])
    const [page, setPage] = useState<any>(1)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const handleClassesChange = () => {
        const data = {
            studentId: user?.clientId,
            page: paginateClassDetail?.length !== 0 ? page : 1,
        }
        dispatch(paginateStudentClassDetail(data))
    }

    useEffect(() => {
        const data = {
            studentId: user?.clientId,
            classId: +classId,
        }
        dispatch(classDetails(data))
    }, [classId, user?.clientId])

    return (
        <>
            <div className='font-author'>
                <div className='bg-[#e9ebf6] py-4 flex items-center justify-center px-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <div className=' cursor-pointer'>
                            <Image
                                onClick={() => {
                                    setPage((preValue: any) =>
                                        preValue == 1 ? preValue : preValue - 1
                                    )
                                    setTimeout(() => {
                                        handleClassesChange()
                                    }, 2000)
                                }}
                                src={innerarrow}
                                alt=''
                            />
                        </div>
                        <div className='text-[#355ADC] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[16px] lg:font-[500] lg:leading-[22px]'>
                            Previous Class
                        </div>
                    </div>
                    <div className='md:text-[14px] md:font-[600] md:leading-[16px] lg:text-[20px] lg:leading-[24px]'>
                        {`${
                            paginateClassDetail?.length === 0
                                ? studentClassDetails?.classes?.classCode
                                : paginateClassDetail[0]?.classes?.classCode
                        }: ${
                            paginateClassDetail?.length === 0
                                ? studentClassDetails?.classes?.classTitle
                                : paginateClassDetail[0]?.classes?.classTitle
                        }`}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='text-[#355ADC] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[16px] lg:font-[500] lg:leading-[22px]'>
                            Next Class
                        </div>
                        <div className='rotate-180  cursor-pointer'>
                            <Image
                                onClick={() => {
                                    setPage((preValue: any) => preValue + 1)
                                    setTimeout(() => {
                                        handleClassesChange()
                                    }, 2000)
                                }}
                                src={innerarrow}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex flex-col items-center justify-center'>
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <Tabs
                                centered
                                value={value}
                                onChange={handleChange}
                                aria-label='basic tabs example'
                                textColor='inherit'
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: '#F0A901',
                                    },
                                }}
                            >
                                <Tab
                                    sx={{ textTransform: 'capitalize' }}
                                    disableRipple
                                    className='font-author md:text-[18px] font-[700] lg:text-[28px]'
                                    label='Class Review'
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    sx={{ textTransform: 'capitalize' }}
                                    disableRipple
                                    className='font-author md:text-[18px] font-[700] lg:text-[28px]'
                                    label='Quiz'
                                    disabled={
                                        paginateClassDetail?.length === 0
                                            ? studentClassDetails?.classStatus !==
                                              'completed'
                                                ? true
                                                : false
                                            : paginateClassDetail[0]
                                                  ?.classStatus !== 'completed'
                                            ? true
                                            : false
                                    }
                                    icon={
                                        studentClassDetails?.classStatus !==
                                        'completed' ? (
                                            <LockIcon />
                                        ) : (
                                            ''
                                        )
                                    }
                                    iconPosition='start'
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    sx={{ textTransform: 'capitalize' }}
                                    disableRipple
                                    className='font-author md:text-[18px] font-[700] lg:text-[28px]'
                                    label='Project'
                                    {...a11yProps(2)}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <ClassReview
                                loader={isLoading}
                                studentClassDetails={
                                    paginateClassDetail?.length === 0
                                        ? studentClassDetails
                                        : paginateClassDetail[0]
                                }
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <QuizDetail
                                loader={isLoading}
                                quizDetails={
                                    paginateClassDetail?.length === 0
                                        ? studentClassDetails?.classes
                                        : paginateClassDetail[0]?.classes
                                }
                                classId={classId}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ProjectDetail
                                projectDetails={
                                    paginateClassDetail?.length === 0
                                        ? studentClassDetails?.classes
                                        : paginateClassDetail[0]?.classes
                                }
                            />
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default ClassDetails
