// import { useState } from 'react'
import './App.css'

import Navbar from "./components/navbar/navbar"
import Home from './components/home/home'
import About from './components/about/about'
import WhatIam from './components/about/whatiam'
import Experience from './components/about/experience'
import Domain from './components/about/domain'
import Portfolio from './components/projects/projects'
import Contact from './components/footer/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <WhatIam/>
      <Experience/>
      <Domain/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
