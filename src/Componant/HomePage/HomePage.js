import React from 'react'
import ball from '../../image/ball.png';
import SportsCards from './SportsCards';
import Button from '../Button';



function HomePage() {

  function imageClick() {
    <HomePage></HomePage>
  }
  return (
    <div>
        
       <header className=' sticky flex flex-row bg-lime-300 mt-6 mx-4 w-98% rounded-lg h-20'>
        <h6 className='pt-6 pl-10 font-bold'>Play Zone</h6>
       <img style={{paddingLeft:"85%", height:'80%', paddingTop:'14px'}} src={ball} alt='ball' onClick={() => imageClick()}></img>
       </header>
        <SportsCards></SportsCards>
        <Button label="Check your Booking">

        </Button>
      
    </div>
  )
}

export default HomePage;