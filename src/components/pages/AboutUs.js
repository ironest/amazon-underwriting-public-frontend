import React, { Component } from "react";
// import axios from "axios";


class AboutUs extends Component {
    render() {
        return (
            <>
            <div className="content" >
            
                <div className="row" >
                    <div className="container" >
                        <div>
                        <img style={{width: "250px", float: "right"}} src="./about-us_logo.jfif" alt="" />
                        </div>
                        <h1>About Us</h1>
                        <div>
                            <p>	
                            Gida Irving founded Amazon Underwriting Pty Ltd in 2016 and plays a crucial 'hands on' role in the company's operations. Gida has extensive insurance experience which can be traced back to 1999 when she first entered the industry. It has long been Gida's dream to be the master of her own destiny and to bring more girl power to the insurance industry.
                            </p>
                            </div>
                    </div>              
                </div>

                            <div className="row">
                            <div className="container" >
                                <h2>Our Brand</h2>
                            <p>
                            Amazon Underwriting's name is inspired by the 'Women Warriors' of Greek mythology - strong and brave, the Amazons were a force to be reckoned with.
                            </p>
                            <p>
                            Our symbol - the bow and arrow - not only represents PROTECTION, but also possessing the STRENGTH to be launched forward, through life's struggles, to something AMAZing
                            </p>
                            </div>
                            </div>
                </div>
            </>
        );
    }
}

export default AboutUs;