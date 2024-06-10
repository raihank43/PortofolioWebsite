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
        Hi, my name is Raihan, and I am a professional web developer based in
        Bekasi, Indonesia. I have a passion for web development and enjoy
        creating for both web and mobile devices. My journey began as a graduate
        of the Hacktiv8 Bootcamp’s Fullstack Javascript Immersive program. I
        have experience in building web and mobile applications using modern
        technologies such as Node.js, Express, React, MongoDB/PostgreSQL,
        Next.js, and React Native.
      </p>
      <p style={{ textAlign: "justify" }}>
        Emerging from a vibrant background in the creative and technical
        industry. I embarked on my journey as a Fullstack Developer, a path
        ignited by my enduring fascination with technology and solidified by my
        graduation from the Hacktiv8 Fullstack JavaScript Immersive Program. My
        experience in the creative industry has endowed me with a unique lens on
        user experience, which I harness in crafting intuitive front-end
        interfaces. Simultaneously, my technical background has empowered me to
        engineer an efficient and dependable back-end systems. This fusion of
        skills uniquely equips me as a full-stack developer, adept at steering
        projects from inception to fruition. I am a perpetual learner, always
        eager to absorb new knowledge and innovate in the most creative ways. My
        strong analytical and problem-solving skills are key to my success in
        this role. I always ready to embrace new challenges, and thrive on
        collaborative environments, working with peers to produce innovative
        digital solutions that meet user needs.
      </p>
    </div>
  );
};

export default PersonalInfo;
