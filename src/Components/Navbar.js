import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
// import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll';
import { Route , Routes } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex items justify-center space-x-4 h-full">
          <h1 className='text-sm md:text-3xl font-bold text-cyan-50 mr-56'>Full Stack Developer</h1>
          <li>
            <Home/>
          </li>
          <li>
            <About/>
          </li>
          <Link >
            <Skills/>
          </Link>
          <Link to = 'Contpage'>
            <Contact/>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;