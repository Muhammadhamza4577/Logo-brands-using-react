import React, { useEffect, Component } from "react";


import Slider from "react-slick";
import MainPopup from "./MainPopup";


export default function PricingVideo() {

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
                            <h2>TEASER/INTRO  </h2>
                            <div className='pricing-amount'>
                                <h2>$149 
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
                            <h2>STARTUP Video </h2>
                            <div className='pricing-amount'>
                                <h2>$199 
                                    {/* <span>$230 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 30s Duration - HD 1080</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Storyboard</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Sample Themes</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Custom Setting, Characters &amp; Graphics</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation Effects &amp; Visualization</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice - Over &amp; Sound Effects (All accents) (M/F)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
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
                            <h2>CLASSIC Video </h2>
                            <div className='pricing-amount'>
                                <h2>$399 
                                    {/* <span>$397 <sup>Only</sup></span> */}
                                </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 60 Second Video - HD 1080</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Sample Theme</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Storyboard</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice - Over &amp; Sound Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 weeks Delivery</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
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
                            <h2>PREMIUM Video  </h2>
                            <div className='pricing-amount'>
                                <h2>$699 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 90 Second Video - HD 1080</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Sample Theme</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Storyboard</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice - Over &amp; Sound Effects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 6 weeks Delivery</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions</li>
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
                            <h2>STANDARD 3D VIDEO </h2>
                            <div className='pricing-amount'>
                                <h2>$2495 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 30s-60s Duration - HD 1080</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2D Compositing</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rotoscoping</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Motion Blur Mattes</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stereo Roto</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Silhouette Splines</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Match-move</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Object Tracking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Digital Paint</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stereo Paint</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rig/Wire/Object Removals</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Edits/Revisions &amp; Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Concept and Storyboards</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rendering</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Compositing and Special VFX</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Music and Foley</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation Effects &amp; Visualization</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice Over - All accents (M/F)</li>
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
                            <h2>PREMIUM 3D VIDEO </h2>
                            <div className='pricing-amount'>
                                <h2>$2495 
                                    {/* <span>$664 <sup>Only</sup></span> */}
                                    </h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 60-120s Duration - HD 1080</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2D-3D Compositing</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rotoscoping</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Motion Blur Mattes</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stereo Roto</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Silhouette Splines</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Green Screen Extraction</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Match-move</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Object Tracking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Camera Tracking</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Digital Paint</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stereo Paint</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rig/Wire/Object Removals</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Recreation of Missing Objects</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Dust and Scratch Removal</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Edits/Revisions &amp; Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Professional Script</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Concept and Storyboards</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Rendering</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Compositing and Special VFX</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Music and Foley</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Animation Effects &amp; Visualization</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Voice Over - All accents (M/F)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Editing and Final Output</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Turn Around Time 45 Business days</li>
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