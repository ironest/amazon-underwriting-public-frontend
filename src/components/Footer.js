import React, { Component } from "react";
import {Link} from "react-router-dom"
// import HomePage from "./pages/HomePage";
// import axios from "axios";

class Footer extends Component {
    state = {
        address: "",
        email: "test@email.com",
        info: []
    }

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
        // // const {infoTest} = this.state;
        // console.log(info);
        console.log(this.props.info);

        return(

            
            <footer className="footer" >
                <div className="to-left" >
                <Link to="/" >This is a link to the homepage</Link>
                <p>52 Chisholm Street, Darlinghurst NSW 2010</p>
                <p>AFSL 482029  |  ABN 17 605 879 507</p>
        
                </div>
                {/* <div>
                    <p>{this.state.email}</p>
                    <p>{this.state.info.email} </p>
                </div> */}
                <div className="to-right" >
                    <p>Copyright © 2016 Amazon Underwriting</p>
                    <p>Pty Ltd</p>
                    
                </div>
                
            </footer>
        )
    }
}

export default Footer;