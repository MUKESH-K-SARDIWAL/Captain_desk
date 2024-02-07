import React from 'react'
import { Header } from '../components/Header.js';
import { Banner } from '../components/Banner.js';
import { Footer } from '../components/Footer.js';
import OwlCarousel from 'react-owl-carousel';
import {
    sprtbr, sprtbe2, fastfood1, fastfood2, gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    qutn
} from '../services/images.js';
const Home = () => {
    const option = {
        items: 4,
        loop: true,
        autoplay: true, autoplayTimeout: 3000,
        animateOut: 'slideOutUp', nav: false, dots: false, margin: 30
    }
    return (
        <div>
            <Header />
            <Banner />

            {/* About Section  */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="abtsctx ">
                                <div className="sechdttl">
                                    <h4>Our Story</h4>
                                    <h2>Introducing the finest <br />sports bar experience</h2>
                                </div>
                                <p>Step in at Captain's Deck and prepare for an exhilarating voyage into the heart of sports fanaticism like never before. Prepare to embark on a thrilling journey where you are greeted by the thunderous roar of passionate fans, their spirits soaring as they rally behind their favourite teams on colossal screens that dominate the space.</p>
                                <p>With an exciting atmosphere, this is more than simply a pub; it's a buzzing cathedral of sporting triumph.The air is electrifying, infused with the fervour that only sports fans can generate. You can feelthe cheers, laughter, and the clinking of glasses, celebrating the favourite moments in sports.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}

            {/* About Section */}
            <section className="about-section secexp bgdep">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-6 col-md-6 col-sm-12 order-md-2 wow fadeInRight">
                            <div className="uspimg">
                                <img src={sprtbr} />
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12 wow fadeInLeft">
                            <div className="abtsctx ">
                                <div className="sechdttl text-left">
                                    <h4>OUR USP</h4>
                                    <h2>ENTHUSIASM FOR SPORTS AND GREAT FOOD</h2>
                                </div>
                                <p className="text-left">Captain’s Deck offers an eclectic ambiance where we've gone beyond the ordinary to create a paradise where two loves converge in wonderful harmony: sports and gastronomy.</p>
                                <p className="text-left">At Captain's Deck, we have an unwavering commitment to deliver not just an exciting sports bar experience, but great food that's quirky, adventurous, and sure to tickle your taste buds.</p>
                                <p className="text-left">Step into “Captain’s Deck” and let your senses embark on a voyage of delight, where the boundaries between taste and triumph dissolve, and your love for sports and great food finds its perfect destination.</p>
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
                        <div className=" col-lg-6 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="livimg"><img src={sprtbe2} /></div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12 wow fadeInLeft">
                            <div className="abtsctx ">
                                <div className="sechdttl text-left">
                                    <h4> Live Entertainment</h4>
                                    <h2>WATCH,EAT,ENJOY!</h2>
                                </div>
                                <p className="text-left">Experience heart-pounding excitement each day at Studs Sports Bar &amp; Grill's. Join the fervent crowd as they cheer, strategize, and compete in epic challenges. From thrilling trivia showdowns to pulse-pounding gaming tournaments, it's an electrifying spectacle of camaraderie and competition.</p>
                                <p className="text-left">Savor delectable bites, sip on refreshing drinks, and be part of an unforgettable sports community. Game Nights at Studs—where friendships are forged, champions rise, and the thrill of victory reigns supreme. Don't miss a single exhilarating moment!!!!!!!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep">
                <div className="auto-container">
                    <div className="sechdttl wow fadeInUp">
                        <h4>Reservations</h4>
                        <h2><span>BOOK A TABLE <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                    </div>
                    <form className="bktfmmn wow fadeInUp">
                        <div className="row">
                            <div className=" col-lg-3 col-md-3 col-sm-6">
                                <div className="bktbfm">
                                    <select>
                                        <option value={1}>1 Person</option>
                                        <option value={2}>2 People</option>
                                        <option value={3}>3 People</option>
                                        <option value={4}>4 People</option>
                                        <option value={5}>5 People</option>
                                        <option value={6}>6 People</option>
                                        <option value={7}>7 People</option>
                                        <option value={8}>8 People</option>
                                        <option value={9}>9 People</option>
                                        <option value={10}>10 People</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-3 col-sm-6">
                                <div className="bktbfm">
                                    <input type="text" className="datepicker_input form-control border-2" id="datepicker1" required placeholder="DD/MM/YYYY" />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-3 col-sm-6">
                                <div className="bktbfm">
                                    <select>
                                        <option value="16:30">04:30 pm</option>
                                        <option value="17:00">05:00 pm</option>
                                        <option value="17:30">05:30 pm</option>
                                        <option value="18:00">06:00 pm</option>
                                        <option value="18:30">06:30 pm</option>
                                        <option value="19:00">07:00 pm</option>
                                        <option value="19:30">07:30 pm</option>
                                        <option value="20:00">08:00 pm</option>
                                        <option value="20:30">08:30 pm</option>
                                        <option value="21:00">09:00 pm</option>
                                        <option value="21:30">09:30 pm</option>
                                        <option value="22:00">10:00 pm</option>
                                        <option value="22:30">10:30 pm</option>
                                        <option value="23:00">11:00 pm</option>
                                        <option value="23:30">11:30 pm</option>
                                        <option value="24:00">12:00 pm</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-3 col-sm-6">
                                <div className="bktbfm">
                                    <button className="theme-btn btn-style-one w100"><span className="btn-title">BOOK NOW</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/*End About Section */}

            {/* About Section */}
            <section className="about-section secexp bgdep2 ofdmnd">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-1 col-md-1 col-sm-10">
                        </div>
                        <div className=" col-lg-5 col-md-5 col-sm-12">
                            <div className="fdofr1 wow fadeInLeft">
                                <h2>Exclusive Offer!</h2>
                                <h3>Get 30% - 40% Off <br />on Fast Food</h3>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                            <div className="fdofr2 wow fadeInRight">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="fdofr2im">
                                            <img src={fastfood1} />
                                            <div className="fdofr2mtx">
                                                <h3>Get 30%-40% Off on Fast Food</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="fdofr2im">
                                            <img src={fastfood2} />
                                            <div className="fdofr2mtx">
                                                <h3>Get 30%-40% Off on Fast Food every <br /><span>Sunday</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}

            {/* About Section */}
            <section className="about-section secexp bgdep">
                <div className="auto-container">
                    <div className="sechdttl wow fadeInUp">
                        {/*<h4>Food Gallery</h4>*/}
                        <h2><span>Gallery <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                    </div>
                    <div className="glrydv wow fadeInUp">
                        <OwlCarousel className='carousel_slide4 products-style-2 nav-style-2 owl-carousel owl-theme' {...option}>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery1.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery1} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery2.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery1} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery3.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery2} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery4.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery3} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery5.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery4} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery6.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery5} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery7.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery6} />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="glrbim">
                                    <a href="images/gallery8.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <img src={gallery7} />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/*End About Section */}

            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="sechdttl wow fadeInUp">
                        <h4>Testimonials</h4>
                        <h2><span>What Our Clients Says <div className="ttlhdb1" />
                            <div className="ttlhdb2" />
                        </span></h2>
                    </div>
                    <div className="clttst wow fadeInUp">
                        <div className="clttstic">
                            <img src={qutn} />
                        </div>
                        <OwlCarousel className="carousel_slide01 products-style-2 nav-style-2 owl-carousel owl-theme" margin={30} dots={true} autoplay={true} loop={true} items={1}>
                            <div className="item" nav={false}>
                                <div className="tstx">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <h3>Bikash Mitra</h3>
                                    <h4>Kolkata</h4>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tstx">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <h3>Rahul Saha</h3>
                                    <h4>Kolkata</h4>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tstx">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <h3>Rabib Biswas</h3>
                                    <h4>Kolkata</h4>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home