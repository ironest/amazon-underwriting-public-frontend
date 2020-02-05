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
                <Link className="right" to="/contact">
                    Contact Us
                </Link>
            </div>
            </>
        )
    }
}

export default NavBar;