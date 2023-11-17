import './globals.css'
import { getServerSession } from 'next-auth'; 
import SessionProvider from '@/helpers/auth/SessionProvider';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manager',
  description: 'The manager',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-t from-slate-200 to-slate-400`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
