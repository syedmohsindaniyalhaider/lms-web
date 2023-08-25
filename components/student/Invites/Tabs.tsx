import React, { useState } from 'react'
import Image from 'next/image'
import parentPartner from '../../../assets/icons/message-chat-icon.svg'
import SliderCards from './SliderCards'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
;``
interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function RewardTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const [first, setFirst] = useState<boolean>(true)
    const [second, setSecond] = useState<boolean>(false)
    const [third, setThird] = useState<boolean>(false)
    function upcoming() {
        setFirst(true)
        setSecond(false)
        setThird(false)
    }
    function completed() {
        setSecond(true)
        setFirst(false)
        setThird(false)
    }
    function notCompleted() {
        setThird(true)
        setFirst(false)
        setSecond(false)
    }

    return (
        <div className='font-author'>
            <div className='mt-8 '>
                <h3
                    className='text-center text-[#131414] font-author md:text-[20px] md:font-[700] md:leading-[22px] 
        lg:text-[28px] lg:font-[600] lg:leading-[32px] lg:py-2'
                >
                    Lots of rewards to be earned
                </h3>
            </div>

            <div className='w-[100%] flex flex-col items-center justify-center'>
                <Box sx={{ width: '80%' }}>
                    <Box
                        sx={{
                            borderBottom: { lg: 2 },
                            borderColor: 'divider',
                            color: '#D9D9D9',
                        }}
                    >
                        <Tabs
                            centered
                            value={value}
                            onChange={handleChange}
                            aria-label='basic tabs example'
                            textColor='inherit'
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: '#355ADC',
                                    height: '5px',
                                    borderRadius: '8px',
                                },
                            }}
                            variant='fullWidth'
                        >
                            <Tab
                                sx={{
                                    px: 0,
                                    py: { lg: 4 },
                                    color: {
                                        lg: value === 0 ? '#131414' : '#8C8C8C',
                                        xs: 'white',
                                    },
                                    mr: {
                                        xs: '10px',
                                        lg: '0px',
                                    },
                                    borderRadius: '6px',
                                    backgroundColor: {
                                        xs:
                                            value === 0
                                                ? 'black !important'
                                                : '#8C8C8C !important',
                                        lg: 'transparent !important',
                                    },
                                }}
                                disableRipple
                                label={
                                    <p className='font-semibold capitalize font-author text-[20px] lg:text-[28px]'>
                                        Solo Class{' '}
                                        <span className='font-medium text-[18px]  lg:text-[22px] lowercase'>
                                            (1 teacher 1 student)
                                        </span>
                                    </p>
                                }
                                {...a11yProps(0)}
                            />
                            <Tab
                                sx={{
                                    color: {
                                        lg: value === 1 ? '#131414' : '#8C8C8C',
                                        xs: 'white',
                                    },
                                    backgroundColor: {
                                        xs:
                                            value === 1
                                                ? 'black !important'
                                                : '#8C8C8C !important',
                                        lg: 'transparent !important',
                                    },

                                    borderRadius: '6px',
                                }}
                                disableRipple
                                label={
                                    <p className='font-semibold capitalize font-author text-[20px]  lg:text-[28px]'>
                                        Private Batch{' '}
                                        <span className='font-medium text-[18px] lg:text-[22px] lowercase'>
                                            (1 teacher many students)
                                        </span>
                                    </p>
                                }
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div
                            className='flex flex-col items-center justify-center mx-auto md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] rounded-xl 
      my-4 bg-white shadow-xl'
                        >
                            <div className='flex justify-between w-full py-6 px-10 bg-[#FBF2DC]'>
                                <h1
                                    className=' md:text-[18px] md:font-[600] md:leading-[22px] lg:text-[22px] lg:font-[600] lg:leading-[24px]
           max-w-[40%] text-center'
                                >
                                    Classes Purchased by friend
                                </h1>
                                <h1
                                    className='md:text-[18px] md:font-[600] md:leading-[22px] lg:text-[22px] lg:font-[600] lg:leading-[24px]
           max-w-[40%] text-center'
                                >
                                    You & your friend EACH get
                                </h1>
                            </div>
                            <div className='flex py-8 px-20 justify-between w-full'>
                                <div
                                    className='text-center text-[#454545] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[22px] 
           lg:leading-[28px] space-y-2'
                                >
                                    <p
                                        className='text-center text-[#454545] md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[22px] 
           lg:leading-[28px]'
                                    >
                                        80 classes or more
                                    </p>
                                    <p
                                        className='text-center text-[#454545] md:text-[14px] md:font-[400] md:leading-[18px] 
              lg:text-[22px] lg:leading-[28px]'
                                    >
                                        48-79 classes
                                    </p>
                                    <p>6-47 classes</p>
                                </div>
                                <div
                                    className='bg-[#FAFBFC] md:text-[18px] md:font-[600] lg:text-[22px] 
           text-center px-8 font-semibold space-y-2'
                                >
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $100
                                    </p>
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $75
                                    </p>
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $50
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div
                            className='flex flex-col  items-center justify-center mx-auto md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] rounded-xl 
      my-4 bg-white shadow-xl'
                        >
                            <div className='flex justify-between w-full py-6 px-10 bg-[#FBF2DC]'>
                                <h1
                                    className=' md:text-[18px] md:font-[600] md:leading-[22px] lg:text-[22px] lg:font-[600] lg:leading-[24px]
           max-w-[40%] text-center'
                                >
                                    Classes Purchased by friend
                                </h1>
                                <h1
                                    className='md:text-[18px] md:font-[600] md:leading-[22px] lg:text-[22px] lg:font-[600] lg:leading-[24px]
           max-w-[40%] text-center'
                                >
                                    You & your friend EACH get
                                </h1>
                            </div>
                            <div className='flex py-8 px-20 justify-between w-full'>
                                <div
                                    className='text-center md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[22px] 
           lg:leading-[28px] space-y-2'
                                >
                                    <p
                                        className='text-center md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[22px] 
           lg:leading-[28px]'
                                    >
                                        80 classes or more
                                    </p>
                                    <p
                                        className='text-center text-[#454545] md:text-[14px] md:font-[400] md:leading-[18px] 
              lg:text-[22px] lg:leading-[28px]'
                                    >
                                        48-79 classes
                                    </p>
                                    <p>6-47 classes</p>
                                </div>
                                <div
                                    className='bg-[#FAFBFC] md:text-[18px] md:font-[600] lg:text-[22px] 
           text-center px-8 font-semibold space-y-2'
                                >
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $100
                                    </p>
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $75
                                    </p>
                                    <p className='md:leading-[22px] lg:leading-[24px]'>
                                        $50
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Box>
            </div>

            <div
                className='text-center py-4 my-4 mx-auto border w-full border-red-500 rounded-[50px]
       bg-red-50 md:max-w-[93%] lg:max-w-[83%] xl:max-w-[73%]'
            >
                <div className='md:text-[14px] md:font-[400] lg:text-[22px] md:leading-[18px] lg:leading-[28px]'>
                    <span className='text-[#F94F46] pr-2 '>Note:</span>
                    Rewards will be awarded in installments after your friend
                    completes 5 classes.{' '}
                    <span className='text-[#355ADC]'>T&C apply.</span>
                </div>
            </div>
            <div className='rounded-xl z-30 shadow-xl bg-white overflow-hidden w-[80%] lg:max-w-[50%] mx-auto relative flex justify-between'>
                <div className='h-20 w-20 rounded-full -top-10 md:-left-7 lg:-left-3 z-0 bg-pink-50 absolute'></div>
                <div className='z-10 mx-8 my-12'>
                    <h1 className='md:text-[18px] font-[596] md:leading-[22px] lg:text-[28px]'>
                        Meet our Parent Partners
                    </h1>
                    <p
                        className='relative w-[280px] mt-4 md:text-[14px] md:font-[400] 
          md:leading-[18px] lg:text-[20px] lg:leading-[26px]'
                    >
                        They invited friends & got rewards. You could be next.
                        It’s simple!
                    </p>
                </div>
                <Image
                    src={parentPartner}
                    alt='card-image'
                    className='absolute -right-2'
                />
            </div>

            <div>
                <SliderCards />
            </div>

            <div className='relative'>
                <div className='flex pt-4 flex-col items-center justify-center mt-[30px]'>
                    <h1 className='md:text-[18px] md:font-[600] md:leading-[22px] lg:text-[28px] lg:leading-[32px] '>
                        Why are we giving away Reward Vouchers?
                    </h1>
                    <p className='text-center text-[#454545] py-2 md:text-[14px] md:font-[400] md:leading-[18px] lg:text-[20px] lg:leading-[28px]'>
                        At Edukids, we believe in giving children an opportunity
                        to be imaginative and learn by creating. Giving rewards
                        is our way of saying Thank You for helping us in our
                        mission to build a love for creating amongst your
                        friends.
                    </p>
                </div>

                <div className='flex py-2 justify-center gap-3 md:gap-5 max-w-[50%] mx-auto md:font-[500] md:leading-[20px] lg:text-[20px] lg:leading-[24px]'>
                    <a className='text-[#355ADC] underline ' href='#'>
                        Privacy Policy
                    </a>
                    <a className='text-[#355ADC] underline ' href='#'>
                        Terms and Conditions
                    </a>
                    <a className='text-[#355ADC] underline ' href='#'>
                        FAQs
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RewardTabs
