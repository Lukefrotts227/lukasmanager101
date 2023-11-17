import { FaGithub } from "react-icons/fa";
import { Title } from '@/components/main/title'; 

import Link from 'next/link'; 

export default function Home() {
  return (

        <main className="min-h-screen">
          
          <section className="">  
            <header className = "flex justify-center text-center text-5xl items-center pb-2 bg-zinc-50 shadow-md p-12"> 
              <Title />
            </header>
          </section>
          <section>
            <Link href="/api/auth/callback/github">
                <FaGithub size={99} />
            </Link>
          </section>

          

        </main>
  )
}
