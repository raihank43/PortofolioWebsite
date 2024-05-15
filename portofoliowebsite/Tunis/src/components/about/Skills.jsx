import React from "react";

const skillsContent = [
  {
    skillClass: "p45",
    imgUrl:
      "https://res.cloudinary.com/dkrchzi4b/image/upload/v1715777443/mo58nfvrlpkynumdfvah.png",
    skillName: "NEXTJS",
    type: "front_end",
  },
  {
    skillClass: "p45",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    skillName: "REACT",
    type: "front_end",
  },
  {
    skillClass: "p45",
    imgUrl: "https://shopify.github.io/react-native-skia/img/logo.png",
    skillName: "REACT NATIVE",
    type: "front_end",
  },
  {
    skillClass: "p45",
    imgUrl:
      "https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1",
    skillName: "REACT REDUX",
    type: "front_end",
  },
  {
    skillClass: "p25",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    skillName: "HTML",
    type: "front_end",
  },
  {
    skillClass: "p89",
    imgUrl:
      "https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?rs=1&pid=ImgDetMain",
    skillName: "JAVASCRIPT",
    type: "programming_language",
  },
  {
    skillClass: "p70",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    skillName: "CSS",
    type: "front_end",
  },
  {
    skillClass: "p66",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    skillName: "TYPESCRIPT",
    type: "programming_language",
  },

  {
    skillClass: "p95",
    imgUrl:
      "https://th.bing.com/th/id/OIP.Y-BbFmqRsIQWzX5BWC4mNQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    skillName: "TAILWINDCSS",
    type: "front_end",
  },
  {
    skillClass: "p50",
    imgUrl:
      "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
    skillName: "BOOTSTRAP",
    type: "front_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://res.cloudinary.com/dkrchzi4b/image/upload/v1715775584/fqvkr5ebnwljns9ibihs.png",
    skillName: "Embedded Javascript Template",
    type: "front_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://res.cloudinary.com/dkrchzi4b/image/upload/v1715778102/smhqrxnz5bqndmdbdhss.png",
    skillName: "NodeJS",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain",
    skillName: "ExpressJS",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    skillName: "GraphQL",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://yt3.googleusercontent.com/qb18mOYkphbCOPiRPrvuH2Ki2KdVgVqpqiINTmLLl7UlHsgGv9--N-SvYSed_q067Pza6Z61zQ=s900-c-k-c0x00ffffff-no-rj",
    skillName: "Apollo",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://res.cloudinary.com/dkrchzi4b/image/upload/v1715778412/yi8bga4xsyonqhxwrnoi.png",
    skillName: "JsonWebToken",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://juffalow.com/assets/images/sequelize-large-e479b9b57623a222919263004221f888.png",
    skillName: "Sequelize ORM",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl: "https://avatars.githubusercontent.com/u/103283236?s=280&v=4",
    skillName: "Jest Testing Framework",
    type: "back_end",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    skillName: "PostgreSQL",
    type: "database",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyOe4xJhJFvDUbm1OSFnnEc4plFTvdYrBmOfNf-YUNA&s",
    skillName: "MongoDB",
    type: "database",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://yt3.googleusercontent.com/NuBWxGpdF0YzNSr7x_Tc8EEFXbQoHc0Xf9rU_ehxFPRikw8YPN886HltWeMDihKU8v5SeKFI3B4=s900-c-k-c0x00ffffff-no-rj",
    skillName: "Supabase",
    type: "database",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=id",
    skillName: "Firebase",
    type: "deployment",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSs16oeshnDgoDI-tcjcpyFDJeg6rVGomZpDMvZS7jg&s",
    skillName: "Amazon Web Services (AWS)",
    type: "deployment",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://cdn.changelog.com/uploads/icons/news_sources/qGw/icon_large.png?v=63692097118",
    skillName: "Vercel",
    type: "deployment",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1728px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png",
    skillName: "Microsoft Office",
    type: "others",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://e7.pngegg.com/pngimages/561/836/png-clipart-coreldraw-computer-software-graphics-suite-others-miscellaneous-cdr-thumbnail.png",
    skillName: "CorelDraw",
    type: "others",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
    skillName: "Adobe Photoshop",
    type: "others",
  },
  {
    skillClass: "p65",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/DBeaver_logo.png",
    skillName: "DBeaver",
    type: "others",
  },
];

const Skills = () => {
  return (
    <>
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Programming Language Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "programming_language" && (
            <div className="col-6 col-md-6 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Front End Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "front_end" && (
            <div className="col-6 col-md-4 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Back End Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "back_end" && (
            <div className="col-6 col-md-4 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Databases Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "database" && (
            <div className="col-6 col-md-4 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Deployment Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "deployment" && (
            <div className="col-6 col-md-4 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
      <h3
        className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
        style={{ fontSize: "2rem" }}
      >
        Others and Tools Skills
      </h3>
      {skillsContent.map((val, i) => (
        <>
          {val.type === "others" && (
            <div className="col-6 col-md-4 mb-3 mb-sm-5 " key={i}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={val.imgUrl}
                  className="img-fluid rounded-circle w-50"
                />
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {val.skillName}
                </h6>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Skills;
