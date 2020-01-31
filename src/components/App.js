import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Childcare from "./pages/Childcare";
import ContactPage from "./pages/ContactPage";
import UploadTest from "./pages/UploadTest";
import "normalize.css";
import "./../styles/App.scss";
import NavBar from "./NavBar";
import Footer from "./Footer"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <div className="banner-div"></div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/childcare" component={Childcare} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/uploadtest" component={UploadTest} />
                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;