"use client";

import Link from "next/link"
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

export default function LoginForm(){
    

    return(
        <main className = "grid place-items-center pt-5">
            <div className = "shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-800">
                <form className= "flex flex-col gap-3 py-6 px-4">
                    <input className=" w-99 border border-gray-400 py-2 px-6"   
                        type="text" placeholder="email"   />
                    <input className=" w-99 border border-gray-400 py-2 px-6"  
                        type="password" placeholder="password" />
                    <button className = "bg-gray-100 text-zinc-950 font-extrabold cursor-pointer px-6 py-3">
                        Login
                    </button>
                </form>
                <span className="text-white">Don't Have an Account click here <Link className="underline text-extrabold" href="auth/register">Register</Link></span>
                <div> 
                    <header className="text-white text-center">
                        <h1>Or use the following providers</h1>
                    </header>
                        <div className="pt-5">
                            <div className ="flex flex-row gap-2">
                                <header className="text-white"> 
                                    <h1>Github</h1>
                                </header>
                                <div>
                                    <AiOutlineGithub size={23} />
                                </div>
                            </div>
                        </div>
                    
                </div>
                
            </div>
        </main>    
        )
}