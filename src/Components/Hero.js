import React from 'react';
import z2 from './z2.png';

function Hero() {
  return (
    <div className='flex items justify-start ml-96 mt-10 '>
      <div className='w-1/3 h-96' >
        <img src={z2} className=' w-60 h-88 mb-2' />
      </div>
       {/* <div className='w-1/3 h-96 text-cyan-100'>
         <h2 className='font-mono font-bold text-5xl text-neutral-50 text-center mt-32'>Hola</h2>
         <h2 className='font-mono font-bold text-5xl text-neutral-50 text-center
         transform -translate-x-full animate-slide-in-left delay-500 '>Amigo's</h2>
       </div> */}
       {/* I&apos;m */}
        <div className=" w-1/3 h-96 flex items-center justify-center">
          <h1 className="mb-2 font-mono text-4xl text-cyan-50 md:text-6xl">
          Hola Amigos it's <br className="block md:hidden" />
          <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-cyan-500">
           Kapil <span className="text-3xl md:text-5xl animate-pulse">👋</span>
          </span>
          <span
          className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-blue-950 w-full animate-type will-change`}"
          ></span>
          </span>
          </h1>
        </div>
    // </div>
//     <div className="bg-gray-100 w-full h-96 flex items-center justify-center">
//       <h1 className="mb-2 font-mono text-4xl text-black md:text-6xl">
//   hi, I&apos;m <br className="block md:hidden" />
//   <span className="relative">
//     <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
//       vanntile <span className="text-3xl md:text-5xl">👋</span>
//     </span>
//     <span
//       className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"
//     ></span>
//   </span>
// </h1>
//     </div>
  );
}

export default Hero;
