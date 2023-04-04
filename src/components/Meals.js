import React from "react";
// import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import styles from "../styles/meals.module.css";
import meal1 from "../assets/meals/meal-1.jpg";
import meal2 from "../assets/meals/meal-2.jpg";

const Meals = () => {
  // const scrollToComponent = (componentName) => {
  //   scroller.scrollTo(componentName, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };
  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.section_meals} id="meals">
      <div className={styles.container}>
        <span className={styles.subheading}>Meals</span>
        <h2 className={styles.heading_secondary}>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className={styles.gcontainer}>
        <div className={styles.meal}>
          <img src={meal1} className={styles.meal_img} alt="Japanese Gyozas" />
          <div className={styles.meal_content}>
            <div className={styles.meal_tags}>
              <span className={styles.tag_vegetarian}>Vegetarian</span>
            </div>
            <p className={styles.meal_title}>Japanese Gyozas</p>
            <ul className={styles.meal_attributes}>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="flame-outline"
                  role="img"
                  aria-label="flame outline"
                ></ion-icon>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="restaurant-outline"
                  role="img"
                  aria-label="restaurant outline"
                ></ion-icon>
                <span>
                  NutriScore ® <strong>74</strong>
                </span>
              </li>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="star-outline"
                  role="img"
                  aria-label="star outline"
                ></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.meal}>
          <img src={meal2} className={styles.meal_img} alt="Avocado Salad" />
          <div className={styles.meal_content}>
            <div className={styles.meal_tags}>
              <span className={styles.tag_vegan}>Vegan</span>
              <span className={styles.tag_paleo}>Paleo</span>
            </div>
            <p className={styles.meal_title}>Avocado Salad</p>
            <ul className={styles.meal_attributes}>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="flame-outline"
                  role="img"
                  aria-label="flame outline"
                ></ion-icon>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="restaurant-outline"
                  role="img"
                  aria-label="restaurant outline"
                ></ion-icon>
                <span>
                  NutriScore ® <strong>92</strong>
                </span>
              </li>
              <li className={styles.meal_attribute}>
                <ion-icon
                  class={styles.list_icon}
                  name="star-outline"
                  role="img"
                  aria-label="star outline"
                ></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.diets}>
          <h3 className={styles.heading_tertiary}>Works with any diet:</h3>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Vegetarian</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Vegan</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Keto</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Paleo</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Low FODMAP</span>
            </li>
            <li className={styles.list_item}>
              <ion-icon
                class={styles.list_tick}
                name="checkmark-outline"
                role="img"
                aria-label="checkmark outline"
              ></ion-icon>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.rcontainer}>
        <Link to="/" className={styles.link} onClick={goTop}>
          See all recipes →
        </Link>
      </div>
    </div>
  );
};

export default Meals;
