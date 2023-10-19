import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { Prof } from "@/components/Profile";
import { SignOut } from "@/components/SignOut";


export default async function Profile(){
    console.log(session.user.id); 
    

  
    {

        return(
            <main className="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">
                <section>   
                    
                </section>
                <section>
                    <header className="text-center text-7xl font-extrabold">
                        <h1>Profile</h1>
                    </header>
                </section>

                <div>
                   
                </div>

            </main>
            )
    }
}