import Container from "../components/ui/Container";
import useCartContext from "../context/Usecontext";
import { useState } from "react";

export default function Checkout(){
    const{ cartItems } = useCartContext()
    const[submitted, setSubmitted] = useState(false)

    const total = cartItems.reduce((sum,item) => sum + item.price * item.quantity,0)

    if(submitted){
        return(
            <div className="text-center p-10">
                <h2 className="text-2xl font-bold text-green-600">
                       Order placed successfully!
                </h2>
                <p className="mt-4 text-gray-400">
                       Thank you for shopping with us.
                </p>
            </div>
        )
    }

    return(
      <Container>
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <form onSubmit={(e) => {e.preventDefault();setSubmitted(true)}} className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">Checkout</h2>
                <div>
                    <label className="block text-gray-700">Full Name</label>
                    <input type="text" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-600"/>
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-600"/>
                </div>
                <div>
                    <label className="block text-gray-700">Shipping Address</label>
                    <textarea required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-600"/>
                </div>
                <div>
                    <label className="block text-gray-700">Payment Method</label>
                    <select required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-600">
                        <option value="">Select</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="cod">Cash on Delivery</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                    >
                    Place Order
                </button>
                
            </form>
             {/* Order Summary */}
             <div className="border rounded-lg bg-gray-50 p-6">
                 <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                 <ul className="space-y-3">
                    {cartItems.map((item)=>(
                        <li key={item.id} className="flex justify-between">
                          <span>{item.name} (x{item.quantity})</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                 </ul>
                  <div className="mt-4 border-t pt-4 text-lg font-bold flex justify-between">
                    <span>Total:</span>
                    <span className="text-indigo-600">${total.toFixed(2)}</span>
                 </div>
             </div>
        </div>
      </Container>
    )
}