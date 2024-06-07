import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import WebProcess from '../components/includes/WebProcess';
import { LightgalleryItem } from "react-lightgallery";
import WebAppPortfolio from '../components/includes/WebAppPortfolio';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import PricingWebDesignMainTab from '../components/includes/PricingWebDesignMainTab';


export default function WebApplicationDevelopment() {

    useEffect( ()=>{

        window.jQuery(function() {

        window.jQuery('.types-slider-web').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: false,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

     });
     });


  return (
    <>
    <section className='innerbanner-sec website-banner'>
    <video src="images/web-desgin/video/web-app-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
            <h2 class="outline-txt">Website Design</h2>    
            <div className='row'>
                <div className='col-sm-7'>
                    <div className='bnr-txt'>
                        <h2>End To End Web Application Development </h2>
                        <p>Stay Ahead with Next-Generation Web Application development services to Effortlessly tackle Tech Challenges with empowering solutions and managing change effectively. </p>
                        <div className="cta-btn bnr-btn">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started</a>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="link_wrapper">
                                <a href="#." className="tel-btn">866-712-0210</a>
                                <div className="icon phone-icon-st">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                    {/* <div className='bnr-side-img-web'>
                        <img src='images/web-desgin/banner-side-img.png' alt=''></img>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <section className='web-about-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='about-txt hd-txt'>
                        <h2>Website Designs that Create an Impact</h2>
                        <p>Your Reliable Partner for Web Application Development, we create innovative B2B and B2C solutions with a laser emphasis on video delivery, RTC, adtech, eLearning, and data analytics. We have over ten years of experience. Our committed team of web app developers has successfully serviced 200+ clients, advancing several sectors. As a premier provider of custom web application development services, we create solutions that are customized to the requirements of each industry. We give you the skills and strategies you need to overcome obstacles and achieve unmatched success in the digital world. <br /> 
                        Choose the best Web App Development services Using a solid Set of Technologies and Tools for Optimal Performance and User Experience. By providing smooth client experiences, better productivity, and worldwide accessibility, web application development may change your company and drive growth and success. <br />
                        Ready to conquer the competition? With strategy and development services that give your vision life, we've got you covered. We have a highly skilled staff that has mastered over 50 development technologies, ensuring that you have access to cutting edge solutions for unparalleled success. Let's revolutionize your digital presence!
</p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='about-web-img-st'>
                        <h2 class="outline-txt">Website Design</h2>    
                        <img className='about-web-img-1' src='images/web-desgin/about/webapp/1.png' alt=''></img>
                        <img className='about-web-img-2' src='images/web-desgin/about/webapp/2.png' alt=''></img>
                        <img className='about-web-img-3' src='images/web-desgin/about/webapp/3.png' alt=''></img>
                        <img className='about-web-img-4' src='images/web-desgin/about/webapp/4.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
        <section className='rating-sec-web'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 p0 main-ratng-web-col'>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-1.png' alt=''></img>
                            <h2><span className='count'>450</span></h2>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-2.png' alt=''></img>
                            <h2><span className='count'>48</span>k</h2>
                            <h5>Project Done</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-3.png' alt=''></img>
                            <h2><span className='count'>450</span></h2>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-4.png' alt=''></img>
                            <h2><span className='count'>48</span>k</h2>
                            <h5>Project Done</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section className='cta-sec-logo cta-sec-web-design'>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-5'>
                    <div className='cta-side-img'>
                        <img src='images/web-desgin/cta-side-img.png' alt=''></img>
                    </div>
                </div>
                <div className='col-sm-7'>
                    <div className='cta-txt inner-cta-txt'>
                        <h4>Got A Project In Mind, Let's Grab A Coffee</h4>
                        <h2>We’re excited to turn your ideas into reality with our services! </h2>
                        <p>We support companies with their digital necessities, regardless of their size. Our substantial knowledge and remarkable industry experience allow us to deliver high-quality services to our client.</p>
                        <div className="cta-btn bnr-btn">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started</a>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="link_wrapper">
                                <a href="#." className="tel-btn">866-712-0210</a>
                                <div className="icon phone-icon-st">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className='types-of-web'>
        <div className='container-fluid'>
        <h2 class="outline-txt">Our Services</h2> 
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Types of Websites Designs We Provide</h2>
                        <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
                    </div>
                </div>
                <div className='col-sm-12 types-main-col p0'>
                    <div className='types-slider-web'>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/webapp/services-icon-1.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Accessibility and Cross-Platform</h4>
                                <p>Any device with a web browser and an internet connection may access web apps. As a result of the cross-platform compatibility, users no longer need to install or update software, which benefits both users and developers. Your application may be accessed by users on desktops, laptops, tablets, and smartphones, giving you a larger audience.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/webapp/services-icon-2.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Easy Updates and Maintenance</h4>
                                <p>Because web applications are hosted centrally, updates, improvements, and bug fixes may be made quickly. Users don't need to download or install anything to obtain the most recent version of the program automatically. This guarantees that your program is current and working, which enhances user experience.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/webapp/services-icon-3.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Scalability and Cost-Effectiveness</h4>
                                <p>Web apps don't require significant setup improvements to support several users at once. The value of this scalability increases as your user base expands. Because there is no need to build and maintain separate versions for multiple platforms, web apps frequently have lower development and maintenance expenses than native programs.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/webapp/services-icon-4.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Easy Integration and Data Sharing</h4>
                                <p>For easy sharing of data and interoperability, online applications may be connected with other web services and APIs. By integrating features from third-party services, including payment gateways, social network integration, or mapping services, you may improve the usefulness of your application. A more thorough experience benefits users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='portfolio-web-sec'>
        <div className='container'>
            <div className='row'>
                <img className='port-bf-web-img' src='images/web-desgin/port-bf.png' alt=''></img>
                <img className='port-af-web-img' src='images/web-desgin/port-af.png' alt=''></img>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Our Portfolio <br /> Focused, bold solutions, for an evolving world</h2>
                        <p>We aim to create engaging and unique experiences that lead to actual business success. Our main goal is to transform our client’s brands for the better.</p>
                    </div>
                </div>
                <WebAppPortfolio />
            </div>
        </div>
    </section>

    <TechnologySecInclude />
    <section className="mix-bg-clr-sec">
        <section className="pricing-sec">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 p0">
                        <div className="hd-txt">
                            <h2>Your Path to Savings: Explore Our Cost-Effective Pricing Structures</h2>
                            <p>As a professional logo design agency, National Logo Designs offers various affordable packages that are not just easy on your pockets but also offer various features to elevate your business.</p>
                        </div>
                    </div>
                    <PricingWebDesignMainTab />
                </div>
            </div>
        </section>
        <WebProcess />
    </section>
    <WhyChooseTestiSec />
    <MainPopup />
    </>
  )
}