import React, {Component} from "react";
import { Field, reduxForm} from "redux-form";

class ContactForm extends Component {
    render() {
        return (
            <form>
            <div>
                <label>Name</label>
                <div>
                    <Field name="name" type="text" component="input" />
                </div>
            </div>
            <div>
                <label>Subject</label>
                <div>
                    <Field name="subject" type="text" component="input" />
                </div>
            </div>
            <div>
                <label>Message</label>
                <div>
                    <Field name="message" type="text" component="input" />
                </div>
            </div>
            <input type="submit" value="Send Message" />
            </form>
        )
    }
}

export default connect(ContactForm);