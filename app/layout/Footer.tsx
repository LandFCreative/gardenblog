import React from 'react'
import githubIcon from '../../public/github-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-orange-400 text-white py-12 px-4'><div className='flex container justify-between'>
      <div className='flex flex-row items-center'>
        <div>
          <div className='text-2xl mb-3'>Clever Gardener Blog</div>
          <div className='text-sm'>©  2024 Lost and Found Creative</div>
        </div>
      </div>
      <div className='flex'>
        <a href='https://github.com' target="_blank" className='mr-3'>
          <Image src={githubIcon} alt="github" width={32} height={32} />
        </a>
      </div>
    </div></div>
  )
}

export default Footer