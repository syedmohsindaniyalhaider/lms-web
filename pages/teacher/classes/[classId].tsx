import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ClassDetails from '../../../components/teacher/Dashboard/TeacherClasses/ClassDetails'

const Classes = () => {
    const router = useRouter()
    const { classId, t: tab } = router.query
    return <ClassDetails classId={classId} tab={tab} />
}

export default Classes
