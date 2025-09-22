import{  type ReactNode } from "react";
import UseAuthCont from "../../context/UseauthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({children}:{children:ReactNode}){
    const {user} = UseAuthCont()

    if(!user){
        return <Navigate to="/login" replace/>
    }

    return <>{children}</>
}