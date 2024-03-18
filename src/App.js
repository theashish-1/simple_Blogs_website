import React, { useContext, useEffect } from 'react'
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { AppContex } from './contex/AppContex'
import "./App.css"


const App = () => {


  const {fetchBlogPost} = useContext(AppContex)
  useEffect ( ()=>{
    fetchBlogPost();
  },[])

  return (
    
    <div className='w-full h-full flex flex-col gapy-1 justify-center items-center'>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>

    </div>
  )
}

export default App  