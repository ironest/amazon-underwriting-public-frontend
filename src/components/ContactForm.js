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
            <form onSubmit={this.onFormSubmit} >
            <div>
                <label>Name</label>
                <input name="name" type="text" />
            </div>
            <div>
                <label>Subject</label>
                <input name="subject" type="text" />
            </div>
            <div>
                <label>Message</label>
                <input name="message" type="text" />
            </div>
            <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ContactForm;