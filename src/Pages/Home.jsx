import React from 'react'
import Footer from '../components/Footer'
import MenuCard from '../components/MenuCard'
import MenuContainer from '../components/MenuContainer'
import WelcomeHome from '../components/WelcomeHome'
import { useState } from 'react';
import Loader from '../components/Loader'

function Home() {
    const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  return (
        <div>
          <WelcomeHome/>
      {isLoading ? (
        <div>
        <Loader/>
        </div>
       
       ) : ( 
        <div>
        
        
        <MenuContainer/>
        <MenuCard isLoading={isLoading}/>
        <Footer/>
        {/* <AboutUs/> */}
        </div>
       )}
      </div>

  )
}

export default Home