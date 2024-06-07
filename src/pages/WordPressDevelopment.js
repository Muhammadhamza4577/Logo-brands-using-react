import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import WebProcess from '../components/includes/WebProcess';
import { LightgalleryItem } from "react-lightgallery";
import TechnologySecInclude from '../components/includes/TechnolySecInclude';
import MainPopup from '../components/includes/MainPopup';
import PricingWebDesignMainTab from '../components/includes/PricingWebDesignMainTab';

export default function WordPressDevelopment() {

    useEffect( ()=>{

        window.jQuery(function() {


        window.jQuery('.types-slider-web').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: false,
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
    <section className='innerbanner-sec website-banner'>
    <video src="images/web-desgin/video/wordpress-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
        <div className='container'>
            <h2 class="outline-txt">Website Design</h2>    
            <div className='row'>
                <div className='col-sm-7'>
                    <div className='bnr-txt'>
                        <h2>Road to Online Success with word press </h2>
                        <p>Boost your business with 5 Years of Expertise in WordPress Website Development Services, unlocking Versatility, User-Friendliness, and Limitless Plugins!</p>
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
                <div className='col-sm-5'>
                    {/* <div className='bnr-side-img-web'>
                        <img src='images/web-desgin/banner-side-img.png' alt=''></img>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <section className='web-about-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='about-txt hd-txt'>
                        <h2>Our Greatest Strength Lies in Geeky WordPress Developers</h2>
                        <p>Challenges don't scare us! We rely on collaboration, and together, we'll develop successful solutions just for you. Your opinions are essential, and we are excellent listeners who can turn your ideas into accomplished outcomes. Our experienced staff has the expertise in custom WordPress development services to get things done, and we're ready to develop a responsive website that takes your business to the next level!<br /> We are passionate about developing online experiences creating a lasting impression on your clients, in addition to constructing websites. Our priority is not only aesthetics but also on user engagement and conversion, resulting in measurable benefits for your company.<br /> 
                            We at National Logo Designs are experts in web development and design! Our websites are of the highest quality, created to wow with their user-friendliness, full functionality, rock-solid security, and flexibility to grow with your company. Connect with us today! </p>
                        </div>
                </div>
                <div className='col-sm-6'>
                    <div className='about-web-img-st'>
                        <h2 class="outline-txt">Website Design</h2>    
                        <img className='about-web-img-1' src='images/web-desgin/about/wordpress/1.png' alt=''></img>
                        <img className='about-web-img-2' src='images/web-desgin/about/wordpress/2.png' alt=''></img>
                        <img className='about-web-img-3' src='images/web-desgin/about/wordpress/3.png' alt=''></img>
                        <img className='about-web-img-4' src='images/web-desgin/about/wordpress/4.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
        <section className='rating-sec-web'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 p0 main-ratng-web-col'>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-1.png' alt=''></img>
                            <h2><span className='count'>450</span></h2>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-2.png' alt=''></img>
                            <h2><span className='count'>48</span>k</h2>
                            <h5>Project Done</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-3.png' alt=''></img>
                            <h2><span className='count'>450</span></h2>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className='rating-logo-col'>
                            <img src='images/logo-design/about-rating-img-4.png' alt=''></img>
                            <h2><span className='count'>48</span>k</h2>
                            <h5>Project Done</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section className='cta-sec-logo cta-sec-web-design'>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-5'>
                    <div className='cta-side-img'>
                        <img src='images/web-desgin/cta-side-img.png' alt=''></img>
                    </div>
                </div>
                <div className='col-sm-7'>
                    <div className='cta-txt inner-cta-txt'>
                        <h4>Got A Project In Mind, Let's Grab A Coffee</h4>
                        <h2>We’re excited to turn your ideas into reality with our services! </h2>
                        <p>We support companies with their digital necessities, regardless of their size. Our substantial knowledge and remarkable industry experience allow us to deliver high-quality services to our client.</p>
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

    <section className='types-of-web'>
        <div className='container-fluid'>
        <h2 class="outline-txt">Our Services</h2> 
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Types of Websites Designs We Provide</h2>
                        <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
                    </div>
                </div>
                <div className='col-sm-12 types-main-col p0'>
                    <div className='types-slider-web'>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/wordpress/services-icon-1.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Flexible Content Creation</h4>
                                <p>WordPress pages provide a simple interface for adding and editing content. Pages may be readily created and edited without the requirement for highly technical knowledge. The inbuilt WYSIWYG editor lets you format text, add photos, videos, and other media components, making the production of content simple and effective.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/wordpress/services-icon-2.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Customizable Templates</h4>
                                <p>You may apply a variety of customized layouts, referred to as themes, from WordPress to your pages. This enables you to alter your pages' style and design without changing their content. Using themes, you may create the desired look and feel for your website, regardless of whether you're creating a blog, portfolio, company site, or something else entirely.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/wordpress/services-icon-3.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>SEO-Friendly Structure</h4>
                                <p>In order to optimize for search engines, WordPress was created. Meta tags, descriptions, and pertinent keywords make it simple to optimize pages for search engines. Additionally, a variety of plugins are accessible to improve the SEO performance of your website and raise its exposure in search engine results.</p>
                            </div>
                        </div>
                        <div>
                            <div className='types-web-bx'>
                                <img src='images/web-desgin/wordpress/services-icon-4.png' alt=''></img>
                                <img className='typ-web-bf-img' src='images/web-desgin/types-bf-img.png' alt=''></img>
                                <h4>Hierarchical Organization</h4>
                                <p>With WordPress, you can create parent and child pages since the platform supports hierarchical structure. By organizing your material logically using this hierarchy, you may make it simpler for people to explore your website. It's very helpful for creating intricate websites with several parts or categories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='portfolio-web-sec'>
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
                <div className='col-sm-12 p0 row main-port-web-col'>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/1.jpg">
                                <img src="images/portfolio/web/wordpress/port-1.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/2.jpg">
                                <img src="images/portfolio/web/wordpress/port-2.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/3.jpg">
                                <img src="images/portfolio/web/wordpress/port-3.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/4.jpg">
                                <img src="images/portfolio/web/wordpress/port-4.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/5.jpg">
                                <img src="images/portfolio/web/wordpress/port-5.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='port-web-bx'>
                            <LightgalleryItem src="images/portfolio/web/wordpress/6.jpg">
                                <img src="images/portfolio/web/wordpress/port-6.png"></img>
                            </LightgalleryItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <TechnologySecInclude />
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
                    <PricingWebDesignMainTab />
                </div>
            </div>
        </section>
        <WebProcess />
    </section>
    <WhyChooseTestiSec />

    <MainPopup />
    </>
  )
}
