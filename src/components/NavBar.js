import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className="nav-div" >
                <a href="/">
                    HomePage
                </a>
                <Link to="/Childcare">
                    <button>Childcare</button>
                </Link>
            </div>
        )
    }
}

export default NavBar;