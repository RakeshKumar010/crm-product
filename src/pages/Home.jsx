import React from 'react'
import NavBar from '../componets/global/NavBar'
import PhotoSlider from '../componets/home/PhotoSilder'
import Services from '../componets/home/Services'

const Home = () => {
  return (
    <div>
        <NavBar/>
       <PhotoSlider/>
       <Services/>
    </div>
  )
}

export default Home