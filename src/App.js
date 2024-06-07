import { BrowserRouter, Navigate,  Routes,  Route, Component} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './components/assets/css/bootstrap.min.css';
import './components/assets/css/bootstrap.min.css.map';
import './components/assets/css/animate.css';
import './components/assets/css/jquery.fancybox.min.css';
import './components/assets/css/fancybox.css';
import './components/assets/css/slick.css';
import './components/assets/css/slick-theme.css';
import './components/assets/css/style.css';
import './components/assets/css/responsive.css';

// import './components/assets/css/font-6.4.0.min.css';

import ScrollToTop from './components/includes/ScrollToTop';


// Includes
import Header from './components/includes/Header';
// footer
import Footer from './components/includes/Footer';


import './components/assets/js/slick.js';



import Home from './pages/Home';

import  jQuery from 'jquery'; 
import LogoDesign from "./pages/LogoDesign";
import WebsiteDesign from "./pages/WebsiteDesign";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import CookiePageIp from "./components/CookiePageIp";
import LogoDesign2d from "./pages/LogoDesign2d";
import LogoDesign3d from "./pages/LogoDesign3d";
import MascotLogoDesign from "./pages/MascotLogoDesign";
import IllustrativeLogoDesign from "./pages/IllustrativeLogoDesign";
import AnimatedLogoDesign from "./pages/AnimatedLogoDesign";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import BackendDevelopment from "./pages/BackendDevelopment";
import Branding from "./pages/Branding";
import VideoAnimation from "./pages/VideoAnimation";
import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import WebContentWriting from "./pages/WebContentWriting";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import ReputationManagement from "./pages/ReputationManagement";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import TermConditions from "./pages/TermConditions";
import PrivacyPolicy from "./components/includes/PrivacyPolicy";


window.jQuery = jQuery;

function App() {
  return (
    <ScrollToTop>
      <div>
        <Header />
        <CookiePageIp/> 
        <Routes >
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="logo-design" element={<LogoDesign />} />
            <Route path="website-design" element={<WebsiteDesign />} />
            <Route path="mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="2d-logo-design" element={<LogoDesign2d />} />
            <Route path="3d-logo-design" element={<LogoDesign3d />} />
            <Route path="mascot-logo-design" element={<MascotLogoDesign />} />
            <Route path="illustrative-logo-design" element={<IllustrativeLogoDesign />} />
            <Route path="animated-logo-design" element={<AnimatedLogoDesign />} />
            <Route path="wordpress-development" element={<WordPressDevelopment />} />
            <Route path="ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="web-applicaton-development" element={<WebApplicationDevelopment />} />
            <Route path="backend-development" element={<BackendDevelopment />} />
            <Route path="branding" element={<Branding />} />
            <Route path="video-animation" element={<VideoAnimation />} />
            <Route path="search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="web-content-writing" element={<WebContentWriting />} />
            <Route path="social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="reputation-management" element={<ReputationManagement />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="terms&conditions" element={<TermConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route  path="*"  element={<Navigate to="/404" replace />} />
            <Route  path=""  element={<Navigate to="/404" replace />} />
            {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
