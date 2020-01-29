import React, {Component} from "react";
import DocumentBox from "../DocumentBox";

class PersonalAccident extends Component {
    render() {
        console.log(this.props.info);
        const info = this.props.info;
        return (
            <>
                <DocumentBox pageSelection="HomeBiz" />
                <div className="row" >
                    <div className="container">
                        <h2>Personal Accident and Sickness</h2>
                        <div className="test-fix">
                            <p>Amazon Underwriting offers a range of Personal Accident and Sickness products, which can be tailored specifically for your client. All managed by Toni Watson, who has an extensive background in the insurance industry working in both broking and underwriting, and over 17 years in the accident & health market.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <div>
                        <h2>Products</h2>
                        <p><strong>INDIVIDUAL PERSONAL ACCIDENT AND/OR SICKNESS</strong></p>
                        <p>Protection tailored for individuals, our policy is designed to cover persons working in a variety of occupations for death & capital benefits, weekly accident and/or sickness benefits and business expenses. Clients can choose to cover 85% or 100% of their income and for new start-up business’, an agreed value policy up to $1,000 can be provided.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <div>
                        <p><strong>GROUP PERSONAL ACCIDENT AND/OR SICKNESS</strong></p>
                        <p>This policy is designed to cover groups of people with a common interest. This interest could be through their occupation or a shared pastime. Like our individual cover above, clients can choose to cover death & capital benefits, weekly accident and/or sickness benefits up to 85% of their income.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <div>
                        <p><strong>VOLUNTARY WORKERS</strong></p>
                        <p>Providing unpaid workers, club directors and committee members with Personal Accident insurance while they undertake voluntary work for local clubs, churches or sporting organisations. Cover is available for working bees, meetings, fundraisers etc.</p>
                        <p>As voluntary workers are ineligible for Workers' Compensation, it is vitally important to ensure they are protected against financial loss should an injury occur.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <div>
                        <p><strong>JOURNEY COVER</strong></p>
                        <p>This policy is designed to replace cover that was previously provided under your states’ Workers' Compensation policy, covering you on your usual journey to and from work.</p>
                        <p>Cover includes death & capital benefits and weekly accident benefits, with an option to include cover for meal breaks.</p>
                        <p>Currently, the following states do not provide cover for your journey to and from work:</p>
                        <ul>
                            <li>New South Wales</li>
                            <li>Vicotira</li>
                            <li>Tasmania</li>
                            <li>South Australia</li>
                            <li>Western Australia</li>
                            <li>Northern Territory</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                        <div>
                        <p><strong>DIRECTORS PERSONAL ACCIDENT AND/OR SICKNESS</strong></p>
                        <p>Designed to cover Directors of both Public and Private Companies where they are able to opt out, or be excluded from, cover under their state's Workers' Compensation policy. </p>
                        <p>Cover includes death & capital benefits, weekly accident and sickness benefits and medical expenses.</p>
                        </div>
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

export default PersonalAccident;