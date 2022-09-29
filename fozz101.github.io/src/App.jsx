import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "./me.png";
import { useEffect, useRef, useState, Suspense } from "react";
import Education from "./components/Education";
import Work from "./components/Work";
import Programming from "./components/Programming";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const App = () => {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Some <i>strings</i> are slanted",
        "Some <strong>strings</strong> are bold",
        "HTML characters &times; &copy;",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
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
  const { i18n, t } = useTranslation(["home"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
        <span className="brand-name"> Fozz101 (Under Construction)</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {t("home")}{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {t("aboutme1")}
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {t("resume")}{" "}
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {t("contactme1")}
          </a>
          <select
            className="form-select"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option className="select-items" value="en">
              English
            </option>
            <option className="select-items" value="fr">
              Français
            </option>
            <option className="select-items" value="de">
              Deutsch
            </option>
          </select>
        </div>
      </nav>
      <div className="herosection px-9 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <div className="colz">
                <div className="colz-icon">
                  <a
                    href="https://fb.com/fedi.galfat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook-square px-1"></i>
                  </a>
                  <a
                    href="https://github.com/fozz101"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github px-1"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin px-1"></i>
                  </a>
                </div>
              </div>
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Fedi GALFAT</span>
              </span>
              <span className="Im-text-enthusiastic py-2" ref={el}>
                {
                  //Enthusiastic Dev 😎
                }
              </span>
              <span className="Im-text-subheading">
                Short Desc about me test
              </span>
              <div className="d-flex flex-row justify-content-center py-3">
                <a href="#contactme" className="btn-hire-me">
                  {t("hireme")}
                </a>
                <a
                  href=""
                  className="btn-resume-me"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("getresume")}
                </a>
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
          <span className="about-me-text" id="aboutme">
            {" "}
            {t("aboutme2")}
          </span>
          <span className="why-text-sub"> {t("whychooseme")}</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets6.lottiefiles.com/packages/lf20_v1yudlrx.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
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
        <span className="about-me-text" id="resume">
          {t("resume")}
        </span>
        <span className="why-text-sub">{t("myformalbiodetails")}</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white noselect">
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
            <div className="d-flex flex-column noselect">
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
            {programming === true}{" "}
            {
              //&&<Programming />
            }
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"></div>
      </div>
      <div className="contact-inner-part d-flex flex-column">
        <span className="about-me-text"> {t("contactme2")}</span>
        <span className="why-text-sub mb-5"> {t("letskeepintouch")}</span>
        <Contact />
      </div>
    </div>
  );
};

export default App;
