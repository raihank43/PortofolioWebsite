import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/raden-raihan-kusuma-9a37b8249/",
  },
  { iconName: "fa fa-github", link: "https://github.com/raihank43" },
  {
    iconName: "fa fa-whatsapp",
    link: "https://wa.me/6285664532658",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/raihank43/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
