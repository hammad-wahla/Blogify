import Image from 'next/image'
import React from 'react'

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if(!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json();
  }
const Post = async ({params}) => {
    const {slug} = params;
    const post = await getData(slug);
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-2  gap-4">
                    <div className="ml-40 mt-5">
                        <Image src="https://images.pexels.com/photos/19820251/pexels-photo-19820251/free-photo-of-people-sitting-on-chairs-under-columns-in-a-courtyard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} height={550} />
                    </div>
                    <div className=" p-4">
                        <h1 className="text-4xl font-bold">{post.title}</h1>
                        <div className="flex justify-between mt-10 mb-10 w-60">
                            <div className="rounded-full">
                                <Image src="/contact.png" width={50} height={50} />
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Author</h1>
                                <h1>John</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Published</h1>
                                <h1>01.01.2024</h1>
                            </div>
                        </div>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;