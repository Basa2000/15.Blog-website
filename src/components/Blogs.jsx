import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import './Blogs.css'
 

const Blogs = () => {

  const {posts,loading} = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[670px]  flex flex-col justify-center items-center py-8  mt-[50px] mb-[50px]'>
      {
        loading ? (<Spinner/>) : 
        (
          posts.length === 0 ? 
          (<div>No Post Found</div>) : 
          (posts.map( (post) => (
            <div className='border p-5 rounded-md my-2 shadow-md bg-slate-200' key={post.id}>
              <p className='font-bold text-lg mt-7'>{post.title}</p>
              <p className='text-[13px]'>
                by <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-[13px]'>Posted on <span>{post.date}</span></p>
              <p className='text-[14px] mt-[10px]'>{post.content}</p>

              <div className='underline text-[12px] mt-[8px]'>{post.tags.map( (tag, index) => {
                return <span className='text-blue-500 font-bold ' key={index}>{`#${tag}`}</span>
              })}</div>
            </div> 
          ) ))
        ) 
      }
    </div>
  )
}

export default Blogs