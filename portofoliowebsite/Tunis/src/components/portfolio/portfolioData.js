import Image1 from "../../../public/assets/img/portfolio/Timesheet/screenshot1.png";
import Image2 from "../../../public/assets/img/portfolio/DigiDagang/screenshot1.png";
import Image3 from "../../../public/assets/img/portfolio/Medichatrx/screenshot1.png";
import Image4 from "../../../public/assets/img/portfolio/Interactube/screenshot1.png";
import Image5 from "../../../public/assets/img/portfolio/ShareFlow/screenshot1.png";
import Image6 from "../../../public/assets/img/portfolio/KoneksiON/screenshot1.png";
import Image7 from "../../../public/assets/img/portfolio/CircleKita/screenshot1.png";
import Image8 from "../../../public/assets/img/portfolio/GoPotik/screenshot1.png";
import Image9 from "../../../public/assets/img/portfolio/TrawlBens/screenshot1.png";
import Image10 from "../../../public/assets/img/portfolio/Bookies/screenshot1.png";

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
        description: `As the team leader of a group of four, I spearheaded the development chat-based AI mobile app where users can share health issues and receive real-time advice. It offers information on medications, including recommendation of nearby pharmacies, and it can generate content based on user’s complaints using AI.

Responsibilities and Achievements:

- Led the project from conception to completion, ensuring effective collaboration and communication within the team.
- Designed application flow to ensure consistency and make it easier for users to learn and use the application
- Developed features to store user complaints functionality to help AI understand more about user needs and symptoms
- Developed the backend chat AI functionality that powers real-time advice based on user input.
- Designed intuitive frontend interfaces to enhance user experience and engagement.
- Successfully delivered the project within the stipulated timeline, demonstrating my ability to manage time and resources effectively.`,
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
        description: `InteracTube is a mobile social media application that I built using React Native, Node.js, and MongoDB. 
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
        language:
          "Nodejs, Express, Socket.io, PostgreSQL, Sequelize ORM, ReactJS, RESTful API",
        preview: "Here",
        link: "https://github.com/raihank43/IP-RMT46",
        deploy: "Here",
        deployLink: "https://koneksi-on.web.app/",
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
    type: "CircleKita",
    image: Image7,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Pair Project Phase 1 Hacktiv8",
        language:
          "Node.js, Express, PostgreSQL, EJS, Sequelize ORM, Bcrypt, Session",
        preview: "Here",
        link: "https://www.facebook.com/ibthemes",
        description: `
        Social Media platform for my Pair Project. Using a monolith architecture as I'm learning back end and front end web development. It enables users to interact, share content, upload image, liking posts, set up profiles and see other people's profile. This was Developed with NodeJS, ExpressJS, PostgreSQL, Sequelize, and EJS. And it utilizes bcrypt for user account's password encryption and session for authentication. it offers a user-friendly interface for users to engage with each other and discover interesting content.
        `,
      },
    ],
  },
  {
    id: 8,
    type: "GoPotik",
    image: Image8,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Hackaton Project Phase 0 Hacktiv8",
        language: "HTML, CSS, Javascript",
        preview: "Here",
        link: "https://github.com/raihank43/Gopotik",
        deploy: "Here",
        deployLink: "https://hackim18.github.io/Gopotik/",
        description: `
        A web platform designed for ease of online medicine purchases. This was my first group project that I and my 3 other friends made
        for Hackathon on Hacktiv8 Bootcamp. 
        I contributed in UI design, added cart functionalities, 
        and managed dynamic stock updates using plain  HTML, CSS, and JavaScript DOM
        `,
      },
    ],
  },
  {
    id: 9,
    type: "TrawlBens Mockup Design",
    image: Image9,
    tag: ["mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "UI/UX Mockup Web Design",
        client: "TrawlBens",
        language: "Figma",
        preview: "Figma Link",
        link: "https://www.figma.com/design/sVO45on6M9Qw06mwtRY1Li/DESIGN-WEB-TRAWLBENS?node-id=0-1&t=tkipF5jiduFmVCY3-0",
      },
    ],
  },
  {
    id: 10,
    type: "Bookies Mockup Design",
    image: Image10,
    tag: ["mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "UI/UX Mockup Mobile Design",
        client: "Personal Project on PRODES ITS",
        language: "Figma",
        preview: "Figma Link",
        link: "https://www.figma.com/file/4vX6z1O0h8mQbV1m6XQg5v/Design-Mobile-App?node-id=0%3A1",
        description: `A mobile application design for book lovers. This design was made during my studies on Design and Online Business on PRODES ITS. It features a user-friendly interface for users to browse books, read book reviews, and purchase books.`,
      },
    ],
  },
];

export default PortfolioData;
