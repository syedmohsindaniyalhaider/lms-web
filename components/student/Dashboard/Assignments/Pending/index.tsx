import React, { useState, useEffect, memo } from 'react'

import Bq2 from '/assets/images/Black-quiz-2.png'
import QuizImg from '../../assets/images/Blackquiz1.svg'

import axios from 'axios'
import moment from 'moment'
import Projects from './Projects'
import Quizzes from './Quizzes'

const MemoizedProjects = memo(Projects)
const MemoizedQuizzes = memo(Quizzes)
//updated assignment cards

const PendingAssignments = ({ assignments }: any) => {
    return (
        <>
            {!!assignments.projects && (
                <MemoizedProjects projects={assignments?.projects} />
            )}
            {!!assignments?.quizzes && (
                <MemoizedQuizzes quizzes={assignments?.quizzes} />
            )}
        </>
    )
}

export default PendingAssignments
