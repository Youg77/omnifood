import React from "react";
import styles from "../styles/nav.module.css";
import logo from "../assets/omnifood-logo.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useIntersectionObserver from "../customHooks/intersectionObserver";
import { Link } from "react-router-dom";

const Navbar = ({ observedElementRef }) => {
  const [hamburger, setHamburger] = useState(false);

  const observedElement = observedElementRef;

  const isIntersecting = useIntersectionObserver(observedElement, {
    root: null,
    rootMargin: "-125px",
    threshold: 0,
  });

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");
      console.log(`this is ${href}.`);
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
          // offset: "-125px",
        });
      }
    });
  });

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  return (
    <div className={isIntersecting ? "" : "sticky"}>
      <div className="nav">
        <Link href="/">
          <img
            className={styles.img}
            src={logo}
            onClick={goTop}
            alt="My Logo"
          />
        </Link>
        <nav className={styles.main_nav}>
          <ul className={styles.main_nav_list}>
            <li>
              <a href="#how-it-works" className={styles.main_nav_link}>
                How it works
              </a>
            </li>
            <li>
              <a href="#meals" className={styles.main_nav_link}>
                Meals
              </a>
            </li>
            <li>
              <a href="#testimonials" className={styles.main_nav_link}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#pricing" className={styles.main_nav_link}>
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#cta"
                className={`${styles.main_nav_link} ${styles.nav_cta}`}
              >
                Try For Free
              </a>
            </li>
            <button
              className={styles.icon_button}
              onClick={() => hamburgerMenu()}
            >
              <AiOutlineMenu />
            </button>
          </ul>
        </nav>
      </div>

      {/* mobile-nav */}

      <div
        className={`${styles["mobile-nav"]} ${
          hamburger ? styles["open-menu"] : styles["closed-menu"]
        }`}
      >
        <span onClick={() => hamburgerMenu()}>
          <AiOutlineClose />
        </span>
        <ul className={styles.mobileul}>
          <li>
            <a
              href="#how-it-works"
              className={styles.mobilea}
              onClick={() => hamburgerMenu()}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#meals"
              className={styles.mobilea}
              onClick={() => hamburgerMenu()}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={styles.mobilea}
              onClick={() => hamburgerMenu()}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={styles.mobilea}
              onClick={() => hamburgerMenu()}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#cta"
              onClick={() => hamburgerMenu()}
              className={styles.mb_btn}
            >
              Try For Free
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
