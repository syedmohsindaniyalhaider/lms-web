import { useRouter } from 'next/router'
import { RootState, useAppDispatch, useAppSelector } from '../../../../store'

const Courses = () => {
    const { teacherCourses } = useAppSelector(
        (state: RootState) => state?.courses
    )
    const router = useRouter()

    return (
        <>
            <div
                className='flex items-center md:col-span-6 lg:col-span-4 p-5 custom-shadow rounded-md hover:bg-[#F5F8F8] hover:cursor-pointer'
                onClick={() => router.push('/teacher/mycourse')}
            >
                <div>
                    <h1 className='text-[60px] text-[#131414]'>
                        {teacherCourses?.length}
                    </h1>
                    <h2 className='text-[#131414] sm:text-[15px] lg:text-[20px] font-semibold leading-none'>
                        Total Courses
                    </h2>
                    <h2 className='font-[494] lg:text-[16px] text-[#F0A901] underline'>
                        Go to Detail Page
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Courses
