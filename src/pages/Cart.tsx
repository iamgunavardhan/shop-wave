import useCartContext from "../context/Usecontext";

export default function Cart(){
     
    const {cartItems, removeFromCart,increaseQty, decreaseQty} = useCartContext()

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity,0)

if(cartItems.length === 0){
      return(
       <div className="p-10 text-center">
         <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
       </div>
    )
}

return(
    <div className=" p-10 ">
        <h2 className="text-bold text-3xl mb-6">Shopping Cart</h2>
        <div className="space-y-6">
            {cartItems.map((item)=>(
                <div key={item.id} className="flex items-center justify-between pd-4 border-b">
                       {/* image plus name */}
                       <div className="flex items-center space-x-4">
                             <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                             />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                  {item.name}
                                </h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                       </div>
                       {/* quantity controls */}
                       <div className="flex items-center space-x-3">
                            <button onClick={()=> decreaseQty(item.id)}  className="px-2 py-1 border rounded hover:bg-gray-100">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> increaseQty(item.id)}  className="px-2 py-1 border rounded hover:bg-gray-100">+</button>
                       </div>
                       {/* remove item */}
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:underline" >
                            Remove
                        </button>
                </div>
            ))}
        </div>
        {/* Cart Total */}
        <div className="mt-8 text-right">
             <h3 className="text-xl font-bold">
                Total: <span className="text-indigo-600">${total.toFixed(2)}</span>
            </h3>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                Checkout
            </button>
        </div>

    </div>
)
  

}