import React, { Component } from "react";
import Slider from "react-slick";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LightgalleryItem } from "react-lightgallery";
import Logo2dPortfolio from "./Logo2dPortfolio";
import Logo3dPortfolio from "./Logo3dPortfolio";
import LogoIllusPortfolio from "./LogoIllusPortfolio";
import LogoMascotPortfolio from "./LogoMascotPortfolio";
import WebEcomPortfolio from "./WebEcomPortfolio";
import WebBackPortfolio from "./WebBackPortfolio";
import WebWordpressPortfolio from "./WebWordpressPortfolio";
import WebAppPortfolio from "./WebAppPortfolio";

export default class PortfolioMainTab extends Component {
    render() {
        const portfolioMainTab = {
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
                <section className=' portfolio-main-pg-sec'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='hd-txt'>
                                    <h4>A Glimpse Of Work!</h4>
                                    <h2>Our Latest Creative Work</h2>
                                </div>
                            </div>
                            <div className='col-sm-12'>

                                <Tabs
                                    defaultActiveKey="webdesign"
                                    id="noanim-tab-example"
                                    className="mb-3"                                    
                                    unmountOnExit={true}
                                    mountOnEnter={true}
                                    transition={false}
                                >

                                    <Tab eventKey="webdesign" title="Website Design">
                                        <Tabs
                                            defaultActiveKey="ecomwebsite"                                            
                                            id="noanim-tab-example"
                                            className="mb-3"
                                            unmountOnExit={true}
                                            mountOnEnter={true}
                                            transition={false}
                                        >
                                            <Tab eventKey="ecomwebsite" title="Ecommerce">
                                                <WebEcomPortfolio />
                                            </Tab>
                                            <Tab eventKey="backendwebsite" title="Backend Development">
                                                <WebBackPortfolio />
                                            </Tab>
                                            <Tab eventKey="wordpresswebsite" title="Wordpress Development">
                                                <WebWordpressPortfolio />
                                            </Tab>
                                            <Tab eventKey="webappwebsite" title="Web Application">
                                                <WebAppPortfolio />
                                            </Tab>

                                        </Tabs>
                                    </Tab>

                                    <Tab eventKey="logo" title="Logo">
                                        <Tabs
                                            defaultActiveKey="animation2d"                                            
                                            id="noanim-tab-example"
                                            className="mb-3"
                                            unmountOnExit={true}
                                            mountOnEnter={true}
                                            transition={false}
                                        >
                                            <Tab eventKey="animation2d" title="2D Logos">
                                                <Logo2dPortfolio />
                                            </Tab>
                                            <Tab eventKey="animation3d" title="3D Logos">
                                                <Logo3dPortfolio />
                                            </Tab>
                                            <Tab eventKey="animationIlus" title="Illustrative Logos">
                                                <LogoIllusPortfolio />
                                            </Tab>
                                            <Tab eventKey="animationMascot" title="Mascot Logos">
                                                <LogoMascotPortfolio />
                                            </Tab>

                                        </Tabs>

                                    </Tab>

                                </Tabs>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
      }
    }