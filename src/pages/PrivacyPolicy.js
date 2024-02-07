import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Privacy Policy</h2>
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx ">
                                <p>This Privacy Policy sets out the basis on which we will process any personal information that we collect from you, or that you provide to us.</p>
                                <p>Information that we may collect from you</p>
                                <p>We may collect and process personal information about you in relation to this web site, including:</p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Information that you provide by filling in forms on this web site. This includes information provided at the time of registering for subscribing to our services, posting material or requesting further services</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Information that you provide when completing surveys that we use for research purposes</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> If you contact us, we may keep a record of that correspondence (in whatever form)</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Details of your visits to this web site including, but not limited to, traffic data, location data, weblogs and other communication data; and</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Information that you provide on this website when you enter a promotion.</li>
                                </ul>
                                <h3>Use of personal information</h3>
                                <p>This website may, from time to time, contain links to other web sites which are outside of our control and are not covered by this Privacy Policy. We do not accept any responsibility or liability for other sites' privacy policies. If you access other websites using the links provided, please check their policies before submitting any personal information. We process personal information about you in relation to this web site for the purposes of:</p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Providing you with our services</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Dealing with your enquiries and requests</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Where relevant, direct-marketing products and services, and advising you of events, promotions and competitions, and carrying out market research campaigns; and</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /> <span className='ml-1'></span> Providing you with information, products or services that you request from us or, where you have consented to be contacted, for such purposes which we feel may interest you.</li>
                                </ul>
                                <h3>Marketing</h3>
                                <p>You have the right to ask us not to process your personal information for marketing purposes. We will usually inform you (before collecting your information) if we intend to use your information for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise the right at any time by sending us an email, calling us or writing to us.</p>
                                <h3>Where we store your personal information</h3>
                                <p>All information collected through this web site is securely stored in databases. Access to the stored information is restricted to select authorised personnel.</p>
                                <h3>Disclosure of your information</h3>
                                <p>We will only disclose personal information: to successors to our business; to any of our affiliated firms and entities; to suppliers and external agencies that we engage to process information on our and your behalf; to third parties (including, but not limited to, professional advisors); and where disclosure is required by law or any regulatory authority, all as reasonably required for the purposes set out in this Privacy Policy. If you attend an event organised or hosted by us, we may disclose your details to others who attend or participate in the organisation of that event (as notified to you).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            <Footer />
        </div>
    )
}

export default PrivacyPolicy