import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Disclaimer = () => {
  return (
      <div className='page-wrapper'>
          <Header />
          {/* Banner Section */}
          <section className="banner-section">
              <div className="impbnr">
                  <h2>Disclaimer</h2>
              </div>
          </section>
          {/*End Banner Section */}
          {/* About Section */}
          <section className="about-section secexp bgdep2">
              <div className="auto-container">
                  <div className="row">
                      {/* Content Column */}
                      <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                          <div className="insabtx ">
                              <p>Captain’s Deck has taken all reasonable care in developing the website, and we believe that all information is accurate at the time of publication or last modification. The Company reserves the right to make changes to this site without notice.</p>
                              <p>This site may contain links to sites outside www.captainsdeck.com and Captain’s Deck is not responsible for the content of such other websites. Neither Captain’s Deck nor its employees or associates shall be liable for any loss, damage or expense arising out of any access to or use of this site or any site linked to it.</p>
                              <p>You may print copies of the information on this site for your personal use and download files for personal use and may not, without our permission, copy and distribute this information on any other work, publication or website. No reproduction of any part of the site may be used for commercial gain.</p>
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

export default Disclaimer