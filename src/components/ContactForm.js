import React, {Component} from "react";
import axios from "axios";


class ContactForm extends Component {
    state = {
        email: "",
        subject: "",
        message: "",
        sent: false,
        buttonText: "Send Message",
        flashMsg: null
    }

    onFormSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending',
            flashMsg: null
        })
      
        let data = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        
        axios.post(`${process.env.REACT_APP_BASEURL}/contact`, data)
        .then( res => {
            console.log(res);
            this.setState({ sent: true, flashMsg: res.data.message }, this.resetForm("Message Sent"))
        })
        .catch( (err) => {
          console.log('Message not sent')
          this.setState({flashMsg: err.response.data.error}, this.resetForm("Error Occurred"))
        })
      }
    resetForm = (text) => {
        this.setState({
            name: '',
            subject: '',
            email: '',
            buttonText: text
        })
    }

    render() {
        // const {name, subject, message} = this.state;

        return (
            <>
            <form onSubmit={ (e) => this.onFormSubmit(e)} >
            <h1>Contact Us</h1>
            <div className="contact-container">
            <div >
                <label>Email</label>
                <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
            </div>
            <div >
                <label>Subject</label>
                <input onChange={e => this.setState({ subject: e.target.value})} name="subject" className="subject-name" type="text" placeholder="What would you like to enquire about?" value={this.state.subject}/>
            </div>
            <div  >
                <label>Message</label>
                <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
            </div>
            <div>
            <button type="submit" >{ this.state.buttonText }</button>
            <p>{this.state.flashMsg}</p>
            </div>
            </div>
            </form>

            <div>
                
                <p>For more information:</p>
            </div>
            </>
        )
    }
}

export default ContactForm;