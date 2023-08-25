import { AnyCnameRecord } from 'dns'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import ReactFlagsSelect from 'react-flags-select'

function Courses(props: any) {
    return (
        <div
            className={`border-[1.5px] my-4 mr-3 border-[#D9D9D9] rounded-md  overflow-auto `}
        >
            <table className=' divide-y divide-[#D9D9D9] font-author md:text-[16px] w-full'>
                <thead className=''>
                    <tr className='text-[#8C8C8C] '>
                        <th
                            scope='col'
                            className='py-2 pl-4 pr-3 text-left md:text-[18px] lg:text-[22px] font-normal'
                        >
                            Date
                        </th>
                        <th
                            scope='col'
                            className=' px-3 py-2 text-left md:text-[18px] lg:text-[22px] font-normal'
                        >
                            Name
                        </th>
                        <th
                            scope='col'
                            className='px-3 py-2 text-left md:text-[18px] lg:text-[22px] font-normal '
                        >
                            Credit
                        </th>
                    </tr>
                </thead>
                <tbody className=' bg-white '>
                    <tr className=' font-medium'>
                        <td className=' py-3 pl-4 pr-3  '>19th Feb, 2022</td>
                        <td className=' px-3 py-3'> BEGINNER</td>
                        <td className=' px-3 py-3'>48</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className=' py-3 pl-4 pr-3 min-w-[135px] w-[135px]'>
                            19th Feb, 2022
                        </td>
                        <td className=' px-3 py-3'> ADVANCE</td>
                        <td className=' px-3 py-3'>96</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Courses
