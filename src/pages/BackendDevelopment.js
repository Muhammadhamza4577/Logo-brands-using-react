import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import WebProcess from '../components/includes/WebProcess';
import { LightgalleryItem } from "react-lightgallery";
import WebBackPortfolio from '../components/includes/WebBackPortfolio';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import PricingWebDesignMainTab from '../components/includes/PricingWebDesignMainTab';

export default function BackendDevelopment() {

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
    <video src="images/web-desgin/video/back-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>

        <div className='container'>
            <h2 class="outline-txt">Website Design</h2>    
            <div className='row'>
                <div className='col-sm-7'>
                    <div className='bnr-txt'>
                        <h2>Maximize Platform potential with expert backend development </h2>
                        <p>Empowering platforms with robust backend development. Our skilled team crafts scalable solutions, ensuring seamless data management, security, and optimal performance. Fuel your business growth!</p>
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
                        <p>Our company offers expert backend development services to build a strong digital foundation. Skilled developers craft scalable solutions, ensuring seamless data handling, heightened security, and optimal performance. We specialize in designing and managing databases, heightened security, and optimal performance. <br /> If you're looking to strengthen your digital foundation, our team at the company is here to help. Our expert backend development services offer several benefits to your business. With our help, your applications or websites can easily handle increasing traffic and data demands, resulting in improved user experiences and minimal downtime. Our backend development company focus on security ensures your valuable data stays protected from cyber threats and potential data breaches. Our efficient backend solutions also streamline business operations, increasing overall productivity and saving costs. Faster data processing and optimized workflows contribute to improved operational efficiency.<br /> 
                        Our backend development services provide a competitive advantage for businesses, enabling growth and focusing on strengths, customer connections, and success. We offer a flexible base, improved safety, and streamlined operations, allowing businesses to enhance their online presence and discover new opportunities. Customize your platform and elevate your business!
                        </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='about-web-img-st'>
                        <h2 class="outline-txt">Website Design</h2>    
                        <img className='about-web-img-1' src='images/web-desgin/about/back/1.png' alt=''></img>
                        <img className='about-web-img-2' src='images/web-desgin/about/back/2.png' alt=''></img>
                        <img className='about-web-img-3' src='images/web-desgin/about/back/3.png' alt=''></img>
                        <img className='about-web-img-4' src='images/web-desgin/about/back/4.png' alt=''></img>
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
                                <img src='images/web-desgin/back/services-icon-1.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Data Management and Storage</h4>
                                <p>The data that powers your application is managed and stored by backend development. You can effectively store, retrieve, and manipulate massive volumes of data with the right backend design, ensuring that your application runs smoothly and gives users accurate information.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/back/services-icon-2.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Business Logic Implementation</h4>
                                <p>The backend of your program is where you implement the main business logic. This involves handling transactions, processing user inputs, carrying out complex calculations, and ensuring data integrity. Your application will run according to your business rules and needs if the backend is well-designed.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/back/services-icon-3.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Scalability and Performance</h4>
                                <p>Your application's speed and scalability are built on the backend work you do. You can manage growing user traffic and data loads without sacrificing speed by creating a strong backend architecture. Delivering a smooth experience as your user base expands depends on this.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/back/services-icon-4.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Security and User Authentication</h4>
                                <p>Implementing security measures is essential for protecting sensitive user data and preventing unwanted access. To make sure that user data is safe and private, backend developers can add encryption, authentication, and authorization methods.</p>
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
               <WebBackPortfolio />
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