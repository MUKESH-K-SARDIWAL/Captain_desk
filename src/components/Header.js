import React from 'react';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Header = () => {
    return (
        <header className="main-header header-style-two alternate">
            <div className="main-box">
                <div className="container-fluid clearfix">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-3 order-lg-last">
                            <div className="hdr_righb">
                            </div>
                            <div className="hdr_righbsh">
                                <div className="hdr_righbcl"><span className="icon flaticon-cancel-music" /></div>
                                <div className="hdrilg">
                                    <a href="index.php">
                                        <img src={logo} alt='' />
                                    </a>
                                </div>
                                <div className="hdritx">
                                    <p>Captain's Deck</p>
                                    <p>4th Floor, 124B, Southern Ave, Golpark, Hindustan Park, Gariahat, Kolkata-29</p>
                                    <p><a href="tel:+918597898654">+91 85978 98654</a></p>
                                    <p>Open Hours: 09:00 am – 01:00 pm</p>
                                    <ul className="social-icon-one social-icon-colored">
                                        <li><a href="#">
                                            {/* <i className="fab fa-facebook-f" /> */}
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                        </a></li>
                                        <li><a href="#">
                                            {/* <i className="fab fa-twitter" /> */}
                                        </a></li>
                                        <li><a href="#">
                                            {/* <i className="fab fa-instagram" /> */}
                                        </a></li>
                                        <li><a href="#">
                                            {/* <i className="fab fa-linkedin" /> */}
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="logo-box">
                                <div className="logo"><a href="index.php">
                                    <img src={logo} alt="" title />
                                </a></div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-3 col-sm-3 col-3">
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler"><div className="hdr_righbmnu" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light ">
                                    <div className="navbar-header">
                                        {/* Togg le Button */}
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon flaticon-menu-button" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse clearfix justify-content-center" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li><a href="https://works.webwonderz.in/captains_deck/index.php" className="actvhm">Home</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/about.php" className="actvab">About us</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/menu/menu.php" className="actvmn">Menu</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/food_gallery.php" className="actvgl">Gallery</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/events_gallery.php" className="actvmd">Events</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/what_new.php" className="actvwn">What’s new</a></li>
                                            <li><a href="https://works.webwonderz.in/captains_deck/location.php" className="actvlo">Location</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu  */}
            <div className="mobile-menu">
                <div className="menu-backdrop" />
                <div className="close-btn"><span className="icon flaticon-cancel-1" /></div>
                {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                <nav className="menu-box">
                    <div className="nav-logo"><a href="index.php">
                        {/* <img src="images/" alt="" title /> */}
                    </a></div>
                    <ul className="navigation clearfix">{/*Keep This Empty / Menu will come through Javascript*/}</ul>
                </nav>
            </div>{/* End Mobile Menu */}
        </header>
    )
}
