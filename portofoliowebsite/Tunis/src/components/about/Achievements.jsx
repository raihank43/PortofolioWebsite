import React from "react";

const achievementsContent = [
  { title: "10", subTitle1: "completed", subTitle2: "projects" },
  { title: "8", subTitle1: "Certificates", subTitle2: "" },
  { title: "1", subTitle1: "work", subTitle2: "experience" },
  // { title: "81", subTitle1: "Happy", subTitle2: "customers" },
  // { title: "10", subTitle1: "Certificates", subTitle2: "" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin rounded-3 glow-on-hover">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
