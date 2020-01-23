import React, { Component } from "react";
import axios from "axios";
// import { render } from "react-dom";

import Carousel from "./../Carousel";


class HomePage extends Component {

    state = {
        pages: []
    };

    componentDidMount(){

        axios.get("http://localhost:3000/pages")
        .then(response => {
            this.setState( {pages: response.data} )
        })
        .catch(error => {
            console.log(error);
        });
    
    }

    render() {

        const { pages } = this.state;

        return (
            <>
            <div className="content" >
                <h1>HomePage</h1>
            {/* <div className="carousel">Carousel to go here</div> */}
                <Carousel />
                <div className="textDiv" >
                    <p>	
                    Amazon Underwriting is a privately owned underwriting agency focussed on delivering insurance packages tailored for specific niche markets.
                    </p>
                    <p>
                    We are committed to providing high quality insurance products underpinned by “A” rated security together with high level customer service, supporting brokers to provide the insurance products and service their clients need.
                    </p>

                    <ul>
                        {
                            pages.map((page) => {
                                return(
                                    <li key={page.name}>{page.name}
                                        <ul>
                                        {
                                            page.sections.map((section) => {
                                            return (
                                                <li key={section.name}>{section.name}
                                                    <ul>
                                                    {
                                                        section.links.map((link) => {
                                                        return(
                                                            <li key={link.name}>
                                                                <a href={link.url}>{link.name}</a>
                                                            </li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

            </div>
            </>
        );
    }
}

export default HomePage;