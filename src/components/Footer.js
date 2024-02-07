import React from 'react'
import { logo } from '../services/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className="main-footer bgdep">
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="ftrsc wow fadeInUp">
                                <div className="ftrscim">
                                    <a href="index.php"><img src={logo} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 wow fadeInUp">
                            <div className="ftebxd">
                                <h3>Our Address</h3>
                                <p>4th Floor, 124B, Southern Ave, Golpark, Hindustan Park, Gariahat, Kolkata-29</p>
                                <ul className="social-icon-one social-icon-colored">
                                    <li><a href="#"><FontAwesomeIcon size="xs" className='fab' icon={faFacebook} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon size="xs" className='fab' icon={faXTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon size="xs" className='fab' icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon size="xs" className='fab' icon={faLinkedin} /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp">
                            <div className="ftebxd">
                                <h3>Order Online</h3>
                                <p>If you want to book a table, You can contact with our staff</p>
                                <h4><a href="tel:+918597898654">+91 85978 98654</a></h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp">
                            <div className="ftebxd">
                                <h3>Open Hours</h3>
                                <p><span>Sun - Mon </span>  09:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <ul className="ftrsctxul2">
                                        <li><a href="careers.php">Careers</a></li>
                                        <li><a href="privacy_policy.php">Privacy Policy</a></li>
                                        <li><a href="disclaimer.php">Disclaimer</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="copyright-text">
                                        <p>© Copyright 2023 All Rights Reserved </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
