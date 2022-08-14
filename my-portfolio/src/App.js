import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "./me.png";
import { useState } from "react";
import Education from "./components/Education";
import Work from "./components/Work";
import Programming from "./components/Programming";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  function SetAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgramming(false);
    setProjects(false);
  }
  function ChangeState(func1, state1) {
    SetAllFalse();
    func1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content">
            {" "}
            Fedi GALFAT
          </span>
        </div>
        <div className="bars mx-2" onClick={() => setOpenNav(!openNav)}>
          {" "}
        </div>
      </div>
      <nav
        className={
          !openNav
            ? "d-flex bg-new px-5 navbar-new py-3 flex-rows transition-all"
            : "d-flex bg-new px-5 navbar-fixed-new py-3 flex-rows transition-all"
        }
      >
        <span className="brand-name"> Fozz101</span>
        <div className="d-flex flex-rows">
          <span className="mx-4 nav-items">Home </span>
          <span className="mx-4 nav-items">About me</span>
          <span className="mx-4 nav-items">Resume </span>
          <span className="mx-4 nav-items">Contact me</span>
        </div>
      </nav>
      <div className="herosection px-9 py-2">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Fedi GALFAT</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Knack of buikding applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center py-3">
                <button className="btn-hire-me">Hire me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img className="img-fluid custom-img" alt="me" src={me}></img>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text"> About me</span>
          <span className="why-text-sub"> Why Choose me ?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_v1yudlrx.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full Stack Web and mobile developer with background knowledge in
                MERN Stack with Redux.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full Stack Web Developer </li>
                    <li>Blockchain Enthusiast </li>
                    <li>Java Developer </li>
                    <li>Python ftw </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My Formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-code"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workHistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProgramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-4 resume-right-section">
            {education === true && <Education />}
            {workHistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div className="contact-me-part">
        <div className="relative-bg"></div>
      </div>
      <div className="contact-inner-part d-flex flex-column">
        <span className="about-me-text"> Contact Me</span>
        <span className="why-text-sub mb-5"> Let's Keep in Touch</span>
        <Contact />
      </div>
    </div>
  );
}

export default App;
