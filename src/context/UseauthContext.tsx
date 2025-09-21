import AuthContext from "./AuthContext"
import { useContext } from "react"

export default function UseAuthCont (){
    const context = useContext(AuthContext)
    if(!context) throw new Error("useCart must be used within AuthProvider")
        return context
}