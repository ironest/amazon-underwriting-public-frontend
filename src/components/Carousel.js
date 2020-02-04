import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <div className="carousel" >
  <Carousel dynamicHeight={false} infiniteLoop autoPlay={false} swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
    
    <div className="image-fix" >
      <img src={"/childcare.jfif"} alt="" />
      <div className="text-block" >
        <h2>Example heading</h2>
        <p>example text</p>
        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" >Link Example</a>
      </div>
    </div>
    <div className="image-fix">
      <img src={"/new-home.jpg"} alt="home-based" />
      <div className="text-blocl" >
      <h2>Home-based Businesses</h2>
      <p>example text</p>
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Link e.g.</a>
      </div>
    </div>
    <div className="image-fix">
      <img src={"/castle (2).jfif"} alt="home-based" />
      <div className="text-block">
      <h2>Is your castle protected?</h2>
      <p> Underinsurance is already a real problem for regular domestic householders let alone if they operate a business from home! Underinsurance could become no insurance at all.</p>
      <a href="https://www.allanmanning.com/isnt-your-home-worth-good-insurance/" target="_blank" rel="noopener noreferrer">Link e.g.</a>
      </div>
    </div>

  </Carousel>
 </div>
);
