"use client"

import { signOut } from 'next-auth/react'; 

export const SignOut = () =>{
    return(
       <button className="bg-slate-900 px-5 py-2 text-white"
       onClick={() => signOut()}
       type="button">
        Sign Out
       </button> 
    )
}

