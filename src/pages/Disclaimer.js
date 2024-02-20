import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { api_url } from '../services/env';
import { getData } from '../services/apiService';

const Disclaimer = () => {
    const { pathname } = useLocation();
    const [disclaimerData, setDisclaimerData] = useState(null)
    useEffect(() => {
        getDisclaimerData();
    }, [])

    const getDisclaimerData = () => {
        getData(api_url.cms + 'DISCLAIMER')
            .then(async (response) => {
                const resp = await response.json();
                setDisclaimerData(resp?.data)
                console.log(`resp?.data==>`, resp?.data);
            })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        disclaimerData &&
        <>
            <section className="banner-section">
                <div className="impbnr">
                    <h2>{disclaimerData?.title ?? 'DISCLAIMER'}</h2>
                </div>
            </section>
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx " dangerouslySetInnerHTML={
                                { __html: disclaimerData?.description }
                            } />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Disclaimer