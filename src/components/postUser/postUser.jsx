import { getUser } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,  {cache:"no-store"})
//     if (!res.ok) {
//       throw new Error("Something went wrong")
//     }
//     return res.json();
//   }


const PostUser = async ({ userId }) => {
    // const user = await getData(userId)
    const user = await getUser(userId)


    return (
        <div className='flex justify-between w-36'>
            <div className="">
                <Image className='rounded-full' src={user.image  ? user.image : "/noavatar.png" } width={55} height={55} />
            </div>
            <div>
                <h1 className='text-gray-500'>Author</h1>
                <h1>{user.username}</h1>
            </div>
        </div>
    )
}

export default PostUser
