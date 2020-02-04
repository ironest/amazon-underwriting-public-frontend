import React, { Component } from "react";
import {Link} from "react-router-dom"

class Footer extends Component {

    render() {
        console.log(this.props.info);
        const info = this.props.info;

        return(

            <>
            <footer className="footer" >
                <div className="to-left" >
                    <Link to="/" >This is a link to the homepage</Link>
                    <p>{info && info.address}</p>
                    <p>AFSL { info && info.AFSL } | ABN { info && info.ABN } </p>        
                </div>
                <div className="to-right" >
                    <p>Copyright © 2016 Amazon Underwriting</p>
                    <p>Pty Ltd</p>
                    
                </div>
                
            </footer>
            </>
        )
    }
}

export default Footer;