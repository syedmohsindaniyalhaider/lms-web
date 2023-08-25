import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../../../store'
import { userUpdatePassword } from '../../../store/actions/users/userUpdatePasswordService'

const ChangePassword = (props: any) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state: RootState) => state.user)
    const formik: any = useFormik({
        initialValues: {
            newPassword: '',
            currentPassword: '',
            userId: props?.userId,
        },
        onSubmit: async (values) => {
            const data = {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                userId: props?.userId,
            }

            dispatch(userUpdatePassword(data))
        },
    })

    return (
        <div className='border-2 m-4 border-gray-300 rounded-md pb-[2px]'>
            <div className='p-4'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col space-y-4'>
                        <label className='font-semibold font-author md:text-[14px] lg:text-[20px]'>
                            Current Password
                        </label>

                        <input
                            type='text'
                            id='currentPassword'
                            name='currentPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter your current password'
                            className='border-1 font-author font-light border-[#D9D9D9] py-3 w-[70%] lg:w-[50%] focus:outline-none border-1  hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60 rounded-md  lg:text-[18px]'
                        />
                        {formik.touched.currentPassword &&
                            formik.errors.currentPassword && (
                                <p className='text-red-500 font-medium font-author min-w-[200px] w-[200px]'>
                                    {formik.errors.currentPassword}
                                </p>
                            )}
                        <label className='font-semibold font-author md:text-[14px] lg:text-[20px] '>
                            Set New Password
                        </label>
                        <input
                            id='newPassword'
                            name='newPassword'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter your new password'
                            className='border-1 font-author font-light border-[#D9D9D9] py-3 lg:w-[50%] rounded-md lg:text-[18px] focus:outline-none hover:border-primary  focus:ring-primary focus:border-primary hover:border-opacity-60'
                        />
                        {formik.touched.newPassword &&
                            formik.errors.newPassword && (
                                <p className='text-red-500 font-medium font-author min-w-[200px] w-[200px]'>
                                    {formik.errors.newPassword}
                                </p>
                            )}
                    </div>
                    <button
                        disabled={
                            formik.values.newPassword === '' &&
                            formik.values.currentPassword === ''
                        }
                        type='submit'
                        className={`${
                            formik.values.newPassword !== '' &&
                            formik.values.currentPassword !== ''
                                ? 'bg-[#F0A901]'
                                : 'bg-slate-200'
                        } font-semibold px-4 py-[10px] rounded-[8px] text-white mt-5 font-author  md:text-[15px]
                relative group overflow-hidden`}
                    >
                        <span className=' font-author font-normal md:text-[] lg:text-[22px]'>
                            UPDATE PASSWORD
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
