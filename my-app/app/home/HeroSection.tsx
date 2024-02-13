import React from 'react'
import Image from "next/image"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-12 mt-6'>
        <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-2xl, sm:text-4xl med:text-6xl md:leading-normal '>Garden News for Busy People</h1>
        <button className='col-span-5 place-self-center text-white bg-green-900 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,01)]' >Browse Articles</button>
        </div>
        <div className='col-span-5 place-self-center m-8'>
        <Image src="/garden1.png" width={300} height={300} alt="two people holding a flower, gardening" />
        </div>
    </section>
  )
}

export default HeroSection