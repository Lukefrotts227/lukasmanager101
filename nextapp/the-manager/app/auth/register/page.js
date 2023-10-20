import { RegisterTop } from "@/components/RegisterTop"
import RegisterForm from "@/components/RegisterForm"

export default function Register(){

    return(
        <main className="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">  
            <section> 
                <RegisterTop />       
            </section>
            <section>
                <RegisterForm />
                
            </section>
        </main>)
}