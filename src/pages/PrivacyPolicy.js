import React, { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getData } from '../services/apiService'
import { api_url } from '../services/env'

const PrivacyPolicy = memo(function PrivacyPolicy() {
    const { pathname } = useLocation();
    const [policiesData, setPoliciesData] = useState(null)
    useEffect(() => {
        getPoliciesData();
    }, [])

    const getPoliciesData = () => {
        getData(api_url.cms + 'PRIVACY POLICY')
            .then(async (response) => {
                const resp = await response.json();
                setPoliciesData(resp?.data)
                // console.log(`resp?.data==>`, resp?.data);
            })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        policiesData &&
        <>
            <section className="banner-section">
                <div className="impbnr">
                    <h2>{policiesData?.title ?? 'PRIVACY POLICY'}</h2>
                </div>
            </section>
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="insabtx " dangerouslySetInnerHTML={
                                { __html: policiesData?.description }
                            } />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})

export default PrivacyPolicy