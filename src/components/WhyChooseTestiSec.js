import React, { useEffect, useLocation } from 'react'



export default function WhyChooseTestiSec() {
    useEffect(() => {
        window.jQuery(function() {
            window.jQuery('.testi-slider-st').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 8000,
                pauseOnHover: false,
                cssEase: 'linear',
                responsive: [
                    {
                    breakpoint: 767,
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
        })
        
  });
  return (
    <>
    <section className="process-sec">
        <div className="container">	
            <h2 className="outline-txt portfolio-outline">Process?</h2>
            <div className="row">
                <div className="col-sm-12">
                    <div className="hd-txt">
                        <h2>Our Process</h2>
                        <p>Our professional logo design agency promises to establish your business with a robust brand representation in the market and customize your logo in accordance with market trends. </p>
                    </div>
                </div>
                <div className="col-sm-12 main-process-col">
                    <div className="col-sm-3">
                        <div className="process-div">
                            <img src="images/process-img-1.png"></img>
                            <h4>High <br />Performance</h4>
                            <p>We create visually engaging websites that captivate visitors with compelling content. Our designers and developers ensure your site is stunning and captivating, leaving a lasting impression on every visitor.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="process-div">
                            <img src="images/process-img-2.png"></img>
                            <h4>Unique <br />Designs</h4>
                            <p>Our designers work with you to create custom designs that fit your needs. We collaborate every step of the way to bring your vision to life and achieve your objectives.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="process-div">
                            <img src="images/process-img-3.png"></img>
                            <h4>Highly<br /> Attractive</h4>
                            <p>Our designs align with market trends and design principles, ensuring effectiveness in achieving your business goals. Collaborating with you, we create custom designs to bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="process-div">
                            <img src="images/process-img-4.png"></img>
                            <h4>Value <br />Towards Persistence </h4>
                            <p>As a team, we aim for effectiveness and efficiency in achieving your business goals, easing the pressure off business owners by working collaboratively to bring their vision to life. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="testi-sec">
        <div className="container-fluid">
            <h2 className="outline-txt">Testimonials</h2>
            <div className="row">
                {/* <img className="testi-circle-st" src="images/testi-bg-circle.png" alt='' /> */}
                
                <div className="col-sm-12 p0">
                    <div className="hd-txt">
                        <h2>What Our Clients Say</h2>
                        <p>Being creative is not everyone’s cup of tea but surely it is ours and we have our client’s words to prove it.  </p>
                    </div>
                </div>
                <div className="col-sm-12 p0 row testi-slider-main-col">

                        <div className="testi-txt-div testi-slider-st">
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-1.png' alt=''></img>
                                    
                                    <p>The website received positive feedback and drove an increase in sales. Flexible and efficient, the team produced high-quality content within a short period. National Logo Designs innovative ideas and hands-on approach made for a fruitful partnership. They produced landing pages of varying lengths to be used on a website and for marketing campaigns.</p>
                                    <div className="testi-nm-dtl">
                                        <h5>Emily Jordan</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-1.png' alt=''></img>
                                    
                                    <p>We are excited to be working with National Logo Designs and building on their Chain of Custody solution. It has helped set the foundation for the Responsible Gold Supply Chain and Emergent Technology' sability to track gold from mine to vault.</p>
                                    <div className="testi-nm-dtl">
                                        <h5>Louis Martin</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-1.png' alt=''></img>
                                    
                                    <p>Our online ordering has increased about 4x in the past 3 4 years and National Logo Designs has made it easier and more efficient to get orders through. It fits right into the operational flow.</p>
                                    <div className="testi-nm-dtl">
                                        <h5>Amber Jamal</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-1.png' alt=''></img>
                                    
                                    <p>We've been using NLD here at A Better Lemonade Stand for several years now. We've seen incredible growth - achieving a 532% growth one year. </p>
                                    <div className="testi-nm-dtl">
                                        <h5>Joscelyn Henneton</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-2.png' alt=''></img>
                                    
                                    <p>My E-commerce logo was met with perfection. The symbol, colors, and sharp edges made my brand outshine the competitors. Excellently done as demanded. Thank you.</p>
                                    <div className="testi-nm-dtl">
                                        <h5>Kevin Cooper</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testi-txt-bx">
                                    <img src='images/testi-img-1.png' alt=''></img>
                                    
                                    <p>National Logo Designs takes a modern approach to event software, thinking outside the box. Its everything you need with one platform, including marketing tools.</p>
                                    <div className="testi-nm-dtl">
                                        <h5>Amanda Allen</h5>
                                        <div className="testi-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>

        <section className="ftr-cta">
        <img className="testi-last-img-st" src="images/pricing/test-last-img.png" alt='' />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="hd-txt">
                            <h2>Connect With Us Today!</h2>
                            <p>Let's usher in a new era of innovation by getting in touch.</p>					
                        </div>
                        <div className="cta-btn">
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
        </section>

    </section>
</>
  )
}
