import React, { Component } from "react";
// import axios from "axios";

import NewsCarousel from "./../Carousel";

class HomePage extends Component {
    render() {
        return (
            <>
            <div className="content" >
            
                <div className="row" >
                    <div className="container" >
                        {/* <h1>Home Page</h1> */}
                        <NewsCarousel />
                            <p>	
                                Amazon Underwriting is a privately owned underwriting agency focussed on delivering insurance packages tailored for specific niche markets.
                            </p>
                            <p>
                                We are committed to providing high quality insurance products underpinned by “A” rated security together with high level customer service, supporting brokers to provide the insurance products and service their clients need.
                            </p>
                    </div>              
                </div>
                </div>
            </>
        );
    }
}

export default HomePage;