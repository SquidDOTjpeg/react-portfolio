import React from "react";
import WordBox from "../components/WordBox/index";
import "./style.css";

function About() {
  return (
    <>
      <WordBox
        words="Hey there! I'm Anthony Pillow, an aspiring full stack web developer. I
   have a wide range of knowledge of languages used in web development
   with a heavier focus on the MERN stack."
      />

      <WordBox words="I'm always looking for ways to improve myself, my code, and I'm always open to new ideas as well as suggestions." />

      
    </>
  );
}

export default About;
