import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec';
import PortMobileSlider from '../components/includes/PortMobileSlider';
import TechnologySecInclude from '../components/includes/TechnolySecInclude';

export default function MobileAppDevelopment() {
    useEffect( ()=>{
        window.jQuery(function() {
        window.jQuery('.type-mobile-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
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

   <section className='innerbanner-sec mobile-app-bnr' >
   <video src="images/mobile-app/mobile-banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
    <div className='container'>
        <h2 className="outline-txt">Mobile Application</h2>
        <div className='row'>
            <div className='col-sm-6'>
                <div className='bnr-txt'>
                    <h2>Outcome-focused app design & development </h2>
                    <p>Our app design and development services pave the way to digital success for apps that inspire, engage, and revolutionize your business landscape. </p>
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
                {/* <div className='bnr-side-img'>
                    <img src='images/mobile-app/bnr-side-img.png' alt=''></img>
                </div> */}
            </div>
        </div>
    </div>
   </section>
   <section className='about-app-sec'>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='hd-txt'>
                    <h2>Application Design And Development Services </h2>
                    <p>Our company is quite proud of the innovative application design and development services we provide. Our team of talented, affordable mobile app developers creates digital works of art tailored to your specific business needs with a sprinkle of magic and imagination. We make your idea a reality, whether it's a stunning user interface, smooth functioning, or ground-breaking features. We aim to provide businesses like yours with innovative mobile apps that stand out in the digital space, captivate users, and fuel growth. 
                        <br /> Partner with us, and let's embark on an extraordinary journey to improve the mobile visibility of your business. We will collaborate to develop exceptional mobile experiences and support your success in the ever-evolving technology landscape. When you choose us, you can count on our team to bring a fresh perspective, inventive ideas, and top notch skills to every project. We're dedicated to helping you stay ahead of the game and connect with your audience in meaningful ways that set you apart from the competition. Let us help you create an unforgettable mobile experience that impresses your users with unmatch growth. 
                        </p>
                </div>
            </div>
            <div className='col-sm-12 p0'>
                <div className='about-app-list'>
                    <ul>
                        <li>
                            <img src='images/mobile-app/about-img-2.png' alt=''></img>
                        </li>
                        <li>
                            <img src='images/mobile-app/about-img-1.png' alt=''></img>
                        </li>
                        <li>
                            <img src='images/mobile-app/about-img-3.png' alt=''></img>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>

   <section className='cta-sec-logo cta-sec-mobile-app'>
        <div className='container'>
            <div className='row'>
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
                <div className='col-sm-5'>
                    <div className='cta-side-img'>
                        <img src='images/mobile-app/cta-side-img.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='types-of-mobile-app'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Types of Mobile Application Developments </h2>
                        <p>You can turn your ideas into reality by using our creative and expert mobile app development services for an interesting and engaging experience to drive success.</p>
                    </div>
                </div>
                <div className='col-sm-12 p0 row main-typ-mob-col'>
                    <div className='type-mobile-slider'>
                        <div>
                            <div className='type-mob-box type-mob-box-1 '>
                                <h4>iOS App Development</h4>
                                <p>We offer mobile application development services for iOS app development on iPhones, iPads, and other Apple devices remaining popular in areas with large apple user base. </p>
                                <img src='images/mobile-app/type-img-1.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='type-mob-box type-mob-box-2 '>
                                <h4>Android App Development </h4>
                                <p>Due to its large user base and accessibility, being the most popular mobile operating system in the world, which has made mobile app development for Android quite popular.</p>
                                <img src='images/mobile-app/type-img-2.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='type-mob-box type-mob-box-3 '>
                                <h4>Cross-Platform App Development </h4>
                                <p>Using a single codebase, our affordable mobile app developers design mobile applications that can operate on numerous operating systems, such as Android and iOS. </p>
                                <img src='images/mobile-app/type-img-3.png' alt=''></img>
                            </div>
                        </div>
                        <div>
                            <div className='type-mob-box type-mob-box-4 '>
                                <h4> Hybrid App Development</h4>
                                <p>Our affordable app developers, hybrid apps contain elements of both native and web applications, working across several platforms with a single codebase.</p>
                                <img src='images/mobile-app/type-img-4.png' alt=''></img>
                            </div>
                        </div>
                        
                        <div>
                            <div className='type-mob-box type-mob-box-5 '>
                                <h4>  Native App Development </h4>
                                <p>Native mobile app development designs applications for specific operating systems like Android or iOS, providing optimal performance through direct access to device hardware and software.</p>
                                <img src='images/mobile-app/type-img-5.png' alt=''></img>
                            </div>
                        </div>
                        
                        <div>
                            <div className='type-mob-box type-mob-box-6 '>
                                <h4>  Game App Development  </h4>
                                <p>Our expert developers create interactive and immersive gaming apps that inspire excitement, from thrilling adventures to competitive challenges, ensuring continued engagement.</p>
                                <img src='images/mobile-app/type-img-6.png' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='mob-portolio-sec'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='hd-txt'>
                        <h2>Bold Mobile Solutions for an Evolving World</h2>
                        <p>Discover our impressive collection of mobile app designs and developments that combine creativity and technology to create amazing digital and engaging experiences that drives success.</p>
                    </div>
                </div>
                <PortMobileSlider />
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
    <section className='process-logo-sec'>
        <div className='container'>
        <h2 className="outline-txt">Our Process</h2>
            <div className='row'>
                <div className='col-sm-12 p0'>
                    <div className='hd-txt'>
                        <h2>Our Streamlined Process</h2>
                        <p>We at National Logo Designs believe in efficiency and productivity because of which we have streamlined our process and minimized it to simple 6 steps. Kindly take a look:</p>
                    </div>
                </div>
                <div className='col-sm-12 p0 row main-process-logo'>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-1.png' alt=''></img>
                                </div>
                                <h4>Conceptualization</h4>
                                <p>Define the app's purpose, target audience, and core features to lay the groundwork for the mobile app development process.</p>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-2.png' alt=''></img>
                                </div>
                                <h4>Wireframing and Prototyping</h4>
                                <p>Create visual wireframes and interactive prototypes that illustrate the app's layout, user interface elements, and user flow.</p>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-3.png' alt=''></img>
                                </div>
                                <h4>Design and UI/UX</h4>
                                <p>Develop the visual identity, user interface design, and user experience elements to ensure the app is visually appealing and user-friendly.</p>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-4.png' alt=''></img>
                                </div>
                                <h4>Development</h4>
                                <p>Code the app's frontend and backend, integrating functionalities, databases, APIs, and any required third-party services</p>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-5.png' alt=''></img>
                                </div>
                                <h4>Testing</h4>
                                <p>Thoroughly test the app for functionality, usability, performance, and compatibility across various devices and operating systems, identifying and rectifying any issues.</p>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                        <div className='process-logo-box'>
                            <img className='proces-logo-hv-img' src='images/logo-design/process-logo-hv-img.png' alt=''></img>
                            <div className='process-logo-img'>
                                <img src='images/mobile-app/process-icon-6.png' alt=''></img>
                                </div>
                                <h4>Deployment and Launch</h4>
                                <p>Publish the app to app stores (such as the Apple App Store and Google Play Store), making it available for download to users, and promote its launch to the target audience.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
</section>
    <WhyChooseTestiSec />
   
   </>
  )
}
