import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

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
          <li>
            <Skills/>
          </li>
          <li>
            <Contact/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
