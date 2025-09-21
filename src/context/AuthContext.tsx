import { createContext, useState} from "react";
import type { ReactNode } from "react";

interface User {
    name: string
    email:string
}

interface AuthContextType {
    user: User | null
    signup:(name:string, email:string, passward:string) => void
    login:(email:string,passward:string)=> void
    logout:()=> void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({children}:{children:ReactNode}) {
    const[user, setUser] = useState<User |null>(null)

    const signup = (name:string, email:string, _password:string) => {
        setUser({name, email}) 
       }

    const login = (email:string,_password:string)=>{
        setUser({name:"demo user",email})
    }

    const logout = () => setUser(null)

    return(
        <AuthContext.Provider value={{user,signup,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}