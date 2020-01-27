import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <div className="carousel" >
  <Carousel dynamicHeight={true} infiniteLoop autoPlay swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
    <div style={{backgroundColor:"blue"}}>
      {/* <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="" /> */}
      {/* <p className="legend">Legend 1</p> */}
      <div style={{color:"blue"}}>Hello</div>
      <p className="legend">Custom Legend</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt="" />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
  </div>
);
