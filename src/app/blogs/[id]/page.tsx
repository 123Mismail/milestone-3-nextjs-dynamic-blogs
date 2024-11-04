 "use client"
import React from 'react'
import BlogsPage from "@/app/components/BlogsPage"
// const blogs = [
//   {
//     "id": 1,
//     "title": "The Journey of Self-Discovery",
//     "writer": "Jane Doe",
//     "description":`This blog explores the profound journey of self-discovery that many people undergo in their lives, emphasizing the transformative impact of truly understanding oneself. In a fast-paced world, the importance of pausing to reflect on who we are, what we want, and where we’re heading is often overlooked. This blog delves into how acknowledging personal strengths and embracing perceived weaknesses can unlock hidden potential and foster resilience. Through relatable anecdotes and actionable advice, readers will learn to navigate their own paths of growth.

//     The blog discusses essential techniques for self-exploration, such as journaling, meditation, and mindfulness practices, which offer tools to quiet external noise and tune into inner wisdom. It also touches on the value of setting intentional goals, facing fears, and re-evaluating one’s life purpose. For those in search of deeper meaning, this blog will provide guidance on cultivating self-compassion and shedding limiting beliefs.
    
//     Readers are encouraged to connect with themselves more fully, developing a greater sense of authenticity and purpose. By the end of this post, they will feel inspired to embrace their uniqueness, celebrate their progress, and continue on a path toward a more fulfilling and genuine life journey.`,
//     "image": "/self-discovery.avif"
//   },
//   {
//     "id": 2,
//     "title": "Healthy Eating: A Beginner's Guide",
//     "writer": "John Smith",
//     "description": "In this blog, we delve into the fundamentals of healthy eating for those who are just starting their wellness journey. From understanding food groups to making informed choices at the grocery store, this guide provides essential tips. Readers will discover how to prepare simple, nutritious meals that can fit into a busy lifestyle. The post also emphasizes the importance of balance and moderation, ensuring that healthy eating is sustainable and enjoyable.",
//     "image": "/blog2.avif"
//   },
//   {
//     "id": 3,
//     "title": "Traveling on a Budget",
//     "writer": "Emily Chen",
//     "description": "This blog offers practical advice for anyone looking to explore the world without breaking the bank. It covers topics such as finding affordable accommodations, using public transportation, and scoring cheap flights. With personal travel stories and insider tips, readers will learn how to maximize their experiences while minimizing expenses. The blog aims to empower readers to make travel accessible and enjoyable for everyone.",
//     "image": "/blog3.avif"
//   },
//   {
//     "id": 4,
//     "title": "The Art of Mindfulness",
//     "writer": "Michael Lee",
//     "description": "In this entry, we explore the transformative practice of mindfulness and its benefits for mental well-being. The blog outlines various mindfulness techniques, including breathing exercises, guided meditations, and mindful eating. Through personal experiences and scientific research, readers will understand how mindfulness can reduce stress, enhance focus, and improve emotional resilience. This post encourages readers to incorporate mindfulness into their daily routines for a more balanced life.",
//     "image": "/blog4.avif"
//   },
//   {
//     "id": 5,
//     "title": "Home Workouts: Staying Fit Indoors",
//     "writer": "Sarah Johnson",
//     "description": "This blog provides an overview of effective home workout routines that require minimal equipment. It caters to individuals of all fitness levels and includes tips on creating a motivating workout space. Readers will find a variety of exercises, from bodyweight routines to resistance band workouts. The post emphasizes the importance of consistency and setting realistic fitness goals, making it easier for everyone to stay active, even at home.",
//     "image": "/blog5.avif"
//   },
//   {
//     "id": 6,
//     "title": "Sustainable Living: Small Changes, Big Impact",
//     "writer": "Lisa Brown",
//     "description": "In this blog, we discuss the concept of sustainable living and how small lifestyle changes can contribute to a healthier planet. From reducing plastic use to adopting a plant-based diet, readers will learn actionable steps they can take. The post features interviews with eco-activists and shares resources for further learning. It aims to inspire a community of environmentally conscious individuals dedicated to making a difference.",
//     "image": "/blog6.avif"
//   },
//   {
//     "id": 7,
//     "title": "The Basics of Photography",
//     "writer": "David Wilson",
//     "description": "This blog serves as an introduction to photography for beginners, covering essential concepts such as composition, lighting, and camera settings. Readers will gain insights into the creative process and learn tips to enhance their photography skills. The post includes practical exercises and examples to help readers practice and refine their techniques. It's perfect for anyone looking to explore photography as a hobby or profession.",
//     "image": "/blog7.avif"
//   },
//   {
//     "id": 8,
//     "title": "Understanding Mental Health",
//     "writer": "Sophia Martinez",
//     "description": "This blog aims to raise awareness about mental health issues and the importance of seeking help. It discusses common mental health conditions, symptoms to watch for, and resources for support. The post features personal stories and expert opinions, fostering a deeper understanding of mental well-being. Readers will find encouragement to prioritize their mental health and seek professional guidance when needed.",
//     "image": "/blog8.avif"
//   },
//   {
//     "id": 9,
//     "title": "DIY Home Decor: Transforming Spaces",
//     "writer": "Ryan Carter",
//     "description": "In this blog, we explore creative DIY home decor projects that can enhance any living space. From upcycling old furniture to crafting personalized wall art, readers will find step-by-step guides and inspiring ideas. The post emphasizes budget-friendly solutions and the joy of creating a unique home environment. It encourages readers to express their personality through decor while enjoying the process of crafting.",
//     "image": "/blog9.avif"
//   },
   
