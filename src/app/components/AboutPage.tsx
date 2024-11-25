


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <section id='about' className="text-gray-600 min-h-[97vh] h-full body-font overflow-hidden mb-16 mt-10">
   <h1 className='mx-auto flex justify-center items-center pt-4 text-3xl font-bold text-black'>About us</h1>
   <p className='md:max-w-3xl max-w-2xl text-center mx-auto py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique harum qui odio deleniti et odit quasi iusto, fugit quis quia? Pariatur labore ab inventore odio consequuntur ad obcaecati ea.</p>
    <div className="container px-5 py-24 mx-auto">
      
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Image
        height={600}
        width={600}
          alt="ecommerce"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src={"/about.avif"}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            DAILY BLOGS
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            Improve Your Knowledge
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
           
            </span>
             
          </div>
          <p className="leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod atque neque dolore magnam consequuntur impedit laboriosam. Deserunt natus, assumenda neque fugit eligendi, iure nobis esse doloremque earum quisquam asperiores magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nulla doloremque. Nobis ab laboriosam nemo maiores! Reprehenderit, commodi odio natus atque, labore fugit quae nam assumenda totam quasi illum aliquam?
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
             
            
          </div>
        <Link href={'/blogs'} >  <button className='px-10 py-2 text-lg font-medium bg-indigo-600 text-white rounded-xl w-full md:w-40'>Blogs </button></Link>
        </div>
      </div>
    </div>
  </section>
  

   
  )
}

export default AboutPage