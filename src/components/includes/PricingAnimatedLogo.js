import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingAnimatedLogo() {

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
                            <h2>2D STANDARD </h2>
                            <div className='pricing-amount'>
                                <h2>$155 
                                    {/* <span>$98 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 custom and Unique design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Unique Animation styles</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Camera Angles Positioning</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Lighting/Composing</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions </li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation and Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Dynamic colours</li>
                            <li><i className="fa-solid fa-arrow-right"></i> background music</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Source files format Mp4 MOV ETC</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% SATISFACTION GURANTEE</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% unique design gurantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money back gurantee</li>
                            
                           
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
                            <h2>2D ADVANCE</h2>
                            <div className='pricing-amount'>
                                <h2>$199 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i>3 custom and Unique design</li>
                            <li><i className="fa-solid fa-arrow-right"></i>3 Unique Animation styles</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Camera Angles Positioning</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Lighting/Composing</li>
                            <li><i className="fa-solid fa-arrow-right"></i>unlimited Revisions </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Animation and Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Dynamic colours</li>
                            <li><i className="fa-solid fa-arrow-right"></i>background music</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Source files format Mp4 MOV ETC</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% SATISFACTION GURANTEE</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% unique design gurantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% Money back gurantee</li>
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
                            <h2>3D STANDARD</h2>
                            <div className='pricing-amount'>
                                <h2>$245 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i>5 custom and Unique design</li>
                            <li><i className="fa-solid fa-arrow-right"></i>5 Unique Animation styles</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Camera Angles Positioning</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Lighting/Composing</li>
                            <li><i className="fa-solid fa-arrow-right"></i>unlimited Revisions </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Animation and VFX</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Dynamic colours</li>
                            <li><i className="fa-solid fa-arrow-right"></i>background music</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Source files format Mp4 MOV ETC</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% SATISFACTION GURANTEE</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% unique design gurantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% Money back gurantee</li>
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
                            <h2>3D ADVANCE </h2>
                            <div className='pricing-amount'>
                                <h2>$400 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i>UNLIMITED custom and Unique design</li>
                            <li><i className="fa-solid fa-arrow-right"></i>UNLIMITED Unique Animation styles</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Camera Angles Positioning</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Lighting/Composing</li>
                            <li><i className="fa-solid fa-arrow-right"></i>unlimited Revisions </li>
                            <li><i className="fa-solid fa-arrow-right"></i>Animation and VFX</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Music and foley </li>
                            <li><i className="fa-solid fa-arrow-right"></i>All source files format Included Mp4 MOV ETC</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% SATISFACTION GURANTEE</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% unique design gurantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i>100% Money back gurantee</li>
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