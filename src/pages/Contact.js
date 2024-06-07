import React, { useEffect } from 'react';
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import MainPopup from '../components/includes/MainPopup';

export default function Contact (){
    document.title ="Contact Us - Blitz Web Solution "; 


    useEffect(() => {
        window.jQuery( ".txtOnly" ).keypress(function(e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });
       

    });
    return(
        <>
            <section className='innerbanner-sec contact-us-bnr'>            
                <div className='container'>
                    <h2 className="outline-txt">Contact Us</h2>
                    
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='bnr-txt'>
                                <h2>Contact Us </h2>
                                <p>Our expertise and data driven strategies can crack the code to SEO success for top rankings.</p>
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
            <section className='contact-inner-sec'>
                <div className='container'>
                    <div className='row'>
                       
                        <div className='col-sm-12 conact-main-div'>
                            <div className='col-sm-4'>
                                <div className='hd-txt'>
                                    <h4>Contact Now</h4>
                                    <h2>Have a Question? Write a Message</h2>
                                    <p>Need answers? Reach out and get your questions answered by sending us a message. We're here to help! </p>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='contact-form'>
                                <form action="https://nationallogodesigns.com/mail/" className="jform validate main-pop" method="POST">
                                <div className="col-md-12">
                                    <div className="control-group">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <input className='txtOnly'  type="text" name="cn" placeholder="Enter Name" required />
                            
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="control-group">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <input type="email" name="em" className="required email" placeholder="Enter your email here" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12 phonecode">
                                    <div className="control-group clearfix">
                                        <div className="numberarea">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <input onInput={(e) => {if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0,e.target.maxLength);}} type = "number"    maxLength = {12}  name="pn" placeholder="Enter Phone" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="control-group clearfix ">
                                        <div className="textarea_auto">
                                            <i className="fa fa-comments" aria-hidden="true"></i>
                                            <textarea className="form-control" name="msg" placeholder="Talk about your project" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="control-group clearfix  submit-btn-pop-st">
                                        <input type="submit" className="btn btn-default pop_btn submit-btn fspx-23  ls-medium d-block w-100 fw-bold" value="Submit" />
                                        <input type="hidden" id="lead_area_popup" name="lead_area" value="for $119" />
                                        <input type="hidden" id="lead_org_price" name="lead_org_price" value="19" />
                                        <input type="hidden" name="send" value="1" />
                                        <input type="hidden" name="service_id" value="5669"   className="service_id" />
                                        
                                        <input type="hidden" name="lb_source" value="" />
                                        <input type="hidden" name="lb_source_cat" value="" />
                                        <input type="hidden" name="lb_source_nam" value="" />
                                        <input type="hidden" name="lb_source_ema" value="" />
                                        <input type="hidden" name="lb_source_con" value="" />
                                        <input type="hidden" name="lb_source_pho" value="" />
                                        <input type="hidden" name="lb_source_off" value="" />
                                        
                                        <input type="hidden" name="fullpageurl" value="" />
                                        <input type="hidden" name="pageurl" value="" />
                                        
                                        <input type="hidden" name="ip2loc_ip" value="" />
                                        <input type="hidden" name="ip2loc_isp" value="" />
                                        <input type="hidden" name="ip2loc_org" value="" />
                                        <input type="hidden" name="ip2loc_country" value="" />
                                        <input type="hidden" name="ip2loc_region" value="" />
                                    </div>
                                </div>
                            </form>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='cntct-frm-side'>
                                    <img src='images/footer-form-after.webp' alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyChooseTestiSec />
            <MainPopup />
        </>
    )

}