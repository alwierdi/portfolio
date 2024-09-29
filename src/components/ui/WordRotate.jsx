import WordRotate from "@/components/magicui/word-rotate";
import React from 'react'

const WordRotateDemo = ({words, className}) => {
  return (
    <WordRotate className={className} words={words}/>
  )
}

export default WordRotateDemo