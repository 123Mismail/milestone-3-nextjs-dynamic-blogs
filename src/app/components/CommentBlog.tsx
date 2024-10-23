"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
const CommentBlog = () => {
    const [comments, setComments] = useState<string[]>([]); 
    const [inputValue, setInputValue] = useState(''); 
    const [ShowComments , setShowComments ]=useState(false)

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();

   
        if (inputValue.trim()) { 
            setComments([...comments, inputValue]);
            setInputValue(''); 
            setShowComments(true)
        }
    };

    return (
      useEffect(() => {
        const localStore = localStorage.getItem("comments");
        if (localStore) {
            setComments(JSON.parse(localStore));
        }
    }, []),
    useEffect(() => {
      localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]),
        <div>
            <form onSubmit={handleComment}> {/* Use onSubmit instead of action */}
                <input
                    type="text"
                    placeholder="Write your comments here (max-w-3xl)"
                    value={inputValue} // Control the input value
                    onChange={(e) => setInputValue(e.target.value)} // Update local state
                    className="text-base px-2 font-normal outline-1 border p-1 outline-myPara ml-3"
                />
                <Button type='submit' className="ml-2" variant="default">Comment</Button>
            </form>
            <br />

            <span className='p-3 text-center w-[300px]'>
                <h4 className='flex justify-center  items-center cursor-pointer' onClick={()=>setShowComments(!ShowComments)} >Comments { ShowComments ? <IoIosArrowDown className='ml-1 text-lg '/>  : <IoIosArrowUp className='ml-1 text-lg '/>}    </h4>
                {ShowComments && comments.length !==0 && <ul className='border border-myHead px-2 py-3 max-w-[300px] w-full mx-auto'>
                    {comments.map((comment, index) => (
                        <li className='text-left' key={index}> {index+1} - {comment}</li> // Use a key for each list item
                    ))}
                </ul>}
                
            </span>
        </div>
    );
}

export default CommentBlog;
