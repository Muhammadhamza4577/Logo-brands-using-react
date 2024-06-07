import React, { useEffect,Component } from "react";
import Slider from "react-slick";




export default function PortMobileSlider() {
    
    useEffect( ()=>{
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.portmobslider').slick('setPosition');
          })
    });
    
        

        const portmobslider = {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            
            cssEase: 'linear',
            pauseOnHover: false,
            responsive: [
                
                {
                  breakpoint: 767,
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
                <div className="col-sm-12 p0  portfolio-mobile-main">
                    <Slider {...portmobslider}>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-1.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-2.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-3.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-4.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-5.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-6.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-7.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-8.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-9.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='port-mob-box'>
                                <img src='images/portfolio/mobileapp/port-10.png' alt=''></img>
                            </div>
                        </div>
                    </Slider>

                </div>
            </>
        );
    }