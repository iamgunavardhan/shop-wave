import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuthCont from "../context/UseauthContext";

export default function Signup(){
    const {signup} = UseAuthCont()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        signup(name,email,password)
        navigate("/")
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit}  className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center">Create Account</h2>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border px-4 py-2 rounded-lg"/>
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border px-4 py-2 rounded-lg"/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border px-4 py-2 rounded-lg"/>
                <button  type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">Sign Up</button>
            </form>
        </div>
    )
}