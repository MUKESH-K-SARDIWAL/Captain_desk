import React from 'react'
import { whtsn2, whtsn4 } from '../services/images'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const WhatNew = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>What’s new</h2>
                    {/*<ul>
                <li><a href="index.php">Home</a></li>
                <li>What’s New</li>
            </ul>*/}
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row rwjstct">
                        <div className="col-lg-12 col-md-112 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 wtstimgmb">
                                    <div className="wtstimg">
                                        <img src={whtsn2} className="wtsttxbt1" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="wtsttx">
                                        <h2>Happy Hours</h2>
                                        <h5>3rd July, 2023</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <button className="wtsttxbt1">Know more <span className="fa fa-angle-double-right" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 wtstimgmb">
                                    <div className="wtstimg">
                                        <img src={whtsn4} className="wtsttxbt2" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="wtsttx">
                                        <h2>Exclusive Offer!</h2>
                                        <h5>3rd July, 2023</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <button className="wtsttxbt2">Know more <span className="fa fa-angle-double-right" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whstpop whstpop1">
                        <div className="whstpopu">
                            <div className="whstpopu1"><span className="icon flaticon-cancel-music" /></div>
                            <div className="whstpopu2">
                                <h2>Happy Hours</h2>
                                <h5>3rd July, 2023</h5>
                                <div className="carousel_slide01 owdtdds products-style-2 nav-style-2 owl-carousel owl-theme" data-margin={30} data-dots="true" data-autoplay="true" data-nav="false" data-loop="true">
                                    <div className="item">
                                        <a href="images/whtsn2.jpg" className="lightbox-image" data-fancybox="gallery">
                                            <img src={whtsn2} />
                                        </a>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>
                    <div className="whstpop whstpop2">
                        <div className="whstpopu">
                            <div className="whstpopu1"><span className="icon flaticon-cancel-music" /></div>
                            <div className="whstpopu2">
                                <h2>Exclusive Offer!</h2>
                                <h5>3rd July, 2023</h5>
                                <div className="carousel_slide01 owdtdds products-style-2 nav-style-2 owl-carousel owl-theme" data-margin={30} data-dots="true" data-autoplay="true" data-nav="false" data-loop="true">
                                    <div className="item">
                                        <a href={whtsn4} className="lightbox-image" data-fancybox="gallery">
                                            <img src={whtsn4} />
                                        </a>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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

export default WhatNew