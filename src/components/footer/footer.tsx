import { FaXTwitter, FaDribbble } from "react-icons/fa6";
import { FaInstagram, FaMediumM, FaBehance } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container container">
        <div className="main--footer">
          <div className="footer--text">
            <h2 className="title logo">Boostlancer</h2>
            <p className="text">
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool. Candles us galleons snape knut trace.
              Snare side.
            </p>
          </div>
          <div className="input--container">
            <CiMail />
            <input type="email" name="email" placeholder="Email address" />
            <button className="input--btn">Get Started</button>
          </div>
        </div>

        <div className="sec-footer">
          <div className="copyright">
            <span>LitCollective © 2022</span>
          </div>
          <div className="links">
            <div className="link">
              <FaBehance />
              <span>Behance</span>
            </div>
            <div className="link">
              <FaDribbble />
              <span>Dribbble</span>
            </div>
            <div className="link">
              <FaXTwitter />
              <span>Twitter</span>
            </div>
            <div className="link">
              <FaInstagram />
              <span>Instagram</span>
            </div>
            <div className="link">
              <FaMediumM />
              <span>Medium</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
