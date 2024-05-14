import React from "react";

const skillsContent = [
  {
    skillClass: "p25",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    skillName: "HTML",
  },
  {
    skillClass: "p89",
    imgUrl:
      "https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?rs=1&pid=ImgDetMain",
    skillName: "JAVASCRIPT",
  },
  {
    skillClass: "p70",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    skillName: "CSS",
  },
  {
    skillClass: "p66",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    skillName: "TYPESCRIPT",
  },
  { skillClass: "p95", imgUrl: "95", skillName: "WORDPRESS" },
  { skillClass: "p50", imgUrl: "50", skillName: "JQUERY" },
  { skillClass: "p65", imgUrl: "65", skillName: "ANGULAR" },
  { skillClass: "p45", imgUrl: "45", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={val.imgUrl} className="img-fluid rounded-circle w-50" />
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              {val.skillName}
            </h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
