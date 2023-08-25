import { useMemo } from 'react'

export const useAssignments = (assignments: any) => {
    let allPendingAssignments: any = []
    let allCompletedAssignments: any = []

    const [pendingAssignments, completedAssignments] = useMemo(() => {
        assignments?.forEach((ele: any) => {
            if (ele?.classes?.projects?.students[0]?.status !== 'completed') {
                allPendingAssignments = [
                    ...allPendingAssignments,
                    { projects: ele?.classes?.projects },
                ]
            } else {
                allCompletedAssignments = [
                    ...allCompletedAssignments,
                    { projects: ele?.classes?.projects },
                ]
            }
            if (ele?.classes?.quizzes?.students[0]?.status !== 'completed') {
                allPendingAssignments = [
                    ...allPendingAssignments,
                    { quizzes: ele?.classes?.quizzes },
                ]
            } else {
                allCompletedAssignments = [
                    ...allCompletedAssignments,
                    { quizzes: ele?.classes?.quizzes },
                ]
            }
        })
        return [allPendingAssignments, allCompletedAssignments]
    }, [assignments])

    return [pendingAssignments, completedAssignments]
}
