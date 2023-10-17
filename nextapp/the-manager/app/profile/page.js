import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Prof } from "@/components/Profile";


export default async function Profile(){
    const session = await getServerSession(options);
    console.log(session.user.id); 
    

    if(!session.user.name)
    {
        alert("you do not have a profile you should not be here yet"); 
        return(
            <section>
                nice try
            </section>)
    }else{

        return(
            <main className="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">
                <section>
                    <header className="text-center text-7xl font-extrabold">
                        <h1>Profile</h1>
                    </header>
                </section>

                <div>
                    <Prof 
                    name ={session.user.name}
                    />
                </div>

            </main>
            )
    }
}