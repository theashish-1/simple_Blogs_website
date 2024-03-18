import React, { useContext } from 'react'
import { AppContex } from '../contex/AppContex'
import Spinner  from './Spinner'
import "./blogs.css"

const Blogs = () => {
    //data consuming from Appcontex
    const {posts,loading} = useContext(AppContex)
    // console.log("Printing inside blogs component")
    // console.log(posts)
    

  return (
    <div className='w-11/12 h-screen max-w-[650px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
      {
        loading ? 
        (<Spinner/>) : 

        (
             posts.length === 0 ? 
            (<div>
                <p>No post found</p>
            </div>) : 
            (posts.map( (post)=> (
                <div key={post.id}>
                    <p className='font-bold text-lg'>{post.title}</p>
                    <p className='text-sm mt-[4px]'>
                        By<span className='italic'>{post.author}</span> On <span className='underline font-bold'>{post.category}</span>
                    </p>
                    <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    <div className='flex gap-x-3'>
                        {post.tags.map( (tag ,tagIndex)=>{
                            return <span key={tagIndex} className='text-blue-700 underline font-bold text-sm mt-[5px]'>{`#${tag}`}</span>
                        })}
                    </div>
                </div>

            )))
        )
      }
    </div>
  )
}

export default Blogs



