import React from "react";
import styles from "./ourexpres.module.css";

const OurExprest = () => {
  return (
    <section className={styles.OurExprest}>
      <div className={styles.div_hero}>
        <p style={{ color: "rgb(255,101,81)",}}>Testimonials</p>
        <h3>Our Experts Teacher</h3>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>
          <img
            style={{ borderRadius: "50%", width: "25%" }}
            src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
            alt=""
          />
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <h5>Regina Miles</h5>
          <p>Designer</p>
        </div>
        <div className={styles.div2}>
          <img   style={{ borderRadius: "50%", width: "25%" }}
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Regina Miles Designer
          </p>
          <h5>Regina Miles</h5>
          <p>Designer</p>
        </div>
      </div>
    </section>
  );
};

export default OurExprest;
