import React from 'react'
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8 } from '../services/images'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Gallery = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Gallery </h2>
                    {/*<ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="javascript:void(0)">Gallery</a></li>
                <li>Food</li>
            </ul>-*/}
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery1.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery1} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery2.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery2} />
                                    {/*<div class="glrbtxmn">
								        <div class="glrbtx">
    								        <p>Main Course</p>
    								        <h3>Grilled Chicken</h3>
    								    </div>
								    </div>*/}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery3.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery3} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery4.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery4} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery5.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery5} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery6.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery6} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery7.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery7} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="glrbim">
                                <a href="images/gallery8.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src={gallery8} />
                                </a>
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

export default Gallery