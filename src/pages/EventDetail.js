import React, { useEffect, useState } from 'react'
import { Fancybox, formatDate } from '../services/helper'
import { calender, evngl1, evngl2, evngl3 } from '../services/images';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../services/apiService';
import { api_url } from '../services/env';

const EventDetail = () => {

    let { id } = useParams();
    const [baseUrl, setBaseUrl] = useState(null);
    const [eventDetail, setEventDetail] = useState(null);

    useEffect(() => {
        getEventData();
    }, []);

    const getEventData = () => {
        getData(api_url.event + `?id=${id}`)
            .then(async response => {
                const resp = await response.json();
                console.warn(`resp?.data?==>`, resp?.data);
                setBaseUrl(resp?.base_url);
                setEventDetail(resp?.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <>
            {/* <Header /> */}
            <section className="banner-section evntdtlp bgdep">

            </section>
            <section className="about-section secexp bgdep pt-0">
                <div className="auto-container">
                    <div className="text-end bckevb">
                        <Link to={'/events'}>
                            <button className="theme-btn btn-style-one">
                                <span className="btn-title">All Events</span>
                            </button>

                        </Link>
                    </div>
                    {eventDetail &&
                        <div className="evndtlsc ">
                            <h2>{eventDetail?.title}</h2>
                            <h5>
                                <img src={calender} /> {formatDate(eventDetail?.date)}
                            </h5>
                            <p>
                                {eventDetail?.description}
                            </p>
                        </div>
                    }
                </div>
            </section>
            {/*End About Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: false,
                        },
                    }}
                >
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inspttl">
                                    <h2>
                                        <span>Gallery</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            {eventDetail?.gallery.map((val, idx) => {
                                return (
                                    val.media_types == 'image' ?
                                        <div className="col-lg-4 col-md-4 col-sm-6 " key={idx}>
                                            <div className="glrbim">
                                                <a
                                                    href={baseUrl + val?.media}
                                                    className="lightbox-image"
                                                    data-fancybox="gallery"
                                                >
                                                    <img src={baseUrl + val?.media} />
                                                </a>
                                            </div>
                                        </div> :
                                        <div className="col-lg-4 col-md-4 col-sm-6 " key={idx}>
                                            <div className="glrbim">
                                                <iframe
                                                    width="100%"
                                                    height={250}
                                                    src="https://www.youtube.com/embed/-0WPrmtJKO8"
                                                    title="YouTube video player"
                                                    frameBorder={0}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen=""
                                                />
                                            </div>
                                        </div>
                                )
                            })}




                        </div>
                    </div>
                </Fancybox>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default EventDetail