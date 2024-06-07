import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LightgalleryItem } from "react-lightgallery";
import VideoAnimationPortfolio from "./VideoAnimationPortfolio";
import MainPopup from "./MainPopup";


export default function PricingLogo() {

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
                            <h2>Basic</h2>
                            <div className='pricing-amount'>
                                <h2>$29 <span>$98 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Custom Logo Design Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Dedicated Designer</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG &amp; Grayscale) </li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
                           
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
                            <h2>Start Up</h2>
                            <div className='pricing-amount'>
                                <h2>$69 <span>$230 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 Custom Logo Design Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> By 2 Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> File format (JPEG, PNG &amp; Greyscale) </li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stationery Designs (Business cards)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
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
                            <h2>Professional</h2>
                            <div className='pricing-amount'>
                                <h2>$119 <span>$397 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 8 logo design concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> By 4 Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Stationery (Business Card, Letterhead, Envelope)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Icon</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE MS Word Letterhead</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All final files (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (any 3 platforms fb, youtube,twitter, insta etc)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE Color options</li>
                            <li><i className="fa-solid fa-arrow-right"></i> $50 off on Website order </li>
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
                            <h2>Business </h2>
                            <div className='pricing-amount'>
                                <h2>$199 <span>$664 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Logo Design Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> By 4 Award Winning Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free stationery designs (Business Card, Letterhead, Envelope)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Icon Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Email Signature</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE MS Word Letterhead</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Email Signature</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (any 3 platforms fb, youtube,twitter, insta etc)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Double Sided Flyer Design / Bi-Fold Brochure</li>
                            <li><i className="fa-solid fa-arrow-right"></i> ALL files formats</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee *</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 to 72 hours TAT</li>
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
                            <h2>Business Plus </h2>
                            <div className='pricing-amount'>
                                <h2>$299 <span>$997 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Logo Design Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> By 4 Award Winning Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Icon Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free stationery designs (Business Card, Letterhead, Envelope)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (any 3 platforms fb, youtube,twitter, insta etc)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Double Sided Flyer Design / Bi-Fold Brochure</li>
                            <li><i className="fa-solid fa-arrow-right"></i> FREE MS Word Letterhead</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Email Signature</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All Final File Formats (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 page website design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarante</li>
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
                            <h2>Enterprise </h2>
                            <div className='pricing-amount'>
                                <h2>$499 <span>$1664 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Logo Design Concepts</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Revisions (Upto 8)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Dedicated Design Teams</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Stationery Design </li>
                            <li><i className="fa-solid fa-arrow-right"></i> Business Card, Letterhead, Envelope, Compliment Slip</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Complete Brochure (Up To 6 Pages)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Flyer/Brochure Design (Print Ready)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All File Formats</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Pages Custom Website Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Stock images</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Banner designs</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Jquery Slider</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (Facebook, Twitter, Youtube, LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Email Signature</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Fav Icon</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Dedicated Account Manager</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Color Options</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Free Grayscale Format</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 24 to 48 Hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All File Formats (AI, PSD, EPS, PNG, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
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
                            <h2>Starter Illustrative </h2>
                            <div className='pricing-amount'>
                                <h2>$199 <span>$664 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Unique Mascot/Illustrative Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 2 Dedicated Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Hand Drawn Sketch</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Unlimited Color Variations</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Custom Illustrations </li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 To 72 Hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
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
                            <h2>Budget Illustrative </h2>
                            <div className='pricing-amount'>
                                <h2>$249 <span>$830 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Unique Mascot/Illustrative Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 3 Dedicated Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Hand Drawn Sketch</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (Any 3 - Facebook, Twitter, Youtube &amp; LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 To 72 Hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Custom Illustrations </li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
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
                            <h2>Ultimate Mascot/Illutrative </h2>
                            <div className='pricing-amount'>
                                <h2>$399 <span>$1330 <sup>Only</sup></span></h2>
                            </div>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-arrow-right"></i> 5 Unique Mascot/Illustrative Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 4 Dedicated Designers</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Hand Drawn Sketch</li>
                            <li><i className="fa-solid fa-arrow-right"></i> UNLIMITED Revisions</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 48 To 72 Hours TAT</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 1 Page Web Design</li>
                            <li><i className="fa-solid fa-arrow-right"></i> Social Media Designs (Any 3 - Facebook, Twitter, Youtube &amp; LinkedIn)</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Custom Illustrations </li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Ownership Rights</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Satisfaction Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Unique Design Guarantee</li>
                            <li><i className="fa-solid fa-arrow-right"></i> 100% Money Back Guarantee</li>
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