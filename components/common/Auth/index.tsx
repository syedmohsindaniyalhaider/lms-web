import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import ErrorPage from '../../../pages/404'
import { RootState, useAppSelector } from '../../../store'
import Loading from '../../Loading'

export const Authorized = ({ path, children }: any) => {
    const { user } = useAppSelector((state: RootState) => state.user)

    return (
        <>
            {path.startsWith(`/${user?.role}`) ||
            path.split('/').pop() === 'login' ? (
                children
            ) : (
                <ErrorPage />
            )}
        </>
    )
}
