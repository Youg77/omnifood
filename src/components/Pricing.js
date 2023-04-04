import React from "react";
import styles from "../styles/pricing.module.css";
import { scroller } from "react-scroll";

import { Link } from "react-scroll";

const Pricing = () => {
  const scrollToComponent = (componentName) => {
    scroller.scrollTo(componentName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div>
      <section className={styles.section_pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.subheading}>Pricing</span>
          <h2 className={styles.heading_secondary}>
            Eating well without breaking the bank
          </h2>
        </div>

        <div className={styles.gcontainer}>
          <div
            className={`${styles.pricing_plan} ${styles.pricing_plan__starter}`}
          >
            <header className={styles.plan_header}>
              <p className={styles.plan_name}>Starter</p>
              <p className={styles.plan_price}>
                <span className={styles.span}>$</span>399
              </p>
              <p className={styles.plan_text}>
                per month. That's just $13 per meal!
              </p>
            </header>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>1 meal per day</span>
              </li>
              <li class={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>Order from 11am to 9pm</span>
              </li>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="close-outline"
                  role="img"
                  aria-label="close outline"
                ></ion-icon>
              </li>
            </ul>
            <div className={styles.plan_sing_up}>
              <Link
                to="#"
                className={`${styles.btn} ${styles.btn__full}`}
                onClick={() => scrollToComponent("top")}
              >
                Start eating well
              </Link>
            </div>
          </div>

          <div
            className={`${styles.pricing_plan} ${styles.pricing_plan__complete}`}
          >
            <header className={styles.plan_header}>
              <p className={styles.plan_name}>Complete</p>
              <p className={styles.plan_price}>
                <span className={styles.span}>$</span>649
              </p>
              <p className={styles.plan_text}>
                per month. That's just $11 per meal!
              </p>
            </header>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>
                  <strong>2 meals</strong> per day
                </span>
              </li>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li className={styles.list_item}>
                <ion-icon
                  class={styles.list_icon}
                  name="checkmark-outline"
                  role="img"
                  aria-label="checkmark outline"
                ></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div className={styles.plan_sing_up}>
              <Link
                to="#"
                className={`${styles.btn} ${styles.btn__full}`}
                onClick={() => scrollToComponent("top")}
              >
                Start eating well
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.container} ${styles.grid} ${styles.mb}`}>
          <aside className={styles.plan_details}>
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div className={styles.glcontainer}>
          <div className="feature">
            <ion-icon
              class={styles.feature_icon}
              name="infinite-outline"
              role="img"
              aria-label="infinite outline"
            ></ion-icon>
            <p className={styles.feature_title}>Never cook again!</p>
            <p className={styles.feature_text}>
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div className="feature">
            <ion-icon
              class={styles.feature_icon}
              name="nutrition-outline"
              role="img"
              aria-label="nutrition outline"
            ></ion-icon>
            <p className={styles.feature_title}>Local and organic</p>
            <p className={styles.feature_text}>
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon
              class={styles.feature_icon}
              name="leaf-outline"
              role="img"
              aria-label="leaf outline"
            ></ion-icon>
            <p className={styles.feature_title}>No waste</p>
            <p className={styles.feature_text}>
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon
              class={styles.feature_icon}
              name="pause-outline"
              role="img"
              aria-label="pause outline"
            ></ion-icon>
            <p className={styles.feature_title}>Pause anytime</p>
            <p className={styles.feature_text}>
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
