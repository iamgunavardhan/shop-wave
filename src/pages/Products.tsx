import MockProducts from "../components/products/Mockproducts";
import ProductCard from "../components/products/ProductCard";

export default function Products(){
    return(
        <div className="p-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MockProducts.map((product)=>(
                <ProductCard key={product.id} {...product}/>
            ))}
           </div>
        </div>
    )
}