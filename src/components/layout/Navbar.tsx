import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";

const Navlinks = [
    {href:'/',lable:'Home'},
    {href:'/about',lable:'About'},
    {href:'/products',lable:'Products'},
    {href:'/signin',lable:'Login'},
    {href:'/login',lable:'Products'},
]

export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false)

    return(
        <Container>
             <nav className="bg-gray-200 shadow-md w-full top-0 left-0 fixed z-50">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between h-16">
                 {/* logo */}
                 <Link to="/" className="text-2xl font-bold">
                 SHOPEwave
                 </Link>

                 {/* desktop menu */}
                 <div className="hidden md:flex  space-x-6">
                    {Navlinks.map((link)=>(
                        <Link to={link.href}
                        key={link.href}
                        className="hover:text-blue-700 transition">
                        {link.lable}
                        </Link>
                    ))}
                 </div>

                 {/* hamburger icon */}
                 <div className="md:hidden">
                    <button className="h-8 w-8 flex items-center justify-center" onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28}/> : <Menu size={28} />}
                    </button>
                 </div>
                </div>
            </div>

            
        </nav>
        {/* mobile dropdown menu */}    
            {isOpen && 
            <div className="fixed inset-0 z-40 ">
                <div className="px-3 py-4 space-y-2 fixed top-28 right-0 w-40 h-50 shadow-lg bg-white ">
                    {Navlinks.map((link)=>(
                        <Link to={link.href} key={link.href} className="block hover:text-blue-600 transition text">
                        {link.lable}
                        </Link>
                    ))}
                </div>
            </div>
            }

        </Container>
        
    )
}