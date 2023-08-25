export type quiz_type = {
    quizId: -1
    classId: -1
    quizTitle: ''
    quizDescription: ''
    correctAnswer: -1
    answer: -1
    startTime: ''
    endTime: ''
    totalMarks: -1
    obtainedMarks: -1
    result: -1
    status: ''
}

const quizzes: quiz_type[] = []

export type student_type = {
    userId: number
    studentId: number
    classCode: string
    quizzes: quiz_type[]
}

export const student: student_type = {
    userId: -1,
    studentId: -1,
    classCode: '',
    quizzes: quizzes,
}
