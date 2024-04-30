import PostCards from '@/components/postCards/PostCards'
import { getPosts } from '@/lib/data';
import React from 'react'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
  if(!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}

const Blog = async () => {
  const posts = await getData();
  // const posts = await getPosts();

  return (
    <div className="min-h-[584px]" >
      <div className="flex-wrap flex mx-[10%] justify-between">
        {
          posts.map((post) => (
            <div key={post} >
              <PostCards post={post} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Blog;