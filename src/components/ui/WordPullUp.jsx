import WordPullUp from "@/components/magicui/word-pull-up";
import React from "react";

const WordPullUpDemo = ({words, className}) => {
  return (
    <WordPullUp
      className={className}
      words={words}
    />
  );
};

export default WordPullUpDemo;
