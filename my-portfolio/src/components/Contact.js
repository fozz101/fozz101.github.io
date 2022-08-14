import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="contact-me-card row">
        <div className="col-lg-6 col-md-6 col-sm-12 left-contact px-2 py-2">
          <span className="get-in-touch mx-4 my-5"></span>
          <div className="py-5 d-flex justify-content-center">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_cbgttmia.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 left-contact my-auto">
          <div className="d-flex flex-column card-contact-right">
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
                type="text"
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
              <button className="btn btn-success">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
