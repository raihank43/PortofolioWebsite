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
        With various knowledge of design and a background in the creative
        industry. I decided to transition into a Fullstack Developer which was
        driven by my lifelong passion for technology. My experience in design
        has provided me with a unique perspective on user experience, which I
        leverage when developing front-end interfaces. On the other hand, my
        interest in back-end development allows me to build robust and efficient
        systems. This combination of skills positions me uniquely as a
        full-stack developer, capable of overseeing projects from conception to
        completion. I’m eager to learn, open to new challenges, and love to
        collaborate with like-minded individuals to create visually appealing
        content and innovative digital solutions.
      </p>
    </div>
  );
};

export default PersonalInfo;
