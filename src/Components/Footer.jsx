import React from "react";
import "./Footer.css"
import twitter from "../assets/Twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/Linkedin.svg"
import GitHub from "../assets/GitHub.svg"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="https://twitter.com/" target={"_blank"}><img src={twitter} alt="Twitter" /></a>
                <a href="https://www.facebook.com/" target={"_blank"}><img src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/" target={"_blank"}><img src={instagram} alt="instagram" /></a>
                <a href="https://www.linkedin.com/feed/" target={"_blank"}><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/Daniyar7639" target={"_blank"}><img src={GitHub} alt="GitHub" /></a>

            </div>
        </div>
    )
};
export default Footer;