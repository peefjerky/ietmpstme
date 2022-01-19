import React, { Component } from "react";
import "../App.css";
import "../css/contact.scss";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let isSuccessful = true;
    const { name } = this.state;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I will contact you soon!`,
        submitMessageTextColor: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessageTextColor, submitMessage } = this.state;

    return (
      <div className="container-fluid my-3" id="contactContainer">
        <h1 className="text-center py-5">Thank you for your interest!</h1>
        <div className="row justify-content-center">
          <div className="col-11 col-md-5 col-lg-5">
            <form onSubmit={this.onSubmit} className="px-1">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="description">
                  Tell us about what you want to know *
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  placeholder="Put your queries here"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button type="submit" className="float-start my-3" id="btn">
                Let us know!
              </button>
            </form>
          </div>
        </div>
        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div>
      </div>
    );
  }
}
export default Contact;
