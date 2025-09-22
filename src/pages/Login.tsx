import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuthCont from "../context/UseauthContext";

export default function Login(){
    const { login } = UseAuthCont();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return(
    <div className="flex justify-center items-center w-full min-h-screen ">
        <form  onSubmit={handleSubmit}
        className="bg-gray-50 p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
            <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
            <input type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border px-4 py-2 rounded-lg" />
            <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border px-4 py-2 rounded-lg" />
            <button  type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">Login</button>
        </form>
    </div>
  )
}