import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselOne from "./shared/CarouselOne";

// const onLinkClick = () => {
//   history.push("/accounts")
// }

export default () => (
    <div className="carousel" >
  <Carousel dynamicHeight={true} autoPlay swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
    <CarouselOne legendContent={<a href="/home" >link</a>}><div className="-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"/></CarouselOne>

    <div>
      {/* <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" /> */}
      <p className="legend">Legend 2</p>
      <p className="legend">other thing</p>

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

