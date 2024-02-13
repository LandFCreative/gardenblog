import React from 'react'
import Postcard from './Postcard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Props = {}

const Posts = async (props: Props) => {
    const users= await prisma.user.findMany()
    console.log(users)
    const posts= await prisma.post.findMany()
    console.log(posts)
    const bgClasses= [
        "bg-orange-200",
        "bg-yellow-200",
        "bg-green-200",
    ]

  return (
    <div><h2 className='text-4xl text-center mt-6'>Trending</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-48'>
            {posts.map((post, index) => (
                <Postcard key={post.id} post={post} className={ bgClasses[index] }/>
            ))}
        </div>
    </div>

  )
}

export default Posts