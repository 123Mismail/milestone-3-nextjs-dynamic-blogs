

import Link from 'next/link'
import React from 'react'
 
   
const HeroSection  = () => {
  return (
    <div> 
        <div
  className="hero min-h-[80vh] bg-image bg-fixed text-myHead bg-center bg-no-repeat"
   >
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md text-myHead">
      <h1 className="mb-5 text-5xl font-bold">Welcome to DailyBlogs</h1>
      <p className="mb-5 text-lg text-white font-semibold px-4">
      In essence, blogging is a powerful tool for communication and connection in the digital age, offering opportunities for personal and professional growth.
      </p>
      <Link href={'/blogs'}><button className="px-8 rounded-xl py-2 text-white bg-myHead text-lg font-medium">Blogs</button></Link>
    </div>
  </div>
</div>

         </div>
  )
}

export default HeroSection 