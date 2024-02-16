import React from 'react'
import Image from "next/image"
import Link from 'next/link';

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="border-b">
    <section className='grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8'>
        <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl md:leading-normal'>Garden News for Busy People</h1>
        <h2>Stay informed with the tips and tricks for Northern Gardening areas.</h2>
        <ul>
            <li><span className='mr-2'>✔️</span>Gardening News</li>
            <li><span className='mr-2'>✔️</span>Product Launches</li>
            <li><span className='mr-2'>✔️</span>Plant Spotlight</li>
          </ul>
          <Link href="/blog/all" className='text-white block w-fit bg-green-900  px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>Browse Articles</Link>
          </div>
  
        <div className='col-span-5 place-self-center'>
        <Image src="/garden1.png" width={300} height={300} alt="two people holding a flower, gardening" />
        </div>
  
    </section>
    </div>
  )
}

export default HeroSection