"use client";

import React, { useState } from 'react'; 
import pb from "@/helpers/api/PocketBase";
import { useRouter } from 'next/navigation'; 


export default function RegisterForm() {
    console.log("started")
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirm, setPasswordConfirm] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [fullName, setFullName] = useState(''); 

    const router = useRouter(); 
    console.log("pre-async"); 
    const handleLogin = async (e) => {
        e.preventDefault(); 
        try{
            const data ={
                username: userName,
                fullname: fullName, 
                email: email, 
                password: password, 
                passwordConfirm: passwordConfirm,
            }
            
            const result = await pb.collection('users').create(data)
            .then(console.log("congrats bro"))
            .catch(console.log('wtf'))
            
            console.log('Created'); 
            setUserName(''); 
            setPassword(''); 
            setPasswordConfirm(''); 
            setFullName(''); 
            setEmail(''); 

            router.refresh()
            router.refresh('/profile'); 

        }catch(e){
            console.error(e); 
            console.log("failed to create the user"); 
        }
    }

     
    return(
        <main className = "grid place-items-center pt-5">
            <div className = "shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-800">
                <form onSubmit={handleLogin} className= "flex flex-col gap-3 py-6 px-4">
                    <input className="w-99 border border-gray-400 py-2 px-6"
                        type="text" label="Username" placeholder="Username"
                        pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                        onChange={(event) => {
                            setUserName(event.target.value)
                          }}
                       errormessage="Username must be 8-30 character"  
                       />
                    
                    <input className="w-99 border border-gray-400 py-2 px-6"
                        type="text" placeholder ="Full Name"
                        label="Fullname"
                        onChange={(event) => {
                            setFullName(event.target.value)
                          }}
                         />
                    <input className=" w-99 border border-gray-400 py-2 px-6"   
                        type="email" placeholder="email"
                        label="Email" errormessage="This email is not valid"
                        onChange={(event) => {
                            setEmail(event.target.value)
                          }}
                          />
                    <input className=" w-99 border border-gray-400 py-2 px-6"  
                        type="password" placeholder="password"
                        label="Password" pattern="^(?=.*[0-9]).{8,}$"
                        onChange={(event) => {
                            setPassword(event.target.value)
                          }} />
                    <input className="w-99 border border-gray-400 py-2 px-6"
                        type="password" placeholder="confirm password" 
                        label="Confirm Password" 
                        pattern="^(?=.*[0-9]).{8,}$"
                        errormessage="Password must contain at least one numbver and be at least 6 characters"
                        onChange={(event) => {
                            setPasswordConfirm(event.target.value)
                          }}/>
                    <button className = "bg-gray-100 text-zinc-950 font-extrabold cursor-pointer px-6 py-3">
                        Register
                    </button>
                </form>
            </div>
        </main>
    )
}

