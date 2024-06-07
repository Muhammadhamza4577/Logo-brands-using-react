import React, { useEffect } from 'react';
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import MainPopup from '../components/includes/MainPopup';

export default function About (){
    useEffect(() => {
        window.jQuery(function() {
        window.jQuery('.award-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			centerMode: true,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 5000,
			pauseOnHover: false,
			cssEase: 'linear'
		  });
       

    });
    });
    
    return(

        <>
            <section className='innerbanner-sec about-us-bnr'>            
                <div className='container'>
                    <h2 className="outline-txt">About Us</h2>
                    
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='bnr-txt'>
                                <h2>About Us </h2>
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
                    </div>
                </div>
            </section>
            <section className='web-about-sec about-sec-main-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='about-txt hd-txt'>
                                <h2>About National Logo Designs</h2>
                                <p>Challenges don't scare us! We rely on collaboration, and together, we'll develop successful solutions just for you. Your opinions are essential, and we are excellent listeners who can turn your ideas into accomplished outcomes. Our experienced staff has the expertise in custom WordPress development services to get things done, and we're ready to develop a responsive website that takes your business to the next level!<br /> We are passionate about developing online experiences creating a lasting impression on your clients, in addition to constructing websites. Our priority is not only aesthetics but also on user engagement and conversion, resulting in measurable benefits for your company.<br /> 
                                    We at National Logo Designs are experts in web development and design! Our websites are of the highest quality, created to wow with their user-friendliness, full functionality, rock-solid security, and flexibility to grow with your company. Connect with us today! </p>
                                </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='about-web-img-st'>    
                                <img className='about-web-img-1' src='images/web-desgin/1.png' alt=''></img>
                                <img className='about-web-img-2' src='images/web-desgin/2.png' alt=''></img>
                                <img className='about-web-img-3' src='images/web-desgin/3.png' alt=''></img>
                                <img className='about-web-img-4' src='images/web-desgin/4.png' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
			<section className="rating-sec">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 p0">
							<div className="rating-list">
								<ul>
									<li>
										<div className="rating-box">
											<h4>Increase of <span><b className="count">50</b>%</span> in new organic users</h4>
										</div>
									</li>
									<li>
										<div className="rating-box">
											<h4>Increase of <span><b className="count">50</b>%</span> in new organic users</h4>
										</div>
									</li>
									<li>
										<div className="rating-box">
											<h4>Increase of <span><b className="count">50</b>%</span> in new organic users</h4>
										</div>
									</li>
									<li>
										<div className="rating-box">
											<h4>Increase of <span><b className="count">50</b>%</span> in new organic users</h4>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
            <section className="award-sec">
                <h2 class="outline-txt portfolio-outline">Winning Awards</h2>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="hd-txt">
                                <h2>Awards And Recognitions</h2>
                                <p>To be one of the best in the business, we like our cabinets decorated with awards and recognitions.</p>
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
            </section>
            <WhyChooseTestiSec />
            <MainPopup />
        </>

    )

}