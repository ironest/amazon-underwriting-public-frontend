import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Childcare from "./pages/Childcare";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../styles/App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <div className="bannerDiv" ></div>
                   <NavBar />
                    {/* <Switch> */}
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/Childcare" component={Childcare} />
                    {/* </Switch> */}
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;