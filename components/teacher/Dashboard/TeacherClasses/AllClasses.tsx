import React from 'react'
import Image from 'next/image'
import Green from '/assets/images/Green.svg'
import Red from '/assets/images/red.svg'
import Link from 'next/link'
import { allClassQuizzes } from '../../../../store/actions/student/quiz/allClassQuizzesService'
import { useAppDispatch } from '../../../../store'
import moment from 'moment'
// import { allProjects } from "../../../../store/actions/student/projects/projectService";

const AllClasses = ({
    classStatus,
    classId,
    classCode,
    classDate,
    date,
    startTime,
    description,
    classTitle,
}: any) => {
    const dispatch = useAppDispatch()

    const allClassQuizzesHandler = () => {
        dispatch(allClassQuizzes(classId))
        // dispatch(allProjects(classId));
    }

    return (
        <>
            <div
                className={`my-8 rounded-lg border-2 w-[300px] ${
                    classStatus === 'cancelled'
                        ? 'bg-[#FFF8F8] border-[#FEE5E3]'
                        : 'bg-[#F5F8F8] border-[#DBE6E3]'
                }`}
            >
                <div className='px-3 py-3.5 flex gap-3 h-[75px]'>
                    <div className=''>
                        <div className='flex items-center gap-3'>
                            <div className='font-author text-[22px] 2xl:text-[26px] font-extrabold'>
                                Class {classCode}
                            </div>
                            {/* <div
                className={`rounded-xl h-1 w-1 ${
                  classStatus === "cancelled" ? "bg-[#F94F46]" : "bg-[#0F5647]"
                }`}
              ></div> */}
                            <div
                                className={`font-author text-[18px] lg:text-[20px] font-medium ${
                                    classStatus === 'cancelled'
                                        ? 'text-[#F94F46]'
                                        : 'text-[#0F5647]'
                                }`}
                            >
                                {classStatus}
                            </div>
                        </div>
                        {classDate && (
                            <div className='flex font-author -mt-1'>
                                <div className='font-semibold border-r-2 border-[#D9D9D9] pr-[10px] text-[13px] 2xl:text-[17px]'>
                                    {moment(classDate, 'DD/MM/YYYY').format(
                                        'Do MMM, YYYY'
                                    )}
                                </div>
                                <div className='font-semibold pl-[10px] text-[13px] 2xl:text-[17px]'>
                                    {startTime}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='-mt-8 '>
                        <Image
                            alt=''
                            src={classStatus === 'cancelled' ? Red : Green}
                        />
                    </div>
                </div>
                <div className='bg-white px-3 h-[50%] py-3.5'>
                    <div className='text-[22px] 2xl:text-[26px] font-author font-semibold'>
                        {classTitle}
                    </div>
                    <div className='font-author line-clamp-3 lg:text-[18px]'>
                        {description}
                    </div>
                </div>
                <div
                    onClick={allClassQuizzesHandler}
                    className='px-3 bg-white pb-4 rounded-b-lg'
                >
                    <button className='bg-[#717688]  font-semibold px-[20px] py-[10px] rounded-[8px] text-white relative group overflow-hidden'>
                        <span className='relative z-40'>
                            <Link href={`/teacher/classes/${classId}?t=c`}>
                                VIEW CLASS DETAILS
                            </Link>
                        </span>
                        <span className='absolute bottom-0 left-1/2 w-0 h-full z-0  bg-[#4d5161]   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                        <span className='absolute bottom-0 right-1/2 w-0 h-full z-0   bg-[#4d5161] group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                    </button>
                </div>
                {/* <div className="flex">
            <div className="font-medium">{CardsData[0].Date}</div>
            <div className="font-medium">{CardsData[0].Time}</div>
          </div> */}
            </div>
        </>
    )
}

export default AllClasses
