"use client"

import Link from 'next/link'
import React from 'react'
 export interface blog{
  id:number,
  title:string,
  writer:string,
  description:string,
  image:string,
}
// blogs 
   export const blogs:blog[]= [
    {
      "id": 1,
      "title": "The Journey of Self-Discovery",
      "writer": "Jane Doe",
      "description": "This blog explores the profound journey of self-discovery that many people undergo in their lives. It delves into the importance of understanding oneself, embracing personal strengths and weaknesses, and the transformative power of self-reflection. Through anecdotes and practical advice, readers will learn how to navigate their own paths of growth. The post highlights various techniques, such as journaling and meditation, that can aid in this introspective process. Ultimately, it aims to inspire readers to embark on their own journey towards authenticity and fulfillment.",
      "image": "/self-discovery.avif"
    },
    {
      "id": 2,
      "title": "Healthy Eating: A Beginner's Guide",
      "writer": "John Smith",
      "description": "In this blog, we delve into the fundamentals of healthy eating for those who are just starting their wellness journey. From understanding food groups to making informed choices at the grocery store, this guide provides essential tips. Readers will discover how to prepare simple, nutritious meals that can fit into a busy lifestyle. The post also emphasizes the importance of balance and moderation, ensuring that healthy eating is sustainable and enjoyable.",
      "image": "/blog2.avif"
    },
    {
      "id": 3,
      "title": "Traveling on a Budget",
      "writer": "Emily Chen",
      "description": "This blog offers practical advice for anyone looking to explore the world without breaking the bank. It covers topics such as finding affordable accommodations, using public transportation, and scoring cheap flights. With personal travel stories and insider tips, readers will learn how to maximize their experiences while minimizing expenses. The blog aims to empower readers to make travel accessible and enjoyable for everyone.",
      "image": "/blog3.avif"
    },
    {
      "id": 4,
      "title": "The Art of Mindfulness",
      "writer": "Michael Lee",
      "description": "In this entry, we explore the transformative practice of mindfulness and its benefits for mental well-being. The blog outlines various mindfulness techniques, including breathing exercises, guided meditations, and mindful eating. Through personal experiences and scientific research, readers will understand how mindfulness can reduce stress, enhance focus, and improve emotional resilience. This post encourages readers to incorporate mindfulness into their daily routines for a more balanced life.",
      "image": "blog4.avif"
    },
    {
      "id": 5,
      "title": "Home Workouts: Staying Fit Indoors",
      "writer": "Sarah Johnson",
      "description": "This blog provides an overview of effective home workout routines that require minimal equipment. It caters to individuals of all fitness levels and includes tips on creating a motivating workout space. Readers will find a variety of exercises, from bodyweight routines to resistance band workouts. The post emphasizes the importance of consistency and setting realistic fitness goals, making it easier for everyone to stay active, even at home.",
      "image": "blog5.avif"
    },
    {
      "id": 6,
      "title": "Sustainable Living: Small Changes, Big Impact",
      "writer": "Lisa Brown",
      "description": "In this blog, we discuss the concept of sustainable living and how small lifestyle changes can contribute to a healthier planet. From reducing plastic use to adopting a plant-based diet, readers will learn actionable steps they can take. The post features interviews with eco-activists and shares resources for further learning. It aims to inspire a community of environmentally conscious individuals dedicated to making a difference.",
      "image": "blog6.avif"
    },
    {
      "id": 7,
      "title": "The Basics of Photography",
      "writer": "David Wilson",
      "description": "This blog serves as an introduction to photography for beginners, covering essential concepts such as composition, lighting, and camera settings. Readers will gain insights into the creative process and learn tips to enhance their photography skills. The post includes practical exercises and examples to help readers practice and refine their techniques. It's perfect for anyone looking to explore photography as a hobby or profession.",
      "image": "blog7.avif"
    },
    {
      "id": 8,
      "title": "Understanding Mental Health",
      "writer": "Sophia Martinez",
      "description": "This blog aims to raise awareness about mental health issues and the importance of seeking help. It discusses common mental health conditions, symptoms to watch for, and resources for support. The post features personal stories and expert opinions, fostering a deeper understanding of mental well-being. Readers will find encouragement to prioritize their mental health and seek professional guidance when needed.",
      "image": "/blog8.avif"
    },
    {
      "id": 9,
      "title": "DIY Home Decor: Transforming Spaces",
      "writer": "Ryan Carter",
      "description": "In this blog, we explore creative DIY home decor projects that can enhance any living space. From upcycling old furniture to crafting personalized wall art, readers will find step-by-step guides and inspiring ideas. The post emphasizes budget-friendly solutions and the joy of creating a unique home environment. It encourages readers to express their personality through decor while enjoying the process of crafting.",
      "image": "/blog9.avif"
    },
     
  ]
 

const BlogsPage = () => {


  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold p-2 mt-7'>Blogs </h2>
        
        <p className='max-w-4xl text-center px-6'>A blog is a regularly updated website or web page, typically run by an individual or group, that is written in an informal or conversational style. Blogs can serve various purposes, from sharing personal experiences to providing information on specific topics.

</p>
        <section className="text-myHead body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4">
      { blogs && blogs.map((blog:blog)=>
      (
        <div key={blog.id} className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={blog.image}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {blog.title}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {blog.writer}
            </h1>
            <p className="leading-relaxed mb-3 line-clamp-2">
             {blog.description}
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/blogs/${blog.id}`} className="  inline-flex items-center md:mb-2 lg:mb-0 text-myButton">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                 
              </span>
              
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      ))}
     
     
    </div>
  </div>
</section>

    </div>
  )
}

export default BlogsPage