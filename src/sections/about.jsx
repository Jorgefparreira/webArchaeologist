import React, { Component } from "react";
import BrowserAnimation from "../components/browser_ani";

class About extends Component {
  constructor(props) {
    super(props);
    var height = window.innerHeight;
    this.state = {
      aboutMargin: height + "px",
      showAbout: ""
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        const heightw = window.innerHeight;
        this.getSectionHeight(heightw);
        this.setState({ aboutMargin: heightw - 200 + "px" });
      }.bind(this),
      2000
    );
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const heightw = window.innerHeight;
    this.getSectionHeight(heightw);
  };

  reachIframe(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  handleScroll = () => {
    this.setState({ showAbout: "show-about" });
  };

  getSectionHeight = heightw => {
    const height = this.divElement.clientHeight + heightw - 30;
    this.props.aboutHeight(height);
  };

  render() {
    return (
      <div className="page-height">
        <section
          className="main"
          id="about-section"
          style={{ marginTop: this.state.aboutMargin }}
        >
          <div className="container about-row">
            <div className="main-header">
              <div className="navbar-brand">
                <img
                  className="brand-img"
                  alt="Web Arch Logo"
                  src={require("../assets/brand.png")}
                />
              </div>
              <h1>Web Archaeologist</h1>
            </div>
            <div
              className={this.state.showAbout}
              id="about"
              ref={divElement => (this.divElement = divElement)}
            >
              <div className="row">
                <div className="col-12">
                  <article>
                    <p>
                      <strong>From archaeologist to web developer.</strong>{" "}
                      Having studied archaeology for my{" "}
                      <span
                        tooltip="University of Lisbon, 2004-2007"
                        className="about-tooltip"
                      >
                        degree
                      </span>{" "}
                      and{" "}
                      <span
                        tooltip="University of Lisbon, 2007-2010"
                        className="about-tooltip"
                      >
                        masters
                      </span>
                      , I worked in commercial archaeology for 9 years in
                      Portugal and in the UK. Although at first, this might not
                      seem very similar to web development, both have
                      problem-solving at their core. This is why I decided it
                      was finally time to pursue my dream of creating websites
                      and applications.
                    </p>
                  </article>
                </div>
                <div className="col-md-6">
                  <BrowserAnimation></BrowserAnimation>
                  {/* <div className="about-iframe-wrapper">
                    <iframe
                      className={`about-iframe ${this.state.showAboutIframe}`}
                      title="Web Dev Animation"
                      src="https://affectionate-roentgen-2bd2b8.netlify.com/"
                      id="about-iframe"
                    />
                  </div> */}
                </div>
                <div className="col-md-6 skills-row">
                  <h2>Experience with:</h2>
                  <br />
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Angular, React</li>
                    <li>PHP, MySQL</li>
                    <li>WordPress</li>
                    <li>Adobe Photoshop and Illustrator</li>
                    <li>Team working and attention to detail</li>
                    <li>Keeping to deadlines in commercial projects</li>
                  </ul>
                  <br />
                </div>
                {/* <div className="col-12">
              <h3 className="learn-more">For more information have a look at my <a className= "cv-modal-open" data-toggle="modal" data-target=".bs-example-modal-lg">CV</a>.</h3>           
            </div> */}
              </div>
            </div>
          </div>
          <div
            className="modal fade bs-example-modal-lg"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">CV</h2>
                  <button
                    type="button"
                    className="btn btn-default cv-modal-close-button"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
                <div className="modal-body">
                  <embed id="cv-pdf" src={require("../assets/CV.pdf")} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
