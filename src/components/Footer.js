import React, { Component } from "react";
import {Link} from "react-router-dom"
import HomePage from "./pages/HomePage";

class Footer extends Component {
    render() {
        return(
            <footer className="footer" >
                <div className="to-left" >
                <Link to="/">This is a link to the homepage</Link>
                <p>52 Chisholm Street, Darlinghurst NSW 2010</p>
                <p>AFSL 482029  |  ABN 17 605 879 507</p>
                </div>
                <div className="to-right" >
                    <p>Copyright © 2016 Amazon Underwriting</p>
                    <p>Pty Ltd</p>
                </div>
            </footer>
        )
    }
}

export default Footer;