import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import "../styles/nprogress.css"
function MyApp({ Component, pageProps }: AppProps) {

  Router.events.on("routeChangeStart", NProgress.start);
  Router.events.on("routeChangeError", NProgress.done)
  Router.events.on("routeChangeComplete", NProgress.done);
  
  return <Component {...pageProps} />
}

export default MyApp
