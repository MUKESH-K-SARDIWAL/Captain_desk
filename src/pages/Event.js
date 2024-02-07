import React from 'react'
import { eveim1, eveim2 } from '../services/images'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Event = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            {/* Banner Section */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Events</h2>
                    {/*<ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="javascript:void(0)">Gallery</a></li>
                <li>Event</li>
            </ul>*/}
                </div>
            </section>
            {/*End Banner Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6  evbnglmn">
                            <div className="evbngl">
                                <div className="evbngli">
                                    <a href="events_gallery_details.php"><img src={eveim2} /></a>
                                </div>
                                <div className="evbngtx">
                                    <h4>25th March 2023</h4>
                                    <h2><a href="events_gallery_details.php">DJ in Captain's Deck</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 evbnglmn">
                            <div className="evbngl">
                                <div className="evbngli">
                                    <a href="events_gallery_details.php"><img src={eveim1} /></a>
                                </div>
                                <div className="evbngtx">
                                    <h4>12th June 2023</h4>
                                    <h2><a href="events_gallery_details.php">IPL Season Live Screening</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            <Footer />
        </div>
    )
}

export default Event