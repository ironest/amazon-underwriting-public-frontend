import React, { Component } from "react";
import DocumentBox from "./../DocumentBox";

class Childcare extends Component {
    render() {
        return (
            <>
            <div className="content">
                <h1>Childcare</h1>
                {/* <div className="document-box" >
                    <h3>Document Box</h3>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                </div> */}
                <DocumentBox />
                {/* <div className="text-div" > */}
                <div className="card-a">
                    <div className="text-div">
                    <p>
                    Amazon Underwriting offers a childcare insurance package developed by Gida Irving who has many years’ experience working in the childcare sector and the insurance industry. Utilising this in-depth knowledge, the Amazon Underwriting Childcare Insurance Package offers some unique and important coverage features truly tailored for the Childcare Sector.
                    </p>
                    {" "}
                    {" "}
                    <div>
                    <p>
                    The Childcare Insurance Package comprises:
                    </p>
                    <ol>
                        <li>
                        Combined Liability (Public & Products Liability and Professional Indemnity) ALL written on an occurrence basis so that clients never have to worry about run off cover.
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
                    </ol>
                    </div>
                    </div>
                    </div>
                    <div>
                        <h3>Target Childcare Operators</h3>
                        <ul>
                        <li>Kindergartens and Preschools</li>
                            <li>Long Day Care</li>
                            <li>Outside School Hours Care</li>
                            <li>Occasional and Vacation Care</li>
                            <li>Play Centre cafés </li>
                            <li>Property owners of childcare risks</li>
                            <li>Nannys</li>
                            <li>Babysitters</li>
                            <li>Stand-alone home based childcare</li>
                        </ul>
                    </div>
                    <div>
                    <h3>Underwriting Security</h3>
                        <p>Certain underwriters at Lloyd’s.</p>
                    </div>
                    <div>
                        <h3>Claims Management</h3>
                        <p>All claims are managed locally through award winning claims managers Gallagher Bassett.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Childcare;