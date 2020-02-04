import React, { Component } from "react";
import DocumentBox from "./../DocumentBox";


class Childcare extends Component {


    render() {
        const info = this.props.info;
        return (
            <>
             <DocumentBox pageSelection="Childcare" />
                <div className="row" >
                    <img style={{width: "250px", position: "relative", marginTop: "50px", left: "1rem"}} src={"/childcare.jfif"} alt="" />
                    <div className="container" >
                        <h1>Childcare</h1>
                        <div className="">
                        <p>
                            Amazon Underwriting offers a childcare insurance package developed by Gida Irving
                            who has many years’ experience working in the childcare sector and the insurance industry.
                        </p>
                        <p>
                            Utilising this in-depth knowledge, the Amazon Underwriting Childcare Insurance Package
                            offers some unique and important coverage features truly tailored for the Childcare Sector.
                        </p>
                        </div>
                    </div>              
                </div>

                <div className="row" >
                        <img style={{width: "250px", position: "relative", marginTop: "1rem", right: "1rem"}} src="/new-home.jpg" alt="" />
                    <div className="container" >
                        <h2>Insurance Package</h2>
                        <p>The Childcare Insurance Package comprises:</p>
                        <ul>
                            <li>
                                Combined Liability (Public &amp; Products Liability and Professional Indemnity)
                                ALL written on an occurrence basis so that clients never have to worry about run off cover.
                            </li>
                            <li>
                                Personal Accident for Children and/or Volunteers.
                            </li>
                            <li>
                                Property
                            </li>
                            <li>
                                Management Liability
                            </li>
                        </ul>
                    </div>              
                </div>

                <div className="row" >
                    <div className="container" >
                        <h2>Target Childcare Operators</h2>
                        <ul>
                            <li>Kindergartens and Preschools</li>
                            <li>Long Day Care</li>
                            <li>Outside School Hours Care</li>
                            <li>Occasional and Vacation Care</li>
                            <li>Play Centre cafés</li>
                            <li>Property owners of childcare risks</li>
                            <li>Nannys</li>
                            <li>Babysitters</li>
                            <li>Stand-alone home based childcare</li>
                        </ul>
                    </div>              
                </div>

                <div className="row">
                    <div className="container">
                        <div className="cont2">
                            <div className="flex-left">
                                <h2>Underwriting Security</h2>
                                <p>Certain underwriters at Lloyd’s.</p>
                            </div>
                            <div className="flex-right">
                                <h2>Claims Management</h2>
                                <p>All claims are managed locally.</p>
                            </div>
                    
                        </div>
                    </div>
                </div>

                <div className="info-row" >
                <div className="container" >
                    <h2>For more information</h2>
                    <p>For more information contact us today:</p>
                    <p>E: { info && info.email} </p>
                    <p>T: {info && info.tel} </p>
                </div>              
            </div>
            </>
        );
    }
}

export default Childcare;