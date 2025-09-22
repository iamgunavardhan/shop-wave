import { useParams } from "react-router-dom";
import MockProducts from "../components/products/Mockproducts";
import useCartContext from "../context/Usecontext";
import Container from "../components/ui/Container";


export default function ProductDetails(){
    const{ id } = useParams<{id: string}>()
    const {addToCart} = useCartContext()
    const product = MockProducts.find((p)=>p.id === Number(id))

    if(!product){
        return(
            <div className="p-10 text-center">
                <h2 className=" text-lg text-gray-800 font-bold">Products not Found</h2>
            </div>
        )
    }

    return(
       <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
           <img src={product.image} alt={product.name} className="rounded-t-lg w-full object-cover h-96"/>
            <div >
                <h2 className="mt-4 font-semibold text-gray-800 text-lg">{product.name}</h2>
                <p className="text-md font-normal text-gray-600 mt-6 ">${product.price.toFixed(2)}</p>
                <button
                onClick={()=> addToCart({
                    id:product.id,
                    name:product.name,
                    price:product.price,
                    image:product.image,
                })}
                className="mt-6 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-all w-full py-2">Add Cart</button>
            </div>
        </div>
       </Container>
    )
}