import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import WhatsNewDetailCard from '../components/WhatsNewDetailCard'
import { api_url } from '../services/env'
import { getData } from '../services/apiService'
import DeckCard from '../components/DeckCard'
import WOW from 'wowjs';
import '../assets/css/animate.css';

const WhatNew = () => {
    const { pathname } = useLocation();
    const [modalVisible, setModalVisible] = useState(false)
    const [whatsNewData, SetWhatNewData] = useState(null);
    const [baseUrl, setBaseUrl] = useState(null);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        getWhatNewData()
    }, [])

    const getWhatNewData = () => {
        getData(api_url.whats_new)
            .then(async (response) => {
                const resp = await response.json();

                setBaseUrl(resp?.base_url)
                let data = resp?.data.find((el) => el.key_name == 'whats_new')
                SetWhatNewData(data?.key_data)
                // console.log(`resp?.data==>`, data?.key_data);
            })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleClick = useCallback((data) => {
        setModalData(data);
        setModalVisible(true)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            const wow = new WOW.WOW({
                boxClass: 'wow',
            });
            wow.init();
        }, 1000);
    }, []);

    return (
        <>
            <section className="banner-section">
                <div className="impbnr">
                    <h2>What’s new</h2>
                </div>
            </section>

            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row rwjstct">
                        <div className="col-lg-12 col-md-112 col-sm-12 wow fadeInUp">
                            {
                                whatsNewData &&
                                whatsNewData.map((val, idx) =>
                                    <div key={idx}>
                                        <DeckCard baseUrl={baseUrl} list={val} handleClick={handleClick} />
                                    </div>
                                )
                            }



                        </div>
                    </div>
                    <div className={`whstpop whstpop1 ${modalVisible ? 'd-block' : 'd-none'}`}>
                        {
                            <WhatsNewDetailCard baseUrl={baseUrl} modalData={modalData} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                        }
                    </div>

                </div>
            </section>

        </>
    )
}

export default WhatNew