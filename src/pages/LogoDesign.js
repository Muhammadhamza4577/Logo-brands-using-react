import React, { useEffect, useLocation } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import LogosProcess from '../components/includes/LogosProcess';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo2dPortfolio from '../components/includes/Logo2dPortfolio';
import Logo3dPortfolio from '../components/includes/Logo3dPortfolio';
import LogoIllusPortfolio from '../components/includes/LogoIllusPortfolio';
import LogoMascotPortfolio from '../components/includes/LogoMascotPortfolio';
import MainPopup from '../components/includes/MainPopup';
import PricingLogo from '../components/includes/PricingLogo';


export default function LogoDesign() {

    useEffect(() => {
        window.jQuery(function() {
        window.jQuery('.logo-serv-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
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
        });

    });
    });

    return (
        <>
            <section className='innerbanner-sec logo-banner'>
                <video src="images/logo-design/video/logo-bnr.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
                <div className='container'>
                    <div className='row'>
                        <h2 className="outline-txt">Logo Design</h2>
                        <div className='col-sm-6'>
                            <div className='bnr-txt'>
                                <h2>Rebranding with Stunning Logos Like No Other</h2>
                                <p>Impress your audience with our custom logo design agency’s impressive logos and strategic branding service.</p>
                                <div className="cta-btn bnr-btn">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
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
                        <div className='col-sm-6'>
                            {/* <div className='bnr-side-img'>
                        <img className='bnr-logo-img-1' alt='' src='images/logo-design/bnr-side-img.png' />
                        <img className='bnr-logo-img-2' alt='' src='images/logo-design/bnr-side-img-1.png' />
                        <img className='bnr-logo-img-3' alt='' src='images/logo-design/bnr-side-img-2.png' />
                        <img className='bnr-logo-img-4' alt='' src='images/logo-design/bnr-circle-1.png' />
                        <img className='bnr-logo-img-5' alt='' src='images/logo-design/bnr-circle-2.png' />
                        <img className='bnr-logo-img-6' alt='' src='images/logo-design/bnr-icon-2.png' />
                        <img className='bnr-logo-img-7' alt='' src='images/logo-design/bnr-side-icon-1.png' />
                        <img className='bnr-logo-img-8' alt='' src='images/logo-design/bnr-side-line.png' />
                        <img className='bnr-logo-img-9' alt='' src='images/logo-design/bnr-side-line-2.png' />
                        <img className='bnr-logo-img-10' alt='' src='images/logo-design/bnr-side-outline.png' />
                    </div> */}
                        </div>

                    </div>
                </div>
            </section>

            <section className='logo-about-sec new-logo-about-sec'>
                <div className='container'>
                    <h2 className="outline-txt">Branding</h2>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='new-logo-about-side-div'>
                                <img className='new-logo-about-side-img-1' src='images/new-sec-logo/logo/1.png' alt=''></img>
                                <img className='new-logo-about-side-img-2' src='images/new-sec-logo/logo/2.gif' alt=''></img>
                                <img className='new-logo-about-side-img-3' src='images/new-sec-logo/about-logo-af-img.png' alt=''></img>
                                <img className='new-logo-about-side-img-4' src='images/new-sec-logo/about-logo-bf-img.png' alt=''></img>
                            </div>

                        </div>
                        <div className='col-sm-6'>
                            <div className='hd-txt'>
                                <h2>Branding and Logo Design</h2>
                                <p>Our national logo design agency knows that a brand is not just a concept but also an emotional bond and the foundation for marketing efforts. A successful brand experience communicates a powerful message to the correct audience, inspiring them to take action. As a professional logo design agency, we understand that great brands start with consumer demands and marketplace gaps rather than corporate strengths, which may seem paradoxical. We begin our brand development process by going deep into research to find ways to make your brand genuine to who you are, different in the market, and memorable.<br />
                                    Our highly skilled team skillfully blends innovative thinking and strategic preparation to craft a distinctive brand identity that resonates with your target audience. We focus on creating a strong brand that lasts long, starting from making logos to developing the whole brand. We will help your brand to succeed in the ever-changing business world.
                                </p>
                            </div>
                        </div>
                        

                        <div className='col-sm-12 p0 row main-col-about main-logo-about-rating-new'>
                           
                                <div className='rating-logo-col rating-col-1'>
                                    <img src='images/logo-design/about-rating-img-1.png' alt=''></img>
                                    <h2><span className='count'>450</span></h2>
                                    <h5>Happy Clients</h5>
                                </div>
                                <div className='rating-logo-col rating-col-2'>
                                    <img src='images/logo-design/about-rating-img-2.png' alt=''></img>
                                    <h2><span className='count'>48</span>k</h2>
                                    <h5>Project Done</h5>
                                </div>
                           
                           
                           
                                <div className='rating-logo-col rating-col-1'>
                                    <img src='images/logo-design/about-rating-img-3.png' alt=''></img>
                                    <h2><span className='count'>95</span>K</h2>
                                    <h5>Hours Worked</h5>
                                </div>
                                <div className='rating-logo-col rating-col-2'>
                                    <img src='images/logo-design/about-rating-img-4.png' alt=''></img>
                                    <h2><span className='count'>24</span>/<span className='count'>7</span></h2>
                                    <h5>Support Available</h5>
                                </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='cta-sec-logo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-7'>
                            <div className='cta-txt inner-cta-txt'>
                                <h4>Got A Project In Mind, Let's Grab A Coffee</h4>
                                <h2>We’re excited to turn your ideas into reality with our services! </h2>
                                <p>We support companies with their digital necessities, regardless of their size. Our substantial knowledge and remarkable industry experience allow us to deliver high-quality services to our client.</p>
                                <div className="cta-btn bnr-btn">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
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
                        <div className='col-sm-5'>
                            <div className='cta-side-img'>
                                <img src='images/logo-design/cta-side-img.png' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='logo-services-sec-inner'>
                <div className='container'>
                    {/* <h2 className="outline-txt">Our Services</h2> */}
                    <div className='row'>
                        <div className='col-sm-5'>
                            <div className='hd-txt'>
                                <h2>Our Services</h2>
                                <p>We prioritize customer outcomes, leading the way in transforming brands. Our approach delivers measurable business results by creating engaging experiences that captivate and delight.</p>
                                <div className="cta-btn bnr-btn">
                                    <div className="link_wrapper">
                                        <a href="javascript:;" className="get-btn">Get Started</a>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
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
                        <div className='col-sm-7'>
                            <div className='logo-serv-slider'>
                                <div>
                                    <div className='logo-serv-box'>
                                        <img src='images/logo-design/services-icon-1.png' alt=''></img>
                                        <h3>2D Animated<br></br> Logo</h3>
                                        <p>A creative 2D animated logo is famous for its dynamic and captivating visual storytelling that attracts viewers and increases brand awareness.</p>

                                    </div>
                                </div>
                                <div>
                                    <div className='logo-serv-box'>
                                        <img src='images/logo-design/services-icon-2.png' alt=''></img>
                                        <h3>3D Animated<br></br> Logo</h3>
                                        <p>A custom 3D animated logo is well-known for its fascinating visual depth and immersive effects, which leave a lasting impact on viewers while enhancing the company's identity.</p>

                                    </div>
                                </div>
                                <div>
                                    <div className='logo-serv-box'>
                                        <img src='images/logo-design/services-icon-3.png' alt=''></img>
                                        <h3>Iconic Animated<br></br> Logo</h3>
                                        <p>A professional logo animated service is well-known for bringing life to static logos, providing eye-catching motion that improves brand storytelling and engagement.</p>

                                    </div>
                                </div>
                                <div>
                                    <div className='logo-serv-box'>
                                        <img src='images/logo-design/services-icon-4.png' alt=''></img>
                                        <h3>Mascot Logo<br></br> Design </h3>
                                        <p>Character mascot logo design is a well-known idea that combines a distinctive, personified character as the company symbol, bringing personality and memorability to the brand identity.</p>

                                    </div>
                                </div>
                                <div>
                                    <div className='logo-serv-box'>
                                        <img src='images/logo-design/services-icon-5.png' alt=''></img>
                                        <h3>Illustrative <br></br>Logo Design </h3>
                                        <p>Illustrative logo design is a popular style that uses detailed and beautiful imagery to express a brand's narrative and elicit strong emotional responses, as provided by illustrative logo design services.</p>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' portfolio-main-pg-sec port-main-log-pg-sec'>
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

                        </div>
                    </div>
                </div>
            </section>
            <section className="mix-bg-clr-sec">
                <section className="pricing-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p0">
                                <div className="hd-txt">
                                    <h2>Your Path to Savings: Explore Our Cost-Effective Pricing Structures</h2>
                                    <p>As a professional logo design agency, National Logo Designs offers various affordable packages that are not just easy on your pockets but also offer various features to elevate your business.</p>
                                </div>
                            </div>
                            <PricingLogo />
                            
                        </div>
                    </div>
                </section>
                {/* <section className="award-sec">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="hd-txt">
						<h2>Our Awards</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					</div>
				</div>
				<div className="col-sm-12 p0 award-main-col">
					<div className="award-slider">
						<div>
							<div className="award-bx">
								<img src="images/award-1.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-2.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-3.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-4.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-5.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-1.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-2.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-3.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-4.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
						<div>
							<div className="award-bx">
								<img src="images/award-5.png"></img>
								<p>2022 Telly Awards Gold Winner</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}

                <LogosProcess />
            </section>
            <WhyChooseTestiSec />
            <MainPopup />
        </>

    )
}
