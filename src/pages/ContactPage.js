import React, { Component } from 'react';
import './ContactPage.css';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      errorMessage: '',
      successMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ errorMessage: '', successMessage: '' });

    if (!this.state.message || !this.state.email) {
      this.setState({ errorMessage: 'Please fill all the fields' });
      return;
    }

    const body = {
      "contactEmail": this.state.email,
      "message": this.state.message
    }

    fetch('https://us-central1-cryptic-smile-425910-d6.cloudfunctions.net/send_support_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (!response.ok) {
           return response.text().then(text => {
             throw new Error(text || 'Network response was not ok');
           });
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          successMessage: 'Email sent successfully!',
          errorMessage: '',
          message: '',
          email: ''
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.setState({
            errorMessage: `Failed to send email: ${error.message}. Please try again.`,
            successMessage: ''
        });
      });
  };

  render() {
    const { message, email, successMessage, errorMessage } = this.state;

    return (
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-heading">Feedback & Support</h1>
          <p className="contact-paragraph">
            Please fill a form below or send an email to{' '}
            <a href="mailto:lifeloopltd.development@gmail.com" className="contact-link">
            lifeloopltd.development@gmail.com
            </a>
          </p>

          <form onSubmit={this.handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your issue or feedback here"
                required
                className="contact-textarea"
                value={message}
                onChange={this.handleMessageChange}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-label">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="contact-input"
                value={email}
                onChange={this.handleEmailChange}
              />
              <p className="contact-note">Only used for replying to you.</p>
            </div>

            <button type="submit" className="contact-button">
              Send Request
            </button>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
