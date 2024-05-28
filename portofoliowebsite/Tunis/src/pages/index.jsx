import React from "react";
import Wrapper from "../layout/wrapper";
import HomeDark from "./home-dark";

export const metadata = {
  title: "RaihanTech",
  description: "Raden Raihan Kusuma website to showcases his journey as an aspiring Software Engineer/Fullstack Developer. It provides detailed information about Raihan, his work experience, the skills that he possess, and the projects he has completed.",
  keywords: "Raihan Kusuma, Raihan Kusuma Portfolio, Raden Raihan Kusuma",
};
const MainRoot = () => {
  return (
    <Wrapper>
      <HomeDark />
    </Wrapper>
  );
};

export default MainRoot;