// ]
const blogs = [
  {
    id: 1,
    title: "The Journey of Self-Discovery",
    writer: "Jane Doe",
    description:[ 
            {
             heading1:"Discovering Yourself ",
           paragraph1:"This blog explores the profound journey of self-discovery that many people undergo in their lives, emphasizing the transformative impact of truly understanding oneself. In a fast-paced world, the importance of pausing to reflect on who we are, what we want, and where we’re heading is often overlooked. This blog delves into how acknowledging personal strengths and embracing perceived weaknesses can unlock hidden potential and foster resilience. Through relatable anecdotes and actionable advice, readers will learn to navigate their own paths of growth.",
            heading2:"Make A Goal",
            paragraph2:"The blog discusses essential techniques for self-exploration, such as journaling, meditation, and mindfulness practices, which offer tools to quiet external noise and tune into inner wisdom. It also touches on the value of setting intentional goals, facing fears, and re-evaluating one’s life purpose. For those in search of deeper meaning, this blog will provide guidance on cultivating self-compassion and shedding limiting beliefs.",
            heading3:"Approaching Peoples Like You",
            paragraph3:"Readers are encouraged to connect with themselves more fully, developing a greater sense of authenticity and purpose. By the end of this post, they will feel inspired to embrace their uniqueness, celebrate their progress, and continue on a path toward a more fulfilling and genuine life journey."
          }
          
          ],
    image: "/self-discovery.avif",
  },
  {
    id: 2,
    title: "Healthy Eating: A Beginner's Guide",
    writer: "John Smith",
    description:[{
      heading1: "Understanding Healthy Eating",
      paragraph1: "In this blog, we delve into the fundamentals of healthy eating for those who are just starting their wellness journey. Understanding the basics of nutrition, such as food groups and portion sizes, is essential for making informed dietary choices. This foundational knowledge empowers readers to take charge of their health and well-being.",
      heading2: "Making Informed Choices",
      paragraph2: "From understanding food groups to making informed choices at the grocery store, this guide provides essential tips. Learning to read food labels and recognizing nutrient-dense options can help readers navigate the aisles with confidence. This blog also highlights the importance of planning meals to avoid impulsive eating decisions.",
      heading3: "Preparing Nutritious Meals",
      paragraph3: "Readers will discover how to prepare simple, nutritious meals that can fit into a busy lifestyle. The blog offers easy-to-follow recipes that save time while still providing essential nutrients. Cooking at home not only allows for healthier choices but also encourages creativity in the kitchen.",
     
    }],
    image: "/blog2.avif",
  },
  {
    id: 3,
    title: "Traveling on a Budget",
    writer: "Emily Chen",
    description:
     [ {
      heading1: "Exploring the World Affordably",
      paragraph1: "This blog offers practical advice for anyone looking to explore the world without breaking the bank. It emphasizes the importance of planning ahead and being resourceful, allowing travelers to discover new destinations without overspending. By prioritizing experiences over luxury, readers can enjoy their adventures while staying within budget.",
      
      heading2: "Finding Affordable Accommodations",
      paragraph2: "The blog covers topics such as finding affordable accommodations, using public transportation, and scoring cheap flights. It includes tips on how to leverage technology and apps to find the best deals. Readers will learn strategies for choosing budget-friendly lodging options, from hostels to vacation rentals, ensuring comfort without compromising their finances.",
      
      heading3: "Maximizing Travel Experiences",
      paragraph3: "With personal travel stories and insider tips, readers will learn how to maximize their experiences while minimizing expenses. This section shares anecdotes that highlight the joys of traveling on a budget, such as discovering hidden gems and enjoying local cuisine. The blog aims to empower readers to make travel accessible and enjoyable for everyone."
    }],
    image: "/blog3.avif",
  },
  {
    id: 4,
    title: "The Art of Mindfulness",
    writer: "Michael Lee",
    description:
      [{
        heading1: "Understanding Mindfulness",
        paragraph1: "In this entry, we explore the transformative practice of mindfulness and its benefits for mental well-being. The blog discusses how mindfulness is more than just a trend; it's a powerful tool for enhancing our quality of life. By cultivating awareness in the present moment, readers can discover new insights into their thoughts and feelings, leading to greater self-understanding.",
        
        heading2: "Techniques for Practicing Mindfulness",
        paragraph2: "The blog outlines various mindfulness techniques, including breathing exercises, guided meditations, and mindful eating. These practices serve as effective ways to anchor ourselves in the present, reducing anxiety and fostering calmness. Readers will find detailed instructions and tips on how to incorporate these techniques into their daily routines, making mindfulness accessible to all.",
        
        heading3: "The Benefits of Mindfulness",
        paragraph3: "Through personal experiences and scientific research, readers will understand how mindfulness can reduce stress, enhance focus, and improve emotional resilience. The blog emphasizes that mindfulness isn't just for those in crisis; it's a beneficial practice for anyone looking to improve their mental health. By the end of the post, readers will be inspired to make mindfulness a regular part of their lives for a more balanced and fulfilling existence."
      }],
    image: "/blog4.avif",
  },
  {
    id: 5,
    title: "Home Workouts: Staying Fit Indoors",
    writer: "Sarah Johnson",
    description:
    [ {
      heading1: "Effective Home Workout Routines",
      paragraph1: "This blog provides an overview of effective home workout routines that require minimal equipment. By focusing on bodyweight exercises and easily accessible tools, readers can maintain their fitness without the need for a gym membership. This approach makes it possible to achieve a great workout from the comfort of home.",
      
      heading2: "Creating a Motivating Workout Space",
      paragraph2: "It caters to individuals of all fitness levels and includes tips on creating a motivating workout space. A dedicated area can enhance focus and encourage regular exercise. The blog offers suggestions on how to organize this space to minimize distractions and maximize productivity during workouts.",
      
      heading3: "Variety and Consistency in Workouts",
      paragraph3: "Readers will find a variety of exercises, from bodyweight routines to resistance band workouts. The post emphasizes the importance of consistency and setting realistic fitness goals, making it easier for everyone to stay active, even at home. By mixing different types of workouts, readers can keep their routines fresh and engaging, which is crucial for long-term success."
    }],
    image: "/blog5.avif",
  },
  {
    id: 6,
    title: "Sustainable Living: Small Changes, Big Impact",
    writer: "Lisa Brown",
    description:
    [{
      heading1: "Understanding Sustainable Living",
      paragraph1: "In this blog, we discuss the concept of sustainable living and how small lifestyle changes can contribute to a healthier planet. Readers will gain insights into the principles of sustainability and why every action, no matter how small, can make a significant difference in the fight against climate change.",
      
      heading2: "Actionable Steps for Change",
      paragraph2: "From reducing plastic use to adopting a plant-based diet, readers will learn actionable steps they can take. The blog emphasizes the importance of making conscious choices in daily life, such as choosing reusable products and supporting local, sustainable businesses. These changes not only benefit the environment but also promote personal health and well-being.",
      
      heading3: "Inspiration and Resources",
      paragraph3: "The post features interviews with eco-activists and shares resources for further learning. By connecting with others in the sustainable living community, readers can find support and motivation for their own journeys. It aims to inspire a community of environmentally conscious individuals dedicated to making a difference, encouraging readers to take pride in their contributions to a better world."
    }],
    image: "/blog6.avif",
  },
  {
    id: 7,
    title: "The Basics of Photography",
    writer: "David Wilson",
    description:
     [{
      heading1: "Introduction to Photography",
      paragraph1: "This blog serves as an introduction to photography for beginners, covering essential concepts such as composition, lighting, and camera settings. Understanding these fundamentals is crucial for anyone looking to capture beautiful images and express their creativity through photography.",
      
      heading2: "Enhancing Your Skills",
      paragraph2: "Readers will gain insights into the creative process and learn tips to enhance their photography skills. The blog offers practical advice on framing shots, utilizing natural light, and experimenting with different settings to achieve desired effects. These tips aim to build confidence and encourage readers to develop their unique style.",
      
      heading3: "Practical Exercises and Examples",
      paragraph3: "The post includes practical exercises and examples to help readers practice and refine their techniques. From simple tasks to more advanced challenges, these exercises are designed to foster growth and improvement. It's perfect for anyone looking to explore photography as a hobby or profession, encouraging readers to pick up their cameras and start shooting."
    }],
    image: "/blog7.avif",
  },
  {
    id: 8,
    title: "Understanding Mental Health",
    writer: "Sophia Martinez",
    description:
     [ {
      heading1: "Raising Awareness about Mental Health",
      paragraph1: "This blog aims to raise awareness about mental health issues and the importance of seeking help. Understanding mental health is crucial for everyone, as it affects our overall well-being and quality of life. The blog encourages open conversations and breaks down stigma surrounding mental health challenges.",
      
      heading2: "Common Conditions and Symptoms",
      paragraph2: "It discusses common mental health conditions, symptoms to watch for, and resources for support. By recognizing signs of anxiety, depression, and other disorders, readers can better understand their own experiences or those of loved ones. The blog highlights the importance of early intervention and appropriate care.",
      
      heading3: "Personal Stories and Expert Opinions",
      paragraph3: "The post features personal stories and expert opinions, fostering a deeper understanding of mental well-being. These narratives illustrate that individuals are not alone in their struggles, providing relatable experiences and insights. Readers will find encouragement to prioritize their mental health and seek professional guidance when needed."
    }],
    image: "/blog8.avif",
  },
  {
    id: 9,
    title: "DIY Home Decor: Transforming Spaces",
    writer: "Ryan Carter",
    description:[{
      heading1: "Exploring Creative DIY Projects",
      paragraph1: "In this blog, we explore creative DIY home decor projects that can enhance any living space. DIY projects not only allow for personalization but also provide a rewarding experience. Whether it's reimagining old furniture or creating new decor from scratch, the possibilities are endless.",
      
      heading2: "Step-by-Step Guides and Inspiration",
      paragraph2: "From upcycling old furniture to crafting personalized wall art, readers will find step-by-step guides and inspiring ideas. Each project is designed to be accessible, providing clear instructions that cater to various skill levels. This blog aims to inspire readers to tap into their creativity and bring their visions to life.",
      
      heading3: "Budget-Friendly Solutions",
      paragraph3: "The post emphasizes budget-friendly solutions and the joy of creating a unique home environment. By using materials that are often found at home or in thrift stores, readers can achieve beautiful results without overspending. It encourages readers to express their personality through decor while enjoying the process of crafting."
    }],
    image: "/blog9.avif",
  },
];
const  Page = ({params}:any) => {
  const  reqBlog = blogs && blogs.find((blog )=> blog.id == params.id) 
  const {title ,writer ,description,image}:any =reqBlog
  console.log(title ,"destructuring the title")
  // id, title, writer, description, image
    
  return (
    <div>
      <BlogsPage id={params.id} title={title} writer={writer}  description={description} image={image} />
    </div>
  )
}

export default  Page