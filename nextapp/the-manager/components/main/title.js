import { BaseLogo } from "../graphics/logo1"; 

export const Title = () => {

    return(
        <main className = "text-center">
            <section className = "flex justify-center items-center">
                <BaseLogo/>
            </section>
            <section>
                <h1>MindfulTask</h1>
            </section>
        </main>
    )
}