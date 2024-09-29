import React from "react";
import Meteors from "../magicui/meteors";
import TextRevealByWord from "../magicui/text-reveal";
import BlurFade from "../magicui/blur-fade";

const MeteorsDemo = () => {
  return (
    <div className="z-10 flex min-h-64 w-full items-center justify-center text-center bg-transparent flex-col">
      <TextRevealByWord text='"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful"'/>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-white font-light text-lg opacity-75 md:text-2xl">- Albert Schweitzer -</span>
      </BlurFade>
    </div>
  );
};

export default MeteorsDemo;
