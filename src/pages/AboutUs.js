import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getData } from '../services/apiService';
import { api_url } from '../services/env';
import { Banner } from '../components/Banner';
import WOW from 'wowjs';
import '../assets/css/animate.css';

export const AboutUs = () => {



    const [baseUrl, setBaseUrl] = useState(null);
    const [aboutUsData, setAboutUsData] = useState({
        about: [],
        ourTeam: [],
        banner: [],
        visionSec: []
    });

    useEffect(() => {
        getHomePageData()
    }, [])

    const getHomePageData = () => {
        getData(api_url.about_us)
            .then(async response => {
                const resp = await response.json();
                // console.warn(`resp?.data?==>`, resp);
                setBaseUrl(resp?.base_url);
                let aboutUs = resp?.data.find(el => el.key_name == "About");
                let team = resp?.data.find(el => el.key_name == "employes");
                let bannerdata = resp?.data.find(el => el.key_name == "Banner");
                let about_cms = resp?.data.find(el => el.key_name == "About_CMS");
                setAboutUsData(prev => ({ ...prev, about: aboutUs.key_data, ourTeam: team.key_data, banner: bannerdata.key_data, visionSec: about_cms.key_data }));

            })
            .catch((err) => {
                console.error(err)
            })
    };


    const { pathname } = useLocation();

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
    return (
        <>
            {/* <Header /> */}

            {aboutUsData.banner.length > 0 && <Banner baseUrl={baseUrl} bannerData={aboutUsData.banner} />}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="abcpgb">
                        {
                            aboutUsData.about.length > 0 &&
                            <div className="row">

                                <div className=" col-lg-7 col-md-7 col-sm-12">

                                    <div className="insabtx m-0 wow fadeInLeft">
                                        <h4>{aboutUsData.about[0].title}</h4>
                                        <h2>{aboutUsData.about[0].header}</h2>
                                        <div className="insabtx m-0" dangerouslySetInnerHTML={
                                            { __html: aboutUsData.about[0].description }
                                        } />

                                    </div>

                                </div>
                                <div className="col-md-5 col-sm-12 wow fadeInRight ">
                                    <div className="backgaj ">
                                        <img src={baseUrl + aboutUsData.about[0].media} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            {/*End About Section */}
            {aboutUsData.visionSec.length > 0 &&
                <section className="bout-section  secexp msnvsb " style={{ backgroundImage: `url(${baseUrl+aboutUsData.visionSec[0].image})`  }}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 wow fadeInUp">
                                <div className="msnvsbu" dangerouslySetInnerHTML={
                                    { __html: aboutUsData.visionSec[0].description }
                                } />
                            </div>
                        </div>
                    </div>
                </section>
            }
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="sechdttl wow fadeInUp">
                        <h2><span>Our Team
                            <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                    </div>
                    {aboutUsData.ourTeam.length > 0 &&
                        <div className="row  nefcfmn wow fadeInUp">
                            {
                                aboutUsData.ourTeam.map((val, idx) => {
                                    return (
                                        <div className=" col-lg-3 col-md-4 col-sm-6 " key={idx}>
                                            <div className="nefcf">
                                                <img src={baseUrl + val?.picture} />
                                                <div className="nefcfu">
                                                    <h4>{val?.name}</h4>
                                                    <p>{val?.employe_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    }
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}
