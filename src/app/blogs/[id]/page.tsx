 "use client"
import React from 'react'
import BlogsPage from "@/app/components/BlogsPage"
const blogs = [
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
 
const  Page = ({params}:any) => {
  const  reqBlog = blogs && blogs.find((blog )=> blog.id == params.id) 
  const {title ,writer ,description,image}:any =reqBlog
  console.log(title ,"destructuring the title")
  // id, title, writer, description, image
    
  return (
    <div>
      <BlogsPage title={title} writer={writer}  description={description} image={image} />
    </div>
  )
}

export default  Page