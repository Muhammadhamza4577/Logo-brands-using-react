import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DigitalBrandingPortfolio from "./DigitalBrandingPortfolio";
import { LightgalleryItem } from "react-lightgallery";
import VideoAnimationPortfolio from "./VideoAnimationPortfolio";
import DigitalSmmPortfolio from "./DigitalSmmPortfolio";


export default function DigitalMarketingPortfolio() {

    useEffect(() => {
        window.jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.jQuery('.digitalbrandingport').slick('setPosition');
        })
    });

    const digitalbrandingport = {
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
        <div className="portfolio-main-pg-sec">
                <Tabs
                    defaultActiveKey="digitalmarketing"
                    id="noanim-tab-example"
                    className="mb-3"
                    unmountOnExit={true}
                    mountOnEnter={true}
                    transition={false}
                >

                <Tab eventKey="digitalmarketing" title="Digital Marketing">
                    <div className="col-sm-12 p0 main-port-web-col">
                        <Slider {...digitalbrandingport}>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/1.png">
                                        <img src="images/digital-markt/digital-markt/1.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/2.png">
                                        <img src="images/digital-markt/digital-markt/2.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/3.png">
                                        <img src="images/digital-markt/digital-markt/3.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/4.png">
                                        <img src="images/digital-markt/digital-markt/4.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/5.png">
                                        <img src="images/digital-markt/digital-markt/5.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                            <div>
                                <div className="port-box">
                                    <LightgalleryItem src="images/digital-markt/digital-markt/6.png">
                                        <img src="images/digital-markt/digital-markt/6.png"></img>
                                    </LightgalleryItem>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Tab>
                <Tab eventKey="branding" title="Branding">
                    <DigitalBrandingPortfolio />
                </Tab>
                <Tab eventKey="videoanimation" title="Video Animation">
                    <VideoAnimationPortfolio />
                </Tab>
                <Tab eventKey="socialmedia" title="SMM">
                    <DigitalSmmPortfolio />
                </Tab>
                  
                </Tabs>
        </div>

        </>
    );
}