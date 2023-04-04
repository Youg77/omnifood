import React from "react";
import styles from "../styles/how.module.css";
import img1 from "../assets/how/app-screen-1.png";
import img2 from "../assets/how/app-screen-2.png";
import img3 from "../assets/how/app-screen-3.png";

const How = () => {
  return (
    <div className={styles.howContainer} id="how-it-works">
      <div className={styles.section_how}>
        <div className={styles.container}>
          <span className={styles.subheading}>How it works</span>
          <h2 className={styles.heading_secondary}>
            Your daily dose of health in 3 simple steps
          </h2>
        </div>

        <div className={styles.gcontainer}>
          <div className={styles.step_text_box}>
            <p className={styles.step_number}>01</p>
            <h3 className={styles.heading_tertiary}>
              Tell us what you like (and what not)
            </h3>
            <p className={styles.step_description}>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>

          <div className={styles.step_img_box}>
            <img
              src={img1}
              className={styles.step_img}
              alt="iPhone app
              preferences selection screen"
            />
          </div>

          <div className={styles.step_img_box}>
            <img
              src={img2}
              className={styles.step_img}
              alt="iPhone app
              meal approving plan screen"
            />
          </div>
          <div className={styles.step_text_box}>
            <p className={styles.step_number}>02</p>
            <h3 className={styles.heading_tertiary}>
              Approve your weekly meal plan
            </h3>
            <p className={styles.step_description}>
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          <div className={styles.step_text_box}>
            <p className={styles.step_number}>03</p>
            <h3 className={styles.heading_tertiary}>
              Receive meals at convenient time
            </h3>
            <p className={styles.step_description}>
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className={styles.step_img_box}>
            <img
              src={img3}
              className={styles.step_img}
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
