import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import WebProcess from '../components/includes/WebProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WebEcomPortfolio from '../components/includes/WebEcomPortfolio';
import WebBackPortfolio from '../components/includes/WebBackPortfolio';
import WebWordpressPortfolio from '../components/includes/WebWordpressPortfolio';
import WebAppPortfolio from '../components/includes/WebAppPortfolio';
import MainPopup from '../components/includes/MainPopup';
import PricingWebDesignMainTab from '../components/includes/PricingWebDesignMainTab';

export default function WebsiteDesign() {

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
                breakpoint: 767,
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
    <video src="images/web-desgin/video/web-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
            <h2 class="outline-txt">Website Design</h2>    
            <div className='row'>
                <div className='col-sm-7'>
                    <div className='bnr-txt'>
                        <h2>Promote Your <br />Business with Artistic Web Designs</h2>
                        <p>Our custom website design services are here to boost your business through impeccable website designs. We improve your conversion rates and sales and revenue.</p>
                        <div className="cta-btn bnr-btn">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn popup-btn">Get Started</a>
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
                        <p>Our custom website design and development services aim to produce websites that have a significant effect. We think that a website is more than simply a digital presence; it is an opportunity to convey your company's story. Each website is precisely crafted to reflect your brand identity, values, and vision, ensuring a seamless representation of your company. We create websites that are easy to browse and visually appealing, capturing visitors' attention from the minute they land on your site. <br /> At our core, we understand that a successful website involves more than simply good looks. It has to do with performance and functionality. That is why we strive to create websites that look great and operate extraordinarily well across a wide range of devices and browsers. Our website design and development services can help you make a lasting impression on your audience and remain ahead in today's competitive digital world, whether you want to establish a new website or renovate an existing one.
                        </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='about-web-img-st'>
                        <h2 class="outline-txt">Website Design</h2>    
                        <img className='about-web-img-1' src='images/web-desgin/1.png' alt=''></img>
                        <img className='about-web-img-2' src='images/web-desgin/2.png' alt=''></img>
                        <img className='about-web-img-3' src='images/web-desgin/3.png' alt=''></img>
                        <img className='about-web-img-4' src='images/web-desgin/4.png' alt=''></img>
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
                                <a href="javascript:;" className="get-btn popup-btn">Get Started</a>
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
                        <h2>Our Custom Web Design Services </h2>
                        <p>We aim to create engaging experiences through our professional website design services, that lead to actual business success. Our main goal is to transform our client’s brands.</p>
                    </div>
                </div>
                <div className='col-sm-12 types-main-col p0'>
                    <div className='types-slider-web'>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/web-design/services-icon-1.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>E-commerce Websites</h4>
                                <p> An e-commerce website is an online platform that allows businesses to showcase and sell items or services to clients worldwide, and custom e-commerce solutions offer significant advantages by tailoring the platform to specific business needs, improving user experience, enhanced functionality, and overall performance, contributing to greater customer satisfaction and business success.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/web-design/services-icon-2.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>WordPress Websites</h4>
                                <p>WordPress websites built on the WordPress platform are widely popular for expert WordPress website development services due to their versatility, user-friendly interface, and substantial plugin support are all factors that make it an attractive option. Due to these features, businesses and individual can create dynamic and fully featured websites that are customized to their individual needs and goals. </p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/web-design/services-icon-3.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Shopify Websites </h4>
                                <p>Shopify websites are popular among businesses looking for effective e-commerce development solutions because of their user-friendly design, wide range of functionality, and seamless online selling experience. Shopify helps entrepreneurs make attractive online stores with many options and easy-to-use tools. This helps businesses grow and succeed by attracting and keeping customers. With Shopify, entrepreneurs can easily achieve their goals.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/web-design/services-icon-4.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Backend Development</h4>
                                <p>Our backend development services sculpt the core of your digital creation, providing maximum performance and scalability from concept to reality. We are skilled at creating a strong and reliable backend system for your project in ever-changing digital world. We focus on making sure your customers have a great experience when they interact with your business.</p>
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
                      <div className='col-sm-12  portfolio-main-pg-sec'>

                          <Tabs
                              defaultActiveKey="ecomwebsite"
                              id="noanim-tab-example"
                              className="mb-3"
                              unmountOnExit={true}
                              mountOnEnter={true}
                              transition={false}
                          >

                              <Tab eventKey="ecomwebsite" title="Ecommerce">
                                  <WebEcomPortfolio />
                              </Tab>
                              <Tab eventKey="backendwebsite" title="Backend Development">
                                  <WebBackPortfolio />
                              </Tab>
                              <Tab eventKey="wordpresswebsite" title="Wordpress Development">
                                  <WebWordpressPortfolio />
                              </Tab>
                              <Tab eventKey="webappwebsite" title="Web Application">
                                  <WebAppPortfolio />
                              </Tab>

                              
                          </Tabs>

                      </div>
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
