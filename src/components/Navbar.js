import React from "react";
import styles from "../styles/nav.module.css";
import logo from "../assets/omnifood-logo.png";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useIntersectionObserver from "../customHooks/intersectionObserver";

const Navbar = ({ observedElementRef }) => {
  const [showHem, setShowHem] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const observedElement = observedElementRef;

  const isIntersecting = useIntersectionObserver(observedElement, {
    root: null,
    rootMargin: "-125px",
    threshold: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setShowHem(true);
      } else {
        setShowHem(false);
        setIsClicked(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
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
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  return (
    <div className={isIntersecting ? `` : `sticky`}>
      <div className="nav">
        <a href="#">
          <img className={styles.img} src={logo} alt="My Logo" />
        </a>

        {showHem ? (
          <button className={styles.icon_button} onClick={toggleMenu}>
            {isClicked ? <AiOutlineClose /> : <AiOutlineMenu />}
            {isClicked && (
              //////
              <div className={styles.main_nav}>
                <ul className={styles.main_nav_list}>
                  <li>
                    <a
                      href="#how_it_works"
                      className={styles.main_nav_link}
                      // onClick={() => scrollToComponent("how-it-works")}
                    >
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
                </ul>
              </div>
            )}
          </button>
        ) : (
          ////
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
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
