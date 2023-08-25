type classType = {
    classes: {
        activities: []
        classCode: string
        classId: number
        classTitle: string
        courseId: number
        date: string
        description: string
        documents: []
        endTime: string
        startTime: string
    }
    classStatus: string
    scheduledAt: string
}

type availabilitiesType = {
    availabilityId: number
    date: string
    hours: []
    teacherId: number
}

export type class_type = {
    classId: number
    courseId: number
    teacherId: number
    studentId: number
    courseDescription: string
    courseName: string
    teacherEmail: string
    teacherFirstName: string
    teacherLastName: string
    classes: classType[]
    availabilities: availabilitiesType[]
}
