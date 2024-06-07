import React, { useEffect,Component } from "react";
import Slider from "react-slick";
import { LightgalleryItem } from "react-lightgallery";



export default function WebWordpressPortfolio() {
    
    useEffect( ()=>{
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.WebBackPortSlider').slick('setPosition');
          })
    });
    
        

    const WebBackPortSlider = {
        dots: true,
        arrows:false,
        rows:2,
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
                rows:1,
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
                 <div className='col-sm-12 p0 row main-port-web-col'>
                    <Slider {...WebBackPortSlider}>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/1.jpg">
                                    <img src="images/portfolio/web/wordpress/port-1.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/2.jpg">
                                    <img src="images/portfolio/web/wordpress/port-2.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/3.jpg">
                                    <img src="images/portfolio/web/wordpress/port-3.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/4.jpg">
                                    <img src="images/portfolio/web/wordpress/port-4.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/5.jpg">
                                    <img src="images/portfolio/web/wordpress/port-5.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='port-web-bx'>
                                <LightgalleryItem src="images/portfolio/web/wordpress/6.jpg">
                                    <img src="images/portfolio/web/wordpress/port-6.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                </Slider>
                </div>
            </>
        );
    }