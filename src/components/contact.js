import React, { Component } from "react";
import "../App.css";
import "../css/contact.scss";
import { motion } from "framer-motion/dist/framer-motion";

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
        submitMessage: `Thank you ${name}. We will contact you soon!`,
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
      <motion.div
        className="container-fluid my-3"
        id="contactContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center py-5">Thank you for your interest!</h1>
        <div className="row justify-content-center">
          <div className="col-11 col-md-5 col-lg-5">
            <form
              className="px-1"
              action="https://getform.io/f/90c8b4cf-7f67-4e95-87ee-ec0f747ab56a"
              method="POST"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                  required
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
                  required
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
      </motion.div>
    );
  }
}
export default Contact;
