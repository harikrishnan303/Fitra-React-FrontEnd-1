import React from 'react'
import CircularStatic from './ProgressTracker';
import Rough from './rough';
import Search from './Search';
import './Tracker.css'

document.body.style.backgroundImage = "";
document.body.style.backgroundColor = "rgb(37, 39, 51)";
export default function Tracker() {
  return (
    <>
    <div className='Tr'>
        Calorie Tracker
    </div>
    <div className='search'>
        <Search/>
  </div>
    <span className='Circle'> 
    <>   <CircularStatic></CircularStatic>
    </>
    </span>

    <div className='avg'>
     Set Target Calories:
     <input type="text" size="4" ></input>
     </div>
     
    </>
  )
}
