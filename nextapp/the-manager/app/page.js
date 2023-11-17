import { RxArrowRight } from "react-icons/rx";
import { Title } from '@/components/main/title'; 
import { StaticVerticalWave } from "@/components/graphics/staticwave";
import Link from 'next/link'; 

export default function Home() {
  return (

        <main className="h-full w-full grid grid-cols-5 grid-rows-6 justify-center items-center bg-gradient-to-t from-slate-200 to-slate-400">
          <section className="col-span-5 row-span-1"> 
          </section>


          <section className="col-span-5 row-span-2 justify-center mx-auto">  
            <header className = "flex justify-center text-center text-5xl items-center pb-2 bg-zinc-50 shadow-md p-12"> 
              <Title />
            </header>
          </section>

          <section className ="col-span-5 row-span-3 flex justify-center"> 
            <header className = "flex justify-center text-center text-4xl items-center"> 
              <h1>Lets Identify You</h1>
            </header>
            <div className="flex justify-center text-center items-center">
              <Link href="/auth">
                <RxArrowRight size={88}/>
              </Link>
            </div>
          </section>

        </main>
  )
}
