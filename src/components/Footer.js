import React, { memo } from 'react';
import { Col, Grid, Row } from 'rsuite';
import logo from "../images/Logo.png";
import insta from "../images/insta.png";
import twit from "../images/twitter.png";
import fac from "../images/facebook.png";

export default memo(function Footer() {
  return (
    <div className='foot'>
      <Grid fluid>
        <Row className='show-grid'>
          <Col xs={24} md={12}>
            <p className="text1">Let's work <br /> together</p>
          </Col>
          <Col xs={24} md={12} className='text2'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque est non veniam atque consequuntur blanditiis voluptatibus vitae ducimus, sint inventore.</p>
            <button>Let's Talk</button>
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={24} md={9} className="text3">
            <img src={logo} alt="" width="80px" height="40px" />
            <div className="icons">
              <button style={{"marginLeft": "0"}}><img src={insta} alt="" /></button>
              <button><img src={twit} alt="" /></button>
              <button><img src={fac} alt="" /></button>
            </div>
          </Col>
          <Col xs={24} md={5} className="text4" style={{"marginLeft": "0"}}>
            <h6>Address</h6>
            <p>0199 Taylor Park, North Dakota, USA</p>
          </Col>
          <Col xs={24} md={5} className="text4">
            <h6>Call us on</h6>
            <p>+1 98723 42023 info@logoipsum.com</p>
          </Col>
          <Col xs={24} md={5} className="text4">
            <h6>Our Policies</h6>
            <p>Privacy Policy Terms of Use Refund Policy</p>
          </Col>
        </Row>
      </Grid>
      <hr />
      <div className="lastText">
        <p>Copyright © Webalar. All Rights Reserved</p>
      </div>
    </div>
  )
})
