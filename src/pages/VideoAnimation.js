import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import VideoAnimationPortfolio from '../components/includes/VideoAnimationPortfolio';
import MainPopup from '../components/includes/MainPopup';
import PricingVideo from '../components/includes/PricingVideo';

export default function VideoAnimation() {

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
  <video src="images/digital/video-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
      <div className='container'>
      <h2 className="outline-txt">Digital Marketing</h2>
          <div className='row'>
              <div className='col-sm-6'>
                  <div className='bnr-txt'>
                      <h2>Video <br /> Animation <br /> Services </h2>
                      <p>Our team ensures captivating your audience with stunning visuals and engaging storytelling through top notch video production animation services.    </p>
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
                    <p>We specialize in producing 2D and 3D high-quality videos that captivate viewers with dynamic visuals. Our videos captivate viewers, enhance brand image, and sustain their interest. Our team collaborates closely with clients to ensure that their ideas are in line with their marketing objectives. We use advanced technology and creative skills to create animations that effectively explain complex ideas and make information easier to understand. Our animations make your brand more trustworthy and polished, setting you apart from other brands. Engaging and visually enticing videos infuse belief and assurance in potential customers regarding the authenticity and quality of your offerings. Including animated videos in your marketing plan helps more people see and interact with your brand online. It allows you to reach a greater variety of people. A brand can achieve greater exposure and familiarity among more people by ensuring that content is shareable and captivates the audience. 
                    Our US-based video animation services provide expertly crafted animations that convey messages, enhance brand credibility, and increase online visibility. Collaborate with us to create visually stunning animations that drive business growth and make a lasting impression on your audience.
                    </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='new-logo-about-side-div'>
                        <img className='new-digital-about-side-img-1' src='images/new-digital-about/video/1.gif' alt=''></img>
                        <img className='new-digital-about-side-img-2' src='images/new-digital-about/video/2.gif' alt=''></img>
                        <img className='new-digital-about-side-img-3' src='images/new-digital-about/video/3.gif' alt=''></img>
                        <img className='new-logo-about-side-img-3' src='images/new-sec-logo/about-logo-af-img.png' alt=''></img>
                        <img className='new-logo-about-side-img-4' src='images/new-sec-logo/about-logo-bf-img.png' alt=''></img>
                    </div>

                </div>

            </div>
        </div>
    </section>

{/* 
  <section className='about-digital-sec'>
    <div className='container'>
    <h2 className="outline-txt">Marketing</h2>
      <div className='row'>
        <img className='about-digitl-1' src='images/digital-markt/about-img-1.png' alt=''></img>
        <img className='about-digitl-2' src='images/digital-markt/about-img-2.png' alt=''></img>
        <img className='about-digitl-3' src='images/digital-markt/about-img-3.png' alt=''></img>
        <div className='col-sm-12'>
          <div className='hd-txt'>
            <h2>Let’s Brainstorm Exciting <br />Design Ideas!</h2>
            <p>We specialize in producing 2D and 3D high-quality videos that captivate viewers with dynamic visuals. Our videos captivate viewers, enhance brand image, and sustain their interest. Our team collaborates closely with clients to ensure that their ideas are in line with their marketing objectives. We use advanced technology and creative skills to create animations that effectively explain complex ideas and make information easier to understand. Our animations make your brand more trustworthy and polished, setting you apart from other brands. Engaging and visually enticing videos infuse belief and assurance in potential customers regarding the authenticity and quality of your offerings. Including animated videos in your marketing plan helps more people see and interact with your brand online. It allows you to reach a greater variety of people. A brand can achieve greater exposure and familiarity among more people by ensuring that content is shareable and captivates the audience. 
                Our US-based video animation services provide expertly crafted animations that convey messages, enhance brand credibility, and increase online visibility. Collaborate with us to create visually stunning animations that drive business growth and make a lasting impression on your audience.
</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}

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
  <section className='digital-mrkt-serv video-digital-serv'>
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
                    <h4>Explainer Video Creation</h4>                      
                    <p>You can use our video animation service to create clear and concise videos that effectively communicate complex concepts, captivate your audience, and effectively convey your intended message. By incorporating captivating narratives and appealing visuals, we ensure that your concepts are effortlessly comprehended and retained.</p>

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
                   <h4>2D Animation Production</h4>                      
                    <p>By crafting 2D animations, our talented artists transform your ideas into visually captivating and dynamic representations that appear more realistic. Our goal is to create captivating videos that not only grab people's attention, but also effortlessly convey your story.</p>
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
                  <h4>3D Modeling and Animation </h4>                      
                    <p>We are highly skilled at producing 3D visuals that evoke a sense of realism, making you feel present in the virtual environment. Our team specializes in developing lifelike 3D animations that enhance the appeal and excitement of various products, concepts, or stories.</p>
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
                  <h4>Motion Graphics Design  </h4>                      
                    <p>Our motion graphics design service makes your content look better with eye-catching animations. We use different artistic elements like fonts, pictures, and motion to create captivating images that make your stories better and have a strong effect on the people who see them.</p>
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
                  <h4>Whiteboard Animation Services</h4>                      
                    <p>Our service specializes in creating whiteboard animations that are easy to understand. Ideas are transformed into visual form by our artistic team through the use of hand-drawn illustrations. They design visually stimulating and engaging content that provides both education and entertainment.</p>
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
                  <h4>Character Animation Development</h4>                      
                    <p>Your brand will acquire a one-of-a-kind and easily recognizable personality through our animation service. We make animated characters that connect with your audience, so you can share stories and give messages in an engaging and understandable manner. Our brand becomes more captivating and engaging with the help of our animated characters, capturing people's attention and enhancing their understanding and interaction.</p>
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
                      <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
                  </div>
              </div>
              <VideoAnimationPortfolio />
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
				<PricingVideo />
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