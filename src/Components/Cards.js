import React from 'react'
import Buttons from './Buttons'
function Cards(props) {
  return (
    <div className='flex justify-center w-full h-64 '>
        <div className=' bg-blue-950 text-cyan-100 w-1/2 h-40 text-center mt-14 border-2 
        border-cyan-50
        rounded-md
        '>
            <h3 className='text-cyan-100 font-bold'>{props.projectname}</h3>
            <p className='text-cyan-50'>{props.aboutproject}</p>
            <Buttons/>
        </div>
    </div>
  )
}

export default Cards
