import React, {Component} from "react";
import DocumentBox from "./../DocumentBox";

class HomeBasedBusinesses extends Component {
    render() {
        console.log(this.props.info);
        const info = this.props.info;
        return (
            <>
                <DocumentBox pageSelection="HomeBiz" />
                <div className="row" >
                    <div className="container">
                        <h2>Home Based Businesses</h2>
                        <div className="test-fix">
                            <p>HomeBiz Insurance provides a one stop-shop public and products liability, property and personal accident insurance solution for clients that operate a business from the home they live in.</p>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="container">
                        
                        <div className="test-fix">
                            <p><strong>The HomeBiz Public and Products Liability provides cover for:</strong></p>
                            <ul>
                                <li>Choice of limits: $10,000,000 or $20,000,000</li>
                                <li>Worldwide Cover for exports except North America or Canada  - these can be considerd by referral.</li>
                            </ul>
                            <p>The HomeBiz Property Insurance policy replaces the clients Home and/or Contents insurance policy. Very important when domestic insurers may not continue to provide this cover if a business (other than just an office) operates from the home.</p>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="container">
                        
                        
                            <p><strong>In addition the policy covers:</strong></p>
                            <ul>
                                <li>Business Stock and/or Merchandise</li>
                                <li>Business Equipment</li>
                                <li>Business Interruption</li>
                                <li>Machinery Breakdown (option)</li>
                                <li>Domestic Legal Liability</li>
                                <li>Individual Personal Accident and Sickness</li>
                                
                                    <p>Important if they rely on their business income and were unable to work due to an accident and/or sickness.</p>
                                    <p>Cover</p>
                                    <ul>
                                        <li>Weekly benefits for temporary disablement due to accident, injury or sickness</li>
                                        <li>Lump sum benefits due to death or permanent disability from accidental injury</li>
                                    </ul>
                                </ul>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <h2>Target Markets</h2>
                        <ul>
                            <li>Cottage Industry – clients who make products to sell or buy products to sell</li>
                            <li>Tuition – clients that teach something at home and/or away from home</li>
                            <li>Service – clients that provide a service eg hairdresser, graphic designer etc</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <h2>Underwriting Security</h2>
                        <p>Certain underwriters at Lloyd’s.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <h2>Claims Management</h2>
                        <p>All claims are managed locally.</p>
                    </div>
                </div>
                    
                <div className="info-row" >
                <div className="container" >
                    <h2>For more information</h2>
                    <p>For more information contact us today:</p>
                    <p>T: (02) 9357 1798</p>

                    <p>E: gida@amazonunderwriting.com.au</p>
                    <p>{ info && info.email} </p>
                    <p>{info && info.tel} </p>
                </div>              
            </div>
                
            </>
        )
    }
}

export default HomeBasedBusinesses;