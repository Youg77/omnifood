import React from "react";
import styles from "../styles/form.module.css";

const Form = () => {
  //   const myStyle = {
  //     position: "relative !important",
  //     height: "0px !important",
  //     width: "0px !important",
  //     float: "left !important",
  //   };

  return (
    <div>
      <section className={styles.section_cta} id="cta">
        <div className={styles.container}>
          <div className={styles.cta}>
            <div className={styles.cta_text_box}>
              <h2 className={styles.heading_secondary}>
                Get your first meal for free!
              </h2>
              <p className={styles.cta_text}>
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <from className={styles.cta_form} name="sign-up">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required=""
                  />
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required=""
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" name="select-where" required="">
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className={`${styles.btn} ${styles.btn__form}`}>
                  Sign up now
                </button>

                {/* <!-- <input type="checkbox" />
            <input type="number" /> --> */}
              </from>
            </div>
            <div
              className={styles.cta_img_box}
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
