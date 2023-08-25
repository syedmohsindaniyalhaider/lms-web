import {
    RootState,
    useAppSelector,
    useAppDispatch,
} from '../../../../store/index'

const StudentInfo = () => {
    const { teacherSingleStudentInfo } = useAppSelector(
        (state: RootState) => state?.teacher
    )
    console.log('teacherSingleStudentInfo', teacherSingleStudentInfo)
    return (
        <div>
            <h2 className='text-[#131414] font-bold md:text-[20px] xl:text-[22px]'>
                Details
            </h2>
            <div className='flex leading-none items-center py-2'>
                <div className='pr-1 border-r-[2px] '>
                    <h2 className='text-[#131414] font-bold md:text-[15px] lg:text-[18px] leading-none '>
                        {teacherSingleStudentInfo[0]?.students.fullName}
                    </h2>
                    <h2 className='text-[#131414] py-1 font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                        {teacherSingleStudentInfo[0]?.students.primaryEmail}
                    </h2>
                </div>
                <div className='pl-2'>
                    <h2 className='text-[#131414] font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                        {teacherSingleStudentInfo[0]?.students.address === null
                            ? 'address'
                            : teacherSingleStudentInfo[0]?.students.address}
                    </h2>
                    <h2 className='text-[#131414] py-1 font-[500] md:text-[13px] lg:text-[18px] leading-none'>
                        {teacherSingleStudentInfo[0]?.students.contactNo ===
                        null
                            ? 'contactNo'
                            : teacherSingleStudentInfo[0]?.students.contactNo}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo
