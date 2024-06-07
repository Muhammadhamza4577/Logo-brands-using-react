import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LightgalleryItem } from "react-lightgallery";
import VideoAnimationPortfolio from "./VideoAnimationPortfolio";
import PricingLogo from "./PricingLogo";
import PricingBranding from "./PricingBranding";
import PricingAnimatedLogo from "./PricingAnimatedLogo";
import PricingInformative from "./PricingInformative";
import PricingEcommerce from "./PricingEcommerce";
import PricingVideo from "./PricingVideo";
import PricingSEO from "./PricingSEO";
import PricingWeb from "./PricingWeb";


export default function PricingMainTab() {

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
        <div className="portfolio-main-pg-sec">
                <Tabs
                    defaultActiveKey="logo"
                    id="noanim-tab-example"
                    className="mb-3"
                    unmountOnExit={true}
                    mountOnEnter={true}
                    transition={false}
                >

                <Tab eventKey="logo" title="Logo Design">
                    <PricingLogo />
                </Tab>
                <Tab eventKey="animatedlogo" title="Animated Logo">
                    <PricingAnimatedLogo />
                </Tab>
                <Tab eventKey="informativelogo" title="Informative Website">
                    <PricingInformative />
                </Tab>
                <Tab eventKey="ecomlogo" title="Ecommerce Solution">
                    <PricingEcommerce />
                </Tab>
                <Tab eventKey="branding" title="Branding">
                    <PricingBranding />
                </Tab>
                <Tab eventKey="videoanimation" title="Video Animation">
                    <PricingVideo />
                </Tab>
                <Tab eventKey="seo" title="SEO">
                    <PricingSEO />
                </Tab>
                
                <Tab eventKey="webcontent" title="Web Content Writing">
                    <PricingWeb />
                </Tab>
                  
                </Tabs>
        </div>

        </>
    );
}