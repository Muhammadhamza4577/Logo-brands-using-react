import React, { useEffect } from 'react'



import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import WebProcess from '../components/includes/WebProcess';
import { LightgalleryItem } from "react-lightgallery";
import WebEcomPortfolio from '../components/includes/WebEcomPortfolio';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';

export default function EcommerceSolutions() {

    useEffect( ()=>{
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


  return (
    <>
    <section className='innerbanner-sec website-banner'>
    <video src="images/web-desgin/video/ecom-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
            <h2 class="outline-txt">Website Design</h2>    
            <div className='row'>
                <div className='col-sm-7'>
                    <div className='bnr-txt'>
                        <h2>Dynamic Ecommerce Solutions </h2>
                        <p>We've been experts in website creation, search marketing, and e-commerce web design for the past five years. Let's power your online success together!</p>
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
                        <h2>Looking for a custom ecommerce solution? </h2>
                        <p>Expand your reach with Ecommerce web design services! Use our e-commerce solutions to customize sites for International and regional markets. Take over new areas, give your brand and products online life, engage consumers, and boost sales.<br />
                        As  web development and design professionals at National Logo Designs, focusing on designing effective e-commerce websites. Our staff is committed to producing high-quality websites with user-friendly interfaces and strong security.<br />
                        We empower your organization with flexible websites that respond to the needs of the worldwide market with our custom WordPress development services. With our well-developed online experiences, you can engage your consumers and increase conversions. We are able to provide you with top notch online experiences that help you connect with your consumers in a meaningful way. <br />
                        We ensure that your online presence shines out and creates a lasting impression by utilizing years of knowledge and new ways. Come along on this transformational journey with us, and together, let's take your business to new heights in the digital world. Unlock the full potential of your e-commerce business by experiencing the impact that National Logo Designs can make.

                        </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='about-web-img-st'>
                        <h2 class="outline-txt">Website Design</h2>    
                        <img className='about-web-img-1' src='images/web-desgin/about/ecom/1.png' alt=''></img>
                        <img className='about-web-img-2' src='images/web-desgin/about/ecom/2.png' alt=''></img>
                        <img className='about-web-img-3' src='images/web-desgin/about/ecom/3.png' alt=''></img>
                        <img className='about-web-img-4' src='images/web-desgin/about/ecom/4.png' alt=''></img>
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
                                <img src='images/web-desgin/ecom/services-icon-1.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Global Reach and Accessibility</h4>
                                <p>A worldwide audience may be reached by enterprises due to e-commerce technologies that reduce regional restrictions. Customers from all over the world may access your products or services with an online store, so extending your potential client beyond the restrictions of conventional brick-and-mortar stores.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/ecom/services-icon-2.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Reduced Operational Costs</h4>
                                <p>Many of the expenses related to maintaining a physical store, such as rent, utilities, and employees in-store, have been replaced by e-commerce. You may run your business on an e-commerce platform with a smaller staff and less overhead, which improves cost effectiveness and could result in larger profit margins.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/ecom/services-icon-3.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Personalized Shopping Experience</h4>
                                <p>E-commerce platforms often come with tools that let you customize each customer's buying experience. You may provide specialized product suggestions, promotions, and content to customers by studying their behavior and interests. This can increase client engagement and your chances of making purchases.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/ecom/services-icon-4.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Data-Driven Insights</h4>
                                <p>E-commerce platforms offer insightful data that you may use to guide your business's decisions. You may monitor consumer habits, buying patterns, website traffic, and more. With the help of these insights, you can improve your product offers, marketing methods, and user experience as a whole.</p>
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
                        <p>Let's explore all the limitless options of our redefined technology stack. It's a combination of new ideas and effectiveness that will take your digital experience to the next level.</p>
                    </div>
                </div>
                <WebEcomPortfolio />
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
                    <div className="col-sm-12 p0 row pricing-main">
                        <div className="col-sm-4">
                            <div className="pricing-box">
                                <img className='pricing-gif' src='images/pricing/1.gif' alt=''></img>
                                <div className="pricing-inr-box">
                                    <img src='images/pricing/pricing-hd-line.png' alt=''></img>
                                    <h2>Basic</h2>
                                    <div className='pricing-amount'>
                                        <h2>$59 <span>$197 <sup>Only</sup></span></h2>
                                    </div>								
                                </div>
                                
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
                                </ul>
                                <div className="cta-btn pricing-btn-st">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className='price-icon-btn'>
                                            <img src='images/pricing/arrow.png' alt=''></img>
                                        </div>
                                    </div>
                                    {/* <div className="link_wrapper">
                                        <a href="#." className="chat-btn chats">Live Chat</a>
                                        <div className="icon phone-icon-st">
                                            <i className="fa-solid fa-comment-dots"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="pricing-box">
                                <img className='pricing-gif' src='images/pricing/2.gif' alt=''></img>
                                <div className="pricing-inr-box">
                                    <img src='images/pricing/pricing-hd-line.png' alt=''></img>
                                    <h2>Basic</h2>
                                    <div className='pricing-amount'>
                                        <h2>$59 <span>$197 <sup>Only</sup></span></h2>
                                    </div>								
                                </div>
                                
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
                                </ul>
                                <div className="cta-btn pricing-btn-st">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className='price-icon-btn'>
                                            <img src='images/pricing/arrow.png' alt=''></img>
                                        </div>
                                    </div>
                                    {/* <div className="link_wrapper">
                                        <a href="#." className="chat-btn chats">Live Chat</a>
                                        <div className="icon phone-icon-st">
                                            <i className="fa-solid fa-comment-dots"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="pricing-box">
                                <img className='pricing-gif' src='images/pricing/3.gif' alt=''></img>
                                <div className="pricing-inr-box">
                                    <img src='images/pricing/pricing-hd-line.png' alt=''></img>
                                    <h2>Basic</h2>
                                    <div className='pricing-amount'>
                                        <h2>$59 <span>$197 <sup>Only</sup></span></h2>
                                    </div>								
                                </div>
                                
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG & Grayscale)</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
                                </ul>
                                <div className="cta-btn pricing-btn-st">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className='price-icon-btn'>
                                            <img src='images/pricing/arrow.png' alt=''></img>
                                        </div>
                                    </div>
                                    {/* <div className="link_wrapper">
                                        <a href="#." className="chat-btn chats">Live Chat</a>
                                        <div className="icon phone-icon-st">
                                            <i className="fa-solid fa-comment-dots"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
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
