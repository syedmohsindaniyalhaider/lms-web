import { Box, Modal } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FileIcon from '/assets/icons/downloadfile.svg'
import LogicIcon from '/assets/icons/logic.svg'
import CreativityIcon from '/assets/icons/creativity.svg'
import CompletionIcon from '/assets/icons/complete.svg'
import { Rating } from '@mui/material'

const ReviewModal = ({
    modalOpen,
    modalHandleClose,
    creativity,
    setCreativity,
    logic,
    setLogic,
    completion,
    setCompletion,
    review,
    setReview,
    reviewSubmitHandler,
    comment = false,
}: any) => {
    return (
        <Modal
            open={modalOpen}
            onClose={modalHandleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    // backgroundColor: "blue",
                    width: '600px',
                    transform: 'translate(-50%, -50%)',
                    //   padding: "4px",
                }}
            >
                <div>
                    <div className='bg-[#F5F8F8] rounded-3xl'>
                        <div className='bg-[#F0A901] p-2 rounded-t-3xl '>
                            <h2 className='text-[22px] font-[700] text-white text-center'>
                                How was Sarah’s Project
                            </h2>
                        </div>
                        <div className='flex flex-col justify-center p-4'>
                            <div>
                                <div className='flex flex-col px-28 pt-5 gap-y-2'>
                                    <div className='px-2  flex rounded bg-[#F1F5F4] justify-between items-center gap-10'>
                                        <div className='flex items-center gap-4 text-[#0F5647] text-[30px] font-semibold'>
                                            <Image
                                                src={CreativityIcon}
                                                alt='creativity'
                                                height={30}
                                            />
                                            <h2>Creativity</h2>
                                        </div>
                                        <div className=' flex items-center pr-1'>
                                            <Rating
                                                name='simple-controlled'
                                                value={creativity}
                                                onChange={(event, newValue) => {
                                                    setCreativity(newValue)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='px-2 flex bg-[#F1F5F4] rounded justify-between items-center gap-10'>
                                        <div className='flex gap-4 text-[#0F5647] text-[30px] font-semibold'>
                                            <Image
                                                src={LogicIcon}
                                                alt='creativity'
                                                height={30}
                                            />
                                            <h2>Logic</h2>
                                        </div>
                                        <div className='pr-1'>
                                            <Rating
                                                name='simple-controlled'
                                                value={logic}
                                                onChange={(event, newValue) => {
                                                    setLogic(newValue)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='px-2 flex bg-[#F1F5F4] rounded  justify-between items-center gap-10'>
                                        <div className='flex gap-4 text-[#0F5647] text-[30px] font-semibold'>
                                            <Image
                                                src={CompletionIcon}
                                                alt='creativity'
                                            />
                                            <h2>Completion</h2>
                                        </div>
                                        <div className='pr-1 pl-1'>
                                            <Rating
                                                name='simple-controlled'
                                                value={completion}
                                                onChange={(event, newValue) => {
                                                    setCompletion(newValue)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {comment && (
                                <div>
                                    <h2 className='text-[22px] mt-4 text-[#131414] font-[700] text-center'>
                                        Write Review
                                    </h2>
                                    <textarea
                                        id='review'
                                        name='review'
                                        rows={3}
                                        className='mt-3 py-2 rounded-md border-[#BFBFBF] hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60 w-full p-3 '
                                        placeholder='Write your review here...'
                                        value={review}
                                        onChange={(e: any) =>
                                            setReview(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <button
                                onClick={reviewSubmitHandler}
                                className=' my-4 bg-[#355ADC] px-12 py-[2px]  font-[500] rounded-[8px] text-white relative group overflow-hidden'
                            >
                                <span className='relative font-author  md:text-[15px] lg:text-[26px]  z-40'>
                                    Submit
                                </span>
                                <span className='absolute bottom-0 left-1/2 w-0 h-full z-0 bg-blue-600   group-hover:w-1/2 group-hover:transition-out duration-300 '></span>
                                <span className='absolute bottom-0 right-1/2 w-0 h-full z-0  bg-blue-600 group-hover:w-1/2 group-hover:transition-out duration-300'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ReviewModal
