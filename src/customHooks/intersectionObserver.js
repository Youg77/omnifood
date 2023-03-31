import { useState, useEffect } from "react";

const useIntersectionObserver = (target, options) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      console.log(entry);
    }, options);

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target, options]);

  return isIntersecting;
};

export default useIntersectionObserver;

// const handleIntersection = (entries) => {
//   const ent = entries[0];
//   console.log(ent);

//   if (ent.isIntersecting === false) {
//     setSticky(true);
//   }

//   if (ent.isIntersecting === true) {
//     setSticky(false);
//   }
// };

// useEffect(() => {
//   const options = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-125px",
//   };

//   const observer = new IntersectionObserver(handleIntersection, options);

//   if (observedElement.current) {
//     observer.observe(observedElement.current);
//   }

//   return () => observer.disconnect();
// }, [observedElement]);
