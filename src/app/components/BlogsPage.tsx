import React from "react";
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import CommentBlog from "./CommentBlog";

const BlogsPage = ({ id, title, writer, description, image }: any) => {
  return (
    <div>
      <section className="text-myHead body-font">
        <Link href={'/blogs'}>
      <AiOutlineClose className="text-4xl font-medium m-3" />
      </Link>
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <span className="mx-auto text-4xl font-bold flex justify-between items-center">{title} </span>
          <div className="flex mx-auto flex-wrap mb-20 h-[1.5px] bg-myPara max-w-xl w-full">
             
          </div>
          <Image
          height={400}
          width={400}
          alt="blogs image"
            className="xl:w-2/4 lg:w-2/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            
            src={image}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
             Writer: {writer}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base max-w-3xl">
             {description}
            </p>
            <div className="p-3 ">
            <CommentBlog/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
