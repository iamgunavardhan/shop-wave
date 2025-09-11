import { useNavigate } from "react-router-dom";

type MyButtonProps = {
  href: string;
  label: string;
  className?:string
};

export default function MyButton({href, label,className}:MyButtonProps){

    const navigate = useNavigate()

    return(
        <div>
            <button onClick={()=> navigate(href)} className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className}`} >
                {label}
            </button>
        </div>
    )
}