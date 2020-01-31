import React, {Component} from "react";


class ContactForm extends Component {
    state = {
        name: "",
        subject: "",
        message: ""
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const {name, subject, message} = event.target;
        this.setState({name, subject, message});
    }

    render() {
        // const {name, subject, message} = this.state;

        return (
            <form  onSubmit={this.onFormSubmit} >
            <div className="contact-container">
            <div className="first-div">
                <label>Name</label>
                <input name="name" type="text" />
            </div>
            <div className="first-div" >
                <label>Subject</label>
                <input name="subject" type="text" />
            </div>
            <div className="third-div" >
                <label>Message</label>
                <textarea name="message" type="text" size="100" />
            </div>
            <input type="submit" value="Submit" />
            </div>
            </form>
        )
    }
}

export default ContactForm;