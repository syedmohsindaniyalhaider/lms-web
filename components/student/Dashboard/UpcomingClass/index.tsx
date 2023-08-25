import Image from 'next/image'
import calendarIcon from '/assets/images/calendar-tick.svg'
import walletIcon from '/assets/images/wallet.svg'
import sammyImage from '/assets/images/sammy-message.png'
import moment from 'moment'
import { RootState, useAppSelector } from '../../../../store'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../../store/index'
import Link from 'next/link'

const UpcomingClass = (props: any) => {
    const router = useRouter()
    const { upcomingClass } = props
    const { user } = useAppSelector((state: RootState) => state.user)
    const latestDate = moment('h:mma').isAfter(upcomingClass?.date)
    const minutesLeft = moment(upcomingClass?.scheduledAt, 'h:mma').fromNow(
        true
    )
    const minutes = minutesLeft.charAt(0)
    const classEndTime = moment(upcomingClass?.scheduledAt, 'h:mma')
        .add(45, 'minutes')
        .format('hh:mm A')

    const gotoZoom = () => router.push('/student/zoom')

    return (
        <div className=' h-auto lg:flex md:space-y-4 lg:space-y-0 lg:space-x-4'>
            <div className='bg-white drop-shadow-xl lg:w-[52%]  px-[20px] rounded-[8px] overflow-hidden '>
                {upcomingClass?.classStatus === 'pending' ? (
                    <>
                        <div className='flex justify-between w-full   items-center  md:py-[15px] xl:py-[15px] lg:py-[10px]'>
                            <h1 className=' lg:text-[20px] xl:text-[25px] md:text-[20px] font-extrabold'>
                                Upcoming Class
                            </h1>
                            <button className='bg-[#E7D7EE] font-semibold text-[#57067D] rounded-[22px] py-[8px] md:px-[20px] md:py-2 px-[25px] xl:px-[28px] lg:px-[24px] lg:text-[20px] xl:text-[22px] lg:py-1 lg:font-author'>
                                {upcomingClass?.courseName}
                            </button>
                        </div>
                        <div className='bg-[#F5F5F5] flex  py-[15px] md:py-3 md:-mx-5 md:px-4  space-x-2 items-center xl:py-[15px] lg:py-[10px]'>
                            <Image alt='' className='' src={calendarIcon} />
                            <h3 className='text-[#454545]  lg:text-[16px] xl:text-[18px] md:text-[14px] xl:font-medium'>
                                {latestDate === false
                                    ? moment(
                                          upcomingClass?.date,
                                          'DD/MM/YYYY'
                                      ).format('dddd Do MMM') +
                                      ', ' +
                                      upcomingClass?.scheduledAt +
                                      ' - ' +
                                      classEndTime
                                    : 'no upcoming class'}
                            </h3>
                        </div>
                        <div className='bg-white  py-[5px]'>
                            <h1 className='text-[#454545] font-bold items-center  md:text-[16px] xl:text-[24px] lg:text-[18px]  lg:font-semibold'>
                                {upcomingClass?.classes?.classTitle}
                            </h1>
                            <p className='text-left text-[#131414] lg:text-[14px] md:text-[12px] xl:text-[18px] lg:font-normal my-[10px] lg:leading-tight'>
                                {upcomingClass?.classes?.description}...
                                <span className='text-[#F0A901]  pl-[2px]'>
                                    <Link
                                        href={`/student/classes/${upcomingClass?.classes?.classId}?t=c`}
                                    >
                                        View Details
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className='flex bg-white gap-5 mt-4 pb-[20px] lg:pb-4 xl:pb-0'>
                            <button className='bg-[#355ADC] font-semibold lg:font-medium px-[20px] lg:px-[20px] md:px-[15px] text-[15px] xl:text-[18px] py-[10px] xl:py-[10px] lg:py-[7px] rounded-[8px] text-white relative group overflow-hidden'>
                                <span className='relative z-40'>
                                    SYSTEM CHECK
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-blue-800 group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                            </button>
                            <button
                                onClick={() => gotoZoom()}
                                type='button'
                                // disabled={+minutes >= 5 && minutes !== "a" ? true : false}
                                className={`font-semibold px-[20px] lg:px-[20px] md:px-[15px] text-[15px] py-[10px] rounded-[8px] text-white
                  ${
                      +minutes < 5 && minutes !== 'a'
                          ? 'bg-primary'
                          : 'bg-[#BFBFBF] cursor-default'
                  }
                  `}
                            >
                                {/* <Link href="/zoom"> */}
                                {user?.role === 'student'
                                    ? 'JOIN CLASS'
                                    : 'START CLASS'}
                                {/* </Link> */}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='py-4'>No Upcoming Class</div>
                )}
            </div>
            <div className='bg-white   drop-shadow-xl lg:w-[48%]  shadow-sm px-[20px] md:pb-[20px] xl:pb-0 rounded-[8px] overflow-hidden '>
                <div className='bg-white flex items-center py-[12px] space-x-3'>
                    <Image alt='' src={walletIcon}></Image>
                    <p className='lg:text-[16px] xl:text-[16px] md:text-[12px] font-[700] lg:font-[700] text-[#F0A901] '>
                        REFERRAL REWARD
                    </p>
                </div>
                <div className='flex 2xl:justify-between md:justify-between'>
                    <div>
                        <h1 className='font-extrabold xl:font-bold lg:text-[28px] md:text-[16px] xl:text-[28px] 2xl:font-extrabold'>
                            Refer to a friend and get
                            <span className='text-[#F0A901]'>
                                <span className='lg:text-[28px]'>$</span>100
                            </span>
                        </h1>
                        <div className='md:w-[250px] lg:w-full'>
                            <p className='text-[#454545] md:text-[12px] lg:text-[20px] lg:font-[494] xl:text-[20px] text-left pt-[5px] lg:pt-[4px]'>
                                worth of classes of your choosing subject, for
                                every friend who join *
                            </p>
                        </div>
                        <div className='md:flex lg:flex-col  md:items-center lg:items-start lg:text-left md:space-x-5 lg:space-x-0'>
                            <button className='bg-[#EB2C22]  font-author  lg:font-medium md:px-[15px] lg:px-[20px] py-[10px] mt-5 lg:mt-6 rounded-[8px] text-white relative group overflow-hidden'>
                                <span className='relative z-40 font-author lg:font-medium xl:text-[22px]'>
                                    Earn $100 Now
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-red-600 group-hover:w-1/2 group-hover:transition-out duration-200 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0 bg-red-600 group-hover:w-1/2 group-hover:transition-out duration-200'></span>
                            </button>
                            <p className='lg:text-[11px] xl:text-[14px] text-[#8C8C8C] mt-4 lg:mt-5 md:text-[12px] '>
                                * when friend buy 6 classes or more. T&C apply
                            </p>
                        </div>
                    </div>
                    <div className='-mt-[20px]'>
                        <div className='lg:block xl:hidden  2xl:hidden md:hidden lg:mt-4'>
                            <Image
                                alt=''
                                height={280}
                                width={200}
                                src={sammyImage}
                            ></Image>
                        </div>
                        <div className='xl:block sm:hidden md:hidden lg:hidden h-[300px] w-[200px]'>
                            <Image
                                alt=''
                                height={300}
                                width={280}
                                src={sammyImage}
                            ></Image>
                        </div>
                        <div className='lg:hidden xl:hidden  2xl:hidden lg:mt-4 md:block'>
                            <Image
                                alt=''
                                height={180}
                                width={150}
                                src={sammyImage}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpcomingClass
