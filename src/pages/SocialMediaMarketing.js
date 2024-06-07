import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import DigitalSmmPortfolio from '../components/includes/DigitalSmmPortfolio';

export default function SocialMediaMarketing() {

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
  <video src="images/digital/smm-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
      <div className='container'>
      <h2 className="outline-txt">Digital Marketing</h2>
          <div className='row'>
              <div className='col-sm-6'>
                  <div className='bnr-txt'>
                      <h2>Grow Your Socials </h2>
                      <p>Grow Your Brand with Our US based reasonably priced Social Media Marketing Services, Designed for Success in Every Package improving your conversion rates. </p>
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
            <p>We take great satisfaction in offering top-notch best social media marketing services at our digital marketing firm that may completely change the way your company operates. Social media has become an integral component of any effective marketing plan in today's fast-paced world. Our expert specialists are committed to helping your brand in using the power of social media platforms to reach a larger audience and achieve extraordinary outcomes. Our customized social media marketing services provide your company with more visibility, increased brand recognition, and an easy way to communicate with your target customers. We generate interesting content that resonates with your audience and stimulates significant connections by using the huge potential of social media. Our cost-effective packages ensure that businesses of all sizes can take advantage of our advanced social media marketing services without breaking the bank. We have a solution for you, whether you are a startup or an established business. Experience social media marketing services to drive your company to new heights. You'll see an increase in website traffic and lead creation when you interact with your audience honest way. </p>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='new-logo-about-side-div'>
              <img className='new-digital-about-side-img-1' src='images/new-digital-about/smm/1.png' alt=''></img>
              <img className='new-digital-about-side-img-2' src='images/new-digital-about/smm/2.png' alt=''></img>
              <img className='new-digital-about-side-img-3' src='images/new-digital-about/smm/3.png' alt=''></img>
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
  <section className='digital-mrkt-serv smm-digital-serv'>
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
                    <h4>Social Media Management </h4>                      
                    <p>Our team can provide guidance on creating a social media strategy tailored to your specific marketing objectives. We will also create content that is made specifically for your desired audience. Your social media accounts will be closely monitored for any mentions or comments, and we will respond promptly to any inquiries or concerns.</p>

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
                   <h4>Content Creation</h4>                      
                    <p>We create engaging content for social media to help followers achieve goals and engage with your audience. Content for social media can be produced in the form of blog posts, pictures, videos, and more. We'll produce content that is appealing to them and improves their learning experience. We make sure content is easily searchable for potential customers to discover it effectively.</p>
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
                  <h4>Influencer Marketing </h4>                      
                    <p>We link you up with influencers who can help you promote your business and connect with your target market. We will find influencers that share your beliefs and have a sizable following in your target market. After that, we'll collaborate with you to produce content that the influencers may distribute to their audience and to reach a wide audience and increase business interest.</p>
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
                  <h4>Social Advertising </h4>                      
                    <p>Our expertise lies in creating and managing social media advertisements that effectively engage your desired audience and deliver desired results. We will use information and analysis to show your advertisements to the people who are most probable to be interested in what you offer. We will make ads that look attractive and catch people's attention. This is an excellent method to quickly and efficiently reach many people.</p>
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
                  <h4>Community Management </h4>                      
                    <p>We strive to build and maintain a cheerful and enthusiastic community of people who are devoted to promoting your brand on social media. We are here to respond to any inquiries or comments, address issues, and promote constructive discussions. We will organize events and contests to maintain your followers' engagement.</p>
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
                  <h4>Analytics and reporting </h4>                      
                    <p>Your social media performance is carefully monitored and detailed reports are provided to illustrate the effectiveness of your campaigns. We will also give suggestions for making things better. This information can be extremely beneficial in shaping decisions on how to promote your business through social media.</p>
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
              <DigitalSmmPortfolio />
          </div>
      </div>
  </section>

  {/* <TechnologySecInclude /> */}

  <WhyChooseTestiSec />
  <MainPopup />  
  </>
)
}

