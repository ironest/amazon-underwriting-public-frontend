import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <div className="carousel" >
  <Carousel dynamicHeight={true} infiniteLoop autoPlay swipeable={true} stopOnHover={true} emulateTouch >
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="" />
      <p className="legend">Legend 1</p>
      <link></link>
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
