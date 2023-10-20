import { RxArrowDown } from "react-icons/rx";


export const RegisterTop = () =>{

    return(
        <main>
            <section>
                <header className ="text-3xl text-center pt-6"> 
                    <h1>Register here!</h1>
                </header>
            </section>
            <section className = "flex justify-center items-center pt-3"> 
                <RxArrowDown 
                    size={33}
                />
            </section>
        </main>
        )

}