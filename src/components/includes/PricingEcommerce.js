import React, { useEffect, Component } from "react";

import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingEcommerce() {

    useEffect(() => {
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.pricinginnersider').slick('setPosition');
        })
    });

    const pricinginnersider = {
        dots: true,
        arrows: false,
        rows: 2,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
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
    };




    return (
        <>
            <div className="col-sm-12 p0 row pricing-main">
                <div className="col-sm-4">
                    <div className="pricing-box">
                        <img className='pricing-gif' src='images/pricing/1.gif' alt=''></img>
                        <div className="pricing-inr-box">
                            <img src='images/pricing/pricing-hd-line.png' alt=''></img>
                            <h2>BASIC  </h2>
                            <div className='pricing-amount'>
                                <h2>$799 
                                    {/* <span>$98 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Up-to 50 Products</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Content Management System (CMS)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Mini Shopping Cart Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Dedicated designer &amp; developer</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee *</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee * </li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee *</li>
                            
                           
                        </ul>
                        <div className="cta-btn pricing-btn-st">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started
                                <div className='price-icon-btn'>
                                    <img src='images/pricing/arrow.png' alt=''></img>
                                </div>
                                </a>
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
                            <h2>START UP</h2>
                            <div className='pricing-amount'>
                                <h2>$499 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stock Images</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Page Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 jQuery Slider Banner</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Contact/Query Form</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete W3C Certified HTML</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete Deployment</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee *</li>
                        </ul>
                        <div className="cta-btn pricing-btn-st">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started
                                <div className='price-icon-btn'>
                                    <img src='images/pricing/arrow.png' alt=''></img>
                                </div>
                                </a>
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
                            <h2>STARTUP </h2>
                            <div className='pricing-amount'>
                                <h2>$999 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 15 Custom designed Inner pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Conceptual and Dynamic Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Contact us page (with Google Map Integration)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Appointment/Reservation Booking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Payment Gateway Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Blog/Article pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Newsletter signup form</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Pop-up subscribers box to encourage visitors for newsletter sign-up</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shutterstock premium photos</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animated slider banners</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross platform (iPhone, iPad, iPod, Android etc) Mobile responsive compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross browser (Chrome, Firefox, Safari etc) compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Indexing (Google, Yahoo, and Bing)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Easy-to-manage CMS (Admin Panel)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> How to use training manual for admin panel</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Parallax Scrolling</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Fast Load Time</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Security plugins</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Google Analytic Installation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> You'll get</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Award Winning Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 60 Days Free Maintenance (Post-launch support)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee*</li>
                        </ul>
                        <div className="cta-btn pricing-btn-st">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started
                                <div className='price-icon-btn'>
                                    <img src='images/pricing/arrow.png' alt=''></img>
                                </div>
                                </a>
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
                            <h2>PROFESSIONAL  </h2>
                            <div className='pricing-amount'>
                                <h2>$1499 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Custom designed Inner pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Conceptual and Dynamic Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Contact us page (with Google Map Integration)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Appointment/Reservation Booking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Payment Gateway Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Blog/Article pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Newsletter signup form</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Pop-up subscribers box to encourage visitors for newsletter sign-up</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shutterstock premium photos</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Striking Hover Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animated slider banners</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross platform (iPhone, iPad, iPod, Android etc) Mobile responsive compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross browser (Chrome, Firefox, Safari etc) compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Indexing (Google, Yahoo, and Bing)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Easy-to-manage CMS (Admin Panel)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> How to use training manual for admin panel</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Year FREE Hosting</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Year FREE Domain</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Parallax Scrolling</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Fast Load Time</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Security plugins</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Google Analytic Installation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> You'll get</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Award Winning Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 60 Days Free Maintenance (Post-launch support)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee*</li>
                        </ul>
                        <div className="cta-btn pricing-btn-st">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started
                                <div className='price-icon-btn'>
                                    <img src='images/pricing/arrow.png' alt=''></img>
                                </div>
                                </a>
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
                            <h2>ELITE  </h2>
                            <div className='pricing-amount'>
                                <h2>$1999 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Prestigious Display / Generating Traffic &amp; Lead Generation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free business consultation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom designed Homepage (4x concepts)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 30 Custom designed Inner pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Contact us page (with Google Map Integration)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Ecommerce Module</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Products</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Categories</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Product Management (sales &amp; inventory management)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Product offers (wish-list, discount options, coupon codes)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Multiple Product variation (Color, Size, Quantity, and other attributes)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Product rating &amp; reviews</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Intelligent search system with filtering options (search by price, categories, Styles etc)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Product sorting (Newest, Featured, Popular, Best Seller)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Multiple Payment Gateways Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shipping merchant integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Tax calculation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Multiple-currency (optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Multi-Language (optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Manage orders (track order, billing history, order status, automated invoicing)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Print invoices</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Customer Dashboard</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shipping Labels</li>
                            <li><i className="fa-solid fa-arrow-right"></i> News &amp; promotions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Appointment/Reservation Booking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Blog/Article pages</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Downloadable items (eBooks, PDFs, Podcast, Videos)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Newsletter signup form</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Pop-up subscribers box to encourage visitors for newsletter sign-up</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shutterstock premium photos</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animated slider banners</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Live Chat Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Parallax Scrolling</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Live Feeds Widget (Facebook, Instragram, Pinterest)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross browser (Chrome, Firefox, Safari etc) compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross platform (iPhone, iPad, iPod, Android etc) responsive compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> SEO friendly coding (Meta-tags, Meta Titles, Meta Description, Keywords, W3C compliant etc)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> On-page SEO configuration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Customized CMS (Admin Panel)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Indexing (Google, Yahoo, and Bing)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> How to use training manual for admin panel</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Live admin panel training session with expert (4 hrs)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Fast Load Time</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Security plugins</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Google Analytic Installation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Google Webmaster Tool</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 year free hosting</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 year free domain registration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> You’ll get</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Award Winning Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 180 Days Free Maintenance (Post-launch support)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee*</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership rights and access to the website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete source files and database delivery</li>
                        </ul>
                        <div className="cta-btn pricing-btn-st">
                            <div className="link_wrapper">
                                <a href="javascript:;" className="get-btn">Get Started
                                <div className='price-icon-btn'>
                                    <img src='images/pricing/arrow.png' alt=''></img>
                                </div>
                                </a>
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
        <MainPopup />
        </>
    );
}