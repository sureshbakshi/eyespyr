import './footer.scss'
// import Button from '../button/button';
// import {ReactComponent as Logo}  from '../../assets/svgviewer.svg'
const Footer = () => {
    return (
        <footer className="bg-dark text-light">
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="equal-height col-lg-4 col-md-6 item">
                        <div className="f-item about">
                            <img src="assets/img/logo-light.png" alt="Logo"/>
                            <p>
                                Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted
                            </p>
                        </div>
                    </div>

                    <div className="equal-height col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Usefull Links</h4>
                            <ul>
                                <li>
                                    <a href="/#">classNameic Business</a>
                                </li>
                                <li>
                                    <a href="/#">Blog</a>
                                </li>
                                <li>
                                    <a href="/#">Project</a>
                                </li>
                                <li>
                                    <a href="/#">About Us</a>
                                </li>
                                <li>
                                    <a href="/#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="equal-height col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Services</h4>
                            <ul>
                                <li>
                                    <a href="/#">Marketing &amp; Sales</a>
                                </li>
                                <li>
                                    <a href="/#">Manufacturing</a>
                                </li>
                                <li>
                                    <a href="/#">Supply Chain</a>
                                </li>
                                <li>
                                    <a href="/#">Data Visualization</a>
                                </li>
                                <li>
                                    <a href="/#">Big Data</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="equal-height col-lg-4 col-md-6 item">
                        <div className="f-item contact">
                            <h4 className="widget-title">Contact Info</h4>
                            <p>
                                 Possible offering at contempt mr distance stronger an. Attachment excellence announcing
                            </p>
                            <div className="address">
                                <ul>
                                    <li>
                                        <strong>Email:</strong> support@validtheme.com
                                    </li>
                                    <li>
                                        <strong>Contact:</strong> +44-20-7328-4499
                                    </li>
                                </ul>
                            </div>
                            <ul className="social">
                                <li className="facebook">
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="twitter">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="youtube">
                                    <a href="/#"><i className="fab fa-youtube"></i></a>
                                </li>
                                <li className="instagram">
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-lg-6">
                        <p>© Copyright 2019. All Rights Reserved by <a href="/#">validthemes</a></p>
                    </div>
                    <div className="col-lg-6 text-right link">
                        <ul>
                            <li>
                                <a href="/#">Terms</a>
                            </li>
                            <li>
                                <a href="/#">Privacy</a>
                            </li>
                            <li>
                                <a href="/#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-shape"></div>
    </footer>
    )
}

export default Footer;