import React, { useState } from 'react'
import Image from 'next/image'
import clockIcon from '/assets/icons/clockIcon.svg'
import cancelClassIcon from '/assets/icons/cancelClass.svg'
import calendarEditIcon from '/assets/icons/calendarEdit.svg'
import rightChevIcon from '/assets/icons/rightChevArrow.svg'
import moment from 'moment'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { useAppDispatch } from '../../../../store'
import { classScheduleUpdate } from '../../../../store/actions/student/classes/classScheduleUpdateService'
import ClassSchedule from '../ClassSchedule'
import Link from 'next/link'
import { Grid } from '@mui/material'
import { baseURL } from '../../../../helpers/url'
import studentProfile from '../../../../assets/images/User-Avatar.png'
const UpcomingClasses = ({
    studentId,
    classes,
    teacherId,
    availabilities,
    teacherFirstName,
    teacherLastName,
    teacherProfile,
}: any) => {
    const dispatch = useAppDispatch()
    const [currentItem, setCurrentItem] = useState<any>()
    const [primaryTime, setPrimaryTime] = useState<any>(false)
    const [secondaryTime, setSecondaryTime] = useState<any>(false)
    const [classId, setClassId] = useState(-1)
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const scheduleModalClose = () => setModalOpen(false)
    const handleCancelModalOpen = () => setOpen(true)
    const handleCancelModalClose = () => setOpen(false)
    const classCancelHandler = () => {
        const classDetails = {
            classId: classId,
            classStatus: 'not scheduled',
            scheduledAt: '',
            contentId: classId,
            teacherId: teacherId,
            clientId: teacherId, //teacherId
            studentId: studentId, //studentId
        }
        dispatch(classScheduleUpdate(classDetails))
        handleCancelModalClose()
    }

    const handleTime = (
        primaryTime: boolean,
        secondaryTime: boolean,
        activeClassId: number,
        time: string
    ) => {
        setClassId(activeClassId)
        setPrimaryTime(primaryTime)
        setSecondaryTime(secondaryTime)
        setCurrentItem({
            classId: activeClassId,
            classStatus: 'pending',
            scheduledAt: time,
            studentId: studentId,
            courseId: 1,
            content: 'content',
            clientId: studentId,
            teacherId: teacherId,
        })
    }

    const handleSchedule = () => {
        if (currentItem?.scheduledAt !== '') {
            dispatch(classScheduleUpdate(currentItem))
            // dispatch(allClasses(user.students.studentId));
        }
        setPrimaryTime(false)
        setSecondaryTime(false)
        scheduleModalClose()
    }

    return (
        <>
            <ClassSchedule
                open={modalOpen}
                classId={classId}
                teacherId={teacherId}
                handleTime={handleTime}
                currentItem={currentItem}
                primaryTime={primaryTime}
                handleClose={scheduleModalClose}
                secondaryTime={secondaryTime}
                handleSchedule={handleSchedule}
                availabilities={availabilities}
            />
            <Modal
                open={open}
                onClose={handleCancelModalClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box className='p-[40px] absolute top-[50%] left-[50%] rounded-md -translate-x-[50%] -translate-y-[50%]  w-[500px] bg-white border-2 shadow-md '>
                    <div className='text-[25px] space-x-14  font-bold text-center '>
                        Do you really intend to cancel this class?
                        <button
                            onClick={classCancelHandler}
                            className={
                                'bg-[#D9D9D9] text-[20px] mt-[10px] px-8 font-semibold rounded hover:cursor-pointer hover:bg-[#F0A901]'
                            }
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleCancelModalClose}
                            className='bg-[#D9D9D9] text-[20px] mt-[10px] px-8 font-semibold rounded hover:cursor-pointer hover:bg-[#F94F46]'
                        >
                            No
                        </button>
                    </div>
                </Box>
            </Modal>

            {classes?.length > 0 ? (
                classes?.map((item: any) => (
                    <div key={item?.classId}>
                        <div className='grid md:grid-cols-7 lg:grid-cols-9 gap-4 py-4 '>
                            <div className='col-span-1 flex items-center text-left'>
                                <div>
                                    {item.date && (
                                        <>
                                            <h3 className='md:text-[20px] md:font-[600] lg:text-[24px]'>
                                                {moment(
                                                    item?.date,
                                                    'DD/MM/YYYY'
                                                ).format('Do MMM')}
                                            </h3>
                                            <h3 className='text-[#8C8C8C]  md:text-[18px] font-[494] lg:text-[20px]'>
                                                {moment(
                                                    item?.date,
                                                    'DD/MM/YYYY'
                                                ).format('ddd')}
                                            </h3>
                                        </>
                                    )}
                                    {item?.classStatus === 'not scheduled' && (
                                        <span className='text-[#131414] text-[24px] font-[596]'>
                                            {item?.classStatus}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className=' bg-white col-span-6 p-4 md:rounded-lg text-[14px] flex gap-3 items-center custom-shadow'>
                                <div className='w-full'>
                                    <h3 className='text-[#355ADC] md:font-[600] lg:text-[22px]'>
                                        {item?.classes?.classCode} #
                                        <span className='text-[#131414]'>
                                            {item?.classes?.classTitle}
                                        </span>
                                    </h3>
                                    <div className='flex items-center justify-between lg:w-full'>
                                        <p className='py-3 md:text-[14px] font-[400] lg:text-[20px]'>
                                            {item?.classes?.description}...
                                            <span className='underline text-[#F0A901]'>
                                                <Link
                                                    href={`/student/classes/${item?.classes?.classId}?t=c`}
                                                >
                                                    View Details
                                                </Link>
                                            </span>
                                        </p>
                                        <div className='mr-4 lg:mr-8 md:mt-1'>
                                            <Image
                                                src={rightChevIcon}
                                                alt='view more'
                                                width={10}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex gap-4 '>
                                        <div className='flex gap-2  items-center'>
                                            <div className='flex'>
                                                <Image
                                                    src={clockIcon}
                                                    alt='clock-icon'
                                                />
                                            </div>
                                            <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                                {`${
                                                    item?.scheduledAt
                                                } - ${moment(
                                                    item?.scheduledAt,
                                                    'h:mma'
                                                )
                                                    .add(45, 'minutes')
                                                    .format('hh:mm A')}`}
                                            </div>
                                        </div>
                                        <div className='flex items-center  gap-3 border-l-[0.5px] border-[#D9D9D9] px-3'>
                                            <div className='flex'>
                                                {teacherProfile !== null ? (
                                                    <img
                                                        src={`${baseURL}/${teacherProfile}`}
                                                        alt='Profile Picture'
                                                        className=' h-[40px] w-[40px] object-cover rounded-full'
                                                    />
                                                ) : (
                                                    <Image
                                                        src={studentProfile}
                                                        alt='image'
                                                        className='object-cover'
                                                    />
                                                )}
                                            </div>
                                            <div className='md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                                {teacherLastName !== null ? (
                                                    <p>
                                                        {teacherFirstName}{' '}
                                                        {teacherLastName}
                                                    </p>
                                                ) : (
                                                    <p> {teacherFirstName}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center lg:w-[220px] md:w-[800%]'>
                                {item?.classStatus === 'not scheduled' ? (
                                    <div className=' md:w-[100%] md:float-right lg:flex-col md:flex md:justify-around cursor-pointer'>
                                        <div className='flex space-x-2 py-1'>
                                            <Image
                                                src={calendarEditIcon}
                                                alt='calendar-edit-icon'
                                            />
                                            <button
                                                type='button'
                                                onClick={() => {
                                                    setModalOpen(true)
                                                    setClassId(
                                                        item?.classes?.classId
                                                    )
                                                }}
                                                className='text-[#8C8C8C] md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'
                                            >
                                                Schedule this class
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className=' md:w-[100%] md:float-right lg:flex-col md:flex md:justify-around cursor-pointer'>
                                        <div className='flex space-x-2 py-1 md:ml-9 lg:ml-0'>
                                            <Image
                                                src={cancelClassIcon}
                                                alt='cancel-class-icon'
                                            />
                                            <button
                                                onClick={handleCancelModalOpen}
                                                className='text-[#F94F46] md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'
                                            >
                                                Cancel This Class
                                            </button>
                                        </div>
                                        <div className='flex space-x-2 py-1'>
                                            <Image
                                                src={calendarEditIcon}
                                                alt='calendar-edit-icon'
                                            />
                                            <h3 className='text-[#8C8C8C] md:text-[14px] md:font-[400] lg:text-[20px] lg:font-[500]'>
                                                Reschedule this class
                                            </h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Grid container>
                    <Grid item key={classId} sm={1.5}></Grid>
                    <Grid item key={classId} sm={10.5} paddingY={2}>
                        No Classes found.
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default UpcomingClasses
