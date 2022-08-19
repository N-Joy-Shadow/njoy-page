import { ReactNode } from "react";
import MainLayout from "../main";

export default function Bloglist({ children } : { children : ReactNode}) {
    return (
        <MainLayout title="Blog" describe="Blog">
            {children}
        </MainLayout>
    )
}