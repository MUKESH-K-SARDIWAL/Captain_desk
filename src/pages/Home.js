import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Banner } from '../components/Banner'
import OwlCarousel from 'react-owl-carousel';
import {
    qutn
} from '../services/images.js';
import { useLocation } from 'react-router-dom';
import { Fancybox } from '../services/helper.js';
import { getData } from '../services/apiService.js';
import { api_url, base_url } from '../services/env.js';
import PopUp from '../components/PopUp.js';
import Toast from 'react-bootstrap/Toast'
import { ToastContainer } from 'react-bootstrap'
import WOW from 'wowjs';
import '../assets/css/animate.css';

const Home = () => {
    const option = {
        items: 4,
        autoplay: true, autoplayTimeout: 3000,
        animateOut: 'slideOutUp', nav: false, dots: false, margin: 30, responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            },
        }
    }
    const { pathname } = useLocation();
    const [baseUrl, setBaseUrl] = useState(null);
    const [homeData, setHomeData] = useState({
        bannerData: [],
        availOffers: [],
        gallery: [],
        testimonial: [],
        ourStory: null,
        ourBlog: []
    });
    const [textMessage, setTextMessage] = useState('');
    const [show, setShow] = useState(false);
    const [backgrond, setBackgrond] = useState('success');
    const [popUp, setPopUp] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        person_count: '',
        date: '',
        booking_time: '',
        phone: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let values = document.getElementById('bookINForm')

        // console.log(formData)
        const data = new FormData();
        data.append('name', formData.name);
        data.append('booking_date', formData.date);
        data.append('booking_time', formData.booking_time);
        data.append('person_count', formData.person_count);
        data.append('phone', formData.phone);
        // console.log(`data==>`, data);
        try {
            const res = await fetch(
                base_url + api_url?.bookIn,
                {
                    method: 'POST',
                    body: data,
                },
            );
            if (res.ok) {
                values.reset();
                setFormData({
                    name: '',
                    person_count: '',
                    date: '',
                    booking_time: '',
                    phone: ''
                })
                const resData = await res.json();
                setBackgrond('success');
                setTextMessage(resData.message);
                setShow(true);

            } else {
                // Handle error response
                const errorData = await res.json();
                // console.log("Error Data:", errorData); // Check the error data received
                if (errorData && errorData.message) {
                    setBackgrond('warning');
                    setTextMessage(errorData.message);
                } else {
                    setBackgrond('warning');
                    setTextMessage('An error occurred.'); // Fallback message if no specific message is provided
                }
                setShow(true);
            }
        } catch (err) {
            setBackgrond('danger');
            setTextMessage(err.message)
            setShow(true);
        }


    };

    const onClose = () => { setShow(false); }

    useEffect(() => {
        getHomePageData();
        getAdvertData();
    }, [])

    const getHomePageData = () => {
        getData(api_url.home)
            .then(async response => {
                const resp = await response.json();
                // console.warn(`resp?.data?==>`, resp);
                setBaseUrl(resp?.base_url);
                let banner = resp?.data.find(el => el.key_name == "Banner");
                let story = resp?.data.find(el => el.key_name == "Content");
                let offers = resp?.data.find(el => el.key_name == "available_offers");
                let image = resp?.data.find(el => el.key_name == "Gallery");
                let testi = resp?.data.find(el => el.key_name == "Testimonials");
                let blog = resp?.data.find(el => el.key_name == "blogs");

                setHomeData(prev => ({ ...prev, bannerData: banner.key_data, availOffers: offers.key_data, gallery: image.key_data, testimonial: testi.key_data, ourStory: story?.key_data[0], ourBlog: blog.key_data }));

            })
            .catch((err) => {
                console.error(err)
            })
    };

    const getAdvertData = () => {
        getData(api_url.pop_up)
            .then(async response => {
                const resp = await response.json();

                let popup = resp?.data.find(el => el.key_name == "popUp");
                // console.log(`popup==>`, popup);
                setPopUp(popup.key_data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        setTimeout(() => {
            const wow = new WOW.WOW({
                boxClass: 'wow',
            });
            wow.init();
        }, 3000);
    }, []);

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1; // getMonth() returns 0-based index
        let day = today.getDate();

        // Add leading zeros if needed
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        // Return the date in the format 'YYYY-MM-DD'
        return `${year}-${month}-${day}`;
    }

    return (
        baseUrl ?
            <>

                {homeData.bannerData.length > 0 && <Banner baseUrl={baseUrl} bannerData={homeData?.bannerData} />}


                <section className="about-section secexp bgdep2">
                    <div className="auto-container">
                        <div className="row">
                            {
                                homeData?.ourStory &&
                                <div className={`col-lg-12 col-md-12 col-sm-12 wow fadeInUp `} >
                                    <div className="abtsctx">
                                        <div className="sechdttl">
                                            <h4>{homeData?.ourStory.title}</h4>
                                            <h2 dangerouslySetInnerHTML={
                                                { __html: homeData?.ourStory?.header }
                                            }></h2>
                                        </div>
                                        <div className='abtsctx' dangerouslySetInnerHTML={
                                            { __html: homeData?.ourStory?.description }
                                        }>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <ToastContainer position="top-end" className="p-3 position-fixed" style={{ zIndex: 9999 }}>
                    <Toast onClose={onClose} show={show} delay={3000} bg={backgrond} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Captains Deck</strong>
                        </Toast.Header>
                        <Toast.Body id='toast_body' className='text-white'>{textMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
                {homeData.ourBlog.length > 0 &&
                    homeData.ourBlog.map((val, idx) => {
                        return (
                            idx % 2 == 0 ? (
                                <section className="about-section secexp bgdep" key={idx} >

                                    <div className="auto-container">
                                        <div className="row">
                                            {/* Content Column */}
                                            <div className={`col-lg-6 col-md-6 col-sm-12 order-md-2 wow fadeInRight`}>
                                                <div className="uspimg">

                                                    <img src={baseUrl + val?.media} />
                                                </div>
                                            </div>
                                            <div className={`col-lg-6 col-md-6 col-sm-12 fadeInLeft wow`} >
                                                <div className="abtsctx">
                                                    <div className="sechdttl text-left">
                                                        <h4>{val?.title}</h4>

                                                        <div className="sechdttl text-left" dangerouslySetInnerHTML={
                                                            { __html: val?.header }
                                                        } />
                                                    </div>
                                                    <div className="abtsctx" dangerouslySetInnerHTML={
                                                        { __html: val?.description }
                                                    } />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section >
                            ) : (
                                <section className="about-section secexp bgdep2" key={idx}>
                                    <div className="auto-container">
                                        <div className="row">
                                            {/* Content Column */}
                                            <div className=" col-lg-6 col-md-6 col-sm-12 wow fadeInRight ">
                                                <div className="livimg">
                                                    <img src={baseUrl + val?.media} /></div>
                                            </div>
                                            <div className=" col-lg-6 col-md-6 col-sm-12 wow fadeInLeft ">
                                                <div className="abtsctx ">
                                                    <div className="sechdttl text-left">
                                                        <h4>{val?.title}</h4>
                                                        <div className="sechdttl text-left" dangerouslySetInnerHTML={
                                                            { __html: val?.header }
                                                        } />
                                                    </div>
                                                    <div className="abtsctx" dangerouslySetInnerHTML={
                                                        { __html: val?.description }
                                                    } />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        )
                    })
                }

                {popUp && <PopUp popUp={popUp} baseUrl={baseUrl} />}


                <section className="about-section secexp bgdep">
                    <div className="auto-container">
                        <div className="sechdttl wow fadeInUp ">
                            <h4>Reservations</h4>
                            <h2><span>BOOK A TABLE <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                        </div>

                        <form className="bktfmmn wow fadeInUp " id='bookINForm' >
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="bktbfm">
                                        <input placeholder="Name" type='text' required name='name' value={formData.name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="bktbfm">
                                        <select name="person_count" value={formData.person_count} onChange={handleChange} required>
                                            <option >Person Count</option>
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
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="bktbfm">
                                        <input type="date" className="datepicker_input form-control border-2" id="datepicker1" required placeholder="DD/MM/YYYY" name="date" value={formData.date} onChange={handleChange} min={getCurrentDate()} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="bktbfm">
                                        <select name="booking_time" value={formData.booking_time} onChange={handleChange} required>
                                            <option  >Booking Time</option>
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
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="bktbfm">
                                        <input placeholder="Phone No." type='tel' required name='phone' value={formData.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 mx-auto">
                                    <div className="bktbfm">
                                        <button type="button" onClick={handleSubmit} className="theme-btn btn-style-one w100"><span className="btn-title">BOOK NOW</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="about-section secexp bgdep2 ofdmnd">
                    <div className="auto-container">
                        {homeData.availOffers.length > 0 &&
                            <div className="row">

                                <div className=" col-lg-1 col-md-1 col-sm-10">
                                </div>
                                <div className=" col-lg-5 col-md-5 col-sm-12">
                                    <div className="fdofr1 wow fadeInLeft">
                                        <h2>{homeData.availOffers[0].header}</h2>
                                        <h3>{homeData.availOffers[0].description}</h3>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-6 col-sm-12">
                                    <div className="fdofr2 wow fadeInRight ">
                                        <div className="row">
                                            {homeData.availOffers.map((val, idx) =>
                                                <div className="col-md-6 col-sm-6" key={idx}>
                                                    <div className="fdofr2im">
                                                        <img src={baseUrl + val?.media} />
                                                        <div className="fdofr2mtx">
                                                            <h3>{val?.description}</h3>
                                                        </div>
                                                    </div>
                                                </div>)
                                            }

                                            {/* <div className="col-md-6 col-sm-6">
                                            <div className="fdofr2im">
                                                <img src={fastfood2} />
                                                <div className="fdofr2mtx">
                                                    <h3>Get 30%-40% Off on Fast Food every <br /><span>Sunday</span></h3>
                                                </div>
                                            </div>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>

                <section className="about-section secexp bgdep">
                    <div className="auto-container">
                        <div className="sechdttl wow fadeInUp ">
                            <h2><span>Gallery <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                        </div>
                        {homeData?.gallery.length > 0 &&
                            <div className="glrydv wow fadeInUp ">
                                <Fancybox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >

                                    <OwlCarousel className='carousel_slide4 products-style-2 nav-style-2 owl-carousel owl-theme' {...option}>
                                        {
                                            homeData?.gallery.map((val, idx) => {
                                                return val.media_types == 'image' &&
                                                    <div className="item" key={idx}>
                                                        <div className="glrbim">

                                                            <a href={baseUrl + val?.media} className="lightbox-image" data-fancybox="gallery">

                                                                <img src={baseUrl + val?.media} />
                                                            </a>

                                                        </div>
                                                    </div>

                                            })
                                        }


                                    </OwlCarousel>
                                </Fancybox>
                            </div>
                        }
                    </div>
                </section>

                {
                    homeData.testimonial.length > 0 &&
                    <section className="about-section secexp bgdep2">
                        <div className="auto-container">
                            <div className="sechdttl wow fadeInUp ">
                                <h4>Testimonials</h4>
                                <h2><span>What Our Clients Says <div className="ttlhdb1" />
                                    <div className="ttlhdb2" />
                                </span></h2>
                            </div>
                            <div className="clttst wow fadeInUp ">
                                <div className="clttstic">
                                    <img src={qutn} />
                                </div>
                                <OwlCarousel className="carousel_slide01 products-style-2 nav-style-2 owl-carousel owl-theme" margin={30} dots={true} autoplay={true} loop={true} items={1}>
                                    {homeData.testimonial.map((val, idx) => {
                                        return (
                                            <div className="item" key={idx}>
                                                <div className="tstx" >
                                                    <p>{val?.comment}</p>
                                                    <h3>{val?.name}</h3>
                                                    <h4>Kolkata</h4>
                                                    {/* add location in testimonail section */}
                                                </div>
                                            </div>)
                                    })}


                                </OwlCarousel>
                            </div>
                        </div>
                    </section>
                }
            </> : <div />
    )
}



export default Home