import React, { useState } from 'react'

import basketball from '../../image/basketball.jpg';
import cricket from '../../image/cricket.jpg';
import football from '../../image/football.jpg';
import Volleyball from '../../image/Volleyball.jpg';
import Button from '../Button';
import HomePage from './HomePage';
import Booking from './Booking';
function SportsCards() {
   const [BookNow,setBookNow]=useState(true);
   const [isBookNow,setIsBookNow]=useState(false);
    const sport=[
        {
            img:basketball,
            tital:"Basketball",
        },
        {
            img:cricket,
            tital:"Cricket" ,

        },
        {
            img:football,
            tital:"Football", 

        },
        {
            img:Volleyball,
            tital:"Volleyball" ,

        }
    ]
  
   
    const booknow =()=> {
     setIsBookNow(true);
    }
console.log("Book-->",isBookNow)
  return (
    <div className='flex flex-row w-20% mt-12'>
      {
        sport.map(card=>(
            <div className='flex flex-col mx-6 bg-white w-full h-100% rounded-lg' >
                <img className='flex justify-center w-80 h-80 pl-4 pt-6' src={card.img} alt='images'>
                
                </img>
                <p className='flex justify-center mt-4'>{card.tital}</p>
                {/* <button className='flex  w-28 h-10  bg-neutral-600 text-white pl-4 pt-1.5 rounded-lg ' style={{marginLeft:'35%', marginTop:'20px', marginBottom:'40px',}}>Book Now</button> */}
                <Button label="Book Now" onClick={booknow} book={BookNow}></Button>
                
            </div>
        ))
      }
{isBookNow && <Booking></Booking>}

    </div>
  )
}

export default SportsCards;