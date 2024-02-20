import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import jQuery from '../assets/js/script.js';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { api_url } from '../services/env.js';
import { getData } from '../services/apiService.js';


export const Header = () => {
    const [show, setShow] = useState(false);
    const [mobilemenu, setMobilemenu] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [sideNavData, setSideNavData] = useState(null);

    useEffect(() => {
        getOffcanvasData();
    }, [])

    const getOffcanvasData = () => {
        getData(api_url.contactInfo)
            .then(async (response) => {
                const resp = await response.json();
                setSideNavData(resp?.data)
            })
            .catch((err) => { console.log(err) })
    }

    const handleMenuClose = () => { setMobilemenu(prev => !prev) }

    return (
        <header className="main-header header-style-two alternate">
            <div className="main-box">
                <div className="container-fluid clearfix px-md-4 px-0">
                    <Navbar expand="lg" className="">
                        <div className="d-flex flex-row align-items-start justify-content-between col-12">
                            <div className="col-lg-2 col-md-3 col-sm-3 col-3 order-lg-last">
                                <div className="hdr_righb ms-lg-auto  ms-2" variant="primary" onClick={handleShow} />
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-lg-block d-flex justify-content-center">
                                <Navbar.Brand>
                                    <div className="logo-box">
                                        <div className="logo"><NavLink to={'/'}>
                                            <img src={logo} alt="" />
                                        </NavLink></div>
                                    </div>
                                </Navbar.Brand>
                            </div>
                           
                            <Navbar.Toggle>
                                <div className="hdr_righb" onClick={handleMenuClose} variant="primary" />
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">

                                <div className="col-lg-12 ">
                                    {/*Nav Box*/}
                                    <div className="nav-outer clearfix">
                                        {/*Mobile Navigation Toggler*/}
                                        <div className="mobile-nav-toggler">
                                            {/* <div className="hdr_righbmnu" /> */}
                                            </div>
                                        {/* Main Menu */}
                                        <nav className="main-menu navbar-expand-md navbar-light ">
                                            <div className="navbar-header">
                                                {/* Toggle Button */}
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="icon flaticon-menu-button" />
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse clearfix justify-content-center" id="navbarSupportedContent">
                                                <ul className="navigation clearfix d-none d-lg-block">
                                                    <li>
                                                        <NavLink to={'/'}>
                                                            <span className="actvhm">Home</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/about-us'}>
                                                            <span className="actvab">About us</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/Drinks'}>
                                                            <span className="actvmn">Menu</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/gallery'}>
                                                            <span className="actvgl">Gallery</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/events'}>
                                                            <span href="#" className="actvmd">Events</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/what-new'}>
                                                            <span className="actvwn">What’s new</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/location'}>
                                                            <span className="actvlo">Location</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        {/* Main Menu End*/}
                                    </div>
                                </div>

                            </Navbar.Collapse>

                        </div>
                    </Navbar>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            {/* <Offcanvas.Title></Offcanvas.Title> */}
                        </Offcanvas.Header>
                        {sideNavData && <Offcanvas.Body className='text-center'>
                            <div className="hdrilg">
                                <Link to={'/'}>
                                    <img src={logo} alt='' />
                                </Link>
                            </div>

                            <div className="hdritx">
                                <p>Captain's Deck</p>
                                <p>{sideNavData.address}</p>
                                <p><a href={'tel:'}>{sideNavData?.phone_code + ' ' + sideNavData?.contact}</a></p>
                                <p>Open Hours: {sideNavData?.open_hours}</p>
                                <ul className="social-icon-one social-icon-colored">
                                    <li><a href={sideNavData?.facebook}>
                                        <FontAwesomeIcon size="xs" className='fab' icon={faFacebook} />
                                    </a></li>
                                    <li><a href={sideNavData?.twitter}>
                                        <FontAwesomeIcon size="xs" className='fab' icon={faSquareXTwitter} />
                                    </a></li>
                                    <li><a href={sideNavData?.instagram}>
                                        <FontAwesomeIcon size="xs" className='fab' icon={faInstagram} />
                                    </a></li>
                                    <li><a href={sideNavData?.linkedin}>
                                        <FontAwesomeIcon size="xs" className='fab' icon={faLinkedin} />
                                    </a></li>
                                </ul>
                            </div>
                        </Offcanvas.Body>}
                    </Offcanvas>

                    <Offcanvas show={mobilemenu} onHide={handleMenuClose}>
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='text-center'>
                            <div className="hdrilg">
                                <Link to={'/'}>
                                    <img src={logo} alt='' />
                                </Link>
                            </div>
                            <div className="hdritx">
                                <ul className="navigation clearfix d-block d-lg-none">
                                    <li>
                                        <NavLink to={'/'} onClick={handleMenuClose}>
                                            <span className="actvhm">Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/about-us'} onClick={handleMenuClose}>
                                            <span className="actvab">About us</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/Drinks'} onClick={handleMenuClose}>
                                            <span className="actvmn">Menu</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/gallery'} onClick={handleMenuClose}>
                                            <span className="actvgl">Gallery</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/events'} onClick={handleMenuClose}>
                                            <span href="#" className="actvmd">Events</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/what-new'} onClick={handleMenuClose}>
                                            <span className="actvwn">What’s new</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/location'} onClick={handleMenuClose}>
                                            <span className="actvlo">Location</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </header >
    )
}
