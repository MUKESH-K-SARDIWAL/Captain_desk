import React, { useEffect, useState } from 'react'
import { cont1, cont2, cont3 } from '../services/images'
import { useLocation } from 'react-router-dom'
import { api_url, base_url } from '../services/env'
import { getData, postData } from '../services/apiService'
import Toast from 'react-bootstrap/Toast'
import { ToastContainer } from 'react-bootstrap'

const Location = () => {
    const { pathname } = useLocation();
    const [locationData, setLocationData] = useState(null);
    const [userData, setUserData] = useState({ name: '', phone_number: '', email: '', subject: '', message: '' });
    const [textMessage, setTextMessage] = useState('');
    const [show, setShow] = useState(false);
    const [backgrond, setBackgrond] = useState('success');
    useEffect(() => {
        getLoctionData();
    }, []);

    const onClose = () => { setShow(false); setBackgrond('success') }
    const getLoctionData = () => {
        getData(api_url.contactInfo)
            .then(async (response) => {
                const resp = await response.json();
                setLocationData(resp?.data)
            })
            .catch((err) => { console.log(err) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let values = document.getElementById('form');
        let toast_body = document.getElementById('toast_body');
        const data = new FormData(values);
        try {
            const res = await fetch(
                base_url + api_url?.getInTouch,
                {
                    method: 'POST',
                    body: data,
                },
            );
            if (res.ok) {
                values.reset();

                const resData = await res.json();
                setTextMessage(resData.message);
                setShow(true);

            } else {
                setBackgrond('warning');
                res.json().then(data => {
                    const errorMessages = Object.values(data.errors).flatMap(errorArray => errorArray);
                    const errorMessage = errorMessages.join(', ');
                    setTextMessage(errorMessage);
                    setShow(true)
                }).catch(error => {
                    // console.error('Error parsing JSON:', error);
                });
                // console.error('Failed to submit form:', res);
            }
        } catch (err) {
            setBackgrond('danger');
            setTextMessage(err.message)
            setShow(true);
        }

    }

    const handleChange = (event) => {

        console.warn(event.target.name, event.target.value);
        const { name, value } = event.target;
        console.warn(name, value);
        setUserData(prev => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>

            <section className="banner-section">
                <div className="impbnr">
                    <h2>Location</h2>
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
                            {locationData && <div className="contptx contptpd bgdep">
                                <h3>Contact Info</h3>
                                <div className="contptxu">
                                    <img src={cont1} />
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+918597898654">{locationData.phone_code +' '+ locationData.contact}</a></p>
                                </div>
                                <div className="contptxu">
                                    <img src={cont2} />
                                    <h6>Email Us</h6>
                                    <p><a href={`mailto:${locationData?.email}`}> {locationData?.email}</a>
                                    </p></div>
                                <div className="contptxu">
                                    <img src={cont3} />
                                    <h6>Address</h6>
                                    <p>{locationData.address}</p>
                                </div>
                            </div>}
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div className="contptx ">
                                <h3>Get in touch</h3>
                                <form onSubmit={handleSubmit} id='form'>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Name" name='name' required onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Phone No." type='number' required name='phone_number' onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Email" required name='email' type='email' onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input placeholder="Subject" required name='subject' onChange={handleChange} />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <textarea placeholder="Message " defaultValue={""} required name='message' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 cotpbt">
                                            <button type='submit' className="theme-btn btn-style-one">
                                                <span className="btn-title">Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {locationData && <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.8646535484559!2d${locationData.Longitude}!3d${locationData.Latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715bba14eeff%3A0x4a7e4f2267f8f3fa!2sCaptain's%20Deck%20Bar%20And%20Grill!5e0!3m2!1sen!2sin!4v1686213983565!5m2!1sen!2sin`} width="100%" height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            }
        </>
    )
}

export default Location