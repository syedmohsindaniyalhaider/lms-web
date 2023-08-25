import React, { useEffect } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import { allClassProjects } from "../../../store/actions/student/student/studentProjectsService";
// import { studentProjects } from "../../../store/actions/student/students/studentProjectsService";
import UnmarkedProjects from './UnmarkedProject'
import MarkedProjects from './MarkedProject'
import { teacherProject } from '../../../store/actions/teacher/teachers/teacherProjectsService'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import Breadcrumb from '../../ui/Breadcrumb'

// updated
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

const Projects = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = React.useState(1)
    const { user } = useAppSelector((state) => state.user)
    const { teacherAllProject } = useAppSelector(
        (state: RootState) => state.teacher
    )

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        dispatch(teacherProject(user?.clientId))
    }, [user])

    useEffect(() => {
        dispatch(teacherProject(user?.clientId))
    }, [])

    const projects = teacherAllProject?.map((ele: any) =>
        ele.students?.map((i: any) => i.checked)
    )
    const allProjects = projects.flat(Infinity)

    const markProjects = allProjects?.filter((x: any) => x === true)
    const unMarkProjects = allProjects?.filter((x: any) => x === false)
    return (
        <>
            <div className='flex justify-between  '>
                <div>
                    <Breadcrumb />
                    <h2 className='md:text-[25px] md:pl-[10px] md:text-[#131414] md:leading-[38px] font-bold font-author'>
                        Projects
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
                                    label={`Not Marked (${unMarkProjects?.length})`}
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
                                    label={`Marked  (${markProjects?.length})`}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div className='mt-4'>
                                <Grid container spacing={2}>
                                    {teacherAllProject?.map(
                                        (ele: any, index: any) => (
                                            <UnmarkedProjects
                                                key={index}
                                                projects={ele?.students}
                                            />
                                        )
                                    )}
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='mt-4'>
                                <Grid container spacing={2}>
                                    {teacherAllProject?.map(
                                        (ele: any, index: any) => (
                                            <MarkedProjects
                                                key={index}
                                                projects={ele?.students}
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

export default Projects
