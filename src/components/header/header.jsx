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
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  About
                </a>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  Services
                </a>
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
