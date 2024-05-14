import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/RaihanProfile.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Raden Raihan Kusuma",
  heroDesignation: "Fullstack Javascript Developer",
  heroDescriptions: `I'm a transitioned fullstack-developer mainly focused on Javascript with
  experience on crafting a clean system & user‑friendly web and mobile applications. I am passionate about
  building excellent software that not only looks good but also function very well.`,
  heroBtn: "more about me",
};

const Hero = ({ setTabIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  const [titleName, setTitleName] = useState("");
  const [designation, setDesignation] = useState("");
  const fullTitleName = `I'm ${heroContent.heroTitleName}.`;
  const fullDesignation = `${heroContent.heroDesignation}`;

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setTitleName(fullTitleName.slice(0, titleName.length + 1));
    }, 100); // adjust delay here

    // cleanup function
    return () => clearTimeout(timer1);
  }, [titleName, fullTitleName]);

  useEffect(() => {
    if (titleName.length === fullTitleName.length) {
      let timer2 = setTimeout(() => {
        setDesignation(fullDesignation.slice(0, designation.length + 1));
      }, 100); // adjust delay here

      // cleanup function
      return () => clearTimeout(timer2);
    }
  }, [designation, fullDesignation, titleName, fullTitleName]);

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1
              className="text-uppercase poppins-font"
              style={{ fontSize: "2.1rem", color: "#3a3caf" }}
            >
              {titleName}
              <span style={{ fontSize: "1.8rem" }}>
                {titleName.length === fullTitleName.length ? designation : ""}
              </span>
            </h1>
            <p className="open-sans-font" style={{ fontSize: "1rem" }}>
              {heroContent.heroDescriptions}
            </p>
            <div className="d-flex gap-3">
              <button className="button" onClick={toggleModalOne}>
                <span className="button-text">{heroContent.heroBtn}</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </button>
              <button className="button" onClick={() => setTabIndex(3)}>
                <span className="button-text">Hire Me</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
