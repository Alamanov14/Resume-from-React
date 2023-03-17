import React from "react";
import AboutMe from "../Header/AboutMe";
import bgPhoto from "../Img/resume-photo-v2-transformed.png";
import Education from "./Education";
import Skils from "./Skils";
const Body = () => {
  return (
    <div className="showMe">
      <img className="bgImg" src={bgPhoto} alt="my photo" />
      <div className="name-text">
        <p id="myName"> Mirlanov Nursultan </p>
        <p id="position">Beginner web developer </p>
        <div>
          <img
            className="sosiaMediaIcon"
            src="https://img.icons8.com/nolan/256/1A6DFF/C822FF/instagram-new.png"
            alt="instagramm"
          />
          <img
            className="sosiaMediaIcon"
            src="https://img.icons8.com/nolan/256/facebook-new.png"
            alt="FaceBook"
          />
          <img
            className="sosiaMediaIcon"
            src="https://img.icons8.com/nolan/256/whatsapp.png"
            alt="Whats app"
          />
        </div>
      </div>
      <AboutMe />
      <Skils />
      <Education />
    </div>
  );
};

export default Body;
