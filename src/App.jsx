import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Article2 from './components/Article2'
import Article1 from './components/Article1'
import Article3 from './components/Article3'
import Blog from './components/Blog'

import Footer from './components/Footer'
function App() {


  return (
    <>
   



    <Router>
   
    <Navbar/>
      <Routes>
   
        <Route path="/" element={<Blog />} />
       
        <Route path="/Article1" element={<Article1 />} />
        <Route path="/Article2" element={<Article2 />} />
        <Route  path="/Article3" element={<Article3 />} />
        <Route path="/Blog" element={<Blog />} />
        </Routes>  
        
        <Footer/>
   
        </Router>


   
    </>
  )
}

export default App

// npm install react-router-dom