import "./assets/css/App.css";
import ProgressBar from "./components/progressBar";

function App() {
  const technicalSkills = [
    { skill: "Auto CAD", progress: 97 },
    { skill: "Rhino6", progress: 85 },
    { skill: "SketchUp", progress: 80 },
    { skill: "Adobe Illustrator", progress: 90 },
    { skill: "Adobe Photoshop", progress: 90 },
    { skill: "Adobe Indesign", progress: 90 },
    { skill: "Lumion", progress: 90 },
    { skill: "Enscape", progress: 90 },
    { skill: "Qgis", progress: 90 },
    { skill: "Rstudio", progress: 90 },
  ];

  const languageSkills = [
    { skill: "Korean", progress: 80 },
    { skill: "English", progress: 45 },
    { skill: "Spanish", progress: 67 },
  ];

  return (
    <div id="home">
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <a className="social-link text-light" href="/">
                <i className="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="/">
                <i className="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="/">
                <i className="ti-google" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="/">
                <i className="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="/">
                <i className="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">힝둥건축</h1>
            <h6 className="header-mono">저는 건축 사랑하는 힝둥새입니다.</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>print Resume
            </button>
          </div>
        </div>
      </header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/resume" className="nav-link">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/portfolio" className="nav-link">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <section id="about" className="row about-section">
          <div className="col-lg-4 about-card">
            <h3>Who am I?</h3>
            <span className="line mb-5"></span>
            <h5 className="mb-3">
              An architect / Designer Located In Our Lovely Earth
            </h5>
            <p className="mt-20">
              We can change the world without big effort, only we need is love.
            </p>
            <button className="btn btn-outline-danger">Download My CV</button>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">personal Info</h3>
            <span className="line mb-5"></span>
            <ul className="mt40 info list-unstyled">
              <li>
                <span>Birthdate</span> : 07/07/1997
              </li>
              <li>
                <span>Email</span> : hingdoong8ird@gmail.com
              </li>
              <li>
                <span>phone</span> : + (010) 0000-0000
              </li>
              <li>
                <span>Skype</span> : Hingdoong{" "}
              </li>
              <li>
                <span>Address</span> : 12345 Fake ST NoWhere AB Country.
              </li>
            </ul>
            <ul className="social-icons pt-3">
              <li className="social-item">
                <a className="social-link" href="/">
                  <i className="ti-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="/">
                  <i className="ti-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="/">
                  <i className="ti-google" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="/">
                  <i className="ti-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="/">
                  <i className="ti-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">My Expertise</h3>
            <span className="line mb-5"></span>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-widget icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Architectural design</h6>
                <p className="subtitle">
                  {" "}
                  Renovation, Cafe, Kindergarden, School, pavillion, etc. .
                </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-paint-bucket icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Urban design</h6>
                <p className="subtitle">
                  Urban forest, Block design, urban regeneration,r.
                </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-stats-up icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Laboratory</h6>
                <p className="subtitle">
                  Architecture Urban Space Lab / thesis of urban & architecture.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="container">
            <h2 className="mb-5">
              <span className="text-danger">My</span> Resume
            </h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>Expertise</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="title text-danger">2025 - present</h6>
                    <p>Architect Freelancer</p>
                    <p className="subtitle">
                      I can modeling and planning also analysis about urban
                      social problems. please send me a email.
                    </p>
                    <hr />
                    <h6 className="title text-danger">2024</h6>
                    <p>Architect assitant</p>
                    <p className="subtitle">South Korea, Namdo.</p>
                    <hr />
                    <h6 className="title text-danger">2023</h6>
                    <p>Architect assitant</p>
                    <p className="subtitle">South Korea, Seoul. </p>
                    <h6 className="title text-danger">2023</h6>
                    <p>Architect internship</p>
                    <p className="subtitle">South Korea, Seoul. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>Education</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="title text-danger">2019 - present</h6>
                    <p>Architecture and Urban Space</p>
                    <p className="subtitle">AUSL.</p>
                    <hr />
                    <h6 className="title text-danger">2016 - 2024</h6>
                    <p>Diploma in Architecture</p>
                    <p className="subtitle">GNU.</p>
                    <hr />
                    <h6 className="title text-danger">2013 - 2015</h6>
                    <p>High School Degree</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum recusandae, cupiditate ullam dolor ratione
                      repellendus.aliquid repudiandae saepe!.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">Skills</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    {technicalSkills.map((skillData, index) => (
                      <ProgressBar
                        key={index}
                        skill={skillData.skill}
                        progress={skillData.progress}
                      />
                    ))}
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">Languages</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    {languageSkills.map((skillData, index) => (
                      <ProgressBar
                        key={index}
                        skill={skillData.skill}
                        progress={skillData.progress}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark text-center">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-lg-3">
                <div className="row ">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto">
                      <i className="ti-alarm-clock icon-xl"></i>
                    </div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">500</h1>
                    <p className="text-light mb-1">Hours Worked</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto">
                      <i className="ti-layers-alt icon-xl"></i>
                    </div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">50K</h1>
                    <p className="text-light mb-1">project Finished</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto">
                      <i className="ti-face-smile icon-xl"></i>
                    </div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">
                      200K
                    </h1>
                    <p className="text-light mb-1">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto">
                      <i className="ti-heart-broken icon-xl"></i>
                    </div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">2k</h1>
                    <p className="text-light mb-1">Coffee Drinked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <div className="container">
            <h2 className="mb-5 pb-4">
              <span className="text-danger">My</span> Services
            </h2>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i className="ti-vector text-danger" aria-hidden="true"></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">2D plannig</h5>
                    <p className="subtitle">
                      If you need any concept or plan, please send me an email.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i className="ti-write text-danger" aria-hidden="true"></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">3D Modeling</h5>
                    <p className="subtitle">
                      If you need any 3D Modeling services, please send me an
                      email with your prefer program_Rhino or Sketchup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i
                      className="ti-package text-danger"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">Diagram</h5>
                    <p className="subtitle">
                      If you need any diagram, please send me an email. Working
                      AI or pS or Qgis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i
                      className="ti-map-alt text-danger"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">IDEA</h5>
                    <p className="subtitle">
                      If you need any idea, please send me an email. Let's
                      debate each other. What if we are match, than we can make
                      a team!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i
                      className="ti-bar-chart text-danger"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">Analysis</h5>
                    <p className="subtitle">
                      If you need any analysis about site scale to urban scale,
                      please send me an email. I can analysis and make diagrams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                  <div className="card-header has-icon">
                    <i
                      className="ti-support text-danger"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">Rendering</h5>
                    <p className="subtitle">
                      If you need any rendering files or redering image, please
                      send me an email. I can make a Fantastic Images with
                      Lumion or Enscape also V-ray and pS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-custom-gray" id="price">
          <div className="container">
            <h1 className="mb-5">
              <span className="text-danger">packs</span> pricing
            </h1>
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-3">
                <div className="price-card text-center mb-4">
                  <h3 className="price-card-title">Free</h3>
                  <div className="price-card-cost">
                    <sup className="ti-money"></sup>
                    <span className="num">0</span>
                    <span className="date">mail</span>
                  </div>
                  <ul className="list">
                    <li className="list-item">
                      {" "}
                      <span className="text-muted">project</span>
                    </li>
                    <li className="list-item">
                      {" "}
                      <span className="text-muted">Diagrams</span>
                    </li>
                    <li className="list-item">
                      {" "}
                      <span className="text-muted">Modeling</span>
                    </li>
                    <li className="list-item">
                      {" "}
                      <span className="text-muted">plan</span>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-rounded w-lg">
                    send
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="price-card text-center mb-4">
                  <h3 className="price-card-title">Basic</h3>
                  <div className="price-card-cost">
                    <sup className="ti-money"></sup>
                    <span className="num">180</span>
                    <span className="date">day</span>
                  </div>
                  <ul className="list">
                    <li className="list-item">
                      1 <span className="text-muted">project</span>
                    </li>
                    <li className="list-item">
                      6 <span className="text-muted">Diagrams</span>
                    </li>
                    <li className="list-item">
                      1 <span className="text-muted">Modeling</span>
                    </li>
                    <li className="list-item">
                      3 <span className="text-muted">plan</span>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-rounded w-lg">
                    send
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="price-card text-center price-card-requried mb-4">
                  <h3 className="price-card-title">Exclusive</h3>
                  <div className="price-card-cost">
                    <sup className="ti-money"></sup>
                    <span className="num">1000</span>
                    <span className="date">week</span>
                  </div>
                  <ul className="list">
                    <li className="list-item">
                      1 <span className="text-muted">project</span>
                    </li>
                    <li className="list-item">
                      42 <span className="text-muted">Diagrams</span>
                    </li>
                    <li className="list-item">
                      7 <span className="text-muted">Modeling</span>
                    </li>
                    <li className="list-item">
                      21 <span className="text-muted">plan</span>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-rounded w-lg">
                    send
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="price-card text-center mb-4">
                  <h3 className="price-card-title">pro</h3>
                  <div className="price-card-cost">
                    <sup className="ti-money"></sup>
                    <span className="num">4000</span>
                    <span className="date">MO</span>
                  </div>
                  <ul className="list">
                    <li className="list-item">
                      2 <span className="text-muted">project</span>
                    </li>
                    <li className="list-item">
                      180 <span className="text-muted">Diagrams</span>
                    </li>
                    <li className="list-item">
                      30 <span className="text-muted">Modeling</span>
                    </li>
                    <li className="list-item">
                      90 <span className="text-muted">plan</span>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-rounded w-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-dark py-5">
          <div className="container text-center">
            <h2 className="text-light mb-5 font-weight-normal">
              I Am Available For FreeLance
            </h2>
            <button className="btn bg-primary w-lg">Hire me</button>
          </div>
        </section>

        <section className="section bg-custom-gray" id="portfolio">
          <div className="container">
            <h1 className="mb-5">
              <span className="text-danger">My</span> portfolio
            </h1>
            <div className="portfolio">
              <div className="filters">
                <a href="/" data-filter=".new" className="active">
                  New
                </a>
                <a href="/" data-filter=".advertising">
                  Advertising
                </a>
                <a href="/" data-filter=".branding">
                  Branding
                </a>
                <a href="/" data-filter=".web">
                  Web
                </a>
              </div>
              <div className="portfolio-container">
                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <a className="img-popup" href="./assets/imgs/web-1.jpg">
                      <img
                        src="./assets/imgs/web-1.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <a className="img-popup" href="./assets/imgs/web-2.jpg">
                      <img
                        src="./assets/imgs/web-2.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 advertising new">
                  <div className="portfolio-item">
                    <a
                      className="img-popup"
                      href="./assets/imgs/advertising-2.jpg"
                    >
                      <img
                        src="./assets/imgs/advertising-2.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">ADVERSTISING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 web">
                  <div className="portfolio-item">
                    <a className="img-popup" href="./assets/imgs/web-4.jpg">
                      <img
                        src="./assets/imgs/web-4.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 advertising">
                  <div className="portfolio-item">
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href="./assets/imgs/advertising-1.jpg"
                      >
                        <img
                          src="./assets/imgs/advertising-1.jpg"
                          className="img-fluid"
                          alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                        />
                      </a>
                      <div className="text-holder">
                        <h6 className="title">ADVERSITING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <div className="content-holder">
                      <a className="img-popup" href="./assets/imgs/web-3.jpg">
                        <img
                          src="./assets/imgs/web-3.jpg"
                          className="img-fluid"
                          alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                        />
                      </a>
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 advertising new">
                  <div className="portfolio-item">
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href="./assets/imgs/advertising-3.jpg"
                      >
                        <img
                          src="./assets/imgs/advertising-3.jpg"
                          className="img-fluid"
                          alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                        />
                      </a>
                      <div className="text-holder">
                        <h6 className="title">ADVERSITING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 advertising new">
                  <div className="portfolio-item">
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href="./assets/imgs/advertising-4.jpg"
                      >
                        <img
                          src="./assets/imgs/advertising-4.jpg"
                          className="img-fluid"
                          alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                        />
                      </a>
                      <div className="text-holder">
                        <h6 className="title">ADVERTISING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 branding new">
                  <div className="portfolio-item">
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href="./assets/imgs/branding-1.jpg"
                      >
                        <img
                          src="./assets/imgs/branding-1.jpg"
                          className="img-fluid"
                          alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                        />
                      </a>
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 branding">
                  <div className="portfolio-item">
                    <a
                      className="img-popup"
                      href="./assets/imgs/branding-2.jpg"
                    >
                      <img
                        src="./assets/imgs/branding-2.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>
                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 branding new">
                  <div className="portfolio-item">
                    <a
                      className="img-popup"
                      href="./assets/imgs/branding-3.jpg"
                    >
                      <img
                        src="./assets/imgs/branding-3.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 branding">
                  <div className="portfolio-item">
                    <a
                      className="img-popup"
                      href="./assets/imgs/branding-4.jpg"
                    >
                      <img
                        src="./assets/imgs/branding-4.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 branding">
                  <div className="portfolio-item">
                    <a
                      className="img-popup"
                      href="./assets/imgs/branding-5.jpg"
                    >
                      <img
                        src="./assets/imgs/branding-5.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                    </a>

                    <div className="content-holder">
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="blog">
          <div className="container">
            <h2 className="mb-5">
              Latest <span className="text-danger">News</span>
            </h2>
            <div className="row">
              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="./assets/imgs/blog1.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="title">Consectetur adipisicing elit</h6>

                  <p className="post-details">
                    <a href="/">By: Admin</a>
                    <a href="/">
                      <i className="ti-heart text-danger"></i> 234
                    </a>
                    <a href="/">
                      <i className="ti-comment"></i> 123
                    </a>
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet nesciunt qui sit velit delectus voluptates, repellat
                    ipsum culpa id deleniti. Rerum debitis facilis accusantium
                    neque numquam mollitia modi quasi distinctio.
                  </p>

                  <p>
                    <b>
                      Necessitatibus nihil impedit! Ex nisi eveniet, dolor
                      aliquid consequuntur repudiandae.
                    </b>
                  </p>
                  <p>
                    Magnam in repellat enim harum omnis aperiam! Explicabo illo,
                    commodi, dolor blanditiis cupiditate harum nisi vero
                    accusamus laudantium voluptatibus dolores quae obcaecati.
                  </p>

                  <a href="/" className="read-more">
                    Read more <i className="ti-angle-double-right"></i>
                  </a>
                </div>
              </div>

              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="./assets/imgs/blog2.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="title">Explicabo illo</h6>

                  <p className="post-details">
                    <a href="/">By: Admin</a>
                    <a href="/">
                      <i className="ti-heart text-danger"></i> 456
                    </a>
                    <a href="/">
                      <i className="ti-comment"></i> 264
                    </a>
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit excepturi laborum enim, vitae ipsam atque eum, ad
                    iusto consequuntur voluptas, esse doloribus. perferendis
                    porro quisquam vitae exercitationem aliquid, minus eos
                    laborum repudiandae, cumque debitis iusto omnis praesentium?
                    Laborum placeat sit adipisci illum tempore maxime, esse qui
                    quae? Molestias excepturi corporis similique doloribus. Esse
                    vitae earum architecto nulla non dolores illum at
                    perspiciatis quod, et deleniti cupiditate reiciendis harum
                    facere, delectus eum commodi soluta distinctio sit
                    repudiandae possimus sunt. Ipsum, rem.
                  </p>

                  <a href="/" className="read-more">
                    Read more <i className="ti-angle-double-right"></i>
                  </a>
                </div>
              </div>

              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="./assets/imgs/blog3.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h4 className="title">porro Quisqua</h4>

                  <p className="post-details">
                    <a href="/">By: Admin</a>
                    <a href="/">
                      <i className="ti-heart text-danger"></i> 431
                    </a>
                    <a href="/">
                      <i className="ti-comment"></i> 312
                    </a>
                  </p>

                  <p>
                    {" "}
                    consectetur adipisicing elit. Impedit excepturi laborum
                    enim, vitae ipsam atque eum, ad iusto consequuntur voluptas,
                    esse doloribus. perferendis porro quisquam vitae
                    exercitationem aliquid, minus eos laborum repudiandae,
                    cumque debitis iusto omnis praesentium? Laborum placeat sit
                    adipisci illum tempore maxime, esse qui quae? Molestias
                    excepturi corporis similique doloribus. Esse vitae earum
                    architecto nulla non dolores illum at perspiciatis quod, et
                    deleniti cupiditate reiciendis harum facere, delectus eum
                    commodi soluta distinctio sit repudiandae possimus sunt.
                    Ipsum, rem.
                  </p>

                  <a href="/" className="read-more">
                    Read more <i className="ti-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
