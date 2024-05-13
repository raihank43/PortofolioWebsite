"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const message = "Hello there, My name is Raihan";

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const typeText = () => {
      if (currentIndex < message.length) {
        setText((prevText) => prevText + message[currentIndex]);
        currentIndex++;
        timer = setTimeout(typeText, 50); // Adjust the typing speed here (in milliseconds)
      } else {
        setIsTyping(false);
      }
    };

    typeText();

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div
        id="navbar"
        className="flex justify-between text-white items-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
      >
        <h1 className="text-6xl p-6">RaihanLogo</h1>

        <div className="flex p-6 gap-10">
          <h1 className="">Home</h1>
          <h1 className="">About</h1>
          <h1 className="">Projects</h1>
          <h1 className="">Contacts</h1>
          <h1 className="">Services</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center bg-gradient-to-r from-cyan-500 to-blue-500 pb-36 ease-in-out duration-500 rounded-b-lg">
        <div className="flex p-6 gap-6 flex-col">
          {isTyping && <h1 className="text-6xl font-bold">{text}</h1>}
          {!isTyping && <h1 className="text-6xl font-bold">{message}</h1>}

          <p className="text-justify">
            Having various knowledge of design and a strong interest in
            technology, I am now focusing on full-stack web development. My
            experience in design has provided me with a unique perspective on
            user experience, which I leverage when developing front-end
            interfaces. On the other hand, my interest in back-end development
            allows me to build robust and efficient systems. This combination of
            skills positions me uniquely as a full-stack developer, capable of
            overseeing projects from conception to completion. I am always eager
            to learn, open to challenges, and keen to collaborate with
            like-minded individuals to create a visually appealing content and
            innovative digital solutions.
          </p>
        </div>

        <div className="p-6 flex flex-col justify-center items-center">
          {/* <div className="w-60 h-60 rounded-full bg-orange-500 bg-[url('/RaihanProfile-removebg.png')]"></div> */}
          <img
            className="w-96 h-96 rounded-full object-cover bg-orange-500 transition duration-500 ease-in-out hover:shadow-white"
            src="./RaihanProfile-removebg.png"
          ></img>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 text-black">
        <h1 className="text-6xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Project 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Project 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Project 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 text-black">
        <h1 className="text-6xl font-bold mb-6">My Services</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Service 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Service 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Service 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget eros et nunc ultricies ultricies. Nullam auctor, turpis nec
              fringilla lacinia, elit libero ultricies eros, vel ultrices nunc
              justo sit amet nunc.
            </p>
          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white">
        <h1 className="p-6">RaihanLogo</h1>
        <div className="flex p-6 gap-10">
          <h1 className="">Home</h1>
          <h1 className="">About</h1>
          <h1 className="">Projects</h1>
          <h1 className="">Contacts</h1>
          <h1 className="">Services</h1>
        </div>
      </footer>
    </main>
  );
}
