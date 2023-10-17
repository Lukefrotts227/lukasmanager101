import { RxArrowDown } from "react-icons/rx";

export default function LoginTop(){


    return(
        <main> 
            <section> 
                <header className ="text-3xl text-center pt-10"> 
                    <h1>Login here</h1>
                </header>
            </section>

            <section className = "flex justify-center items-center"> 
                <RxArrowDown 
                    size={22}
                />
            </section>


        </main>
        )
}