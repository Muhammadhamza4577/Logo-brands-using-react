import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import DigitalBrandingPortfolio from '../components/includes/DigitalBrandingPortfolio';
import MainPopup from '../components/includes/MainPopup';
import PricingBranding from '../components/includes/PricingBranding';

export default function Branding() {

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
    <video src="images/digital/branding-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
      <div className='container'>
      <h2 className="outline-txt">Digital Marketing</h2>
          <div className='row'>
              <div className='col-sm-6'>
                  <div className='bnr-txt'>
                      <h2>Digital <br />Maketing <br />Services</h2>
                      <p>Providing Professional brand development stand out solutions to businesses and media firms to help them to establish a professional and distinct market presence! </p>
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
                    <h2>Let’s Brainstorm Exciting <br />Design Ideas!</h2>
                    <p>Our team of professionals, analysts, and designers provides exceptional brand identity development services, weaving timeless stories and revolutionizing labels. Our brand creations leave lasting impressions on audiences, making an impact that will last the test of time. Share your vision for unforgettable brand identity development today.<br />
                        <br /> Brand creation is both an art and a passion. Our devoted team of specialists, analysts, and design enthusiasts love weaving your business's unique story through exceptional brand identity solutions. We don't just design identities, we cultivate evergreen legacies that enable your brand to transcend and become a revolutionary label. Each product intentionally leaves breadcrumbs in the minds of your target audience, leaving lasting impression.<br />
                        We offer personal brand development services to help you create a strong and memorable personal brand. With our help, you can build a brand that will help you achieve your professional goals and connect with your target audience on a deeper level.<br />
                        Are you ready to take your brand to the next level? Let's dive into your thoughts and ambitions today, and we'll create a memorable brand narrative that connects with the world.
                    </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='new-logo-about-side-div'>
                        <img className='new-digital-about-side-img-1' src='images/new-digital-about/branding/1.png' alt=''></img>
                        <img className='new-digital-about-side-img-2' src='images/new-digital-about/branding/2.png' alt=''></img>
                        <img className='new-digital-about-side-img-3' src='images/new-digital-about/branding/3.png' alt=''></img>
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
  <section className='digital-mrkt-serv branding-digital-serv'>
    <div className='contianer-fluid'>
    <h2 className="outline-txt">Our Services</h2>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='hd-txt'>
            <h2>Digital Marketing Services We Provide</h2>
            <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
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
                    <h4>Logo Design </h4>                      
                    <p>Our team specializes in creating attractive logos that are highly memorable and perfectly align with the brand image. Our logos are created to make you unique compared to your competitors and leave a strong memory in the minds of your customers. First, we learn about your brand and the people you want to reach. Then, we make a logo that looks nice and connects with your business.</p>

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
                   <h4>Brand Message</h4>                      
                    <p>We assist you in creating a clear and easy-to-understand brand message that tells your potential customers why your company is valuable. Our brand messages are convincing and easy to remember, and they assist you in gaining trust and reliability with your customers.</p>
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
                  <h4>Brand Positioning </h4>                      
                    <p>Our goal is to help you in pinpointing your company's specific position in the market. We figure out who will be interested in your product, what makes your product better than others, and why people should choose your brand. Our brand positioning helps you to be different from your competitors and get the attention of the customers you want.</p>
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
                  <h4>Brand Voice</h4>                      
                    <p>Our aim is to help you develop a distinct and cohesive brand voice that can be utilized across all your promotional materials. We speak in a way that reflects our brand, using clear and simple words. Their purpose is to support your interaction with the specific group you wish to connect with, facilitating the establishment of relationships with them.</p>
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
                  <h4>Brand Style Guide</h4>                      
                    <p>We make a guide that shows you what your brand should look like, including your logo, colors, fonts, and pictures. Our brand style guides offer a user-friendly and comprehensive resource for all your informational needs. They assist you in keeping the same brand image on all your marketing materials.</p>
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
                    <h4>Social Media Branding</h4>                      
                    <p> We offer our expertise to help you create a compelling online presence for your brand on social media. We create a plan for using social media that matches your brand's message and how you want to be perceived. We make interesting content that will help you get attention from and connect with the people you want to reach on social media branding. </p>
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
              <DigitalBrandingPortfolio />
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
				<PricingBranding />
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
