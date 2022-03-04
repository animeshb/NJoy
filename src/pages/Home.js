import React from 'react'
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from "../components/Gallery";

const home = () => {
  return (
    <>
      <Carousel />
      <div>
        <hr></hr>
      </div>
      <Gallery />
    </>
  )
}

export default home