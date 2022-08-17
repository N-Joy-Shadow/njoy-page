import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export interface MainLayoutProps {
    children: ReactNode
    title?: string,
    describe?: string
}

export default function MainLayout({ children, title, describe }: MainLayoutProps) {
    return (<>
        <Head>
            <title>{title ?? "はい"}</title>
            <meta name="description" content={describe ?? "안녕"} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navbar/>
            <Aside/>
            <main>{children}</main>
            <Footer/>
        </div>

    </>)
}