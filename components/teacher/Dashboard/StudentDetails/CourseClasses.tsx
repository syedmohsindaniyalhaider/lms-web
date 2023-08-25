import React, { useState, useEffect } from 'react'
import {
    RootState,
    useAppSelector,
    useAppDispatch,
} from '../../../../store/index'

const CourseClasses = () => {
    const { teacherSingleStudentInfo } = useAppSelector(
        (state: RootState) => state?.teacher
    )
    const [tab, setTab] = useState('upcoming')

    const completedClasses = teacherSingleStudentInfo[0]?.classes?.filter(
        (ele: any) => ele?.status === 'completed'
    )
    const notCompletedClasses = teacherSingleStudentInfo[0]?.classes?.filter(
        (ele: any) => ele?.status !== 'completed'
    )
    const completedQuizzes = teacherSingleStudentInfo[0]?.quizzes?.filter(
        (ele: any) => ele?.students[0]?.status === 'completed'
    )
    const completedProjects = teacherSingleStudentInfo[0]?.projects?.filter(
        (ele: any) => ele?.students[0]?.status === 'completed'
    )

    return (
        <div>
            <h2 className='text-[#131414] font-bold md:text-[20px] lg:text-[25px] xl:text-[22px]'>
                Classes
            </h2>
            <div className='w-[100%] lg:gap-5 lg:flex'>
                <div className='lg:w-[60%]'>
                    {/* //Tabs here */}
                    {/* Tabs Tabs */}
                    <div className='w-full flex gap-5 items-center relative my-3'>
                        <h2
                            className={`font-semibold md:text-[18px] leading-none xl:text-[16px] cursor-pointer ${
                                tab === 'upcoming'
                                    ? 'text-[#355ADC]'
                                    : 'text-[#8C8C8C]'
                            }`}
                            onClick={() => setTab('upcoming')}
                        >
                            Upcoming ({notCompletedClasses?.length})
                        </h2>
                        <h2
                            className={`font-semibold md:text-[18px] leading-none xl:text-[16px] cursor-pointer ${
                                tab === 'completed'
                                    ? 'text-[#355ADC]'
                                    : 'text-[#8C8C8C]'
                            }`}
                            onClick={() => setTab('completed')}
                        >
                            Completed({completedClasses?.length})
                        </h2>
                        <div
                            className={`h-[4px] rounded-full bg-[#355ADC] absolute xl:w-[100px] top-[27px] lg:w-[90px] md:w-[85px] ${
                                tab === 'completed' &&
                                ' lg:translate-x-[109px] xl:translate-x-[120px] md:translate-x-[110px]'
                            }`}
                        ></div>
                    </div>

                    <div className='h-[2px] rounded-full bg-[#D9D9D9]'></div>
                    <div className='h-[300px] overflow-scroll modelScroll -space-y-1'>
                        {tab === 'upcoming' ? (
                            <>
                                {teacherSingleStudentInfo[0]?.classes !== 0
                                    ? notCompletedClasses?.map(
                                          (ele: any, index: any) => (
                                              <div
                                                  key={index}
                                                  className='py-2 w-full'
                                              >
                                                  <div className='rounded-md border-[1px] items-center p-2 space-y-1'>
                                                      <div className='flex justify-between leading-none '>
                                                          <h2 className='text-[#355ADC] font-[410]  md:text-[14px] lg:text-[16px]'>
                                                              {ele?.classCode}
                                                          </h2>
                                                          <div className='flex '>
                                                              <h2 className='text-[#131414] font-[410] md:text-[16px] border-r-[1px] border-[#D9D9D9] pr-1'>
                                                                  {ele?.date}
                                                              </h2>

                                                              <h2 className='text-[#131414] font-[410] md:text-[16px]  lg:text-[16px] pl-1'>
                                                                  {
                                                                      ele?.startTime
                                                                  }{' '}
                                                                  -
                                                                  {ele?.endTime}
                                                              </h2>
                                                          </div>
                                                      </div>
                                                      <h2 className=' font-semibold md:text-[16px] leading-none xl:text-[18px] text-[#131414]'>
                                                          {ele?.classTitle}
                                                      </h2>
                                                  </div>
                                              </div>
                                          )
                                      )
                                    : 'no class'}
                            </>
                        ) : (
                            <>
                                {completedClasses?.length !== 0
                                    ? completedClasses?.map(
                                          (ele: any, index: any) => (
                                              <div
                                                  key={index}
                                                  className='py-2 w-full'
                                              >
                                                  <div className='rounded-md border-[1px] items-center p-2 space-y-1'>
                                                      <div className='flex justify-between leading-none '>
                                                          <h2 className='text-[#355ADC] font-[410]  md:text-[14px] lg:text-[16px]'>
                                                              {ele?.classCode}
                                                          </h2>
                                                          <div className='flex '>
                                                              <h2 className='text-[#131414] font-[410] md:text-[16px] border-r-[1px] border-[#D9D9D9] pr-1'>
                                                                  {ele?.date}
                                                              </h2>

                                                              <h2 className='text-[#131414] font-[410] md:text-[16px]  lg:text-[16px] pl-1'>
                                                                  {
                                                                      ele?.startTime
                                                                  }{' '}
                                                                  -
                                                                  {ele?.endTime}
                                                              </h2>
                                                          </div>
                                                      </div>
                                                      <h2 className=' font-semibold md:text-[16px] leading-none xl:text-[18px] text-[#131414]'>
                                                          {ele?.classTitle}
                                                      </h2>
                                                  </div>
                                              </div>
                                          )
                                      )
                                    : 'no class'}
                            </>
                        )}
                    </div>
                </div>
                <div className='lg:w-[40%] rounded-md border-[1.5px] overflow-hidden p-2'>
                    <div className='bg-[#F3F5FD] rounded-[4px] flex items-center justify-center px-2 py-3 border-[#6C87E5] border-[1px]'>
                        <h2 className=' font-[490] md:text-[22px] leading-none xl:text-[16px] text-[#355ADC] '>
                            View Report
                        </h2>
                    </div>
                    <div className='mt-5 flex gap-2 '>
                        <div className='w-[50%] rounded-lg border-[2px] '>
                            <div className='  p-2 bg-[#DBE6E3] flex items-center justify-center'>
                                <h2 className=' font-bold md:text-[16px] leading-none xl:text-[16px] text-[#0F5647] '>
                                    Last Quiz # 12
                                </h2>
                            </div>
                            <div className='p-3 space-y-1'>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] '>
                                    Score: 5/5
                                </h2>
                                <h2 className='text-[#F0A901] leading-none font-[450] md:text-[14px] xl:text-[16px] underline'>
                                    View Details
                                </h2>
                            </div>
                        </div>
                        <div className='w-[50%] rounded-lg border-[2px] '>
                            <div className='  p-2 bg-[#DBE6E3] flex items-center justify-center'>
                                <h2 className=' font-bold md:text-[16px] leading-none xl:text-[16px] text-[#0F5647] '>
                                    Last Project # 12
                                </h2>
                            </div>
                            <div className='p-3 space-y-1'>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] '>
                                    Score: 5/5
                                </h2>
                                <h2 className='text-[#F0A901] leading-none font-[450] md:text-[14px] xl:text-[16px] underline'>
                                    View Details
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h2 className='text-[#131414] font-semibold md:text-[18px] xl:text-[20px]'>
                            Attendance
                        </h2>
                        <div className='space-y-2 pt-2'>
                            <div className=' flex gap-8'>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] w-[130px]'>
                                    Total Classes:
                                </h2>
                                <h2 className='text-[#131414] leading-none font-semibold md:text-[14px] xl:text-[16px]'>
                                    {completedClasses?.length}
                                </h2>
                            </div>
                            <div className=' flex gap-8'>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] w-[130px]'>
                                    Attend Classes:
                                </h2>
                                <h2 className='text-[#131414] leading-none font-semibold md:text-[14px] xl:text-[16px]'>
                                    0
                                </h2>
                            </div>
                            <div className=' flex gap-8'>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] w-[130px]'>
                                    Missed Classes:
                                </h2>
                                <h2 className='text-[#131414] leading-none font-semibold md:text-[14px] xl:text-[16px]'>
                                    0
                                </h2>
                            </div>
                            <div className=' flex gap-8  '>
                                <h2 className='text-[#131414] leading-none font-[450] md:text-[14px] xl:text-[16px] w-[130px] '>
                                    Cancelled Classes:
                                </h2>
                                <h2 className='text-[#131414] leading-none font-semibold md:text-[14px] xl:text-[16px]'>
                                    0
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseClasses
