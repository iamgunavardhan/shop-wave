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
        <div className="rounded-lg bg-white shadow-sm hover:shadow-md border transitiond">
            <Link to={`/products/${id}`}>
               <img src={image} alt={name} className="rounded-t-lg w-full object-cover h-48"/>
            </Link>
           
            <div className="p-3">
                <h2 className="font-semibold text-gray-800 text-lg">{name}</h2>
                <p className="text-md font-normal text-gray-600">${price.toFixed(2)}</p>
                <button 
                onClick={()=> addToCart({id,price,name,image})}
                className="mt-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-all w-full py-2">Add Cart</button>
            </div>
        </div>
    )
}