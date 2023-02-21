import React from "react";
import img from "../assets/Laura.png"
import mine from "../assets/Daniyar.jpg"
import Footer from "./Footer"



const Main = () => {
    return (
      <main>
        <div className="main-photo">
          <img src={img} alt="knln" />
        </div>
        <div className="name">
            <h1>Laura Smith</h1>
            <p className="name-job">Frontend Developer</p>
            <p className="name-link">laurasmith.website</p>
            <a href="#" className="btn-1">
              <button className="btn1">
                <p className="btn1-text">EMAIL</p>
                <i class="uil uil-envelope-minus"></i>
              </button>
            </a>
        </div>
        <div className="article">
          <h3>About</h3>
          <p className="article-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
          <h3>Interests</h3>
          <p className="article-text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      <Footer />
       

      </main>
    )
};
export default Main;