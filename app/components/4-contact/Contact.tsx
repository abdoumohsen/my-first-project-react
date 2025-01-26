import React from "react";
import "./contact.css";
import Lottie from 'react-lottie';

import animationData from '../../animation/gmail-animation.json';
import sucess from '../../animation/sucess.json';
import { useForm, ValidationError } from '@formspree/react';
const sucessdate = {
  loop: false,
  autoplay: true,
  animationData: sucess,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }};
export default function Contact() {

  const [state, handleSubmit] = useForm("mjkgvbqj");
  if (state.succeeded) {
      return <>
     <div className="sucsessicon">
     <span><Lottie
     
	    options={sucessdate}
        height={50}
        width={50}

      />  </span>
      <span>Thanks for joining!</span>
     </div>
      </>
  }
  const defaultOptions = {
    
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }};
  return (
    <>
      <section >
        <div>
          <div className="title">
            <span className="envelopeicon">
              <span className="spanenvelopeicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="envelopeicon"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>
              </span>
              <span className="contact-us">{"contact us"}</span>
            </span>
            <p className="contactus-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              tempore.
            </p>
          </div>
      <div className="Contact">
      <form action="" className="contactrightside"  onSubmit={handleSubmit}>
            <div id="emailaddressgroup">
              <label htmlFor="emailcontact">
                <span className="email-address">{"email address : "}</span>
                <input
                  required
                  type="email"
                  id="emailcontact"
                  placeholder="emaill contact"
                  name="email"
                />
                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </label>
            </div>
            <div id="textareagroup">
              <label htmlFor="textarea">
                <span className="your-message">{"your message : "}</span>
                <textarea
                  required
                  id="textarea"
                  rows={4}
                  cols={30}
                  placeholder="your message"
                  name="message"
                />
                  <ValidationError 
        prefix="Message" 
        field="message"
        
        errors={state.errors}
      />
              </label>
            </div>
            <button className="submit">submit</button>
          </form>
          <div className="animation">
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        
      />          </div>

        </div>
      </div>
      </section>
    </>
  );
}
