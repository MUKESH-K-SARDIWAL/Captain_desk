import React from 'react'
import { cont1, cont2, cont3 } from '../services/images'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Location = () => {
    return (
        <div>
            <Header />
            {/*End Main Header */}
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Location</h2>
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="abtsctx">
                                <p>If you have any requests or queries concerning your personal information or any queries with regard to our practices, please contact us through email or phone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row rwspbt mnuevsmng">
                        <div className="col-md-5 col-sm-6 order-sm-2">
                            <div className="contptx contptpd bgdep">
                                <h3>Contact Info</h3>
                                <div className="contptxu">
                                    <img src={cont1} />
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+918597898654">+91 85978 98654</a></p>
                                </div>
                                <div className="contptxu">
                                    <img src={cont2} />
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:info@captainsdeck.com"> info@captainsdeck.com</a>
                                    </p></div>
                                <div className="contptxu">
                                    <img src={cont3} />
                                    <h6>Address</h6>
                                    <p>4th Floor, 124B, Southern Ave, Golpark, Hindustan Park, Gariahat, Kolkata-29</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div className="contptx ">
                                <h3>Get in touch</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Name" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Phone No." />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Email" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Subject" />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <textarea placeholder="Message " defaultValue={""} />
                                        </div>
                                        <div className="col-12 cotpbt">
                                            <button className="theme-btn btn-style-one"><span className="btn-title">Send Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.8646535484559!2d88.36208720300048!3d22.514337182639125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715bba14eeff%3A0x4a7e4f2267f8f3fa!2sCaptain's%20Deck%20Bar%20And%20Grill!5e0!3m2!1sen!2sin!4v1686213983565!5m2!1sen!2sin" width="100%" height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <Footer />
        </div>
    )
}

export default Location