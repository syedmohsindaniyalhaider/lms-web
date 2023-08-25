import { useCallback, useEffect, useState } from 'react'
import api from '../lib/axios'
import { RootState, useAppDispatch, useAppSelector } from '../store'
import { paginateStudentClasses } from '../store/actions/student/classes/paginateStudentClasses'
import { paginateTeacherClasses } from '../store/actions/teacher/classes/paginateTeacherClasses'
import { emptyPaginateClasses } from '../store/actions/student/classes/classesSlice'

export default function useInfiniteClasses(
    classesRef: any,
    user: any,
    _page: any,
    setPage: any
) {
    const dispatch = useAppDispatch()
    // dispatch(emptyPaginateClasses());
    const loadClasses = async () => {
        try {
            if (user?.role === 'student') {
                await dispatch(
                    paginateStudentClasses({
                        studentId: user?.clientId,
                        page: _page,
                    })
                )
            } else if (user?.role === 'teacher') {
                await dispatch(
                    paginateTeacherClasses({
                        teacherId: user?.clientId,
                        page: _page,
                    })
                )
            }

            setPage((prevPage: any) => prevPage + 1)
            // setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

    const handleScroll = () => {
        if (
            Math.floor(
                classesRef?.current?.scrollLeft +
                    classesRef?.current?.clientWidth
            ) === classesRef?.current?.scrollWidth
        ) {
            loadClasses()
        }
    }

    return {
        // isLoading,
        handleScroll,
        loadClasses,
    }
}
