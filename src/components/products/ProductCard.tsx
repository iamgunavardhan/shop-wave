import { Link } from "react-router-dom";
import useCartContext from "../../context/Usecontext";

interface ProductsProps{
    id:number;
    name:string;
    price:number;
    image:string;
}

export default function ProductCard({name, price, image,id}:ProductsProps){
const {addToCart} = useCartContext()

    return(
        <div className="rounded-lg bg-white shadow-sm hover:shadow-md border-gray-200 transitiond ">
            <Link to={`/products/${id}`}>
               <img src={image} alt={name} className="rounded-t-lg w-full object-cover h-64 object-center"/>
            </Link>
           
            <div className="p-3 flex flex-col flex-grow">
                <h2 className="font-semibold text-gray-800 text-lg">{name}</h2>
                <p className="text-md font-normal text-gray-600">${price.toFixed(2)}</p>
                <button 
                onClick={()=> addToCart({id,price,name,image})}
                className="mt-auto inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Add Cart</button>
            </div>
        </div>
    )
}