import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../assets/omnifood-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.gridContainer}>
          <div className={styles.logo_col}>
            <a href="#" className={styles.footer_logo}>
              <img className={styles.logo} alt="Omnifood logo" src={logo} />
            </a>

            <ul className={styles.social_links}>
              <li>
                <a className={styles.footer_link} href="#">
                  <ion-icon
                    class={styles.social_icon}
                    name="logo-instagram"
                    role="img"
                    aria-label="logo instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  <ion-icon
                    class={styles.social_icon}
                    name="logo-facebook"
                    role="img"
                    aria-label="logo facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  <ion-icon
                    class={styles.social_icon}
                    name="logo-twitter"
                    role="img"
                    aria-label="logo twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className={styles.copyright}>
              Copyright © <span className="year">2023</span> by Omnifood, Inc.
              All rights reserved.
            </p>
          </div>

          <div className={styles.address_col}>
            <p className={styles.footer_heading}>Contact us</p>
            <address className={styles.contacts}>
              <p className={styles.address}>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className={styles.footer_link} href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a
                  className={styles.footer_link}
                  href="mailto:hello@omnifood.com"
                >
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>

          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Account</p>
            <ul className={styles.footer_nav}>
              <li>
                <a className={styles.footer_link} href="#">
                  Create account
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  iOS app
                </a>
                s
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Company</p>
            <ul className={styles.footer_nav}>
              <li>
                <a className={styles.footer_link} href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Resources</p>
            <ul className={styles.footer_nav}>
              <li>
                <a className={styles.footer_link} href="#">
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className={styles.footer_link} href="#">
                  Privacy &amp; terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
