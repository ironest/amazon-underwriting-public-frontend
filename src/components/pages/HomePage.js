import React, { Component } from "react";
import NavBar from "./../NavBar";
import Footer from "./../Footer"

class HomePage extends Component {
    render() {
        return (
            <div className="content" >
                <div className="bannerDiv" ></div>

                    <NavBar />

                <h1>HomePage</h1>
            <div className="carousel">Carousel to go here</div>
                <div className="textDiv" >
                    <p>	
                    Amazon Underwriting is a privately owned underwriting agency focussed on delivering insurance packages tailored for specific niche markets.
                    </p>
                    <p>
                    We are committed to providing high quality insurance products underpinned by “A” rated security together with high level customer service, supporting brokers to provide the insurance products and service their clients need.
                    </p>
                </div>
                
                <Footer />
                
            </div>
        );
    }
}

export default HomePage;