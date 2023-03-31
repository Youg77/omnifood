import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/home.module.css";
import webp from "../assets/section1/hero.webp";
import cus1 from "../assets/section1/customer-1.jpg";
import cus2 from "../assets/section1/customer-2.jpg";
import cus3 from "../assets/section1/customer-3.jpg";
import cus4 from "../assets/section1/customer-4.jpg";
import cus5 from "../assets/section1/customer-5.jpg";
import cus6 from "../assets/section1/customer-6.jpg";
import Sec2 from "../components/Sec2";
import How from "../components/How";
import Navbar from "../components/Navbar";
import Meals from "../components/Meals";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Home() {
  const observedElementRef = useRef(null);

  return (
    <div id="top" >
      <Navbar observedElementRef={observedElementRef} />
      <div className={styles.section_hero} ref={observedElementRef} >
        <div className={styles.hero}>
          <h1>A healthy meal delivered to your door, every single day</h1>
          <p className={styles.hero_description}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className={styles.btns_div}>
            <Link to="/" className={styles.btn1}>
              Start eating well
            </Link>
            <Link to="#how" className={styles.btn2}>
              Learn more ↓
            </Link>
          </div>

          <div className={styles.delivered_meals}>
            <div className={styles.delivered_imgs}>
              <img src={cus1} alt="#"></img>
              <img src={cus2} alt="cus2"></img>
              <img src={cus3} alt="cus3"></img>
              <img src={cus4} alt="cus4"></img>
              <img src={cus5} alt="cus5"></img>
              <img src={cus6} alt="cus6"></img>
            </div>
            <p className={styles.delivered_text}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className={styles.hero_img_box}>
          <img className={styles.img} src={webp} alt="hero" />
        </div>
      </div>
      <Sec2 />
      <How />
      <Meals />
      <Testimonial />
      <Pricing />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
