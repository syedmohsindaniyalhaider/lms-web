import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import cancelClassIcon from '/assets/icons/cancelClass.svg'
import {
    RootState,
    useAppSelector,
    useAppDispatch,
} from '../../../../store/index'
import { classScheduleUpdate } from '../../../../store/actions/student/classes/classScheduleUpdateService'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ClassSchedule = ({
    open,
    teacherId,
    handleClose,
    availabilities,
    classId,
}: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)

    const handleSchedule = async (time: any, id: any, date: string) => {
        const classDetails = {
            classId: classId,
            classStatus: 'pending',
            teacherId: teacherId,
            scheduledAt: time,
            date: date,
            studentId: user?.clientId,
            courseId: 4,
            content: 'content',
            availabilityId: id,
        }
        dispatch(classScheduleUpdate(classDetails))
        handleClose()
        toast.success(`Your class is schedule at ${time} `)
    }

    return (
        <>
            <ToastContainer />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box className='absolute top-[50%] left-[50%] rounded-md -translate-x-[50%] -translate-y-[50%] p-4 bg-white border-2 shadow-md'>
                    <h1 className='text-[32px] font-semibold '>Schedule</h1>
                    <Box className=' h-[68vh] lg:w-[450px] overflow-y-auto scroll-hide'>
                        <table className='table-auto border-separate border-spacing-4'>
                            <thead>
                                <tr className='text-[25px] font-[700]'>
                                    <td>Date</td>
                                    <td>Time</td>
                                </tr>
                            </thead>
                            <tbody>
                                {availabilities?.map((ele: any) => (
                                    <>
                                        <tr>
                                            <td key={ele?.availabilityId}>
                                                {' '}
                                                <h3 className='md:text-[20px] md:font-[600] lg:text-[24px]'>
                                                    {moment(
                                                        ele?.date,
                                                        'DD-MM-YYYY'
                                                    ).format('Do MMM')}
                                                </h3>
                                                <h3 className='text-[#8C8C8C] md:text-[18px] md:font-[600] lg:text-[20px]'>
                                                    {moment(
                                                        ele?.date,
                                                        'DD-MM-YYYY'
                                                    ).format('ddd')}
                                                </h3>
                                            </td>

                                            <td

                                            // onClick={() => setAvailabilityId(ele.availabilityId)}
                                            >
                                                {ele?.hours.length > 0
                                                    ? ele?.hours?.map(
                                                          (
                                                              item: any,
                                                              index: any
                                                          ) => (
                                                              <button
                                                                  disabled={
                                                                      item?.status ===
                                                                      true
                                                                          ? true
                                                                          : false
                                                                  }
                                                                  onClick={() => {
                                                                      handleSchedule(
                                                                          item?.startTime,
                                                                          ele?.availabilityId,
                                                                          ele?.date
                                                                      )
                                                                  }}
                                                                  key={index}
                                                                  className={
                                                                      item?.status ===
                                                                      true
                                                                          ? 'bg-gray-300 p-[7px] text-black rounded-md mr-[10px]'
                                                                          : 'bg-yellow-400  p-[7px] text-white rounded-md mr-[10px] cursor-pointer'
                                                                  }
                                                              >
                                                                  {
                                                                      item?.startTime
                                                                  }
                                                              </button>
                                                          )
                                                      )
                                                    : 'No hours found.'}
                                            </td>
                                        </tr>
                                    </>
                                ))}
                                {/* {studentClasses?.length > 0
                ? studentClasses
                    ?.filter((ele: any) => ele?.classStatus !== "completed")
                    .map(
                      (ele: any) =>
                        ele?.classes?.startTime && (
                          <tr key={ele?.classes?.classId}>
                            <td className="text-[20px] mt-[10px] font-semibold w-auto">
                              <div className="">
                                <h3 className="md:text-[20px] md:font-[600] lg:text-[24px]">
                                  {moment(
                                    ele?.classes.date,
                                    "DD/MM/YYYY"
                                  ).format("Do MMM")}
                                </h3>
                                <h3 className="text-[#8C8C8C] md:text-[18px] md:font-[600] lg:text-[20px]">
                                  {moment(
                                    ele?.classes.date,
                                    "DD/MM/YYYY"
                                  ).format("ddd")}
                                </h3>
                              </div>
                            </td>
                            <td className="py-2 w-auto">
                              <span
                                onClick={() =>
                                  handleTime(
                                    true,
                                    false,
                                    ele?.classId,
                                    ele?.classes.startTime
                                  )
                                }
                                className={`text-[20px] mt-[10px] p-2 font-semibold rounded hover:cursor-pointer ${
                                  (ele?.classes.scheduledAt ===
                                    ele?.classes.startTime ||
                                    (primaryTime &&
                                      ele?.classId === classId)) &&
                                  ele?.classStatus !== "cancelled"
                                    ? "bg-[#F0A901] text-white"
                                    : "bg-[#D9D9D9]"
                                }`}
                              >
                                {ele?.classes.startTime}
                              </span>
                            </td>
                            <td className="py-2">
                              <span
                                onClick={() =>
                                  handleTime(
                                    false,
                                    true,
                                    ele?.classes.classId,
                                    ele?.classes.endTime
                                  )
                                }
                                className={`text-[20px] mt-[10px] p-2 font-semibold rounded hover:cursor-pointer ${
                                  ele?.classes.scheduledAt ===
                                    ele?.classes.endTime ||
                                  (secondaryTime && ele?.classId === classId)
                                    ? " bg-[#F0A901] text-white"
                                    : " bg-[#D9D9D9]"
                                }`}
                              >
                                {ele?.classes.endTime}
                              </span>
                            </td>
                            <td>
                              {ele?.classStatus === "not scheduled" &&
                              currentItem?.scheduledAt !== "" &&
                              ele?.classId === classId ? (
                                <div className="flex ">
                                  <span
                                    className="bg-primary rounded p-2  text-white  hover:cursor-pointer"
                                    onClick={handleSchedule}
                                  >
                                    Schedule
                                  </span>
                                  <span
                                    className="rounded-xl p-2"
                                    onClick={() => {
                                      handleTime(false, false, -1, "");
                                    }}
                                  >
                                    <Image
                                      className=""
                                      src={cancelClassIcon}
                                      alt="cancel-class-icon"
                                    />
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        )
                    )
                : "No Classes Found"} */}
                            </tbody>
                        </table>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default ClassSchedule
