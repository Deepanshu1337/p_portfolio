import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box ">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitile">1+ years</span>
      </div>

      <div className="about__box ">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitile">20+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitile">Online 24/7</span>
      </div>
    </div>
  );
};

export default info;
