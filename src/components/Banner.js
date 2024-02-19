import React from 'react'
import OwlCarousel from 'react-owl-carousel';


export const Banner = ({ bannerData, baseUrl }) => {
    // console.log(`bannerData==>`, bannerData);
    const option = {
        items: 1,
        loop: true,
        autoplay: true, autoplayTimeout: 3000, nav: false, dots: false,
    }
    return (
        <section className="banner-section">
            <OwlCarousel className="banner-carousel abtpbnr owl-carousel owl-theme" {...option}>
                {bannerData.length > 0 &&
                    bannerData.map((val, idx) => {
                        return (
                            <div className="slide-item" style={{ backgroundImage: `url(${baseUrl + val?.media})` }}>
                                <div className="auto-container">
                                    <div className="content-box abtinpt">
                                        <h2><span>{val?.header}</span></h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </section >
    )
}
