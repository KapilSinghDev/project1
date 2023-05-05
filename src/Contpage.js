import React from 'react';
import { Link } from 'react-router-dom';
function Contpage() {
  return (
    <div className=''>
        <h3 className='text-cyan-50 text-2xl ml-96'>Lets work together</h3>
        <div className='w-auto h-auto'>
            <form>
                <label className='text-cyan-50 ml-96 '>Your name</label>
                <input className = "ml-6 mt-10 bg-blue-200" type='text' placeholder='enter your name here'></input>
                <br/>
                <label className='text-cyan-50 ml-96'>Your email</label>
                <input className = "ml-6 mt-10 bg-blue-200" type='text' placeholder='enter your email here'></input>
                <br/>
                <label className='text-cyan-50 ml-96'>Your mob no</label>
                <input className='text-black ml-3 mt-10 bg-blue-200' placeholder='+91-'></input>
                <br/>
                <p className='ml-96 text-cyan-50 mt-6'><u>Additional info : </u></p>
                <textarea className='text-blue-950 ml-96  rounded-md mt-2 bg-blue-200' 
                placeholder='type your message here ...' cols="70" rows = "8"></textarea>
            </form>
        </div>
        <div className=" flex justify-center border-2 border-white w-36 h-8 text-center ml-96 mt-12
    rounded-md hover:bg-cyan-50 transition delay 700">
      <Link className='text-cyan-50 hover:text-blue-950' href='#'>send message</Link>
    </div>
    </div>
  )
}

export default Contpage
