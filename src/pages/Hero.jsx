import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import rightarrow from "../assets/arrow-right.svg";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="pt-5 pb-5">
      <section className="container d-flex relative gap-3">
        <div className="w-100 hero-text-body">
          <h1 className="hero-header">
            Show Them <br /> Don't Just Tell
          </h1>
          <p className="hero-header-text mb-4 mt-2">
            Help your friends and loved ones by creating and sending <br />{" "}
            videos on how to get things done on a website.
          </p>
          <Link to={"/Login"} className="text-decoration-none">
          <button className="hero-button">
            Install HelpMeOut{" "}
            <img src={rightarrow} alt="" className="hero-button-arrow" />
          </button>
          </Link>
        </div>
        <div className="frame-body mt-4">
          <div className="frame-inner w-100">
            <div className="img-fluid w-100">
              <img src={frame1} alt="" className="frames-image" />
              <img src={frame2} alt="" className="mt-3 frames-image" />
            </div>
            <img src={frame3} alt="" className="frames-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
