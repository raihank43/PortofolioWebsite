import Image1 from "../../../public/assets/img/portfolio/Timesheet/screenshot1.png";
import Image2 from "../../../public/assets/img/portfolio/DigiDagang/screenshot1.png";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Timesheet Management App",
    image: Image1,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Happy Homes",
        language:
          "Express.js, Supabase(PostgreSQL), Next.js, Sequelize ORM, JoyUI",
        preview: "Here",
        deploy: "Here",
        link: "https://github.com/raihank43/timesheet-app",
        deployLink: "https://timesheet-hh.vercel.app/",
        description: `This is a tool designed to track the activities of
        freelancers. It allows you to add employees, set their
        hourly rates in Indonesian Rupiah, and record their
        activities with details such as activity title,
        project name, start date, end date, start time, end
        time, duration, and total hours. Then it can calculate
        the total income based on the employee’s rate per
        hour. It features the most comprehensive data
        management functionality such as multiple selection
        filtering, sorting, searching, pagination and it can
        also export the employee activities data and total
        income to excel.`,
      },
    ],
  },
  {
    id: 2,
    type: "DigiDagang - ECommerce Web App",
    image: Image2,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website Ecommerce",
        client: "Personal Project",
        language: "MongoDB, Next.js, Node.js, TailwindCSS, TypeScript",
        preview: "Here",
        deploy: "Here",
        link: "https://github.com/raihank43/DigiDagang",
        deployLink: "https://digidagang.vercel.app/",
        description: `This is a full-stack e-commerce web application that I built using Next.js, Node.js, and MongoDB. It features user authentication,  allowing users to browse products, add them to their wishlist, and remove items from their wishlist.`,
      },
    ],
  },
  {
    id: 3,
    type: "slider project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
  {
    id: 4,
    type: "local project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 5,
    type: "saas project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "HTML, CSS, ReactJS",
        preview: "www.envato.com",
        link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: Image6,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.pexels.com",
        link: "https://www.pexels.com",
      },
    ],
  },
  {
    id: 7,
    type: "facebook project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },
];

export default PortfolioData;
