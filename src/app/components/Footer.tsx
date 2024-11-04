
import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <footer className=" bg-gray-800 text-mytext body-font -mt-36 lg:mt-0  ">
  <div className="container px-5 py-24   lg:mb-80 mb-32  mx-auto flex -mt-10 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-mytext">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-myButton rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Dailblogs</span>
      </a>
      <p className="mt-2 text-sm text-mytext">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="uppercase title-font font-medium text-mytext/65 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-mytext hover:text-mytext/90">Health Care</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Fitness </a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Arts and Cultures</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Technology</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="uppercase title-font font-medium text-mytext/65 tracking-widest text-sm mb-3">
          Social Media
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-mytext hover:text-mytext/90">Facebook</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Twitter</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Linkdin</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Youtube</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="uppercase title-font font-medium text-mytext/65 tracking-widest text-sm mb-3">
         About Us
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-mytext hover:text-mytext/90">First Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Second Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Third Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="uppercase title-font font-medium text-mytext/65 tracking-widest text-sm mb-3">
          contact
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-mytext hover:text-mytext/90">First Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Second Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Third Link</a>
          </li>
          <li>
            <a className="text-mytext hover:text-mytext/90">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
   
  </div>
  <div className='flex justify-center items-center md:-mt-80  -mt-40  pb-3 space-x-3'> <FaFacebook className='text-2xl' />  <FaTwitter  className='text-2xl' />  <FaLinkedinIn  className='text-2xl' /> <FaYoutube  className='text-2xl' /></div>
</footer>


    </div>
  )
}

export default Footer