import React from "react";

import dave from "../assets/testimonials/dave.jpg";
import ben from "../assets/testimonials/ben.jpg";
import steve from "../assets/testimonials/steve.jpg";
import hannah from "../assets/testimonials/hannah.jpg";

import img1 from "../assets/testimonials/gallery-1.jpg";
import img2 from "../assets/testimonials/gallery-2.jpg";
import img3 from "../assets/testimonials/gallery-3.jpg";

import img4 from "../assets/testimonials/gallery-4.jpg";

import img5 from "../assets/testimonials/gallery-5.jpg";

import img6 from "../assets/testimonials/gallery-6.jpg";

import img7 from "../assets/testimonials/gallery-7.jpg";

import img8 from "../assets/testimonials/gallery-8.jpg";
import img9 from "../assets/testimonials/gallery-9.jpg";
import img10 from "../assets/testimonials/gallery-10.jpg";

import img11 from "../assets/testimonials/gallery-11.jpg";
import img12 from "../assets/testimonials/gallery-12.jpg";

const Testimonial = () => {
  return (
    <div>
      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="customer Dave Bryson"
                src={dave}
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">— Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="customer Ben Hadley"
                src={ben}
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">— Ben Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="customer Steve Miller"
                src={steve}
              />
              <blockquote className="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className="testimonial-name">— Steve Miller</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="customer Hannah Smith"
                src={hannah}
              />
              <blockquote className="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">— Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div className="gallery">
          <figure className="gallery-item">
            <img
              src={img1}
              alt="beautifully
              arranged food"
            />
            {/* <!-- <figcaption>Caption</figcaption> --> */}
          </figure>
          <figure className="gallery-item">
            <img
              src={img2}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img3}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img4}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img5}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img6}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img7}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img8}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img9}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img10}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img11}
              alt="beautifully
              arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={img12}
              alt="beautifully
              arranged food"
            />
          </figure>
        </div>
      </section>
      ;
    </div>
  );
};

export default Testimonial;
