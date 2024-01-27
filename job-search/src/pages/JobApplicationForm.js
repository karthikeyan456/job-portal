import React, { Component } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom'

class JobApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    // You can send the data to an API or perform any other actions
    console.log(this.state);
  }

  render() {
    return (
      <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="login-container">
        <h2>Job Application Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />

          <label htmlFor="resume">Resume (PDF or Word):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={this.state.coverLetter}
            onChange={this.handleInputChange}
            rows="5"
          />
          <Link to="/">
          <button type="submit">
          {/*<div class="alert info">
          <span class="closebtn">&times;</span>  
          <strong>Info!</strong> Indicates a neutral informative change or action.
          </div>*/}
          Submit</button>
          </Link>
        </form>
      </div>
      </div>
    );
  }
}

export default JobApplicationForm;

