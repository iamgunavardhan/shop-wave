import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";
import useCartContext from "../../context/Usecontext";
import UseAuthCont from "../../context/UseauthContext";

const Navlinks = [
    {href:'/',lable:'Home'},
    {href:'/about',lable:'About'},
    {href:'/products',lable:'Products'},
   ]

export default function Navbar(){
    const {cartItems} = useCartContext()
      const { user, logout } = UseAuthCont()
    const cartCount = cartItems.reduce((acc,item) => acc + item.quantity,0)
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
                      <div className="relative">
                            <Link  to="/cart" className="relative cursor-pointer">
                               <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition cursor-pointer"/>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-xs font-bold rounded-full px-2 py-0.5">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                       </div>
                    </div>
                 </div>
                {/* right side */}
                <div className="flex items-center space-x-6">
                     {/* Auth */}
                     {user ? (
                       <>
                        <span className="text-gray-700">Hello {user.name}</span>
                        <button onClick={logout}
                        className="text-red-600 hover:underline">Logout</button>
                       </>
                     ):(
                        <>
                        <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                        <Link to="/signup" className="text-gray-700 hover:text-indigo-600">Sign Up</Link>
                        </>
                     )}
                </div>

                 
                 

                 {/* hamburger icon */}
                 <div className="md:hidden flex items-center space-x-4">
                    <button className="h-8 w-8 flex items-center justify-center" onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28}/> : <Menu size={28} />}
                    </button>
                    <div className="flex items-center space-x-4">
                       <div className="relative">
                            <Link to="/cart" className="relative cursor-pointer">
                               <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition cursor-pointer"/>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-xs font-bold rounded-full px-2 py-0.5">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                       </div>
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
                </div>
            </div>
            }

        </Container>
        </header>
        
        
    )
}