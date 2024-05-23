import Image1 from "../../../public/assets/img/portfolio/Timesheet/screenshot1.png";
import Image2 from "../../../public/assets/img/portfolio/DigiDagang/screenshot1.png";
import Image3 from "../../../public/assets/img/portfolio/Medichatrx/screenshot1.png";
import Image4 from "../../../public/assets/img/portfolio/Interactube/screenshot1.png";
import Image5 from "../../../public/assets/img/portfolio/ShareFlow/screenshot1.png";
import Image6 from "../../../public/assets/img/portfolio/KoneksiON/screenshot1.png";
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
    type: "MediChat Rx",
    image: Image3,
    tag: ["mobile"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Mobile Application",
        client: "Final Project Hacktiv8",
        language:
          "MongoDB, GraphQL, React Native, Node.js, Apollo Client, Expo Location, Artificial Intelligence Google Maps API",
        preview: "Here",
        linkedin: "Article",
        link: "https://github.com/orgs/Medichat-Rx/repositories",
        linkedinLink:
          "https://www.linkedin.com/pulse/medichatrx-tanya-keluhanmu-disini-carlos-hakim-34yjc/?trackingId=b2ldhIfPQ%2B%2BApmJHpwurdw%3D%3D",
        description: `A Mobile App for my final project during bootcamp in Hacktiv8 built using React Native, which is a chat-based AI app where users can share health issues and receive real-time advice. It offers recommendations and comprehensive information about suitable medications, including recommendation of nearby pharmacies, and it can generate content based on user’s complaints using AI.`,
      },
    ],
  },
  {
    id: 4,
    type: "Interactube",
    image: Image4,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Mobile Social Media Application",
        client: "Personal Project",
        language:
          "MongoDB, GraphQL, React Native, Node.js, Apollo Client, Redis",
        preview: "Here",
        link: "https://github.com/raihank43/InteracTube",
        description: `InteracTube is a social media application that I built using React Native, Node.js, and MongoDB. 
        It features user authentication and a wide range of social media features, 
        such as posting content, liking, commenting, following other users, 
        and searching for fellow users.
        `,
      },
    ],
  },
  {
    id: 5,
    type: "ShareFlow",
    image: Image5,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Personal Project",
        language: "Nestjs, ReactJS, PostgreSQL, Prisma ORM, Docker, TypeScript",
        preview: "Here",
        link: "https://github.com/raihank43/ShareFlow",
        description: `A Document management application where users can upload documents, download documents, delete documents or share with other users, this application has authentication, filtering and sort, RESTful API, and it is
        built using NestJs, Prisma, and React, it is also my first fullstack project that use docker for deployment
        `,
      },
    ],
  },
  {
    id: 6,
    type: "KoneksiON",
    image: Image6,
    tag: ["web"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Web Application",
        client: "Individual Project in Hacktiv8",
        language: "Nodejs, Express, Socket.io, PostgreSQL, Sequelize ORM, ReactJS, RESTful API",
        preview: "Here",
        link: "https://github.com/raihank43/IP-RMT46",
        description: `A real-time, chat-based social media application for my individual project, 
        it serves as my first fullstack application that uses client-server architecture, RESTful API and Test-Driven Development (TDD).
         In this application Users can register with Google OAuth, 
         chat with everyone or between users in real-time, send images, 
         update their profiles, delete messages, 
         and use commands like “/gif” to generate a gif and “/definitions” to get word definitions. 
         Users can also chat with AI chatbot on public group using "/chatai" commands, all powered by third-party APIs.
        `,
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
