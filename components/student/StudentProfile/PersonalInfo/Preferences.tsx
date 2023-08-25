import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../store'
import { studentPreference } from '../../../../store/actions/student/students/studentPreferenceService'
function Preferences(props: any) {
    const dispatch = useAppDispatch()
    const [substitute, setSubstitute] = useState('No')
    const [bookClass, setBookClass] = useState('Deny')

    const preference = () => {
        const data = {
            studentId: props?.studentId,
            preferences: {
                substitute,
                bookClass,
            },
        }
        dispatch(studentPreference(data))
    }

    useEffect(() => {
        preference()
    }, [substitute, bookClass])

    return (
        <div
            className={`border-2 m-4 border-gray-300 rounded-md pb-[135px] px-5 `}
        >
            <div className='font-author font-medium text-[20px] pt-6'>
                Can we provide a substitute teacher?
            </div>
            <div className='flex font-author text-[20px] gap-5 py-3'>
                <div className='flex gap-2 items-center'>
                    <input
                        type='radio'
                        name='substitute'
                        id='substitute'
                        value='Yes'
                        checked={substitute === 'Yes'}
                        onChange={(e: any) => setSubstitute(e.target.value)}
                        className='text-[#f0a901] border-[#D9D9D9] bg-[#FAFBFC] border-[2px] focus:ring-[#f0a901] '
                    />
                    <div>Yes</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type='radio'
                        name='substitute'
                        id='substitute'
                        value='No'
                        checked={substitute === 'No'}
                        onChange={(e: any) => setSubstitute(e.target.value)}
                        className='text-[#f0a901] border-[#D9D9D9] bg-[#FAFBFC] border-[2px] focus:ring-[#f0a901] '
                    />
                    <div>No</div>
                </div>
            </div>
            <div className='font-author font-medium text-[20px]'>
                Can the teacher book classes on your behalf?
            </div>
            <div className='flex text-[20px] gap-5 py-3'>
                <div className='flex font-author gap-2 items-center'>
                    <input
                        type='radio'
                        name='bookClass'
                        id='bookClass'
                        value='Allow'
                        checked={bookClass === 'Allow'}
                        onChange={(e: any) => setBookClass(e.target.value)}
                        className='text-[#f0a901] border-[#D9D9D9] bg-[#FAFBFC] border-[2px] focus:ring-[#f0a901] '
                    />
                    <div>Allow</div>
                </div>
                <div className='flex font-author gap-2 items-center'>
                    <input
                        type='radio'
                        name='bookClass'
                        id='bookClass'
                        value='Deny'
                        checked={bookClass === 'Deny'}
                        onChange={(e: any) => setBookClass(e.target.value)}
                        className='text-[#f0a901] border-[#D9D9D9] bg-[#FAFBFC] border-[2px] focus:ring-[#f0a901]'
                    />
                    <div>Deny</div>
                </div>
            </div>
        </div>
    )
}

export default Preferences
