import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './pages/Home.js';
import { AboutUs } from './pages/AboutUs.js';
import Menu from './pages/Menu.js';
import Gallery from './pages/Gallery.js';
import Event from './pages/Event.js';
import WhatNew from './pages/WhatNew.js';
import Location from './pages/Location.js';
import Career from './pages/Career.js';
import Disclaimer from './pages/Disclaimer.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';

function App() {

  return (
    <>
      <Home />
      {/* <AboutUs /> */}
      {/* <Menu /> */}
      {/* <Gallery /> */}
      {/* <Event /> */}
      {/* <WhatNew /> */}
      {/* <Location /> */}
      {/* <Career /> */}
      {/* <Disclaimer /> */}
      {/* <PrivacyPolicy /> */}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-double-up" />
      </div>
    </>
  );
}

export default App;
