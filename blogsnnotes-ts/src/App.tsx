// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style/Signup.css'
import Navbar from './components/Navbar'
import NoteContainer from './components/BlogContainer'
import { Routes,Route } from 'react-router-dom'
import Blog from './components/Blog'
import Signup from './components/Signup'
import Login from './components/Login'
import { getPublicBlogs } from './features/blogSlice.js'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch=useDispatch();
  console.log("running getPublicBlogs")
  dispatch(getPublicBlogs());
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<NoteContainer></NoteContainer>} > </Route>
      <Route path='/blog' element={<Blog title="title" content='con' ></Blog>}> </Route>
      <Route path='/register' element={<Signup/>}> </Route>
      <Route path='/signin' element={<Login/>}> </Route>
    </Routes>
  </>
  )
}

export default App