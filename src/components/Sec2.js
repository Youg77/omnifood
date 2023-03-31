import React from "react";
import styles from "../styles/sec2.module.css";
import img1 from "../assets/sec2/business-insider.png";
import img2 from "../assets/sec2/forbes.png";

import img3 from "../assets/sec2/techcrunch.png";

import img4 from "../assets/sec2/the-new-york-times.png";

import img5 from "../assets/sec2/usa-today.png";

const Sec2 = () => {
  return (
    <div className={styles.section_featured}>
      <div className={styles.container}>
        <h2 className={styles.heading_featured_in}>As featured in</h2>
        <div className={styles.logos}>
          <img src={img2} alt="Techcrunch logo" />
          <img src={img1} alt="Business Insider logo" />
          <img src={img3} alt="The New York Times logo" />
          <img src={img4} alt="Forbes logo" />
          <img src={img5} alt="USA Today logo" />
        </div>
      </div>
    </div>
  );
};

export default Sec2;
