import React from "react";
import { Carousel } from "react-responsive-carousel";
// import Photo from "./../../public/childcare";

export default () => (
    <div className="carousel" >
  <Carousel dynamicHeight={false} infiniteLoop autoPlay={false} swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
    {/* <div >
      <img style={{backgroundImage: "url(/public/childcare)"}} />
    </div> */}
    
    <div className="image-test" >
      <img src={"/childcare.jfif"} alt="" />
      <div className="text-block" >
        <h2>Example heading</h2>
        <p>example text</p>
        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" >Link Example</a>
      </div>
      {/* <p style={{position: "fixed"}}>Childcare Newsletter</p> */}
      {/* <img src={process.env.PUBLIC_URL + '/childcare.jfif'} alt="" />  */}
    </div>
    <div style={{backgroundColor:"blue"}}>
      <div style={{color:"blue"}}>Hello</div>
      <p className="legend">Custom Legend</p>
    </div>
    <div>

      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
 </div>
);
