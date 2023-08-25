import React, { useEffect, useState } from 'react'

import Quizzes from './Quizzes'
import Projects from './Projects'

const CompletedAssignments = ({ assignments }: any) => {
    return (
        <>
            {!!assignments?.quizzes && (
                <Quizzes quizzes={assignments?.quizzes} />
            )}
            {!!assignments?.projects && (
                <Projects projects={assignments?.projects} />
            )}
        </>
    )
}

export default CompletedAssignments
