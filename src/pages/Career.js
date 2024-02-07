import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Career = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Careers</h2>
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx ">
                                <p>We take great pride in the work we do and the talented people who work with us. We’re always looking for skilled, ambition driven people who value a collaborative, open environment and flexible, professional culture. We believe in striking the balance between hard work and pleasure.</p>
                                <p>Vacancies exist in the following areas - </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /><span className='ml-1'></span> Executive Chef....</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /><span className='ml-1'></span> Sous Chef....</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /><span className='ml-1'></span> Pastry Chef....</li>
                                    <li><FontAwesomeIcon icon={faCircle} size='xs' /><span className='ml-1'></span> Kitchen Manager....</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx ">
                                <h3>Apply for a position </h3>
                                <form className="crerfm">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <p>Full  Name <span>*</span></p>
                                            <input placeholder />
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <p>Phone No. <span>*</span></p>
                                            <input placeholder />
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <p>Email <span>*</span></p>
                                            <input placeholder />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <p>Upload CV/Resume<span>*</span></p>
                                            <select>
                                                <option>Executive Chef</option>
                                                <option>Sous Chef</option>
                                                <option>Pastry Chef</option>
                                                <option>Kitchen Manager</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <p>Upload CV/Resume <span>*</span></p>
                                            <input type="file" placeholder className="m-0" />
                                            <p><small>Allowed Type(s): .pdf, .doc</small></p>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <p>Cover Letter <span>*</span></p>
                                            <textarea placeholder defaultValue={""} />
                                        </div>
                                        <div className="col-md-12 col-sm-12 carfmpc">
                                            <p><input type="checkbox" />I hereby declare that the above mentioned information is correct to the best of my knowledge and I hold the responsibility for the correctness of the particulars. <span>*</span></p>
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
            <Footer />
        </div>
    )
}

export default Career