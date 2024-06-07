import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import PricingSEO from '../components/includes/PricingSEO';

export default function SearchEngineOptimization() {

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
  <video src="images/digital/seo-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
      <div className='container'>
      <h2 className="outline-txt">Digital Marketing</h2>
          <div className='row'>
              <div className='col-sm-6'>
                  <div className='bnr-txt'>
                      <h2>Elevate your online <br />visibility with SEO </h2>
                      <p>Our expertise and data driven strategies can crack the code to SEO success for top rankings.</p>
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
  {/* <section className='about-digital-sec'>
    <div className='container'>
    <h2 className="outline-txt">Marketing</h2>
      <div className='row'>
        <img className='about-digitl-1' src='images/digital-markt/about-img-1.png' alt=''></img>
        <img className='about-digitl-2' src='images/digital-markt/about-img-2.png' alt=''></img>
        <img className='about-digitl-3' src='images/digital-markt/about-img-3.png' alt=''></img>
        <div className='col-sm-12'>
          <div className='hd-txt'>
            <h2>Let’s Brainstorm Exciting <br />Design Ideas!</h2>
            <p>Finding it difficult to stand out online? Do you need to quickly reach your target customers? It appears that you require a little help from the greatest Search engine optimization services on the internet. Search engine optimization is an excellent technique to move up the SERPs and stay at the top of your customers' choices. Finding inexpensive search engine optimization services is difficult, and finding the finest SEO business is even more difficult. Our great SEO specialists are here to assist you in providing the best SEO services online. We are one of the finest SEO businesses in the United States, focusing not only on delivering SEO services in the United States but also all over the world. We are an experienced group of SEO specialists dedicated to offering low-cost SEO services for businesses of all shapes and sizes. We are the strongest SEO agency out there, and our primary goal is to make your business shine in search rankings. Our global SEO powerhouse specializes in local SEO services, serving clients worldwide. We prioritize client success and drive enterprise expansion, creating captivating success stories.</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}

  <section className='logo-about-sec new-logo-about-sec new-digital-about-sec'>
        <div className='container'>
            <h2 className="outline-txt">Marketing</h2>
            <div className='row'>
               
                <div className='col-sm-6'>
                    <div className='hd-txt'>
                    <h2>Let’s Brainstorm Exciting <br />Design Ideas!</h2>
                    <p>Finding it difficult to stand out online? Do you need to quickly reach your target customers? It appears that you require a little help from the greatest Search engine optimization services on the internet. Search engine optimization is an excellent technique to move up the SERPs and stay at the top of your customers' choices. Finding inexpensive search engine optimization services is difficult, and finding the finest SEO business is even more difficult. Our great SEO specialists are here to assist you in providing the best SEO services online. We are one of the finest SEO businesses in the United States, focusing not only on delivering SEO services in the United States but also all over the world. We are an experienced group of SEO specialists dedicated to offering low-cost SEO services for businesses of all shapes and sizes. We are the strongest SEO agency out there, and our primary goal is to make your business shine in search rankings. Our global SEO powerhouse specializes in local SEO services, serving clients worldwide. We prioritize client success and drive enterprise expansion, creating captivating success stories.</p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='new-logo-about-side-div'>
                        <img className='new-digital-about-side-img-1' src='images/new-digital-about/seo/1.png' alt=''></img>
                        <img className='new-digital-about-side-img-2' src='images/new-digital-about/seo/2.png' alt=''></img>
                        <img className='new-digital-about-side-img-3' src='images/new-digital-about/seo/3.png' alt=''></img>
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
  <section className='digital-mrkt-serv seo-digital-serv'>
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
                    <h4>On Page SEO </h4>                      
                    <p>Internal linking, meta description optimization, title tag optimization, structured data optimization, and keyword research are all part of on-page SEO, which involves making website content and code more search engine friendly. Keyword research helps in identifying the target audience, title tags attract readers, meta descriptions increase visibility, internal linking improves crawling and indexing, and structured data improves content understanding and visibility.</p>

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
                    <h4>Keyword Research and Analysis </h4>                      
                      <p>Keyword research involves the identification and selection of the most appropriate words for your website. It is important to identify your target audience and understand their online preferences and interests. After creating a word list, it is crucial to investigate the search volume and usage competition of those words.</p>
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
                  <h4>Link Building </h4>                      
                    <p>Link building is the process of obtaining links from other websites to yours in order to improve your site's search rankings. Using guest blogging to build quality backlinks on websites linked to the sector is one strategy. Social media sharing increases the reach of content and produces backlinks. Although it takes time and effort, reaching out to website owners can also secure connections.</p>
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
                  <h4>Local SEO</h4>                      
                    <p>Local SEO refers to enhancing your website so that it appears more prominently in search results for local queries. This means doing things like adding your business to Google Maps and local search results for free. Use words that describe your location in the content and titles of your website, and think about adding your business to lists of local businesses.</p>
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
                  <h4>SEO Reporting</h4>                      
                    <p>SEO reporting means giving you detailed information about how well your website is doing in terms of SEO. These reports keep track of how well your keywords are ranking, how many backlinks you have, and how much traffic your website gets. This information can assist you in keeping track of your progress, finding areas to improve, and making smart decisions about your SEO plan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
				<PricingSEO />
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
