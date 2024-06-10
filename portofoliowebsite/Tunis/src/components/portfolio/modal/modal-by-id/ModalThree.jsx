// external
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// internal
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from "../../portfolioData";
import img1 from "../../../../../public/assets/img/portfolio/Medichatrx/screenshot2.png";
import img2 from "../../../../../public/assets/img/portfolio/Medichatrx/screenshot3.png";
import img3 from "../../../../../public/assets/img/portfolio/Medichatrx/screenshot4.png";
import img4 from "../../../../../public/assets/img/portfolio/Medichatrx/screenshot5.png";

const ModalThree = ({ modalId, setGetModal }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal-wrapper">
        <div className="modal__content scrollable-modal h-screen">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Tech Stack :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Repository :{" "}
                          <a
                            className="preview-link"
                            style={{ color: "#5f61d5" }}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-linkedin pr-2"></i>
                          LinkedIn :{" "}
                          <a
                            className="preview-link"
                            style={{ color: "#5f61d5" }}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.linkedinLink}
                          >
                            {details.linkedin}
                          </a>
                        </div>

                        <div className="mt-6 text-justify">
                          <i className="fa fa-info pr-2"></i>
                          Description : <p className="whitespace-pre-line">{details.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <Slider {...settings}>
                    <div>
                      <Image src={item.image} alt="portfolio project demo" />
                    </div>
                    <div>
                      <Image src={img1} alt="portfolio project demo" />
                    </div>
                    <div>
                      <Image src={img2} alt="portfolio project demo" />
                    </div>
                    <div>
                      <Image src={img3} alt="portfolio project demo" />
                    </div>
                    <div>
                      <Image src={img4} alt="portfolio project demo" />
                    </div>
                  </Slider>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <Image src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
