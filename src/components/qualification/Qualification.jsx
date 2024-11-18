import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title"> Experience & Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>
 
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education & Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data"> 
              <div>
                <h3 className="qualification__title">AlchoTech Solution</h3>
                <span className="qualification__subtitle">Web Designer Expert</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>jan(2024) - present
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
                <h3 className="qualification__title">W3 IT EXPERT</h3>
                <span className="qualification__subtitle">Web Designer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Feb(2023) - July(2023)
                </div>
              </div>
            </div>

            <div className="qualification__data"> 
              <div>
                <h3 className="qualification__title">Master of Computer Application (MCA)</h3>
                <span className="qualification__subtitle">University of Kota (Rajasthan)</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021-2023
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
                <h3 className="qualification__title">Bachelor of Computer Application (BCA)</h3>
                <span className="qualification__subtitle">Maa Bharti P.G. collage kota</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
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
