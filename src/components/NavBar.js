import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className="nav-div" >
                <div className="left">
                <Link to="/">
                    <button>HomePage</button>
                </Link>
                <Link to="/childcare">
                    <button>Childcare</button>
                </Link>
                </div>
                <div className="right">
                <Link to="/contact" >
                    <button >Contact Us</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;