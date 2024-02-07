import React from 'react'
import { abtbanner5, chef1, chef2 } from '../services/images'
import OwlCarousel from 'react-owl-carousel';
import { Header } from '../components/Header';
import abbanner1 from '../assets/img/abbanner1.jpg'
import abtbanner3 from '../assets/img/abtbanner3.jpg'
import { Footer } from '../components/Footer';
export const AboutUs = () => {
    const option = {
        items: 1,
        loop: true,
        autoplay: true, autoplayTimeout: 3000,
        animateOut: 'slideOutUp', nav: false, dots: false,
    }
    return (
        <div className='page-wrapper'>
            <Header />
            <section className="banner-section">
                <OwlCarousel className="banner-carousel abtpbnr owl-carousel owl-theme" {...option}>
                    {/* Slide Item */}
                    <div className="slide-item" style={{ backgroundImage: `url(${abbanner1})` }}>
                        <div className="auto-container">
                            <div className="content-box abtinpt">
                                <h2><span>The best Food<br /> for the Best moments</span></h2>
                            </div>
                        </div>
                    </div>
                    {/* Slide Item */}
                    <div className="slide-item" style={{ backgroundImage: `url(${abtbanner3})` }}>
                        <div className="auto-container">
                            <div className="content-box abtinpt">
                                <h2><span>Build Memories <br />of a lifetime</span></h2>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="abcpgb">
                        <div className="row">

                            <div className=" col-lg-7 col-md-7 col-sm-12">
                                <div className="insabtx m-0">
                                    <h4>About</h4>
                                    <h2>Captain's Deck</h2>
                                    <p>With the opening of its multi-cuisine Sports resto-bar in Mumbai, Captain’s Deck offers an eclectic ambiance and a wide variety of Indian, pan-Asian, international cuisine with a vibrant bar.</p>
                                    <p>Captain’s Deck is a sports lover's paradise in Mumbai with its decor, ambiance and of course, gourmet cuisine. Whether dining, lounging or partying or watching live matches, Captain’s Deck transforms to suit any mood, bringing the place alive with memorabilia, multiple screens, live streaming sporting events and DJ’s music selection getting you in the groove. </p>
                                    <p>Style and substance come together at the bar to create a heady cocktail of alluring elegance and charismatic taste. Make your selection from our all-day dining menu, exhaustive drinks menu featuring a range of vintage wines, whiskeys, and more. </p>
                                    <p>With multiple 4K screens strung across the lounge bar, it features plush wooden interiors and routinely shows live matches. The relaxed ambiance of this bar is perfect for a delightful viewing experience along with a menu that's quirky, adventurous, and sure to tickle every curious bone in you. </p>
                                    <p>There are themed nights with live music by music bands and celebrity singers, the place promises to be an eventful night. </p>
                                    <p>Glorious food, illustrious cocktails and foot-tapping music. We’ll stop you right here.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12  ">
                                <div className="backgaj ">
                                    <img src={abtbanner5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            <section className="bout-section  secexp msnvsb">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="msnvsbu">
                                <h3>Our Vision</h3>
                                <p>To become a treasured one stop destination in Mumbai’s thriving nightlife scene with vibrant, friendly and warm services combined with curated menu. </p>
                            </div>
                            <div className="msnvsbu">
                                <h3>Our Mission</h3>
                                <p>Captain’s Deck always strives to go to great lengths to pamper and surprise patrons and ensure that every experience is memorable. </p>
                                <p>We are dedicated to providing a warm and inviting community gathering place as we believe that dining is not just about food or drinks, it is about creating an experience to remember. </p>
                                <p>A single-minded mission to make you feel special.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="sechdttl wow fadeInUp">
                        <h2><span>Our Team
                            <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                    </div>
                    <div className="row  nefcfmn">
                        <div className=" col-lg-3 col-md-4 col-sm-6 ">
                            <div className="nefcf">
                                <img src={chef1} />
                                <div className="nefcfu">
                                    <h4>Biplab Ganguly</h4>
                                    <p>Business Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-4 col-sm-6 ">
                            <div className="nefcf">
                                <img src={chef2} />
                                <div className="nefcfu">
                                    <h4>rajib Shukla</h4>
                                    <p>Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-4 col-sm-6 ">
                            <div className="nefcf">
                                <img src={chef1} />
                                <div className="nefcfu">
                                    <h4>Biplab Ganguly</h4>
                                    <p>Chief of Cuisine</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-4 col-sm-6 ">
                            <div className="nefcf">
                                <img src={chef2} />
                                <div className="nefcfu">
                                    <h4>rajib Shukla</h4>
                                    <p>Corporate Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
