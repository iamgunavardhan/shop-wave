interface ProductsProps{
    id:number;
    name:string;
    price:number;
    image:string;
}

export default function ProductCard({name, price, image}:ProductsProps){
    return(
        <div>
            <img/>
            <div>
                <h2></h2>
                <p></p>
                <button></button>
            </div>
        </div>
    )
}