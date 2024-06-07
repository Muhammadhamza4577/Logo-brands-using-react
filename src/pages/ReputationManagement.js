import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';

export default function ReputationManagement() {

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
  <video src="images/digital/reputation-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
      <div className='container'>
      <h2 className="outline-txt">Digital Marketing</h2>
          <div className='row'>
              <div className='col-sm-6'>
                  <div className='bnr-txt'>
                      <h2>Reputation Management </h2>
                      <p>With our professional online reputation management services, protect and enhance your online image while promoting trustworthiness with your clients.</p>
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
            <p>Our business reputation management services are committed to protecting and improving your brand's online image. A positive reputation is essential for the success of any organization in today's digital era. Our best reputation management team works hard to monitor, preserve, and promote your brand's reputation across several internet channels.<br />
 
 Our reputation management services address negative reviews, comments, and mentions, ensuring potential customers perceive your company positively. We build strong relationships with consumers by addressing their issues and enhancing brand reputation. Our customized methods boost brand authority, attract more clients, and retain loyalty, leading to higher customer retention and repeat business. 
 Furthermore, our reputation management services give important insights into the online performance and customer attitude of your business. With this, you can make better business decisions and constantly develop your goods and services to satisfy the demands of your clients.<br />
 Don't let unfavorable web material foul your brand's reputation. Work with us to improve your brand's image and online presence. With our reputation management services, you can be confident that your brand's reputation is in experienced hands, pushing your company to long-term growth and success.
 </p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='new-logo-about-side-div'>
                        <img className='new-digital-about-side-img-1' src='images/new-digital-about/reputation/1.png' alt=''></img>
                        <img className='new-digital-about-side-img-2' src='images/new-digital-about/reputation/2.png' alt=''></img>
                        <img className='new-digital-about-side-img-3' src='images/new-digital-about/reputation/3.png' alt=''></img>
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
  <section className='digital-mrkt-serv reputation-digital-serv'>
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
                    <h4>Online Review Monitoring</h4>                      
                    <p>We closely observe and control online feedback obtained from diverse websites. Our ability to effectively respond to customer feedback enables us to proactively resolve problems, enhance satisfaction, and engage with your target demographic. This active approach not on shows that you care about making customers happy, but it also helps build a good image for your brand in the long run.</p>

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
                   <h4>Brand Image Enhancement</h4>                      
                    <p>The efforts of our team are aimed at positively transforming how your brand is perceived on the internet. By creating effective content, engaging with people in a positive way, and telling meaningful stories, we make sure that your brand connects well with your audience. Building a reputable and optimistic online presence allows to gain customer confidence and attract a larger audience to brand.</p>
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
                  <h4>Crisis Communication Management</h4>                      
                    <p>When faced with challenging circumstances, our skilled professionals step in to manage communications. We create and carry out plans that help solve delicate problems and protect your brand's reputation. Communicating clearly and honestly can rebuild trust, minimize harm, and keep your brand's reputation intact, even during difficult times.</p>
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
                  <h4>Social Media Reputation Management</h4>                      
                    <p>Our expert team takes care of your social media accounts, guaranteeing constructive engagements and proficiently addressing any negative feedback. By actively interacting with your audience, we establish a friendly online atmosphere that showcases your brand's principles. By using this active method, we make sure that your social media accounts become strong tools for improving your reputation.</p>
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
                  <h4>Online Sentiment Analysis</h4>                      
                    <p>Through the implementation of robust tools, we assess people's perceptions of your brand. By conducting this assessment, we can modify our strategies according to evolving thoughts and opinions. By paying attention to how people feel online, we can adjust how we respond and what we do to always make our brand look good.</p>
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
                  <h4>Negative Content Suppression</h4>                      
                    <p>We have a strong proficiency in handling and shaping your online reputation. We can make sure that negative things about you are hard to find on search engines.  When we create and distribute high-quality content, we can push down negative mentions in search rankings. This method makes them less noticeable, allowing your brand's good qualities to be more prominent in online searches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


 <TechnologySecInclude />
  <section className="mix-bg-clr-sec">

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
