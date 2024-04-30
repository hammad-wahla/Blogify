import Post from '@/components/navbar/blog/post/Post'
import React from 'react'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from "@/lib/data";
import { Suspense } from "react";

// export const metadata = {
//   title: "Blog Post page",
//   description: "Blog post description",
// };


// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }
//   return res.json();
// }

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const page = async ({ params }) => {

  const { slug } = params;
  const post = await getPost(slug);

  // const post = await getData(slug);
  return (

    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2  gap-4">

          {post.img && <div className="ml-40 mt-5">
            <Image src={post.img} width={350} height={550} />
          </div>}
          <div className=" p-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className='flex justify-between mt-10 mb-10 w-72 '>
              
              {post && (
                <Suspense fallback={<div>Loading...</div>} >
                  <PostUser userId={post.userId} />
                </Suspense>
              )}
              <div>
                <h1 className='text-gray-500'>Published</h1>
                <span>{post.createdAt.toString().slice(4, 16)}</span>
              </div>
            </div>
            <p className="text-gray-700">{post.desc}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default page
