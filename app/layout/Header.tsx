"use client";
import React from 'react'
import Link from 'next/link'
import { Button as AuthButton } from "../auth/Button";
// import { SessionProvider } from 'next-auth/react';
import { getUserSession } from '@lib/session'

export default async function Header() {
  const user = await getUserSession()
  return (
    <main className="">
    {JSON.stringify(user)}
    </main>
  )
}

// const Header = (props: Props) => {
//   return (
//     <SessionProvider>
//       <div className='border-b flex justify-between'>
//         <Link href="/" className="text-4xl px-2 py-4">LOGO</Link>
//         <AuthButton />
//       </div>
//     </SessionProvider>
//   )
// }
