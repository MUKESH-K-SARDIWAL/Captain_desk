import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { api_url, base_url } from '../services/env'
import { getData } from '../services/apiService'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'


const Career = () => {

    const { pathname } = useLocation();
    const [careerData, setCareerData] = useState(null);
    const [employeeData, setEmployeeData] = useState(null);
    const [textMessage, setTextMessage] = useState('');
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        employee_position_id: '',
        cv_file: null,
        cover_letter: '',
        checkbox_checked: false
    });
    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };
    const [show, setShow] = useState(false);
    const [backgrond, setBackgrond] = useState('success');

    useEffect(() => {
        getCareerData();
        getEmployeeData();
    }, [])

    const getCareerData = () => {
        getData(api_url.cms + 'CAREERS')
            .then(async (response) => {
                const resp = await response.json();
                setCareerData(resp?.data)
                console.log(`resp?.data==>`, resp?.data);
            })
            .catch((err) => { console.log(err) })
    }

    const getEmployeeData = () => {
        getData(api_url.employee_pos)
            .then(async (response) => {
                const resp = await response.json();
                setEmployeeData(resp?.data)
                console.log(`resp?.data==>`, resp?.data);
            })
            .catch((err) => { console.log(err) })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.checkbox_checked == false) {
            setBackgrond('danger');
            setTextMessage('Please verify mentioned information correct')
            setShow(true);
            return
        }
        const formDataToSend = new FormData();
        formDataToSend.append('full_name', formData.full_name);
        formDataToSend.append('phone_number', formData.phone_number);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('employee_position_id', formData.employee_position_id);
        formDataToSend.append('cv', formData.cv_file);
        formDataToSend.append('cover_letter', formData.cover_letter);

        fetch(base_url + api_url.careers, {
            method: 'POST',
            body: formDataToSend
        })
            .then(async (response) => {
                if (!response.ok) {
                    // throw new Error('Network response was not ok');
                    setBackgrond('warning');
                    response.json().then(data => {
                        const errorMessages = Object.values(data.errors).flatMap(errorArray => errorArray);
                        const errorMessage = errorMessages.join(', ');
                        setTextMessage(errorMessage);
                        setShow(true);
                    })
                }
                else {
                    let values = document.getElementById('form');
                    values.reset();
                    setFormData({
                        full_name: '',
                        phone_number: '',
                        email: '',
                        employee_position_id: '',
                        cv_file: null,
                        cover_letter: '',
                        checkbox_checked: false
                    })
                    const resData = await response.json();
                    setTextMessage(resData.message);
                    setShow(true);

                }
            })
            .catch(error => {
                console.error('There was an error sending the form data:', error);
            });
    };

    // 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const onClose = () => { setShow(false); setBackgrond('success') }
    return (
        careerData &&
        <>
            <section className="banner-section">
                <div className="impbnr">
                    <h2>{careerData?.title ?? 'CAREERS'}</h2>
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
            <section className="about-section secexp bgdep">
                <div className="auto-container">
                    <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx " dangerouslySetInnerHTML={
                                { __html: careerData?.description }
                            } />
                            {employeeData &&
                                <div className="insabtx ">
                                    <ul>
                                        {
                                            employeeData.map((val, idx) => {
                                                return <li key={idx} className='ps-0'><FontAwesomeIcon icon={faCircle} size='xs' /><span className='ms-2'>{val?.position}...</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx ">
                                <h3>Apply for a position </h3>
                                <form className="crerfm" id='form' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <p>Full Name <span>*</span></p>
                                            <input name='full_name' value={formData.full_name} onChange={handleChange} required type='text' />
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <p>Phone No. <span>*</span></p>
                                            <input name='phone_number' value={formData.phone_number} onChange={handleChange} required type='number' />
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <p>Email <span>*</span></p>
                                            <input name='email' value={formData.email} onChange={handleChange} required type='email' />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <p>Upload CV/Resume<span>*</span></p>
                                            <select value={formData.employee_position_id} onChange={handleChange} required name='employee_position_id'>
                                                <option >Select applied employee position</option>
                                                {employeeData && employeeData.map((val, idx) => {
                                                    return <option value={val.id} key={idx}>{val?.position}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <p>Upload CV/Resume <span>*</span></p>
                                            <input type="file" className="m-0" accept=".pdf,.doc,.docx" name='cv_file' onChange={handleChange} required />
                                            <p><small>Allowed Type(s): .pdf, .doc</small></p>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <p>Cover Letter <span>*</span></p>
                                            <textarea value={formData.cover_letter} onChange={handleChange} defaultValue={""} name='cover_letter' required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 carfmpc">
                                            <p><input type="checkbox" name="checkbox_checked" checked={formData.checkbox_checked} onChange={handleChange} />I hereby declare that the above mentioned information is correct to the best of my knowledge and I hold the responsibility for the correctness of the particulars. <span>*</span></p>
                                        </div>
                                        <div className="col-12 cotpbt">
                                            <button className="theme-btn btn-style-one" type="submit"><span className="btn-title">Send Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Career