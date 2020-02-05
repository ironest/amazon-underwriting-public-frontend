import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <>
            <div className="nav-div" >
                <Link to="/">
                    HomePage
                </Link>
                <Link to="/Childcare">
                    Childcare
                </Link>
                <Link to="/homebasedbusinesses">
                    Home-based Businesses
                </Link>
                <Link to="/personalaccident">
                    Personal Accident
                </Link>
                <div className="right" >
                <Link to="/contact">
                    Contact Us
                </Link>
                <Link to="/aboutus">
                    About Us
                </Link>
                </div>
            </div>
            </>
        )
    }
}

export default NavBar;