import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import { Provider } from 'react-redux'
import store, { persistor } from '../store'
import { Authorized } from '../components/common/Auth'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/avatar.scss'
import '../styles/call-out-modal.scss'
import '../styles/live-transcription.scss'
import '../styles/pagination.scss'
import '../styles/recording-ask-modal.scss'
import '../styles/remote-control.scss'
import '../styles/screen-share.scss'
import '../styles/transcription-subtitle.scss'
import '../styles/video-footer.scss'
import '../styles/video.scss'
import '../styles/loading-layer.scss'
// import Zoom from "../components/Zoom";
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { pathname } = router

    useEffect(() => {
        if (pathname === '/login') {
            persistor.purge()
        }
    }, [pathname])

    return (
        <>
            <div className='hidden sm:block'>
                <Provider store={store}>
                    <Authorized path={pathname}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Authorized>
                </Provider>
            </div>
            <div className='block md:hidden text-lg text-center'>
                Only available for tablets and above
            </div>
        </>
    )
}

export default MyApp
