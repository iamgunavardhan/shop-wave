
import{ createContext, useState } from "react";
import type { ReactNode } from "react";
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

export  function CartProvider({children} : {children: ReactNode}) {
    const[cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (item:Omit<CartItem,"quantity">) => {
        setCartItems((prev)=> {
            const existing = prev.find((p) => p.id === item.id)
            if(existing){
                return prev.map((p)=>
                    p.id === item.id ? {...p,quantity:p.quantity + 1 } : p
                )
            }
            return [...prev, {...item, quantity:1}]
        })
    }

  const removeFromCart = (id:number) => {
    setCartItems((prev)=> prev.filter((item)=> item.id !== id))
  }

  return(
    <CartContext.Provider value={{cartItems,addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;