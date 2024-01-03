import { useState } from 'react';
import '../App.css'
import BlogItem from './BlogItem'
import { useDispatch, useSelector } from 'react-redux'
import addicon from '../assets/add-icon.png'

export default function NoteContainer() {
  const blog = useSelector(state=> state.publicBlogs.blogs);
  console.log("selector",blog);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-left align-items-start">
         {/* <BlogItem title="Hello" content="" id="0" tags={["hello","world","world"]} date="dfhadjfadkahfdhdsfhdhfh" author="auth"/> */}
         {
          blog.map((i)=>{
            return <BlogItem title={i.title} content={i.content} tags={i.tags} id={i._id} date={i.date} ></BlogItem> 
          })
         }
      <img className='add-icon' src={addicon}></img>
    </div>
  )
}
