
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

import LoginForm from "@/components/LoginForm"
import LoginTop from "@/components/LoginTop"; 


export default async function Authenticate(){

    const session = await getServerSession(options);
    if(session){
        redirect("/profile"); 
    }else{

        return(
            
            <main className ="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">
                <section> 
                    <header className="text-4xl text-bold text-center pt-9"> 
                        <h1>Lets Get Started!</h1>
                    </header>
                </section> 

                <section> 
                    <LoginTop />
                </section>

                <section>
                    <LoginForm />
                </section>
            </main>
        
        )
        }
}