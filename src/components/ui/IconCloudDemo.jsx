import React from "react";
import IconCloud from "../magicui/icon-cloud";

const IconCloudDemo = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "mongodb",
    "nextdotjs",
    "vercel",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "laravel",
    "c",
    "tailwindcss",
    "bootstrap",
  ];

  return (
    <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-lg bg-background px-4 md:px-20 pb-8 md:pb-20 pt-4 md:pt-8 mr-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudDemo;
