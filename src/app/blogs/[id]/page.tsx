 "use client"
import React from 'react'
import BlogsPage from "@/app/components/BlogsPage"
import {blogs} from "@/app/blogs/page"
import {blog} from "@/app/blogs/page"
const  Page = ({params}:any) => {
  const  reqBlog:blog= blogs && blogs.find((blog:blog)=> blog.id == params.id)as blog;
  const {title ,writer ,description,image} =reqBlog
  console.log(title ,"destructuring the title")
  // id, title, writer, description, image
    
  return (
    <div>
      <BlogsPage title={title} writer={writer}  description={description} image={image} />
    </div>
  )
}

export default  Page