import React from "react";
import SlightFlip from "../magicui/flip-text";
import IconCloudDemo from "../ui/IconCloudDemo";
import { MagicCard } from "../magicui/magic-card";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStack = () => {
  return (
    <div className="border-b border-neutral-900 pb-32 lg:mb-36">
      <div className="flex flex-wrap items-center">
        <div className="w-full">
          <div className="flex justify-center my-5">
            <SlightFlip
              word={"Tech Stack & Tools"}
              className={
                "text-3xl font-bold -tracking-widest text-white md:text-5xl"
              }
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start w-full overflow-hidden">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-1 flex-wrap gap-x-8 gap-y-4 md:gap-6"
            >
              <IconCloudDemo />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1.5 }}
              className="flex flex-1 flex-wrap gap-x-8 gap-y-4 md:gap-6 w-full pt-24"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#F7DF1E"
                >
                  Javascript
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#FFFFFF"
                >
                  Express JS
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#8CC84B"
                >
                  Node JS
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#61DAFB"
                >
                  React
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#FF2D55"
                >
                  Laravel
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#FFFFFF"
                >
                  Next JS
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(7)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#005A9E"
                >
                  C
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#db1514"
                >
                  Java
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#0045fe"
                >
                  Typescript
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(8)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#38B2AC"
                >
                  Tailwind
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#4DB33D"
                >
                  MongoDB
                </MagicCard>
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="w-1/4 h-28"
              >
                <MagicCard
                  className="flex justify-center items-center"
                  gradientColor="#F05032"
                >
                  Figma
                </MagicCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
