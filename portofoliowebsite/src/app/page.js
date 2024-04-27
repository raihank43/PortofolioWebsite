import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div
        id="navbar"
        className="flex justify-between text-white items-center font-bold bg-blue-600 w-full"
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

      <div className="flex justify-between bg-blue-600">
        <div className="flex flex-col">
          <h1 className="text-2xl">Hello there, My name is Raihan</h1>
          <p>
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

        <div>
          <img src="">
          </img>


        </div>
      </div>
    </main>
  );
}
