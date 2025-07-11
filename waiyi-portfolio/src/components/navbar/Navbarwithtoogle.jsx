import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (  
      <div className='container'>
        <nav>
          <div className="logo">
            <h2 class="font-bold">WaiYiMonSoe</h2>
          </div>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolios</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="icon" onClick={toogleMenu}>
            <FaBars />
          </div>
        </nav>
    </div>
  )
}

export default Navbar