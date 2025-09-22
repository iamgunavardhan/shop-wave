import { Link } from "react-router-dom"
export default function Home(){
    return(
      
         <div className="min-h-screen bg-gray-50">
             {/* Hero Banner */}
             <section  className="relative bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-12">
                   {/* text */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">Shope the latest trends <br /> 
                        <span className="text-indigo-200">at your fingertips.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-indigo-100">  Discover stylish collections, unbeatable prices, and seamless
                        shopping — all in one place.</p>
                        <Link  to="/products"
                            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition"
                            > Shop Now</Link>

                    </div>
                    {/* Image */}
                    <div className="flex-1">
                     <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" alt="Shopping" className="rounded-xl shadow-lg"/>
                    </div>
                </div>
             </section>
            
        </div>
       
    )
}