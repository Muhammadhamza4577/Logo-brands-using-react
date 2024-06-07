import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import DigitalProcess from '../components/includes/DigitalProcess';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import PricingWeb from '../components/includes/PricingWeb';

export default function WebContentWriting() {

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
<video src="images/digital/webcontent-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
  <div className='container'>
  <h2 className="outline-txt">Digital Marketing</h2>
      <div className='row'>
          <div className='col-sm-6'>
              <div className='bnr-txt'>
                  <h2>Art of Impactful web Content Writing </h2>
                  <p>Writing content for the web that persuades, inspires action, and creates a never-ending demand for your products, paving the way to success.</p>
                  <div className="cta-btn bnr-btn">
                    <div className="link_wrapper">
                        <a href="javascript:;" className="get-btn popup-btn">Get Started</a>
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
            <p>Let's embark on a journey of writing web content that brings your brand's story to life, captivating and converting audiences. Our professional staff of content writers specializes in crafting remarkable and appealing text for a variety of platforms and mediums at our creative hub. We take pleasure in generating intriguing copy that goes beyond basic interaction, transforming visitors into loyal customers.<br />
            Great content can attract consumers, but a genuinely great copy has the magical ability to turn them into brand admirers. Our expert personnel are well-versed in understanding your specific needs, ensuring that each word connects with your target audience and is consistent with your corporate identity.<br />
            We bring your ideas and vision to life through eye catching advertising and appealing corporate brochures creating remarkable and compelling copy that delivers practical results. Our enthusiasm for generating storylines that increase ROI drives us to go beyond expectations and leave a lasting impression.
            Connect with us now to take the next step in your content journey. Share your copywriting requirements, and we'll spark your brand's presence with words that gather passion and motivate action.
            </p>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='new-logo-about-side-div'>
              <img className='new-digital-about-side-img-1' src='images/new-digital-about/web/1.png' alt=''></img>
              <img className='new-digital-about-side-img-2' src='images/new-digital-about/web/2.png' alt=''></img>
              <img className='new-digital-about-side-img-3' src='images/new-digital-about/web/3.png' alt=''></img>
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
                  <h2>We're Just As Excited About Your Idea As You Are</h2>
                  <p>We are a full service digital consultancy with experience and capacity to meet the needs of businesses of all sizes. Our expertise and professionalism enable us to offer our clients superior-quality services.</p>
                  <div className="cta-btn bnr-btn">
                      <div className="link_wrapper">
                          <a href="javascript:;" className="get-btn popup-btn">Get Started</a>
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
<section className='digital-mrkt-serv web-digital-serv'>
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
                    <h4>Blog Post and article</h4>                      
                    <p>Our talented writers create interesting blog posts and articles on various subjects to inform and capture your readers' attention. We make sure the information is interesting to your audience and easy to understand by telling a clear and interesting story.</p>

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
                   <h4>Website copywriting</h4>                      
                    <p>Our website writing service makes your online presence more exciting. Our content writing focuses on creating brief, persuasive, and SEO-friendly content that successfully communicates your brand, products, and services to potential customers.</p>
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
                  <h4>Product description  </h4>                      
                    <p>Our product descriptions use creative and clear language to show the important features and advantages of what you are selling. Our captivating descriptions effectively engage customers and contribute to the sale of products.</p>
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
                  <h4>Case study </h4>                      
                    <p>We narrate your accomplishments through case studies that effectively capture people's attention. To establish trust, we thoroughly evaluate your achievements, challenges, and resolutions, emphasizing your expertise.</p>
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
                  <h4>Ebook</h4>                      
                    <p>We provide full and well-thought-out information through our Ebook service. We work on books about different topics, providing useful information that connects with the people you want to reach.</p>
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
                  <h4>Social Media Content  </h4>                      
                    <p>Our specialized social media experts tailor captivating posts exclusively for your brand. Our content is designed to be short, captivating, and generate conversation, increasing your online following and strengthening your online presence.</p>
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
				<PricingWeb />
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
