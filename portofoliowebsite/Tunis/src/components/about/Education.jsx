import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "Fullstack Javascript Immersive Program",
    institute: "Hacktiv8 Indonesia",
    details: `  The Full Stack JavaScript Immersive program from Hacktiv8 
    in Indonesia is a comprehensive 16-week training program designed 
    to transform participants into proficient Full Stack Developers. 
    The curriculum is meticulously crafted to stay relevant and is 
    continuously updated to meet the dynamic needs of the job market. 
    The program offers extensive hands-on training and one-on-one mentoring by industry experts. 
    It focuses on JavaScript as the primary programming language and covers a wide range of tech stacks 
    including Node.js, Next.js, React, React Native, PostgreSQL, Express, and MongoDB. 
    Upon completion, participants are equipped with a strong understanding of JavaScript and web development, 
    enabling them to build full-stack JavaScript applications. 
    Hacktiv8 also provides robust career support, including resume preparation, technical interview practice, and connections 
    to over 750 hiring partners to help graduates secure employment.`,
  },
  {
    year: "2020 - 2023",
    degree: "DIPLOMA DEGREE",
    institute: "POLITEKNIK NEGERI MEDIA KREATIF JAKARTA - D3 TEKNIK GRAFIKA",
    details: `The D3 Teknik Grafika program at Politeknik Negeri Media Kreatif in Jakarta is a program designed to equip students with skills in both conventional and digital print and graphic technology. The curriculum is industry-based and taught by practitioners, ensuring that students are well-prepared to meet the demands of the creative industry. The program focuses on the development of modern technology in the graphic industry, including 3D Printing and Consumer Product. Graduates of this program are expected to be competent and ready to contribute significantly to the graphic engineering field.`,
  },
  {
    year: "2019 - 2020",
    degree: "DIPLOMA DEGREE",
    institute: "Institut Teknologi Sepuluh Nopember Surabaya - Design and Online Business PRODES ITS",
    details: `The Design and Online Business program at PRODES ITS provided a comprehensive and practical learning experience. The curriculum began with a portfolio class, where I honed my art and drawing skills to create a compelling portfolio for art studies. I gained proficiency in graphic design using industry-standard tools like CorelDRAW and Adobe Photoshop. The program also emphasized UI/UX design, where I learned to design intuitive mobile apps and web applications using Figma. A significant part of the curriculum was dedicated to online business, teaching me how to grow an online business using various social media platforms and e-commerce. I also had the opportunity to explore 3D design, learning to create intricate 3D models. Lastly, the program offered a professional photography course, equipping me with the skills to capture high-quality photos. This diverse and practical curriculum has equipped me with a robust skill set, preparing me for a successful career in the design and online business industry.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font" style={{ textAlign: "justify" }}>
            {val.details}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
