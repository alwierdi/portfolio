import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import WordRotateDemo from "../ui/WordRotate";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePict from "../../assets/lowkey.jpg";

const Hero = () => {
  return (
    <section id="header">
      <div className="pb-20 md:pb-32 lg:mb-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <BlurFade delay={0.25 * 2} inView>
                <h2 className="text-lg mx-0 font-light text-white tracking-tighter sm:text-3xl sm:mb-3 xl:text-4xl xl:mb-5">
                  Hallo 👋,
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 3} inView>
                <span className="text-2xl mx-0 font-semibold text-white tracking-wide sm:text-3xl xl:text-4xl">
                  I'm Alwi Erdi Musthafa
                </span>
                <p className="text-sm mx-0 my-3 font-extralight text-white sm:text-lg sm:mt-2 xl:text-lg">
                  From Jakarta, Indonesia. Dedicated to continuous learning and
                  development. My portfolio is the culmination of my hard work,
                  creativity, and commitment to excellence.
                </p>
              </BlurFade>
              <BlurFade delay={0.25 * 4} inView>
                <WordRotateDemo
                  words={["Frontend Developer", "UI/UX Designer"]}
                  className="text-purple-700 font-bold text-3xl my-2 md:text-4xl"
                />
              </BlurFade>
              <div className="container flex justify-center w-full my-5 px-0 lg:justify-start">
                <BlurFade delay={0.25 * 4} inView>
                  <a
                    href="/src/assets/AlwiErdiMusthafa_CV.pdf"
                    className="mt-4 px-4 py-1 text-sm md:px-6 md:py-2 lg:text-lg border border-white inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] text-white font-semibold rounded-xl transition ease-in-out hover:bg-[radial-gradient(#000000_1px,transparent_1px)] hover:bg-white hover:text-black"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Here My CV
                  </a>
                </BlurFade>
                <div className="flex space-x-4 ml-6">
                  <BlurFade delay={0.25 * 5} inView>
                    <a
                      href="https://github.com/alwierdi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400"
                    >
                      <FaGithub size={24} />
                    </a>
                  </BlurFade>

                  <BlurFade delay={0.25 * 3} inView>
                    <a
                      href="https://www.linkedin.com/in/alwierdi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </BlurFade>

                  <BlurFade delay={0.25 * 4} inView>
                    <a
                      href="https://www.instagram.com/alwierdi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:mt-4 lg:w-1/2 lg:p-8 lg:mt-0">
            <div className="flex justify-center">
              <BlurFade delay={0.25 * 5} inView>
                <img
                  src={profilePict}
                  alt="Alwi Erdi"
                  className="mt-6 w-screen object-cover h-80 lg:rounded-full lg:w-80"
                />
                <div className="mt-6 absolute inset-0 shadow-lg bg-black opacity-30 lg:opacity-0"></div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
