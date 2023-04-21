import "./header.scss";
// import Button from "../button/button";
// import { ReactComponent as Logo } from "../../assets/svgviewer.svg";
const Header = () => {
  return (
    <header id="home">
      <nav className="navbar bg-gray navbar-default transparent navbar-fixed white bootsnav on no-full navbar-transparent">
        <div className="container">
          <div className="attr-nav">
            <ul>
              <li className="contact">
                <i className="flaticon-call-1"></i> +123(456)123
              </li>
            </ul>
          </div>

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="/#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo-light.png" className="logo" alt="Logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown">
                <a
                  href="/#"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Home
                </a>
                <ul className="dropdown-menu animated">
                  <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                      Home Multipage
                    </a>
                    <ul className="dropdown-menu animated">
                      <li>
                        <a href="index.html">Version One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Version Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Version Three</a>
                      </li>
                      <li>
                        <a href="index-4.html">Version Four</a>
                      </li>
                      <li>
                        <a href="index-5.html">Version Five</a>
                      </li>
                      <li>
                        <a href="index-6.html">Version Six</a>
                      </li>
                      <li>
                        <a href="index-7.html">Version Seven</a>
                      </li>
                      <li>
                        <a href="index-8.html">Version Eight</a>
                      </li>
                      <li>
                        <a href="index-9.html">Version Nine</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                      Home Onepage
                    </a>
                    <ul className="dropdown-menu animated">
                      <li>
                        <a href="index-op.html">Version One</a>
                      </li>
                      <li>
                        <a href="index-op-2.html">Version Two</a>
                      </li>
                      <li>
                        <a href="index-op-3.html">Version Three</a>
                      </li>
                      <li>
                        <a href="index-op-4.html">Version Four</a>
                      </li>
                      <li>
                        <a href="index-op-5.html">Version Five</a>
                      </li>
                      <li>
                        <a href="index-op-6.html">Version Six</a>
                      </li>
                      <li>
                        <a href="index-op-7.html">Version Seven</a>
                      </li>
                      <li>
                        <a href="index-op-8.html">Version Eight</a>
                      </li>
                      <li>
                        <a href="index-op-9.html">Version Nine</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                      Home Dark
                    </a>
                    <ul className="dropdown-menu animated">
                      <li>
                        <a href="index-dark.html">Version One</a>
                      </li>
                      <li>
                        <a href="index-dark-2.html">Version Two</a>
                      </li>
                      <li>
                        <a href="index-dark-3.html">Version Three</a>
                      </li>
                      <li>
                        <a href="index-dark-4.html">Version Four</a>
                      </li>
                      <li>
                        <a href="index-dark-5.html">Version Five</a>
                      </li>
                      <li>
                        <a href="index-dark-6.html">Version Six</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a target="_blank" href="rtl/index.html">
                      Home RTL <span className="badge">New</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  Company
                </a>
                <ul className="dropdown-menu animated" style={{display: 'none'}}>
                  <li>
                    <a href="about-us.html">About Company</a>
                  </li>
                  <li>
                    <a href="team.html">Meet Our Team</a>
                  </li>
                  <li>
                    <a href="team-single.html">Team Single</a>
                  </li>
                  <li>
                    <a href="contact.html">Get in Touch</a>
                  </li>
                  <li>
                    <a target="_blank" href="login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="register.html">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="404.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  Services
                </a>
                <ul className="dropdown-menu animated">
                  <li>
                    <a href="services.html">Services Version One</a>
                  </li>
                  <li>
                    <a href="services-2.html">Services Version Two</a>
                  </li>
                  <li>
                    <a href="services-3.html">Services Version Three</a>
                  </li>
                  <li>
                    <a href="services-4.html">Services Version Four</a>
                  </li>
                  <li>
                    <a href="services-single.html">Services Single</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  Case Studies
                </a>
                <ul
                  className="dropdown-menu animated"
                  style={{ display: "none", opacity: 1 }}
                >
                  <li>
                    <a href="case-studies-1.html">Case Studies One</a>
                  </li>
                  <li>
                    <a href="case-studies-2.html">Case Studies Two</a>
                  </li>
                  <li>
                    <a href="case-studies-3.html">Case Studies Three</a>
                  </li>
                  <li>
                    <a href="case-studies-carousel.html">
                      Case Studies Carousel
                    </a>
                  </li>
                  <li>
                    <a href="case-studies-single.html">Case Studies Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  Blog
                </a>
                <ul className="dropdown-menu animated">
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-2-colum.html">Blog Grid Two Colum</a>
                  </li>
                  <li>
                    <a href="blog-3-colum.html">Blog Grid Three Colum</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                  <li>
                    <a href="blog-single-with-sidebar.html">
                      Blog Single With Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
