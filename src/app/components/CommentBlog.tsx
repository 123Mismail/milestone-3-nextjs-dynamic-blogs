"use client";
import React, { useEffect, useState } from "react";

interface Comment {
  id: number;
  blogsId?:any;
  userName: string;
  email: string;
  message: string;
}
const blogs = [
  {
    "id": 1,
    "title": "The Journey of Self-Discovery",
    "writer": "Jane Doe",
    "description":`This blog explores the profound journey of self-discovery that many people undergo in their lives, emphasizing the transformative impact of truly understanding oneself. In a fast-paced world, the importance of pausing to reflect on who we are, what we want, and where we’re heading is often overlooked. This blog delves into how acknowledging personal strengths and embracing perceived weaknesses can unlock hidden potential and foster resilience. Through relatable anecdotes and actionable advice, readers will learn to navigate their own paths of growth.

    The blog discusses essential techniques for self-exploration, such as journaling, meditation, and mindfulness practices, which offer tools to quiet external noise and tune into inner wisdom. It also touches on the value of setting intentional goals, facing fears, and re-evaluating one’s life purpose. For those in search of deeper meaning, this blog will provide guidance on cultivating self-compassion and shedding limiting beliefs.
    
    Readers are encouraged to connect with themselves more fully, developing a greater sense of authenticity and purpose. By the end of this post, they will feel inspired to embrace their uniqueness, celebrate their progress, and continue on a path toward a more fulfilling and genuine life journey.`,
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
    "image": "/blog4.avif"
  },
  {
    "id": 5,
    "title": "Home Workouts: Staying Fit Indoors",
    "writer": "Sarah Johnson",
    "description": "This blog provides an overview of effective home workout routines that require minimal equipment. It caters to individuals of all fitness levels and includes tips on creating a motivating workout space. Readers will find a variety of exercises, from bodyweight routines to resistance band workouts. The post emphasizes the importance of consistency and setting realistic fitness goals, making it easier for everyone to stay active, even at home.",
    "image": "/blog5.avif"
  },
  {
    "id": 6,
    "title": "Sustainable Living: Small Changes, Big Impact",
    "writer": "Lisa Brown",
    "description": "In this blog, we discuss the concept of sustainable living and how small lifestyle changes can contribute to a healthier planet. From reducing plastic use to adopting a plant-based diet, readers will learn actionable steps they can take. The post features interviews with eco-activists and shares resources for further learning. It aims to inspire a community of environmentally conscious individuals dedicated to making a difference.",
    "image": "/blog6.avif"
  },
  {
    "id": 7,
    "title": "The Basics of Photography",
    "writer": "David Wilson",
    "description": "This blog serves as an introduction to photography for beginners, covering essential concepts such as composition, lighting, and camera settings. Readers will gain insights into the creative process and learn tips to enhance their photography skills. The post includes practical exercises and examples to help readers practice and refine their techniques. It's perfect for anyone looking to explore photography as a hobby or profession.",
    "image": "/blog7.avif"
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

const CommentBlog = (id:any) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    id: Date.now(),
    blogsId:'',
    userName: "",
    email: "",
    message: "",
  });

  // Handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.userName && newComment.message && newComment.email) {
      const updatedComment = { ...newComment, id: Date.now(),blogsId: id};
      setComment((prevComments) => [...prevComments, updatedComment]);
      // Reset fields after adding the comment
      setNewComment({ id: Date.now(), userName: "", email: "", message: "",blogsId:"" });
    }
  };
   console.log("blogs page")
  useEffect(() => {
    // Retrieve comments from localStorage on component mount
    const localStoredData = JSON.parse(localStorage.getItem("comments") || "[]");
    if(localStoredData && localStoredData.length >0 ){
      console.log(localStoredData ,"local storage store data is trying to get here")
      setComment(localStoredData);
    }
  }, []);

  useEffect(() => {
    // Store comments in localStorage whenever the comment array changes
    localStorage.setItem("comments", JSON.stringify(comment));
  }, [comment]);
   const onlyThisPost=comment.filter((com)=> com.blogsId.id === id.id);
   console.log(onlyThisPost ,"trying to fetch the comments for only tis post")
  // console.log(comment[0].blogsId.id ,"comments ")
  console.log(id.id ,"id which we have got rom the prams")
  return (
    <div>
      <section className="body-font relative">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Comment
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newComment.userName}
                      onChange={(e) => setNewComment({ ...newComment, userName: e.target.value })}
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newComment.email}
                      onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={newComment.message}
                      onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container -mt-16 px-5 py-24 mx-auto flex justify-center items-center flex-wrap">
          <div className="flex flex-wrap">
            <div className="p-4 max-w-3xl md:w-full mx-auto w-full ">
              {onlyThisPost.length > 0 && 
                onlyThisPost.map((comment: Comment) => (
                  <div key={comment.id} className=" overflow-hidden flex border-2 mb-4 border-gray-200 border-opacity-50 p-1 sm:flex-row flex-col rounded-xl">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-lg title-font font-medium mb-1">
                        {comment.userName}
                      </h2>
                      <p className="leading-relaxed text-base line-clamp-2">
                        {comment.message}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentBlog;
