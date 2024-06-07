import React, { useEffect, useLocation } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import LogosProcess from '../components/includes/LogosProcess';
import Logo2dPortfolio from '../components/includes/Logo2dPortfolio';
import PricingAnimatedLogo from '../components/includes/PricingAnimatedLogo';

export default function LogoDesign2d() {

    useEffect( ()=>{
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
        <video src="images/logo-design/video/2dlogo-bnr.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
            <div className='row'>
            <h2 className="outline-txt">Logo Design</h2>
                <div className='col-sm-6'>
                    <div className='bnr-txt'>
                        <h2>Maximize Your brand potential with 2D logo design</h2>
                        <p>Take your brand to the next level with our professional 2D logo design services</p>
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
                        <img className='new-logo-about-side-img-1' src='images/new-sec-logo/2d/1.png' alt=''></img>
                        <img className='new-logo-about-side-img-2' src='images/new-sec-logo/2d/2.gif' alt=''></img>
                        <img className='new-logo-about-side-img-3' src='images/new-sec-logo/about-logo-af-img.png' alt=''></img>
                        <img className='new-logo-about-side-img-4' src='images/new-sec-logo/about-logo-bf-img.png' alt=''></img>
                    </div>

                </div>
                <div className='col-sm-6'>
                    <div className='hd-txt'>
                        <h2>2D LOGO DESIGN</h2>
                        <p>Our US based 2D logo design service agency believe that a brand is more than just an idea. It creates a strong connection and is essential for successful marketing. The key to a brand being successful is its ability to send a strong message to the right people and motivate them to take action. <br />
                        Our understanding as professionals in developing 2D logos is that exceptional brands are not solely based on a company's strengths, but on effectively meeting consumer needs and filling market gaps. We are committed to thoroughly study and research your brand to ensure it looks genuine, stands out among competitors, and leaves a lasting impression.<br />
                        Join us in our mission to revolutionize branding efforts by conveying your message. Our team of experts combines creative ideas and careful planning to create a special 2D logo that strongly connects with your intended audience. Make your brand more successful with our custom 2D logo design services.
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
                        <h2>Your idea fuels our excitement! Let's make it exceptional!</h2>
                        <p>No matter the size, our company facilitates businesses with their digital necessities. We are highly skilled and have a wealth of experience in our field to offer exceptional services to our clients.</p>
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
        <h2 className="outline-txt">Our Services</h2>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='hd-txt'>
                        <h2>Our Services</h2>
                        <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
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
                <div className='col-sm-7'>
                    <div className='logo-serv-slider'>
                        <div>
                            <div className='logo-serv-box'>
                                <img src='images/logo-design/services-icon-1.png' alt=''></img>
                                <h3>Simplicity and Timelessness</h3>
                                <p>2D logos stand out for their clarity and minimalistic style. The logo becomes current and recognized throughout several eras and design trends as a result of its simplicity, which often ends up in a timeless appeal. A 2D logo with strong design elements may remain memorable and relevant for many years.</p>
                                <img className='logo-srv-img-st' src='images/logo-design/logo-srv-bx-st.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='logo-serv-box'>
                                <img src='images/logo-design/services-icon-2.png' alt=''></img>
                                <h3>Versatility</h3>
                                <p>2D logos may be easily scaled up or down without losing their clarity or quality, making them very adaptable. They are effective on a variety of platforms, including websites, billboards, and products. This versatility makes sure that no matter where it is presented, your logo keeps its integrity and legibility.</p>
                                <img className='logo-srv-img-st' src='images/logo-design/logo-srv-bx-st.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='logo-serv-box'>
                                <img src='images/logo-design/services-icon-3.png' alt=''></img>
                                <h3>Ease of Reproduction</h3>
                                <p>2D logos are simpler and more affordable to print than 3D logos since they don't contain complicated 3D components or shading. 2D logos may be correctly reproduced without needing many alterations or revisions, whether you're printing your logo on marketing materials or incorporating it into digital assets.</p>
                                <img className='logo-srv-img-st' src='images/logo-design/logo-srv-bx-st.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='logo-serv-box'>
                                <img src='images/logo-design/services-icon-4.png' alt=''></img>
                                <h3>Instant Recognition</h3>
                                <p>2D logos' clarity and simplicity make them quick and simple to recognize. Viewers are able to quickly understand the logo's meaning, helping your business create a memorable visual identity. Repeated exposure to a simple 2D logo might lead to enhanced brand memory over time.</p>
                                <img className='logo-srv-img-st' src='images/logo-design/logo-srv-bx-st.png' alt=''></img>
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="portfolio-sec portfolio-logo-sec">
        <div className="container">
            <h2 className="outline-txt portfolio-outline">Portfolio</h2>
            <div className="row">
                <div className="col-sm-12">
                    <div className="hd-txt">
                        <h2>Designs That We Are Proud Of <br /> Focused, Bold, Innovative Designs For An Evolving Market</h2>
                        <p>We have been working with some amazing clients throughout the year and creating professional logo designs for businesses so they can compete in the market and come out on top every time. </p>
                    </div>
                </div>
                <Logo2dPortfolio />
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
				<PricingAnimatedLogo />
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

    </>

  )
}