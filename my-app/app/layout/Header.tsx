import React from 'react'
import Link from 'next/link'


type Props = {}

const Header = (props: Props) => {
  return (
    <div className='border-b border-black flex justify-between'>
    <Link href='/' className='text-4xl px-2 py-4'> LOGO </Link>
    <button className='text-white bg-black'> Sign in</button>
    </div>
  )
}

export default Header