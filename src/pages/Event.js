import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { api_url } from '../services/env'
import { getData } from '../services/apiService'

const Event = () => {
    const { pathname } = useLocation();
    const [eventData, setEventData] = useState(null);
    const [baseUrl, setBaseUrl] = useState(null);
    useEffect(() => {
        getEventData();
    }, [])

    const getEventData = () => {

        getData(api_url?.event)
            .then(async (response) => {
                const resp = await response.json();
                console.log(`  resp?.data?==>`, resp);
                setBaseUrl(resp?.base_url);
                setEventData(resp?.data)
            })
            .catch((err) => { console.log(err) })

    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>

            <section className="banner-section">
                <div className="impbnr">
                    <h2>Events</h2>
                </div>
            </section>

            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    {eventData &&
                        <div className="row">
                            {eventData.map((value, idx) => {
                                return (
                                    <div className="col-md-4 col-sm-6  evbnglmn" key={idx}>
                                        <Link to={`/events-detail/${value?.id}`}>
                                            <div className="evbngl">
                                                {
                                                    value?.media_types == 'image' &&
                                                    <div className="evbngli">
                                                        <img src={baseUrl + value.media} />
                                                    </div>
                                                }
                                                <div className="evbngtx">
                                                    <h4>{value.date}</h4>
                                                    <h2>{value.title}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div >
            </section >

        </ >
    )
}

export default Event