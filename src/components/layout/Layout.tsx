import type{ ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "../ui/Container";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}:LayoutProps){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <Container>{children}</Container>
            </main>
            <Footer/>
        </div>
    )
}