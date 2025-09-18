
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "../ui/Container";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}