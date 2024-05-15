import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
const cv = "/assets/cv/cv.pdf";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import Image from "next/image";
import Social from "../Social";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container" style={{ padding: "1.5rem" }}>
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <Image
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              {/* Social media */}

              <div className=" flex gap-3 mt-1 items-center  pl-3  ">
                <h3 className=" text-uppercase custom-title mb-0 ft-wt-600 text-2xl">
                  Follow and Contact Me
                </h3>
                <div className=" reset flex items-center justify-center ">
                  <ul className="reset  social list-unstyled pt-1 mb-5 d-flex items-center justify-center gap-3 ">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/raden-raihan-kusuma-9a37b8249/"
                        target="_blank"
                        rel="noreferrer"
                        className="custom-link"
                      >
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/raihank43"
                        target="_blank"
                        rel="noreferrer"
                        className="custom-link"
                      >
                        <i className="fa fa-github-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/raihank43"
                        target="_blank"
                        rel="noreferrer"
                        className="custom-link"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/6285664532658"
                        target="_blank"
                        rel="noreferrer"
                        className="custom-link"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                
              </div>
              {/* End social media */}

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3
              className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
              style={{ fontSize: "3rem" }}
            >
              My Skills
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
