import React from "react";

const experienceContent = [
  {
    year: "   2023 - 2023",
    position: " 3D Printer Machine Technician",
    compnayName: "PT 3D Zaiku Indonesia",
    details: ` With a track record of successfully resolving 58 technical issues on various 3D machines, expertise was demonstrated in handling clogging, replacing damaged components, and rectifying mechanical malfunctions. Comprehensive maintenance and testing were performed, including tasks such as cleaning, disassembling hot ends, and conducting test prints, contributing significantly to the improved performance and reliability of these machines. Participation in an off-site training and demonstration session served to enhance technical skills and broaden knowledge in the field of 3D machine operation.`,
  },
  // {
  //   year: "2013 - 2018",
  //   position: " UI/UX Designer",
  //   compnayName: "Themeforest",
  //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
  //       elit, tempor incididunt`,
  // },
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font" style={{ textAlign: "justify" }}>
            {val.details}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
