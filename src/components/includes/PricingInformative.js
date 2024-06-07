import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingInformative() {

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
                                <h2>$299 
                                    {/* <span>$98 <sup>Only</sup></span> */}
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
                            <h2>PROFESSIONAL </h2>
                            <div className='pricing-amount'>
                                <h2>$999 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 10 Unique Pages Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> CMS / Admin Panel Support</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Contact us page (with Google Map Integration)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Shutterstock premium photos upto 8 (You can provide us more)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 Banner Designs</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 jQuery Slider Banner</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Cross platform (iPhone, iPad, iPod, Android etc) Mobile responsive compatibility</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Pop-up subscribers box to encourage visitors for newsletter sign-up</li>
                            <li><i className="fa-solid fa-arrow-right"></i> SEO friendly sitemap</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Indexing (Google, Yahoo, and Bing)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete W3C Certified HTML</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Facebook Page Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Twitter Page Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> YouTube Page Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete Deployment</li>
                            <li><i className="fa-solid fa-arrow-right"></i> You’ll get</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Award Winning Designers</li>
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
                            <h2>ELITE WEBSITE </h2>
                            <div className='pricing-amount'>
                                <h2>$1399 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Upto 15 Unique Pages Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Conceptual and Dynamic Website</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Mobile Responsive</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Reservation/Appointment Tool (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Payment Integration (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom Forms</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Lead Capturing Forms (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Striking Hover Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Newsletter Subscription (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Newsfeed Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Integration</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Submission</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 Stock Photos</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Unique Banner Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 jQuery Slider Banner</li>
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
                            <h2>BUSSINESS WEBSITE </h2>
                            <div className='pricing-amount'>
                                <h2>$2345 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 30 Seconds 2D Explainer Video</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice - Over &amp; Sound Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script Writing</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Storyboard</li>
                            <li><i className="fa-solid fa-arrow-right"></i> SEO Meta Tags</li>
                            <li><i className="fa-solid fa-arrow-right"></i> SEO Meta Tags</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom Made, Interactive, Dynamic &amp; High End Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom WP (or) Custom PHP Development</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 jQuery Slider Banner</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Up to 10 Custom Made Banner Designs</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 10 Stock Images</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Special Hoover Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Content Management System (CMS)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Online Payment Integration (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Multi Lingual (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom Dynamic Forms (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Signup Area (For Newsletters, Offers etc.)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Bar</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Live Feeds of Social Networks integration (Optional)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Mobile Responsive</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE 5 Years Domain Name</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Google Friendly Sitemap</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Search Engine Submission</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete W3C Certified HTML</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Industry Specified Team of Expert Designers and Developers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete Deployment</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Dedicated Accounts Manager</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
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
            </div>
        <MainPopup />                               
        </>
    );
}