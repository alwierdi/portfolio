import React from "react";
import { motion } from "framer-motion";
import Project1 from "../../assets/SimpleWeatherApp.jpeg";
import Project2 from "../../assets/SimpleToDoList.jpeg";
import Project3 from "../../assets/RandomPasswordGenerator.jpeg";
import Project4 from "../../assets/QrCodeGenerator.jpeg";

const Card = ({ img, alt, title, desc, viewLink, githubLink, dur }) => {
  const handleViewClick = () => {
    window.open(viewLink, "_blank");
  };

  const handleGithubClick = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: dur }}
      className="max-w-2xl rounded overflow-hidden shadow-lg group relative"
    >
      <img
        className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:filter group-hover:brightness-50 group-hover:scale-110"
        src={img}
        alt={alt}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-center p-4">
        <div className="font-bold text-xl text-white mb-2">{title}</div>
        <p className="text-gray-300 text-base mb-4">{desc}</p>
        <div className="flex gap-4">
          <button
            onClick={handleViewClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View
          </button>
          <button
            onClick={handleGithubClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Github
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const projects = [
    {
      img: { Project1 },
      alt: "Weather App",
      title: "Weather App",
      desc: "Simple Weather App Using Javascript and OpenWeather API.",
      viewLink: "https://alwierdi.github.io/weatherApp-simple/",
      githubLink: "https://github.com/alwierdi/weatherApp-simple.git",
      dur: 0.5,
    },
    {
      img: { Project2 },
      alt: "Simple To Do List App",
      title: "Simple To Do List",
      desc: "Simple To Do List App Using Javascript and LocalStorage.",
      viewLink: "https://alwierdi.github.io/To-DoList/",
      githubLink: "https://github.com/alwierdi/To-DoList.git",
      dur: 1,
    },
    {
      img: { Project3 },
      alt: "Random Password Generator",
      title: "Random Password Generator",
      desc: "Random Password Generator App Using Javascript.",
      viewLink: "https://alwierdi.github.io/randomPassword-generator/",
      githubLink: "https://github.com/alwierdi/randomPassword-generator.git",
      dur: 1.5,
    },
    {
      img: { Project4 },
      alt: "Qr Code Generator",
      title: "Qr Code Generator",
      desc: "Qr Code Generator App Using Javascript and QRCode API.",
      viewLink: "https://alwierdi.github.io/qrCodeGenerator/",
      githubLink: "https://github.com/alwierdi/qrCodeGenerator.git",
      dur: 2,
    },
  ];

  return (
    <div className="container mx-auto p-6 border-b border-neutral-900 pb-32 lg:mb-36">
      <div className="flex justify-center mb-16">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold text-2xl md:text-5xl"
        >
          My Recently Project
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
        {projects.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            alt={project.alt}
            title={project.title}
            desc={project.desc}
            viewLink={project.viewLink}
            githubLink={project.githubLink}
            dur={project.dur}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
