import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>
 
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data"> 
              <div>
                <h3 className="qualification__title">Web Development Bootcamp</h3>
                <span className="qualification__subtitle">Odin-school</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}March-july 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor of technology</h3>
                <span className="qualification__subtitle">Vivekananda Institute of technology and science Jaipur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "} 2014 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
