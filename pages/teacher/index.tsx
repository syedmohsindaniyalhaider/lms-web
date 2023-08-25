import { useRouter } from 'next/router'
import React from 'react'
import Dashboard from '../../components/teacher/Dashboard'
import ErrorPage from '../404'

const index = () => {
    return <Dashboard />
}

export default index
