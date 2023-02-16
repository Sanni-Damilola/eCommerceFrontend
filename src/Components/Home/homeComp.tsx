import React from 'react'
import Arrivals from './Arrivals'
import Carousel from './carousel1'
import Discover from './discover'
import Hero from './hero'
import Start from './Start'


const homeComp = () => {
  return (
      <>
    
        <Hero />
        <Carousel />
        <Arrivals />
        <Discover />
        <Start />

    </>
  )
}

export default homeComp