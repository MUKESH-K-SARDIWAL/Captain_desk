import React from 'react'
import banner1 from '../assets/img/banner1.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.jpg'
import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {
  return (
      <section className="banner-section">
          <div className="banner-carousel">
              <Carousel>
                  <Carousel.Item>
                      <div className="slide-item" style={{ backgroundImage: `url(${banner1})` }}>
                          <div className="auto-container">
                              <div className="content-box">
                                  <h2><span>Unique Sports Bar <br />in Mumbai</span></h2>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="slide-item" style={{ backgroundImage: `url(${banner2})` }}>
                          <div className="auto-container">
                              <div className="content-box">
                                  <h2><span>Sports, Music, Fun,<br /> Cheer</span></h2>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="slide-item" style={{ backgroundImage: `url(${banner3})` }}>
                          <div className="auto-container">
                              <div className="content-box">
                                  <h2><span>A place to get together <br />and cheer!!</span></h2>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>
              </Carousel>

              {/* Slide Item */}


          </div>
      </section>
  )
}
