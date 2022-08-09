import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "./me.png";
function App() {
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name"> Fozz101</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home </span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume </span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
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
              <div className="d-flex flex-row justify-content-center mt-5">
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
    </div>
  );
}

export default App;
