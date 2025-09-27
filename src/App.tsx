import { Routes,Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/Productdetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/auth/ProtectedRoute";
import ScrollToTop from "./components/ui/ScrollToTop";


 function App(){
    return(
        <AuthProvider>
            <CartProvider>
                <ScrollToTop />
                <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:id" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<ProtectedRoutes><Checkout/></ProtectedRoutes>} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Route>
                </Routes>
            </CartProvider> 
        </AuthProvider>       
    )
}

export default App;