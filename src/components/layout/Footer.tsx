

import { Link } from "react-router-dom";
import Container from "../ui/Container";



   export default function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">SHOPwave</h3>
                        <p className="text-gray-400"> Your one-stop shop for fashion, electronics, and more. Shop smart,
                        live better.</p>
                    </div>
                    {/* Links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                           <li>
                              <Link  to="/" className="hover:text-white transition"> 
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link  to="/products" className="hover:text-white transition"> 
                                 Products
                              </Link>
                           </li>
                           <li>
                              <Link  to="/about" className="hover:text-white transition"> 
                                 About
                              </Link>
                           </li>
                           <li>
                              <Link  to="/cart" className="hover:text-white transition"> 
                                 Cart
                              </Link>
                           </li>
                        </ul>
                    </div>
                    {/* Social */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4 text-2xl">
                          <a href="#" className="hover:text-white transition">🌐</a>
                          <a href="#" className="hover:text-white transition">🐦</a>
                          <a href="#" className="hover:text-white transition">📸</a>
                          <a href="#" className="hover:text-white transition"> 🎥</a>
                        </div>
                    </div>
                </div>
                 {/* Bottom bar */}
                    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} ShopEase. All rights reserved.
                    </div>
            </Container>
        </footer>
    )
   }