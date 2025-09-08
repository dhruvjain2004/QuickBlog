import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import React from 'react'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App