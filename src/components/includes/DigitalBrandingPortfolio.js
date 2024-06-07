import React, { useEffect,Component } from "react";
import Slider from "react-slick";
import { LightgalleryItem } from "react-lightgallery";



export default function DigitalBrandingPortfolio() {
    
    useEffect( ()=>{
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.digitalbrandingport').slick('setPosition');
          })
    });
    
    const digitalbrandingport = {
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
                <div className="col-sm-12 p0  ">
                    <Slider {...digitalbrandingport}>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/1.png">
                                    <img src="images/digital-markt/branding/1.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/2.png">
                                    <img src="images/digital-markt/branding/2.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/3.png">
                                    <img src="images/digital-markt/branding/3.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/4.png">
                                    <img src="images/digital-markt/branding/4.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/5.png">
                                    <img src="images/digital-markt/branding/5.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                        <div>
                            <div className="port-box">
                                <LightgalleryItem src="images/digital-markt/branding/6.png">
                                    <img src="images/digital-markt/branding/6.png"></img>
                                </LightgalleryItem>
                            </div>
                        </div>
                    </Slider>
                    

                </div>
            </>
        );
    }



    