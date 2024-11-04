
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="text-mytext body-font">
  <div className="container bg-gray-800  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-mytext mb-4 md:mb-0">
      {/* <svg
        
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg> */}
      <span className="ml-3 text-3xl font-bold">Daily<span className='text-indigo-600'>Blogs</span> </span>
    </a>
    <nav className=" md:ml-auto flex flex-wrap  items-center text-lg font-medium cursor-pointer justify-center">
      <Link  href={'/'} className="mr-5 hover:text-myButton">Home </Link>
      <Link href={'/blogs'} className="mr-5 hover:text-myButton">Blogs</Link>
      <Link href={'/about'} className="mr-5 hover:text-myButton">About</Link>
      <Link href={'/contact'} className="mr-5 hover:text-myButton">Contact</Link>
    </nav>
  
  </div>
</header>

    </div>
  )
}

export default Header