import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";
import MyButton from "../ui/Usenavigate";

const Navlinks = [
    {href:'/',lable:'Home'},
    {href:'/about',lable:'About'},
    {href:'/products',lable:'Products'},
   ]

const ButtonLinks = [
     {href:'/signin',lable:'Sign In'},
    {href:'/login',lable:'Login'},
]

export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false)

    return(
        <header className="border-b bg-white">
            <Container>
             <nav className="bg-gray-200 shadow-md w-full top-0 left-0 fixed z-50">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between h-12">
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
                    <div className="flex items-center space-x-4">
                    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition cursor-pointer"/>
                 </div>
                 </div>
                {/* button links */}
                 <div className="hidden md:flex  space-x-6">
                      {ButtonLinks.map((link)=>(
                       <MyButton href={link.href} label={link.lable}/>
                    ))}
                 </div>

                 {/* cart icon */}
                 

                 {/* hamburger icon */}
                 <div className="md:hidden flex items-center space-x-4">
                    <button className="h-8 w-8 flex items-center justify-center" onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28}/> : <Menu size={28} />}
                    </button>
                    <div className="flex items-center space-x-4">
                    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition cursor-pointer"/>
                 </div>
                 </div>
                </div>
            </div>

            
        </nav>
        {/* mobile dropdown menu */}    
            {isOpen && 
            <div className="fixed inset-0 z-40 md:hidden ">
                <div className="px-3 py-4 space-y-2 fixed top-26 rounded-lg right-0 w-40 h-50 shadow-lg bg-gray-200 ">
                    {Navlinks.map((link)=>(
                        <Link to={link.href} key={link.href} className=" text-lg block hover:text-blue-600 transition ">
                        {link.lable}
                        </Link>
                    ))}
                    {ButtonLinks.map((link)=>(
                       <Link to={link.href} key={link.href} className=" text-lg block hover:text-blue-600 transition ">
                        {link.lable}
                        </Link>
                    ))}
                </div>
            </div>
            }

        </Container>
        </header>
        
        
    )
}