import placeholder1 from "../assets/Icon placeholder1.svg";
import placeholder2 from "../assets/Icon placeholder2.svg";
import placeholder3 from "../assets/Icon placeholder3.svg";
import videorepo from "../assets/Video Repository.svg";
import "../styles/Features.css";

export default function Features() {
  return (
    <div className="features-main pb-4 pt-4">
      <div className="features-inner">
      <div className="container pb-5">
        <div className="text-center pt-5 pb-4">
          <h3 className="features-header">Features</h3>
          <p className="features-header-text">Key Highlights of Our Extension</p>
        </div>
        <div className="d-flex">
          <div className="w-100">
            <div className="d-flex align-items-center gap-2">
              <img src={placeholder1} alt="" className="features-images"/>
              <div>
                <h5>Simple Screen Recording</h5>
                <p className="features-p">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={placeholder2} alt="" className="features-images"/>
              <div>
                <h5>Easy-to-Share URL</h5>
                <p className="features-p">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={placeholder3} alt="" className="features-images"/>
              <div>
                <h5>Revisit Recordings</h5>
                <p className="features-p">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="w-100">
            <img src={videorepo} alt="" className="features-video-repo-image"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
