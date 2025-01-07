import "./assets/css/App.css";

function App() {
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
              <i className="ti-printer pr-2"></i>Print Resume
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
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <section id="about" className="about-section">
          <div className="row">
            <div className="col-lg-4 about-card">
              <h3>Who am I?</h3>
              <p>An architect / Designer Located In Our Lovely Earth</p>
              <button className="btn btn-outline-danger">Download My CV</button>
            </div>
            <div className="col-lg-4 about-card">
              <h3>Personal Info</h3>
              <ul>
                <li>Birthdate: 07/07/1997</li>
                <li>Email: hingdoong8ird@gmail.com</li>
                <li>Phone: + (010) 0000-0000</li>
                <li>Skype: Hingdoong</li>
                <li>Address: 12345 Fake ST NoWhere AB Country</li>
              </ul>
            </div>
            <div className="col-lg-4 about-card">
              <h3>My Expertise</h3>
              <p>Renovation, Urban design, and more...</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
