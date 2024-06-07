import React, { useEffect,Component } from "react";
import Slider from "react-slick";




export default function Logo2dPortfolio() {
    
    useEffect( ()=>{
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.logotwodport').slick('setPosition');
          })
    });
    
        

        const logotwodport = {
            slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 3000,
			pauseOnHover: false,
			cssEase: 'linear'
        };
        const logotwodportOne = {
            slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 4000,
			pauseOnHover: false,
			cssEase: 'linear'
        };
        const logotwodportTwo = {
            slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 5000,
			pauseOnHover: false,
			cssEase: 'linear'
        };

        
   
        return (
            <>
                <div className="col-sm-12 p0 port-main-col portfolio-logo-main">
                    <Slider {...logotwodport}>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/1.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/2.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/3.png"></img>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...logotwodportOne}>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/4.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/5.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/6.png"></img>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...logotwodportTwo}>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/7.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/8.png"></img>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <img src="images/portfolio/logo/2d/9.png"></img>
                            </div>
                        </div>
                    </Slider>

                </div>
            </>
        );
    }