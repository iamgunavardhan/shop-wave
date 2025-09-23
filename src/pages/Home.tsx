import { Link } from "react-router-dom"
import MockProducts from "../components/products/Mockproducts"
import Container from "../components/ui/Container"
export default function Home(){
    return(
      
         <div className="min-h-screen bg-gray-50">
             {/* Hero Banner */}
             <section  className="relative  text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-12 bg-gray-800 rounded-b-2xl">
                   {/* text */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">Shope the latest trends <br /> 
                        <span className="text-indigo-200">at your fingertips.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-indigo-200">  Discover stylish collections, unbeatable prices, and seamless
                        shopping — all in one place.</p>
                        <Link  to="/products"
                            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition"
                            > Shop Now</Link>

                    </div>
                    {/* Image */}
                    <div className="hidden lg:flex  lg:flex-1" >
                     <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" alt="Shopping" className="rounded-xl shadow-lg"/>
                    </div>
                </div>
             </section>

             {/* Featured Section */}
             <section  className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                 <h2  className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-10"> Featured Categories</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                    <Link to="/products" className="group relative overflow-hidden rounded-xl shadow-lg">
                      <img src="/Fashion.png" alt="Fashion" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform"/>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                         <span className="text-white text-xl font-semibold"> Fashion</span>
                      </div>
                    </Link>

                    <Link to="/products" className="group relative overflow-hidden rounded-xl shadow-lg">
                       <img src="/Accessories.png" alt="Accessories" className="w-full h-64 object-cover group-hover:scale-110 transition-transform"/>
                        <div className="absolute inset-0  bg-black/40 flex items-center justify-center">
                           <span className="text-white text-xl font-semibold">Accessories</span>
                        </div>
                    </Link>

                    <Link to="/products" className="group relative  overflow-hidden rounded-xl shadow-lg">
                        <img src="/Electronics.png" alt="Electronics" className="w-full h-64 object-cover group-hover:scale-110 transition-transform" />
                          <div className="absolute inset-0  bg-black/40 flex items-center justify-center">
                            <span className="text-white text-xl font-semibold">Electronics</span>
                          </div>
                    </Link>
                 </div>
             </section>
             {/* Benefits Section */}
             <section className="bg-white py-16">
               <Container>
                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12"> Why Shop With Us</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {/* Free Shipping */}
                     <div className="text-center p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">🚚</div>
                        <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600"> Enjoy free shipping on all orders over $50.</p>
                     </div>
                      {/* Secure Checkout */}
                     <div className="text-center p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">🔒</div>
                        <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
                        <p className="text-gray-600">Your payments are encrypted and 100% safe with us.</p>
                     </div>
                      {/* 24/7 Support */}
                     <div className="text-center p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">💬</div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">  Got questions? Our support team is always ready to help.</p>
                     </div>
                 </div>
                </Container>
             </section>
             {/* Featured Products */}
             <section className="py-16 bg-gray-50">
               <Container>
                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">Featured Products</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      {MockProducts.slice(0,3).map((product) => (
                        <div  key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                            <img src={product.image} alt={product.name}  className="w-full h-64 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                 <h3 className="text-lg font-semibold mb-2">  {product.name}</h3> 
                                 <p className="text-gray-600 mb-4">${product.price}</p>
                                 <Link to={`/products/${product.id}`} className="mt-auto inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                     View Details
                                 </Link>
                            </div>
                        </div>
                      ))}  
                   </div>

                   <div className="text-center mt-12">
                     <Link  to="/products" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
                       View All Products
                     </Link>
                   </div>
               </Container>
             </section>

              {/* Testimonials Section */}
              <section className="bg-white py-16">
                <Container>
                   <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12"> What Our Customers Say</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Testimonial 1 */}
                      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <p className="text-gray-600 mb-4"> 
                           “Amazing shopping experience! Fast delivery and quality
                            products. I’ll definitely shop here again.”
                        </p>
                        <div className="flex items-center gap-4">
                           <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer"  className="w-12 h-12 rounded-full"/>
                           <div>
                              <h4 className="font-semibold">Emily Johnson</h4>
                                <p className="text-yellow-500">★★★★★</p>
                           </div>
                        </div>
                      </div>
                      {/* Testimonial 2 */}
                      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <p className="text-gray-600 mb-4"> 
                           “Great selection of products at unbeatable prices. Customer
                             support was super helpful too!”
                        </p>
                        <div className="flex items-center gap-4">
                           <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Customer"  className="w-12 h-12 rounded-full"/>
                           <div>
                              <h4 className="font-semibold">Michael Lee</h4>
                                <p className="text-yellow-500">★★★★★</p>
                           </div>
                        </div>
                      </div>
                      {/* Testimonial 3 */}
                      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <p className="text-gray-600 mb-4"> 
                          “Stylish and modern design! The checkout process was super easy
                             and smooth. Highly recommended.”
                        </p>
                        <div className="flex items-center gap-4">
                           <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer"  className="w-12 h-12 rounded-full"/>
                           <div>
                              <h4 className="font-semibold">Sophia Martinez</h4>
                                <p className="text-yellow-500">★★★★★</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </Container>
              </section>

            {/* Newsletter Signup */}
            <section className="bg-indigo-600 py-16">
              <Container>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4"> Join Our Newsletter</h2>
                <p className="text-indigo-200 mb-8"> Be the first to know about new arrivals, exclusive deals, and special offers.</p>
                <form  onSubmit={(e) => e.preventDefault()}  className="flex flex-col sm:flex-row items-center gap-4">
                    <input type="email" placeholder="Enter your email" required  className="flex-1 w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
                    <button type="submit"  className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-100 transition"> Subscribe</button>
                </form>
              </Container>
            </section>
            
        </div>
       
    )
}