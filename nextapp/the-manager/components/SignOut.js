"use client"

import { signOut } from 'next-auth/react'; 
import { redirect } from "next/navigation";


export const SignOut = () =>{
    const exitStage = () =>{
        signOut()
        redirect('/auth'); 
    }

    return(
       <button className="bg-slate-900 px-5 py-2 text-white"
        onClick={() => exitStage()}
        type="button">
            Sign Out
       </button> 
    )
}

