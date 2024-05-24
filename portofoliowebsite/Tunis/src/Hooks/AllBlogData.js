import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";
import javascriptroadmap from "../../public/assets/img/blog/javascript-roadmap.png";
import img2 from "../../public/assets/img/blog/blog-post-2.jpg";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: javascriptroadmap,
      title: "The Roadmap of Learning Fundamental JavaScript",
      commentor: "Raihan",
      date: "24 May 2024",
      tag: `programming, javascript, computer, learning`,
      description1:
        "JavaScript is the backbone of web development, powering the dynamic behavior on most websites and web applications. For aspiring developers, understanding the fundamentals of JavaScript is crucial. This roadmap will guide you through the key concepts and resources to help you become proficient in JavaScript.",
      description2:
        "Step 1: Grasp the Basics: Begin with the basics of JavaScript syntax and operations. Familiarize yourself with variables, data types, and operators. Variables are the named storage for data, and understanding var, let, and const will help you manage data effectively.",
      description3:
        "Step 2: Dive into Functions and Scopes: Functions are reusable blocks of code that perform a specific task. Learn how to create functions, pass arguments, and return values. Scopes define the visibility of variables in different parts of your code. Understanding global and local scopes will help you write efficient and bug-free code.",
      description4:
        "Step 3: Understand the JavaScript Engine: Discover how the JavaScript engine works under the hood. This includes the execution context, hoisting, and the role of the JavaScript engine in interpreting your code ",
      description5:
        "Step 4: Master ‘this’ Keyword: The this keyword is a fundamental concept in JavaScript that refers to the object it belongs to. It’s crucial in the context of object-oriented programming and function invocation.",
      description6:
        "Step 5: Explore Objects and Prototypes: JavaScript is prototype-based, meaning that objects inherit properties and methods from a prototype. Delve into object creation, prototypal inheritance, and property descriptors.",
      description7:
        "Step 6: Learn Asynchronous JavaScript: Asynchronous JavaScript, including callbacks, promises, and async/await, is vital for handling operations like fetching data from a server. Understanding these concepts will allow you to write non-blocking code.",
      description7:
        "Step 7: The Document Object Model (DOM): The DOM is an API for HTML and XML documents that provides a structural representation of the document. Learn how to manipulate the DOM to dynamically change the content, structure, and style of a webpage3.",
      description8:
        "Step 8: Advanced Concepts: Once you have a solid foundation, move on to advanced topics such as closures, event bubbling, and template literals. These concepts will enhance your ability to write efficient and powerful JavaScript code.",
      description9:
        "Learning JavaScript is a journey of continuous improvement. By following this roadmap and utilizing the resources provided, you’ll be well on your way to mastering the fundamentals of JavaScript and becoming a proficient web developer.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
