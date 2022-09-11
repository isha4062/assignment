import React, { memo } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import insta from "../images/insta.png";
import fac from "../images/facebook.png";
import twit from "../images/twitter.png";

export default memo(function Contact() {
  return (
    <div>
      <Nav />
      <div className="contact">
        <h1>Connect with us</h1>
        <div className="data">
          <div className="form">
            <h4>Tell us about your project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi vulputate potenti orci.</p>
            <form action="mailto:developers@webalar.in">
              <label htmlFor="name">Your Name</label><br />
              <input type="text" id="name" name='name' /><br />
              <label htmlFor="email">Your Email</label><br />
              <input type="email" id='email' name='email' /><br />
              <label htmlFor="number">Your Phone Number</label><br />
              <input type="number" id='number' name='number' /><br />
              <label htmlFor="msg">Your Message</label><br />
              <textarea type="text" id='msg' name='msg' rows="6" cols="30" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contactInfo">
            <div className="info">
              <h3>Address</h3>
              <p>0199 Taylor Park, North Dakota, USA</p>
            </div>
            <hr />
            <div className="info">
              <h3>Call us on</h3>
              <p>+1 98723 42023 <br />
                info@logoipsum.com</p>
            </div>
            <hr />
            <div className="info">
              <h3>Social Media</h3>
              <div className="button">
                <button style={{"marginLeft": "0"}}><img src={insta} alt="" /></button>
                <button><img src={twit} alt="" /></button>
                <button><img src={fac} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
