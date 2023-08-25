import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import { useAppDispatch } from '../../../store'
import { userDetails } from '../../../store/actions/users/userService'
const Layout = ({ children }: any) => {
    const router = useRouter()

    if (router.pathname === '/login') return <>{children}</>

    return (
        <>
            <Header />
            <div className='pl-32 pr-10 py-20'>{children}</div>
        </>
    )
}

export default Layout
