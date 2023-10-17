

export default function LoginForm(){
    

    return(
        <main className = "grid place-items-center pt-14">
            <div className = "shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-800">
                <form className= "flex flex-col gap-3 py-6 px-4">
                    <input className=" w-99 border border-gray-400 py-2 px-6"   
                        type="text" placeholder="email"   />
                    <input className=" w-99 border border-gray-400 py-2 px-6"  
                        type="password" placeholder="password" />
                    <button className = "bg-gray-100 text-zinc-950 font-extrabold cursor-pointer px-6 py-3">
                        Login
                    </button>

                </form>
            </div>
        </main>    
        )
}