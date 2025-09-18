import CartContext from "./CartContext";
import { useContext } from "react";

export default function useCartContext(){
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be used within CartProvider")
        return context
}