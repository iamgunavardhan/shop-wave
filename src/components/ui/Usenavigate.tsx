import { useNavigate } from "react-router-dom";

type MyButtonProps = {
  href: string;
  label: string;
};

export default function MyButton({href, label}:MyButtonProps){

    const navigate = useNavigate()

    return(
        <div>
            <button onClick={()=> navigate(href)} className="px-4 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg"  >
                {label}
            </button>
        </div>
    )
}