import { RootState, useAppSelector } from '../../../../store/index'

const CourseInfo = () => {
    const { teacherSingleStudentInfo } = useAppSelector(
        (state: RootState) => state?.teacher
    )
    const completedClasses = teacherSingleStudentInfo[0]?.classes?.filter(
        (ele: any) => ele?.status === 'completed'
    )
    const completedQuizzes = teacherSingleStudentInfo[0]?.quizzes?.filter(
        (ele: any) => ele?.students[0]?.status === 'completed'
    )
    const completedProjects = teacherSingleStudentInfo[0]?.projects?.filter(
        (ele: any) => ele?.students[0]?.status === 'completed'
    )

    return (
        <div className='lg:w-[60%] flex border-[2px] rounded-md justify-between px-5 py-3'>
            <div className='space-y-1'>
                <h1 className='font-[600] text-[50px] leading-none flex items-center justify-center'>
                    {completedClasses?.length}
                </h1>
                <h2 className='text-[#131414] font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                    Classes Done
                </h2>
            </div>
            <div className='space-y-1'>
                <h1 className='font-[600] text-[50px] leading-none  flex items-center justify-center'>
                    {completedQuizzes?.length}
                </h1>
                <h2 className='text-[#131414] font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                    Quizzes Completed
                </h2>
            </div>
            <div className='space-y-1'>
                <h1 className='font-[600] text-[50px] leading-none  flex items-center justify-center'>
                    {completedProjects?.length}
                </h1>
                <h2 className='text-[#131414] font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                    Project Submitted
                </h2>
            </div>
        </div>
    )
}

export default CourseInfo
