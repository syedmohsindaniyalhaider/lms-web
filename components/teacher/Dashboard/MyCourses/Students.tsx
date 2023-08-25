import Image from 'next/image'
import { useRouter } from 'next/router'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'
import person3 from '/assets/icons/person3.svg'
import person2 from '/assets/icons/person2.svg'

const Students = () => {
    const router = useRouter()
    const { teacherAllStudents } = useAppSelector(
        (state: RootState) => state?.teacher
    )

    return (
        <>
            <div
                className='flex justify-between items-center p-5 md:col-span-6 lg:col-span-4 custom-shadow rounded-md hover:bg-[#F5F8F8] hover:cursor-pointer group'
                onClick={() => router.push('/teacher/student-details')}
            >
                <div>
                    <h1 className='md:text-[60px] text-[#131414] '>
                        {teacherAllStudents?.length}
                    </h1>
                    <h2 className='text-[#131414] md:text-[20px] font-semibold leading-none'>
                        Total Students
                    </h2>
                    <h2 className='font-[494] text-[#F0A901] underline'>
                        Go to Detail Page
                    </h2>
                </div>
                <div className='space-y-5 group-hover:bg-[]'>
                    <div className='bg-[#F3F5FD] rounded-[4px]  flex-col items-center justify-center px-2 group-hover:bg-white'>
                        <div className='flex justify-between'>
                            <Image src={person3} alt='icon' />
                            <h1 className='text-[#355ADC]  md:text-[32px] leading-none'>
                                {!!teacherAllStudents &&
                                teacherAllStudents[0]?.students === null
                                    ? 0
                                    : teacherAllStudents?.length}
                            </h1>
                        </div>
                        <h1 className='text-[#595959]'>One to One</h1>
                    </div>
                    <div className='bg-[#F3F5FD] rounded-[4px]  flex-col items-center justify-center px-2 group-hover:bg-white'>
                        <div className='flex justify-between'>
                            <Image src={person2} alt='icon' />
                            <h1 className='text-[#355ADC]  md:text-[32px] leading-none'>
                                0
                            </h1>
                        </div>
                        <h1 className='text-[#595959]'>One to Many</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Students
