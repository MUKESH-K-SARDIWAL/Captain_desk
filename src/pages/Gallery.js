import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Fancybox } from '../services/helper'
import { api_url } from '../services/env'
import { getData } from '../services/apiService'
let paginate = 1;
let isLast = false;
let loading = false;
const Gallery = () => {

    const { pathname } = useLocation();
    const [galleryData, setGalleryData] = useState([]);
    const [baseUrl, setBaseUrl] = useState(null);

    useEffect(() => {
        getGalleryData(paginate);
    }, [])

    const getGalleryData = (page) => {
        loading = !loading;
        getData(api_url?.gallery + `?page=${page}`)
            .then(async (response) => {
                const resp = await response.json();
                if (resp?.data?.current_page == 1) {
                    setBaseUrl(resp?.base_url);
                    console.log(`resp?.data?.data==>`, resp?.data?.data);
                    setGalleryData([...resp?.data?.data])
                }
                else {
                    setGalleryData((prev) => [...prev, ...resp?.data?.data])
                }
                paginate = resp?.data?.current_page + 1;
                if (resp?.data?.current_page >= resp?.data?.last_page) {
                    isLast = true;
                }
            })
            .catch((err) => { console.log(err) })
            .finally(() => { loading = !loading; })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener("scroll", hangleInfiniteScroll);
        return () => window.removeEventListener("scroll", hangleInfiniteScroll)
    }, [])

    const hangleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 506 >= document.documentElement.scrollHeight) {
                console.log(`!isLast && !loading==>`, !isLast, !loading);
                if (!isLast && !loading) {
                    getGalleryData(paginate);
                }
            }
        }
        catch (err) {
            console.log(`err==>`, err);
        }
    }
    return (
        <>
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Gallery </h2>
                </div>
            </section>
            <section className="about-section secexp bgdep2">
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: false,
                        },
                    }}
                >
                    <div className="auto-container">
                        {
                            galleryData.length > 0 &&
                            <div className="row">
                                {galleryData.map((val, idx) => {
                                    return (
                                        val?.media_types == 'video' ? <div className="col-lg-4 col-md-4 col-sm-6 " key={idx}>
                                            <div className="glrbim">
                                                <video width="100%" height="250" controls >
                                                    <source src={baseUrl + val?.media} type="video/mp4" />
                                                </video>
                                            </div>
                                        </div> : val?.media_types == 'youtube' ? <div className="col-lg-4 col-md-4 col-sm-6 " key={idx}>
                                            <div className="glrbim">
                                                <iframe width="100%" height="250" src={val?.media} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                            </div>
                                        </div> :
                                            <div className="col-lg-4 col-md-4 col-sm-6 " key={idx}>
                                                <div className="glrbim">
                                                    <a href={baseUrl + val?.media} className="lightbox-image" data-fancybox="gallery">
                                                        <img src={baseUrl + val?.media} />
                                                    </a>
                                                </div>
                                            </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </Fancybox>
            </section>
        </>
    )
}

export default Gallery