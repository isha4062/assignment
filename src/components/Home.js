import React, { memo } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import img from "../images/img.png"
import { Col, Grid, Row } from 'rsuite';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from "../images/Group 72.png";
import img2 from "../images/Group 74.png";
import img3 from "../images/Group 75.png";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import proj1 from "../images/project1.png";
import proj2 from "../images/project2.png";
import proj3 from "../images/project3.png";
import arrow from "../images/Group 80.png";

const Home = memo(function Home(props) {
  return (
    <div>
      <Nav />
      <div className="home">
        <div className="first">
          <div className="text">
            <h1>Let's create something great together</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.</p>
            <button>Let's Talk</button>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="second">
          <div className="top">
            <div className="heading">
              <div></div>
              <h1>Trusted Companies</h1>
              <div></div>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={80}
              slidesPerGroup={4}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
              <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
            </Swiper>
          </div>
          <hr />
          <Grid className="grid">
            <Row className="row1">
              <Col xs={24} md={14} className="text1">
              <h1>Our services that we provide</h1>
              </Col>
              <Col xs={24} md={10} className="text1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam arcu massa amet non metus ornare.</p>
              </Col>
            </Row>
            <Row className="row2">
              <Col xs={24} md={8} className="text2">
              <img src={img1} alt="" />
              <div className="info">
                <h6>Design</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
              </div>
              </Col>
              <Col xs={24} md={8} className="text2 border">
              <img src={img2} alt="" />
              <div className="info">
                <h6>Development</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
              </div>
              </Col>
              <Col xs={24} md={8} className="text2">
              <img src={img3} alt="" />
              <div className="info">
                <h6>Marketing</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
              </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="third">
          <h1>Our Works</h1>
          <div className="cards">
            <div className='card'>
              <img src={proj1} alt="" />
              <div className="data">
                <div className="text">
                  <h4>Project 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className='card'>
              <img src={proj2} alt="" />
              <div className="data">
                <div className="text">
                  <h4>Project 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className='card'>
              <img src={proj3} alt="" />
              <div className="data">
                <div className="text">
                  <h4>Project 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <button>View More</button>
        </div>
      </div>
      <Footer />
    </div>
  )
})


export default Home
