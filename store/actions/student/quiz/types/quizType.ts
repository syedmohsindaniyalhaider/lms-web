export type quiz_type = {
    quizId: number
    classId: number
    quizTitle: string
    quizDescription: string
    questions: []
    options: string
    correctAnswer: number
    answer: number
    startTime: string
    endTime: string
    totalMarks: number
    obtainedMarks: number
    result: number
    status: string
    file: string
}

export type update_quiz_type = {
    quizId: number
    studentId: number
}
