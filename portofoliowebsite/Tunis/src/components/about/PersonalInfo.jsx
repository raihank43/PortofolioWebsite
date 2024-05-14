import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Steve", hasColor: "" },
  { meta: "last name", metaInfo: "Milner", hasColor: "" },
  { meta: "Age", metaInfo: "27 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Tunisian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Tunis", hasColor: "" },
  { meta: "phone", metaInfo: "+21621184010", hasColor: "" },
  { meta: "Email", metaInfo: "you@mail.com", hasColor: "" },
  { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
  { meta: "langages", metaInfo: "French, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <div className="about-list list-unstyled open-sans-font">
      <p style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>
        Hi, my name is Raihan. And I am a professional web developer based in
        Bekasi, Indonesia. I have a passion for web development and love to
        create for web and mobile devices. My journey started as Hacktiv8
        Bootcamp graduates on Fullstack Javascript Immersive program. I have
        experience in building web and mobile applications with modern
        technologies like React, Next.js, and React Native.
      </p>
      <p style={{ textAlign: "justify" }}>
        The decision to transition into this industry was driven by my lifelong
        passion for technology. I’m eager to learn, open to new challenges, and
        love to collaborate with like-minded individuals to create visually
        appealing content and innovative digital solutions.
      </p>
    </div>
  );
};

export default PersonalInfo;
