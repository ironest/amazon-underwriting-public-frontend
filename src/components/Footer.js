import React, { Component } from "react";
import {Link} from "react-router-dom"
// import axios from "axios";

class Footer extends Component {
    // state = {
    //     address: "",
    //     email: "test@email.com",
    //     info: []
    // }

    // componentDidMount(){

    //     axios.get("http://localhost:3000/info")
    //     .then(response => {
    //         console.log(response)
    //         this.setState( {info: response.data.childcare_info} )
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    
    // }


    render() {

        // let {info} = this.state;
        // const {infoTest} = this.state;
        // console.log(info);
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