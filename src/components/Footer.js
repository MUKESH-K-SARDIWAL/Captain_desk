import React, { useEffect, useState } from 'react'
import { logo } from '../services/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { getData } from '../services/apiService'
import { api_url } from '../services/env'
import { memo } from 'react'

const Footer = memo(function Footer() {
    const [footerData, setFooterData] = useState(null);
    const [baseUrl, setBaseUrl] = useState(null);
    useEffect(() => {
        getFooterData();
    }, [])

    const getFooterData = () => {
        getData(api_url.contactInfo)
            .then(async (response) => {
                const resp = await response.json();
                setFooterData(resp?.data)
                // console.log(`resp?.data==>`, resp);
                setBaseUrl(resp?.base_url)
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <footer className="main-footer bgdep">
            {footerData ?
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
                                    <p>{footerData?.address}</p>
                                    <ul className="social-icon-one social-icon-colored">
                                        <li>
                                            <a href={footerData?.facebook}><FontAwesomeIcon size="xs" className='fab' icon={faFacebook} /></a></li>
                                        <li><a href={footerData?.google ?? '#'}>
                                            <FontAwesomeIcon size="xs" className='fab' icon={faGoogle} />
                                        </a></li>
                                        <li><a href={footerData?.whatsapp ?? '#'}>
                                            <FontAwesomeIcon icon={faWhatsapp} size="xs" className='fab' />
                                        </a></li>
                                        <li><a href={footerData?.instagram}><FontAwesomeIcon size="xs" className='fab' icon={faInstagram} /></a></li>
                                        <li><a href={footerData?.linkedin}><FontAwesomeIcon size="xs" className='fab' icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 wow fadeInUp">
                                <div className="ftebxd">
                                    <h3>Order Online</h3>
                                    <p>{footerData?.order_online}</p>
                                    <h4><a className={'text-white'}>{footerData?.phone_code + ' ' + footerData?.contact}</a></h4>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 wow fadeInUp">
                                <div className="ftebxd">
                                    <h3>Open Hours</h3>
                                    <p><span>{footerData?.open_day} </span>  {footerData?.open_hours}</p>
                                    <div className='qr_code_footer'>
                                        <img src={baseUrl + footerData.qr_image} alt='' />
                                    </div>
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
                                            <li>
                                                <Link to={'/career'}>Careers</Link>
                                            </li>
                                            <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                                            <li><Link to={'/disclaimer'}>Disclaimer</Link></li>
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
                </div> : null}
        </footer>
    )
})


export default Footer