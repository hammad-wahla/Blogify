import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCards({ post }) {
    return (
        <div className='mt-10   '>

            <div className="max-w-[350px]  rounded overflow-hidden " key={post.id}>
                <div className='flex justify-evenly ' >
                    { post.img && <div>
                        <Image
                        className="w-72 h-72 object-cover"
                        src={post.img}
                        alt="Card"
                        width={100}
                        height={100}
                    />
                        </div>}
                    <div className='ml-[-45px] pt-36 w-28'>
                        <p className='rotate-90' >{post.createdAt?.toString().slice(4, 16)}</p>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className=" text-base">
                        {post.desc}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <Link href={`/blog/${post.slug  }`}>
                        Read More
                    </Link>
                </div>
            </div>

        </div>
    )
}
