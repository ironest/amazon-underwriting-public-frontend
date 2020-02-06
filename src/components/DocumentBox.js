import React, { Component} from "react";
import axios from "axios";


class DocumentBox extends Component {
state = {
    pages: []
};


componentDidMount(){

    axios.get(`${process.env.REACT_APP_BASEURL}/pages`)
    .then(response => {
        this.setState( {pages: response.data} )
    })
    .catch(error => {
        console.log(error);
    });

}


    render() {

        let {pages} = this.state;
        const {pageSelection} = this.props;

        // console.log(pageSelection);
        

        pages = pages.filter((item) => {
            return (item.name === pageSelection || item.name === "Common" )
        });

        return(
            <div className="document-box" >
                    <h3>Document Box</h3>
                    
                    {
                            pages.map((page) => {
                                return(
                                    
                                    // <li key={page.name}>{page.name}
                                        <ul className="dot-point-test">
                                        {
                                            page.sections.map((section) => {
                                            return (
                                                <li key={section.name}>{section.name}
                                                    <ul>
                                                    {
                                                        section.links.map((link) => {
                                                        return(
                                                            <li key={link.name}>
                                                                <a href={link.url}>{link.name}</a>
                                                            </li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    // </li>
                                )
                            })
                        }
                        {/* <Link src="https://www.amazonunderwriting.com.au/PDFs/DocDown/ChildcareBrochure_BD_17052019_V2.pdf?p=1579830914425" >Childcare Brouchure</Link>
                        <li><Link>Google.com</Link></li> */}
                    
                </div>
        )
    }
}

export default DocumentBox;