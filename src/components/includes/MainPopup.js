import React, { useEffect } from 'react'

export default function MainPopup() {
    useEffect( ()=>{
       

         window.jQuery('.popup-btn').on('click', function(){


            
             window.jQuery('.new-popupform-main').addClass('active');
             window.jQuery('body').addClass('o-hidden');
             window.jQuery('.overlay-bg').fadeIn(500);
             window.jQuery('.close-btn').on('click', function(){
             window.jQuery('.new-popupform-main').removeClass('active');
             window.jQuery('body').removeClass('o-hidden');
             window.jQuery('.overlay-bg').fadeOut(500);
            });
             window.jQuery('.overlay-bg').click(function() {
             window.jQuery('.new-popupform-main').removeClass('active');
             window.jQuery('body').removeClass('o-hidden');
             window.jQuery('.overlay-bg').fadeOut(500);
            
            });
            });


   });
    return (

        <>
            <div className="overlay-bg over-bg-2"></div>
            <div className="new-popupform-main">
                <div className="new-pop-form ta-center">
                    <div id="new-pop-form" className="col-sm-12">
                        {/* <div className="pop-form-txt-side">
                            <h4> Fill This Form To Avail Special Discounts Of </h4>
                            <h2>Up To 50%!</h2>
                        </div> */}
                        <div className="col-sm-5">
                            <div className="popup-txt-form-new">

                                <h3>Looking For Professional 2d Video Animation Services</h3>
                                <h4>At Affordable Rates?</h4>

                            </div>
                            <div className="clearfix"></div>
                            <form action="/mail" className="jform validate main-pop" method="POST">
                                <div className="col-md-12">
                                    <div className="control-group">
                                        <input type="text" placeholder="Name" name="cn" className="required" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="control-group">
                                        <input type="email" name="em" className="required email" placeholder="Enter your email here" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12 phonecode">
                                    <div className="control-group clearfix">
                                        <div className="numberarea">
                                            <input type="number" name="pn" id="phone" className="number required" placeholder="Phone Number" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="control-group clearfix">
                                        <div className="textarea_auto">
                                            <textarea className="form-control" name="msg" placeholder="Talk about your project" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="control-group clearfix  ">
                                        <input type="submit" className="btn btn-default pop_btn submit-btn fspx-23  ls-medium d-block w-100 fw-bold" value="Submit" />
                                            <input type="hidden" id="lead_area_popup1" name="lead_area" value="for $19" />
                                                <input type="hidden" id="lead_org_price" name="lead_org_price" value="19" />
                                                    <input type="hidden" name="send" value="1" />
                                                        <input type="hidden" name="service_id" value="5614" className="service_id" />
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
                                            <div className="col-sm-6">
                                                <div className="popup-new-imgs">
                                                    <img src="images/popup-new-side-img.png" />

                                                        <a href="javascript:;" className="close-btn ta-center cors-img"> <img src="images/cross-img.png" /></a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </div>

                    </>

                    )

}