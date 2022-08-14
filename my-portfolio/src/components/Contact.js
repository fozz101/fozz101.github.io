import React, { useState, useRef } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  require("dotenv").config();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name + " " + email,
      message: message,
    };
    console.log(process.env);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="test">
      <div className="contact-me-card row">
        <div className="col-lg-6 col-md-6 col-sm-12 left-contact px-2 py-2">
          <span className="get-in-touch mx-4 my-5"></span>
          <div className="py-5 d-flex justify-content-center">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_pzakgdti.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "250px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 left-contact my-auto">
          <form
            className="d-flex flex-column card-contact-right"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="input-group my-3 d-flex flex-column">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="input-groups"
              ></input>
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="input-groups"
              ></input>
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                className="input-groups"
              ></textarea>
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <input
                type="submit"
                className="btn btn-success"
                value="Send"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
