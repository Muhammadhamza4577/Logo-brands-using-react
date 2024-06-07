import React, { useEffect, Component } from "react";



import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingWeb() {

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
                            <h2>WEB CONTENT  </h2>
                            <div className='pricing-amount'>
                                <h2>$70 
                                    {/* <span>$98 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li class="heading">Some Salient Features of Our Website Copywriting Services are:</li>
                            <li>Creative, Well-Written and 100% Original Content</li>
                            <li>According To Your Exact Requirements</li>
                            <li>FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.</li>
                            <li>SEO friendly - Your keyword(s) will be placed in the title, the first &amp; last paragraphs and throughout the web copy in a natural and fluent manner</li>
                            <li>Quick Turnaround Time – Within 3 business days!!</li>
                            <li>Unlimited Revisions - 100% Satisfaction Guaranteed!</li>
                            <li>Proofing by our in-house experts – 0% mistakes guarantee!</li>
                            <li>100% Satisfaction Guarantee</li>
                            <li>100% Money Back Guarantee*</li>
                            
                           
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
                            <h2>ARTICLE WRITING </h2>
                            <div className='pricing-amount'>
                                <h2>$149 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li>1 Creative, Fresh &amp; Well-Written Article</li>
                            <li>By 1 Professional Copywriter</li>
                            <li>Industry Specified Expert Copywriter</li>
                            <li>400 Words Per Page</li>
                            <li>3 to 5 Business Days Rotation</li>
                            <li>5 Revisions</li>
                            <li>According To Your Exact Requirements</li>
                            <li>Written on Your Specified Topic/Keyword</li>
                            <li>Proofing by our in-house experts</li>
                            <li>Free Submission on any article marketing directories /blog (If required)</li>
                            <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp; last paragraphs and throughout the web copy in a natural and fluent manner</li>
                            <li>100% Ownership Rights</li>
                            <li>100% Original Content</li>
                            <li>100% Satisfaction Guarantee</li>
                            <li>100% Money Back Guarantee*</li>
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
                            <h2>BLOG WRITING </h2>
                            <div className='pricing-amount'>
                                <h2>$180 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li>1 Creative, Fresh &amp; Well-Written Article</li>
                            <li>By 1 Professional Copywriter</li>
                            <li>Industry Specified Expert Copywriter</li>
                            <li>400 Words Per Page</li>
                            <li>3 to 5 Business Days Rotation</li>
                            <li>5 Revisions</li>
                            <li>According To Your Exact Requirements</li>
                            <li>Written on Your Specified Topic/Keyword</li>
                            <li>Proofing by our in-house experts</li>
                            <li>Free Submission on any article marketing directories /blog (If required)</li>
                            <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp; last paragraphs and throughout the web copy in a natural and fluent manner</li>
                            <li>100% Ownership Rights</li>
                            <li>100% Satisfaction Guarantee</li>
                            <li>100% Money Back Guarantee*</li>
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