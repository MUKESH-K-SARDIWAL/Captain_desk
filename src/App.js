import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './pages/Home.js';
import { AboutUs } from './pages/AboutUs.js';
import Gallery from './pages/Gallery.js';
import Event from './pages/Event.js';
import WhatNew from './pages/WhatNew.js';
import Location from './pages/Location.js';
import Career from './pages/Career.js';
import Disclaimer from './pages/Disclaimer.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import EventDetail from './pages/EventDetail.js';
import { Header } from './components/Header.js';
import Footer from './components/Footer.js';
import Drinks from './pages/Drinks.js';
import Foods from './pages/Foods.js';

function App() {


  return (
    <BrowserRouter>
      <div className='page-wrapper'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Event />} />
          <Route path="events-detail/:id" element={<EventDetail />} />
          <Route path="Drinks" element={<Drinks />} />
          <Route path="Foods" element={<Foods />} />
          <Route path="what-new" element={<WhatNew />} />
          <Route path="location" element={<Location />} />
          <Route path="career" element={<Career />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-double-up"></span></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
