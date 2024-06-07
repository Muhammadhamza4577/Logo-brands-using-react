import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import DigitalMarketingPortfolio from '../components/includes/DigitalMarketingPortfolio';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainPopup from '../components/includes/MainPopup';
import PricingDigitalMainTab from '../components/includes/PricingDigitalMainTab';

export default function DigitalMarketing() {

    useEffect( ()=>{
       
        window.jQuery(function() {
          window.jQuery('.slider-digital-bnr').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows:false,
            vertical:true,
            autoplaySpeed: 0,
            speed: 4000,
            pauseOnHover: false,
            cssEase: 'linear'
          });
         
          window.jQuery('.slider-digital-bnr1').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            vertical:true,
            arrows:false,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear'
          });
        


     });
     });


  return (
    <>
    
    <section className='innerbanner-sec digital-mrkt-bnr'>
        <video src="images/digital-markt/banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
        <h2 className="outline-txt">Digital Marketing</h2>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='bnr-txt'>
                        <h2>Digital <br /> Marketing <br /> Services </h2>
                        <p>With our social media marketing agency, boost your brand’s online credibility by utilizing clever advertising methods and captivating content.</p>
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
                    {/* <div className='bnr-side-slider-digital'>
                        <div className='slider-digital-bnr'>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-1.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-2.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-3.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-4.png' alt=''></img>
                                </div>
                            </div>
                        </div>
                        <div className='slider-digital-bnr1'>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-1.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-2.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-3.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='digital-bnr-box'>
                                    <img src='images/digital-markt/bnr-4.png' alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <section className='logo-about-sec new-logo-about-sec new-digital-about-sec'>
        <div className='container'>
            <h2 className="outline-txt">Marketing</h2>
            <div className='row'>
               
                <div className='col-sm-6'>
                    <div className='hd-txt'>
                    <h2>Let’s Innovate your Marketing Game! </h2>
                    <p>In the fast-paced world of digital marketing, social media has emerged as a valuable ally for small businesses. Small companies may benefit significantly from social media marketing since it creates a wealth of chances for interaction, engagement, and growth. Social media platforms transform into an immersive playground where imagination and strategic planning mix due to their potential to reach a large audience. The possibilities are boundless, from creating engaging content that connects with your target audience to executing attractive advertising campaigns. It's an opportunity to present your brand's distinctive voice, cultivate real connections, and create a devoted following of clients who care about your success. Social media marketing services may help your small business expand and get a reputation at a rate unmatched by skilled marketers. Don't miss the chance to take advantage of the digital revolution and make your small business a thriving success story.</p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='new-logo-about-side-div'>
                        <img className='new-digital-about-side-img-1' src='images/new-digital-about/digital/1.png' alt=''></img>
                        <img className='new-digital-about-side-img-2' src='images/new-digital-about/digital/2.png' alt=''></img>
                        <img className='new-digital-about-side-img-3' src='images/new-digital-about/digital/3.png' alt=''></img>
                        <img className='new-logo-about-side-img-3' src='images/new-sec-logo/about-logo-af-img.png' alt=''></img>
                        <img className='new-logo-about-side-img-4' src='images/new-sec-logo/about-logo-bf-img.png' alt=''></img>
                    </div>

                </div>

            </div>
        </div>
    </section>
  

    <section className='cta-sec-logo cta-sec-web-design cta-sec-digital-mrkt'>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-5'>
                    <div className='cta-side-img'>
                        <img src='images/digital-markt/cta-side-img.png' alt=''></img>
                    </div>
                </div>
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
                
            </div>
        </div>
    </section>
    <section className='digital-mrkt-serv'>
      <div className='contianer-fluid'>
      <h2 className="outline-txt">Our Services</h2>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='hd-txt'>
              <h2>Revolutionizing Brands Through Digital Marketing</h2>
              <p>Explore our exciting digital marketing service packages created to fuel your success in digital media, maximizing a world of opportunities for growth for your business.</p>
            </div>
          </div>
          <div className='col-sm-12 p0 row digital-serv-mcol'>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img1" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                      <h4>Branding</h4>                      
                      <p>Create an identity that creates a lasting impact on your audience by enhancing your brand with our excellent brand development services.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img2" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                     <h4>Video Animation</h4>                      
                      <p>With the help of our captivating animated video production services, give life to your message and appealingly tell your narrative.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img3" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                    <h4>Search Engine Optimization  </h4>                      
                      <p>Our expert local SEO services can help your business stand out in the digital landscape by reaching new heights in search ranking.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img4" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                    <h4>Web Content Writing  </h4>                      
                      <p>Our web content writing service will attract your website by capturing the spirit of your business and captivating your visitors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img5" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                    <h4>Social Media Marketing  </h4>                      
                      <p>With the help of our excellent social media marketing agency, you can maximize the potential of your business and engage your audience on a whole new level.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="digital-serv-dv bus-img6" >
                <div className="flip-card" >
                  <div className="flip-card-inner" >
                    <div className="flip-card-front" >
                      
                    </div>
                    <div className="flip-card-back" >
                    <h4>Reputation Management </h4>                      
                      <p>With our professional online reputation management services, protect and enhance your online image while promoting trustworthiness with your clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='portfolio-web-sec portfolio-digital-sec'>
        <div className='container'>
            <div className='row'>
                <img className='port-bf-web-img' src='images/web-desgin/port-bf.png' alt=''></img>
                <img className='port-af-web-img' src='images/web-desgin/port-af.png' alt=''></img>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Our Portfolio <br /> Focused, bold solutions, for an evolving world</h2>
                        <p>We aim to create engaging and unique experiences that lead to actual business success. Our main goal is to transform our client’s brands for the better.</p>
                    </div>
                </div>
                <DigitalMarketingPortfolio />
            </div>
        </div>
    </section>

    {/* <TechnologySecInclude /> */}
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
                    <PricingDigitalMainTab />
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
    <DigitalProcess />
</section>
    <WhyChooseTestiSec />
    <MainPopup />
    </>
  )
}
