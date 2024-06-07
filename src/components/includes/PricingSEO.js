import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingSEO() {

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
                            <h2>STARTUP PLAN  </h2>
                            <div className='pricing-amount'>
                                <h2>$499 
                                    {/* <span>$98 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><b>Campaign Setup And Optimization </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Website Audit</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Pages Optimized (10 pages) </li>
                            <li><i className="fa-solid fa-arrow-right"></i>15 Selected Keywords Targeting </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Keyword Research </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Keyword Grouping </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Keyword Mapping </li>
                            <li><b>On-Page Optimization </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>SEO Road Map</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Blog Creation</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Webpage Copywriting (3 pages, 350 words per page)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Title Tag Optimization (10 titles)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Meta Description Optimization (10 meta description)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Meta Keyword Optimization (10 meta keywords)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Domain Redirect Optimization (10 domain redirects)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>xml Sitemap Optimization</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Robots.txt Check</li>
                            <li><i className="fa-solid fa-arrow-right"></i>URL Rewrites (10 URL rewrites)</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Broken Link Report</li>
                            <li><b>Rich Snippet Recommendations  </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Breadcrumbs</li>
                            <li><b>Initial Off-Page SEO </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Social Bookmarking</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Slide Share Marketing</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Forums/FAQ’s</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Link Building</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Directory Submission</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Local Business Listings</li>
                            
                           
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
                            <h2>SCALING PLAN </h2>
                            <div className='pricing-amount'>
                                <h2>$700 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><b>Prior Analysis </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Business Analysis</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Consumer Analysis </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Competitor Analysis </li>
                            <li><i className="fa-solid fa-arrow-right"></i>35 Selected Keywords Targeting </li>
                            <li><i className="fa-solid fa-arrow-right"></i>15 Pages Keyword Targeted</li>
                            <li><b>Webpage Optimization </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Meta Tags Creation</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Keyword Optimization </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Image Optimization </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Inclusion of anchors</li>
                            <li><b>Tracking &amp; Analysis </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Google Analytics Installation</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Google Webmaster Installation </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Call To Action Plan </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Creation of Sitemaps</li>
                            <li><b>Reporting </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Monthly Reporting </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Recommendation </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Email Support </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Phone Support</li>
                            <li><b>Off Page Optimization</b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Social Bookmarking</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Slide Share Marketing </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Forums/FAQ’s </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Link Building </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Directory Submission </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Local Business Listings</li>
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
                            <h2>VENTURE PLAN </h2>
                            <div className='pricing-amount'>
                                <h2>$1200 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><b>Prior Analysis </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Business Analysis</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Consumer Analysis </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Competitor Analysis </li>
                            <li><i className="fa-solid fa-arrow-right"></i>60+ Selected Keywords Targeting </li>
                            <li><i className="fa-solid fa-arrow-right"></i>30 Pages Keyword Targeted</li>
                            <li><b>Webpage Optimization </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Meta Tags Creation</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Keyword Optimization </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Image Optimization </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Inclusion of anchors Tags </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Inclusion of anchors Indexing Modifications</li>
                            <li><b>Tracking &amp; Analysis </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Google Places Inclusions</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Google Analytics Installation</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Google Webmaster Installation </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Call To Action Plan </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Creation of Sitemaps</li>
                            <li><b>Reporting </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Monthly Reporting </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Recommendation </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Email Support </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Phone Support</li>
                            <li><b>Off Page Optimization </b></li>
                            <li><i className="fa-solid fa-arrow-right"></i>Social Bookmarking</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Slide Share Marketing </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Forums/FAQ’s </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Link Building </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Directory Submission </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Local Business Listings</li>
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