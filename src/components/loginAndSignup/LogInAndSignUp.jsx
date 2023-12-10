import { useState } from "react";
import Signup from "./signup/Signup";
import Login from "./login/Login";

export default function LoginAndSignUp({setShowLogin}) {
	const [toggle, setToggle] = useState('login');

	const handleToggle = (toggleTo) => {
         setToggle(toggleTo)
    }  
	
	return <div className="mx-auto flex flex-col gap-2 w-[500px]">
    <div className="flex mt-32 border rounded-2xl bg-white">
        <div  onClick={() => handleToggle('login')} className={`${toggle === 'login' ? 'background text-white' : 'text-black'} w-1/2 flex items-center justify-center rounded-4 p-3`} >Login</div>
        <div onClick={() => handleToggle('signup')} className={`${toggle === 'signup' ? 'background text-white' : 'text-black'} w-1/2 flex items-center justify-center rounded-4 p-3`}>Signup</div>
    </div>
	{toggle === "login" ? <Login setShowLogin={setShowLogin} /> : <Signup />}	
	</div>
}