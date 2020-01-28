import React from "react";
import { Carousel } from "react-responsive-carousel";
// import {CarouselOne, CarouselTwo} from "./shared";
import StyledCarouselOne from "./shared/CarouselOne";
import CarouselTwo from "./shared/CarouselTwo";

// const onLinkClick = () => {
//   history.push("/accounts")
// }

export default () => (
    <div className="carousel" >
    <Carousel dynamicHeight={true} infiniteLoop={false} autoPlay={false} swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
    
    <StyledCarouselOne legendContent={<a href="/home" >link</a>}></StyledCarouselOne>
    <CarouselTwo ></CarouselTwo>

    <div>
      {/* <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" /> */}
      <h1>Does this work?</h1>
      <p className="legend">other thing</p>

      <a href="http://www.google.com" rel="noopener noreferrer" target="_blank"> link</a>
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

