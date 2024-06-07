import React, { useEffect, useLocation } from 'react'
import { Link } from 'react-router-dom';
import slick from '../assets/js/slick';


export default function Header() {
  const mynumber = "866-395-5514";
  const myemail = "sales@metaappdesigns.com";
  const mysite = "www.metaappdesigns.com";


  


  useEffect(() => {

   
    window.jQuery(function () {
      var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
      var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
          window.jQuery('.head_top ul li a').each(function () { //looks in each link item within the primary-nav list
              var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
   
              if (activePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
                  window.jQuery(this).parent().addClass('active'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
              }
          });
  })
  
  window.jQuery(function() {
      if (window.jQuery(window).width() < 767) {
        window.jQuery('.main-process-col').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        arrows: false,
        autoplaySpeed:3000,
        speed:2000,
        cssEase: 'linear',
        Swiping: true,
        slidesToShow: 1,
        pauseOnHover:false,
        slidesToScroll: 1,
        });

    }


  
    window.jQuery(function () {

      var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
          body = document.querySelector('body');
          menu = document.querySelector('.menu-icon');
          menuItems = document.querySelectorAll('.nav__list-item');
          applyListeners();
        };
        var applyListeners = function applyListeners() {
          menu.addEventListener('click', function () {
            return toggleClass(body, 'nav-active');
          });
        };
        var toggleClass = function toggleClass(element, stringClass) {
          if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
        };
        init();
      }();
      function openNav() {
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("main").style.marginLeft = "250px";
      }
      function closeNav() {
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("main").style.marginLeft = "0";
      }
  
      // eslint-disable-next-line no-unused-expressions
      window.jQuery(".menu_dd").hide(),
      window.jQuery(".arrow_down + i").click((function() {
        // eslint-disable-next-line no-unused-expressions
        window.jQuery(".menu_dd").not(window.jQuery(this).next()).hide(),
          window.jQuery(this).next().stop(!0, !0).slideToggle();
      }));
  
  
  
      window.jQuery(".hover-target-close").click((function() {
        // eslint-disable-next-line no-unused-expressions
        window.jQuery("body").removeClass("nav-active"),
          window.jQuery(".overlay-bg").css("display", "none"),
          window.jQuery(".popupform-main").removeClass("active");
      }));
  
      window.jQuery(".slider").not('.slick-initialized').slick()
  
       window.jQuery(document).ready(function() {
         window.jQuery(".nav-link").hover(function () {
             window.jQuery(".dropdown").removeClass("active");
            //  window.jQuery(".tab").addClass("active"); // instead of this do the below 
             window.jQuery(".dropdown").addClass("active");   
        });
        });
        
        window.jQuery(document).ready(function() { 
          window.jQuery(".navbar-nav li a").click(function(event) { 
            
            window.jQuery(".navbar-nav li a ").removeClass("active"); //Remove any "active" class 
            window.jQuery(".navbar-nav li", this).addClass("active"); //Add "active" class to selected tab // 
            // $(activeTab).show(); //Fade in the active content 
        });
      });

    });
  


    
    })

  });
  return (
    <>


      <header>
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar  navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="images/logo-white.png" alt=''></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto w-100 justify-content-center">
                    {/* <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to="logo-design" data-toggle="dropdown" className="nav-link  navlink-drop">Logo Design
                        <ul className='dropdown-menu'>
                            <li><Link className="nav-link" to="2d-logo-design">2D Logo Design</Link></li>
                            <li><Link className="nav-link" to="3d-logo-design">3D Logo Design</Link></li>
                            <li><Link className="nav-link" to="mascot-logo-design">Mascot Logo Design</Link></li>
                            <li><Link className="nav-link" to="illustrative-logo-design">Illustrative Logo Design</Link></li>
                            <li><Link className="nav-link" to="animated-logo-design">Animated Logo Design</Link></li>
                          </ul>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link navlink-drop" data-toggle="dropdown" to="website-design">Web Design & Development
                        <ul className='dropdown-menu'>
                          <li><Link className="nav-link" to="wordpress-development">WordPress Development</Link></li>
                          <li><Link className="nav-link" to="ecommerce-solutions">Ecommerce Solutions</Link></li>
                          <li><Link className="nav-link" to="web-applicaton-development">Web Application Development</Link></li>
                          <li><Link className="nav-link" to="backend-development">Backend Development</Link></li>
                        </ul>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="mobile-app-development">Mobile Application</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link navlink-drop" to="digital-marketing">Digital Marketing
                        <ul className='dropdown-menu'>
                            <li><Link className="nav-link" to="branding">Branding</Link></li>
                            <li><Link className="nav-link" to="video-animation">Video Animation</Link></li>
                            <li><Link className="nav-link" to="search-engine-optimization">Search Engine Optimization</Link></li>
                            <li><Link className="nav-link" to="web-content-writing">Web Content Writing</Link></li>
                            <li><Link className="nav-link" to="social-media-marketing">Social Media Marketing</Link></li>
                            <li><Link className="nav-link" to="reputation-management">Reputation Management</Link></li>
                        </ul>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="mobile-nav">
                  <div className="nav-but-wrap">
                    <div className="menu-icon hover-target">
                      <span className="menu-icon__line menu-icon__line-left"></span>
                      <span className="menu-icon__line"></span>
                      <span className="menu_mm">Menu</span>
                    </div>
                  </div>

                  <div className="nav nav-fix-st">
                    <div className="nav__content">
                      <ul className="nav__list">
                        {/* <li className="nav__list-item "><Link to="/" className="hover-target">Home</Link></li> */}
                        
                        <li className="nav__list-item menu_dd_tab">
                          <Link className="hover-target arrow_down hover-target-close" to="logo-design">Logo Design </Link>
                          <i className="fa fa-caret-down " aria-hidden="true"></i>
                          <ul className="menu_dd" style={{display: 'none'}}>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="2d-logo-design">2D Logo Design</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="3d-logo-design">3D Logo Design</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="mascot-logo-design">Mascot Logo Design</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="illustrative-logo-design">Illustrative Logo Design</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="animated-logo-design">Animated Logo Design</Link></li>
                          </ul>
                        </li> 
                        <li className="nav__list-item menu_dd_tab">
                          <Link className="hover-target arrow_down hover-target-close" to="website-design">Web Design & Development </Link>
                          <i className="fa fa-caret-down " aria-hidden="true"></i>
                          <ul className="menu_dd" style={{display: 'none'}}>
                            
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="wordpress-development">WordPress Development</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="ecommerce-solutions">Ecommerce Solutions</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="web-applicaton-development">Web Application Development</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="backend-development">Backend Development</Link></li>
                          </ul>
                        </li> 
                        <li className="nav__list-item"><Link to="mobile-app-development" className="hover-target hover-target-close">Mobile Application</Link></li>
                        
                        <li className="nav__list-item menu_dd_tab">
                          <Link className="hover-target arrow_down hover-target-close" to="digital-marketing">Digital Marketing </Link>
                          <i className="fa fa-caret-down " aria-hidden="true"></i>
                          <ul className="menu_dd" style={{display: 'none'}}>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="branding">Branding</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="video-animation">Video Animation</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="search-engine-optimization">Search Engine Optimization</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="web-content-writing">Web Content Writing</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="social-media-marketing">Social Media Marketing</Link></li>
                            <li className='nav__list-item'><Link className="nav-link hover-target hover-target-close" to="reputation-management">Reputation Management</Link></li>
                          </ul>
                        </li> 
                        <li className="nav__list-item"><Link to="pricing" className="hover-target hover-target-close">Pricing</Link></li>
                        <li className="nav__list-item"><Link to="portfolio" className="hover-target hover-target-close">Portfolio</Link></li>
                        <li className="nav__list-item"><Link to="contact-us" className="hover-target hover-target-close">Contact Us</Link></li>
                        {/* <!--   <li className="nav__list-item"><a to="privacy" className="hover-target">Privacy</a></li>
                                <li className="nav__list-item"><a to="terms.php" className="hover-target">Terms & Conditions<a></li> --> */}


                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cta-btn header-btn">
                  <div className="link_wrapper">
                    <Link href="javascript:;" className="get-btn chats">Live Chat</Link>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}
