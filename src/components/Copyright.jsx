import facebookImg from "../assets/images/facebook.png";
import twitterImg from "../assets/images/twitter.png";
import linkdInImg from "../assets/images/linkdin.png";
import youtubeImg from "../assets/images/youtube.png";
import "./Copyright.scss";

export const Copyright = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <img className="icon" src={facebookImg} alt="Facebook" />
        <img className="icon" src={twitterImg} alt="Twitter" />
        <img className="icon" src={linkdInImg} alt="LinkedIn" />
        <img className="icon" src={youtubeImg} alt="YouTube" />
      </div>
      <p className="email">Example@email.com</p>
      <p className="copyright">Copyright © 2020 Name. All rights reserved.</p>
    </div>
  );
};
