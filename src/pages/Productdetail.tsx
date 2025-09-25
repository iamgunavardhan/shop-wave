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
         <div  className="flex flex-col md:flex-row items-center gap-6  p-4">
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={product.image} alt={product.name}  className="w-full max-w-sm h-auto rounded-lg object-contain"/>
            </div>
          
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