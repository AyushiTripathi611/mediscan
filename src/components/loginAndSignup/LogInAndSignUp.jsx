import { useState } from "react";
import Signup from "./signup/Signup";
import Login from "./login/Login";

export default function LoginAndSignUp({setShowLogin}) {
	const [toggle, setToggle] = useState('login');

	const handleToggle = (toggleTo) => {
         setToggle(toggleTo)
    }  
	
	return <div className="mx-auto flex flex-col gap-3 w-[500px]">
    <div className="flex h-20 mt-11 border rounded-2xl bg-white">
        <div onClick={() => handleToggle('login')}  className={`${toggle === 'login' ? 'bg-[#003459] text-white' : 'text-black'} flex items-center justify-center w-1/2 border rounded-l-xl`}>Login</div>
        <div onClick={() => handleToggle('signup')} className={`${toggle === 'signup' ? 'bg-[#003459] text-white' : 'text-black'} flex items-center justify-center w-1/2 border rounded-r-xl`}>SignUp</div>
    </div>
	{toggle === "login" ? <Login setShowLogin={setShowLogin} /> : <Signup />}	
	</div>
}