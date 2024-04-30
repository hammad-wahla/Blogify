import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <h3>Return <Link href="/" >Home</Link></h3>
    </div>
  )
}
