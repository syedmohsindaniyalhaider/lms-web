import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import leftArrowSvg from '/assets/icons/innerarrow.svg'
import ClassReview from './ClassReview'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import { teacherClassDetails } from '../../../../store/actions/teacher/classes/classDetailsService'
import ProjectDetail from './ProjectDetail'
import QuizDetail from './QuizDetail'
import { paginateTeacherClassDetails } from '../../../../store/actions/teacher/classes/paginateTeacherClassDetailsService'
const tabsMap: { [key: string]: any } = {
    c: 0,
    q: 1,
    p: 2,
}

//Tabs Functions
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

function ClassDetails({ classId, tab }: any) {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const {
        teacherClassDetails: classDetails,
        paginateTeacherClassDetail,
        isLoading,
    }: any = useAppSelector((state: RootState) => state.teacherClasses)
    const [page, setPage] = useState<any>(1)
    const [value, setValue] = useState(tabsMap[tab])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const handleClassesChange = () => {
        const data = {
            studentId: user?.clientId,
            page: classDetails?.length !== 0 ? page : 1,
        }
        dispatch(paginateTeacherClassDetails(data))
    }

    useEffect(() => {
        dispatch(
            teacherClassDetails({
                teacherId: user?.clientId,
                classId: +classId,
            })
        )
    }, [user])

    return (
        <>
            <div className='font-author'>
                <div className='bg-[#e9ebf6] py-4 flex items-center justify-center px-2 -mt-5 -mx-12 gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Image
                            onClick={() => {
                                setPage((preValue: any) =>
                                    preValue == 1 ? preValue : preValue - 1
                                )
                                setTimeout(() => {
                                    handleClassesChange()
                                }, 2000)
                            }}
                            src={leftArrowSvg}
                            alt=''
                        />

                        <div className='text-[#355ADC] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[16px] lg:font-[500] lg:leading-[22px]'>
                            Previous Class
                        </div>
                    </div>
                    <div className='md:text-[14px] md:font-[600] md:leading-[16px] lg:text-[20px] lg:leading-[24px]'>
                        {paginateTeacherClassDetail?.length === 0
                            ? `${
                                  classDetails?.classes?.classCode ??
                                  'Class Code'
                              }: ${
                                  classDetails?.classes?.classTitle ??
                                  'Class Title'
                              }`
                            : `${paginateTeacherClassDetail[0]?.classes?.classCode}: ${paginateTeacherClassDetail[0]?.classes?.classTitle}`}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='text-[#355ADC] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[16px] lg:font-[500] lg:leading-[22px]'>
                            Next Class
                        </div>
                        <div className='rotate-180'>
                            <Image
                                onClick={() => {
                                    setPage((preValue: any) => preValue + 1)
                                    setTimeout(() => {
                                        handleClassesChange()
                                    }, 2000)
                                }}
                                src={leftArrowSvg}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex flex-col px-2 items-center justify-center'>
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
                                classDetails={
                                    paginateTeacherClassDetail?.length === 0
                                        ? classDetails
                                        : paginateTeacherClassDetail[0]
                                }
                            />
                            {/* <ClassReview classDetails={classDetails} /> */}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <QuizDetail
                                quizDetails={
                                    paginateTeacherClassDetail?.length === 0
                                        ? classDetails?.classes?.quizzes
                                        : paginateTeacherClassDetail[0].classes
                                              ?.quizzes
                                }
                            />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ProjectDetail
                                projectDetails={
                                    paginateTeacherClassDetail?.length == 0
                                        ? classDetails?.classes
                                        : paginateTeacherClassDetail[0].classes
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
