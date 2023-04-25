import React from 'react'
import exp from './exp.png'
import mongo from './mongo.png'
import nodee from './nodee.png'
import reAct from './reAct.png'
import { useState , useEffect } from "react";
function Skillstab() {
  return (
    <div className='bg-blue-950 flex justify-center'>
        <div>
            <img src = {exp} className=' h-40 mr-60'/>
            <img src={mongo} className='h-40 ml-60'/>
            <img src= {nodee} className='h-40 mr-60'/>
            <img src={reAct} className='h-40 ml-60' />
        </div>
    </div>
  );
}
export default Skillstab
