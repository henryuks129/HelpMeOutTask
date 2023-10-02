import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import imageicon from "../assets/rec-1.cb7888a47e24214aeb105805426a8300.svg.svg";
import "../styles/Works.css";

export default function Works() {
  return (
    <div className="container mb-5">
      <div className="text-center pt-5 pb-4">
        <h1 className="works-main-header">How it Works</h1>
      </div>
      <div className="d-flex align-items-center gap-4">
        <div>
            <div className="text-center">
                <img src={icon1} alt="" className="works-number-icons mb-3"/>
            </div>
            <h5 className="works-header text-center">Record Screen</h5>
            <p className="works-header-text text-center mb-4">Click the <span>"Start Recording"</span> button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
            <img src={imageicon} alt="" className="works-video-repo"/>
        </div>
        <div>
            <div className="text-center">
                <img src={icon2} alt="" className="works-number-icons mb-3"/>
            </div>
            <h5 className="works-header text-center">Share Your Recording</h5>
            <p className="works-header-text text-center mb-4">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
            <img src={imageicon} alt="" className="works-video-repo"/>
        </div>
        <div>
            <div className="text-center">
                <img src={icon3} alt="" className="works-number-icons mb-3"/>
            </div>
            <h5 className="works-header text-center">Learn Effortlessly</h5>
            <p className="works-header-text text-center mb-4">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
            <img src={imageicon} alt="" className="works-video-repo"/>
        </div>
      </div>
    </div>
  );
}
