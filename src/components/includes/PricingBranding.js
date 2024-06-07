import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingBranding() {

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
                            <h2>STARTUP COLLATERAL  </h2>
                            <div className='pricing-amount'>
                                <h2>$99 
                                    {/* <span>$98 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stationery Design Set</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE Fax Template</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Print Ready Formats</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
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
                            <h2>COLLATERAL CLASSIC</h2>
                            <div className='pricing-amount'>
                                <h2>$499 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stationery Design Set</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Flyer Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Brochure Design (Bi-fold/Tri-fold)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
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
                            <h2>PREMIUM COLLATERAL </h2>
                            <div className='pricing-amount'>
                                <h2>$399 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Hat Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Invoice Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Email Signature Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stationery Design Set</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Packaging Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> T-Shirt Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
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
                            <h2>UNLIMITED COLLATERAL  </h2>
                            <div className='pricing-amount'>
                                <h2>$499 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Hat Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Invoice Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Email Signature Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stationery Design Set</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Menu Card Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> T-Shirt Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Banner Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
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