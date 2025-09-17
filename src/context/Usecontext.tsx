import { createContext, useState, ReactNode } from "react";

interface CartItem{
    id:number;
    name:string;
    image:string
    price:number;
    quantity:number;
}

interface CartContextType{
    cartItems: CartItem[]
    addToCart: (item: Omit<CartItem, "quantity">) => void
    removeFromCart:(id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export default function CartProvider({children} : {children: ReactNode}) {
    const[cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (item:Omit<CartItem,"quantity">) => {
        setCartItems((prev)=>{
            const existing = prev.find((p) => p.id === item.id)
            if(existing){
                return prev.map((p)=>{
                    p.id === item.id ? {...p, }
                })
            }
        })
    }
}