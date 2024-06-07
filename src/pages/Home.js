import React, { useEffect } from 'react'
import WhyChooseTestiSec from '../components/WhyChooseTestiSec'
import MainPopup from '../components/includes/MainPopup';
import PricingMainTab from '../components/includes/PricingMainTab';


export default function Home() {
	useEffect( ()=>{
       
		window.jQuery(function() {
			window.jQuery('.fade').slick({
				autoplay: true,
				arrows: false,
				speed: 0,
				dots: false,
				infinite: true,
				slidesToShow: 1, 
				slidesToScroll: 1,
				cssEase: 'linear',
				draggable:false,
				autoplaySpeed:5000,
				pauseOnHover:false,
				
			});
		})
		  window.jQuery(document).ready(function () {
			window.jQuery(".types-list li").hover(function () {
			  window.jQuery(".types-list li").removeClass("active");
			  // window.jQuery(".tab").addClass("active"); // instead of this do the below 
			  window.jQuery(this).addClass("active");
			});
		  });
	  
		  
	  
		  window.jQuery("img").attr("alt", "National Logo Design");
	  
	  
	  
		  window.jQuery(document).ready(function () {
	  
			window.jQuery('.hover').hover(function () {
			  var value = window.jQuery(this).attr('data-src');
			  window.jQuery('#cord-cover').attr('src', value);
			});
	  
		  });
	  
		  window.jQuery(document).ready(function() {
			window.jQuery(".creative-box").hover(function () {
				window.jQuery(".creative-slider .slick-current .creative-box").toggleClass("active");
				// window.jQuery(".tab").addClass("active"); // instead of this do the below 
				// window.jQuery(".creative-slider .slick-current .creative-box").addClass("active");   
			});
			});
	  
	window.jQuery(function() {
		  window.jQuery('.creative-slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			centerMode: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			  {
				breakpoint: 767,
				settings: {
				  slidesToShow: 1,
				  arrows:false,
				  dots :true,
				  centerMode: false,
				  slidesToScroll: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  dots :true,
				  centerMode: false,
				  slidesToScroll: 1
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
	  
		  window.jQuery('.moving-slider-txt').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 8000,
			pauseOnHover: false,
			cssEase: 'linear',
			responsive: [
			  {
				breakpoint: 1400,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1
				}
			  },
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
		  
		  window.jQuery('.main-banner-slider').slick({
			dots: false,
			slidesToShow: 1,
			arrows: false,
			slidesToScroll: 1,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2000,
			cssEase: 'linear'
		  });
	  
	  
		  window.jQuery('.port-slider-1').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 3000,
			pauseOnHover: false,
			cssEase: 'linear'
		  });
		  window.jQuery('.port-slider-2').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 4000,
			pauseOnHover: false,
			cssEase: 'linear'
		  });
		  window.jQuery('.port-slider-3').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 5000,
			pauseOnHover: false,
			cssEase: 'linear'
		  });
		  window.jQuery('.port-slider-4').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			vertical: true,
			autoplaySpeed: 0,
			speed: 5000,
			pauseOnHover: false,
			cssEase: 'linear'
		  });
	  
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

	<section className='home-page-new-banner'>
	{/* <video src="images/banner.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video> */}
		<div className='container'>
			 <div className='row'>
				<div className='col-sm-6'>
					<div className='bnr-txt'>
						<h1>Redefining <br /> Logo Artistry</h1>
						<p>Get your business a recallable custom logo design that catches the eye intantly and leaves a lasting impact on your customers.</p>
					</div>
					<div className="link_wrapper">
					    <a href="javascript:;" className="get-btn">Get Started</a>
					    <div className="icon">
						    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
						        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
						    </svg>
				    	</div>
					</div>
					<div className='banner-icon-st'>
						<img src='images/bnr-icon-1.png' alt='' />
						<img src='images/bnr-icon-2.png' alt='' />
						<img src='images/bnr-icon-3.png' alt='' />
					</div>
				</div>
				<div className='col-sm-6'>
					<div className=' cube-div-bnr-st'>
						<div className="assembly">
						<div className="comp-3d comp-3d--i">
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-ct bg5"></div>
							<div className="cube__face face_bg face_bg-lc bg3"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-rc bg2"></div>
							<div className="cube__face face_bg face_bg-lc bg5"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cc bg5"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face face_bg face_bg-lc bg4"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-rc bg5"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cb bg5"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-lc bg6"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-ct bg2"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-ct bg3"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cc bg3"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face face_bg face_bg-ct bg4"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cb bg3"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cc bg2"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face face_bg face_bg-cc bg4"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cb bg2"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cb bg6"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cc bg6"></div>
							</div>
							<div className="cube">
							<div className="cube__face face_bg face_bg-cb bg4"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-ct bg6"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-ct bg1"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-rc bg3"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-rc bg1"></div>
							<div className="cube__face face_bg face_bg-lc bg2"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cc bg1"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face face_bg face_bg-rc bg4"></div>
							<div className="cube__face face_bg face_bg-lc bg1"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							</div>
							<div className="cube">
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-cb bg1"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face"></div>
							<div className="cube__face face_bg face_bg-rc bg6"></div>
							</div>
						</div>
						<div className="comp-3d comp-3d--o">
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-rb bg4"></div>
								<div className="cube__face face_bg face_bg-lb bg1"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-rt bg6"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-lb bg2"></div>
								<div className="cube__face face_bg face_bg-rb bg1"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-rb bg6"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-rt bg4"></div>
								<div className="cube__face face_bg face_bg-lt bg1"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-rb bg3"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-lt bg2"></div>
								<div className="cube__face face_bg face_bg-rt bg1"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-rt bg3"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-lb bg4"></div>
								<div className="cube__face face_bg face_bg-rb bg5"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-lt bg6"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-rb bg2"></div>
								<div className="cube__face face_bg face_bg-lb bg5"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face cube__face face_bg face_bg-lb bg6"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-lt bg4"></div>
								<div className="cube__face face_bg face_bg-rt bg5"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-lb bg3"></div>
							</div>
							</div>
							<div className="pos">
							<div className="cube">
								<div className="cube__face face_bg face_bg-rt bg2"></div>
								<div className="cube__face face_bg face_bg-lt bg5"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face"></div>
								<div className="cube__face face_bg face_bg-lt bg3"></div>
							</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			 </div>
		</div>
	</section>

    {/* <section className="home-banner-slider">
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12  main-bnr-col'>
					<div className='home-bnr-lft-img col-sm-4'>
						<img src='images/bnr-logo1.gif' alt=''></img>
					</div>
					<div className='home-bnr-mid-slide col-sm-4'>
					<div className="fade">
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-1.png" alt=""></img></div>
						<div><img src="images/bnr-logo-main-2.png" alt=""></img></div>
						</div>
					</div>
					<div className='home-bnr-lft-img col-sm-4'>
						<img src='images/bnr-logo2.gif' alt=''></img>
					</div>
				</div>
				<div className='col-sm-12 p0 bnr-txt'>
					<h1>Redefining Logo Artistry</h1>
					<p>Get your business a recallable custom logo design that catches the eye instantly and leaves a lasting impact on your customers.  </p>
				</div>
			</div>
		</div>
	<div>
		<section className="main-banner home-banner home-bnr-1">
			<div className="container">
				<h2 className="outline-txt">National Logo Design</h2>
				<div className="row">
					
					<div className="col-sm-6">
						<div className="bnr-txt">
							<h1>We Make <br />Everything</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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
					<div className="col-sm-6">
						<div className="bnr-side-img-st">
							<img className="bnr-side-img-1" src="images/bnr-side-img-1.png"></img>
							<img className="bnr-1-ico-1" src="images/bnr-icon/bnr-1-icon-1.png"></img>
							<img className="bnr-1-ico-2" src="images/bnr-icon/bnr-1-icon-2.png"></img>
							<img className="bnr-1-ico-3" src="images/bnr-icon/bnr-1-icon-3.png"></img>
							<img className="bnr-1-ico-4" src="images/bnr-icon/bnr-1-icon-4.png"></img>
							<img className="bnr-1-ico-5" src="images/bnr-icon/bnr-1-icon-5.png"></img>
							<img className="bnr-1-ico-6" src="images/bnr-icon/bnr-1-icon-6.png"></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div>
		<section className="main-banner home-banner home-bnr-2">
			<div className="container">
				<h2 className="outline-txt">Digital Marketing</h2>
				<div className="row">
					
					<div className="col-sm-6">
						<div className="bnr-txt">
							<h1>We Make <br />Everything</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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
					<div className="col-sm-6">
						<div className="bnr-side-img-st bnr-side-img-digital">
							<img className="bnr-side-img-1" src="images/digital/bnr-mid-logo.png" />
							<img className="bnr-2-ico-1" src="images/digital/bnr-side-img.png" />
							<img className="bnr-2-ico-2" src="images/digital/bnr-icon-1.png" />
							<img className="bnr-2-ico-3" src="images/digital/bnr-icon-2.png" />
							<img className="bnr-2-ico-4" src="images/digital/bnr-icon-3.png" />
							<img className="bnr-2-ico-5" src="images/digital/bnr-icon-4.png" />
							<img className="bnr-2-ico-6" src="images/digital/bnr-icon-5.png" />
							<img className="bnr-2-ico-7" src="images/digital/bnr-icon-6.png" />
							<img className="bnr-2-ico-8" src="images/digital/bnr-icon-7.png" />
							<img className="bnr-2-ico-9" src="images/digital/bnr-icon-8.png" />
							<img className="bnr-2-ico-10" src="images/digital/bnr-icon-9.png" />
							<img className="bnr-2-ico-11" src="images/digital/bnr-icon-10.png" />
							<img className="bnr-2-ico-12" src="images/digital/bnr-icon-11.png" />
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div>
		<section className="main-banner home-banner home-bnr-3">
			<div className="container">
				<h2 className="outline-txt">Digital Marketing</h2>
				<div className="row">
					
					<div className="col-sm-6">
						<div className="bnr-txt">
							<h1>We Make <br />Everything</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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
					<div className="col-sm-6">
						<div className="bnr-side-img-st bnr-side-img-digital">
							<img className="bnr-side-img-1" src="images/digital/bnr-mid-logo.png"></img>
							<img className="bnr-2-ico-1" src="images/digital/bnr-side-img.png"></img>
							<img className="bnr-2-ico-2" src="images/digital/bnr-icon-1.png"></img>
							<img className="bnr-2-ico-3" src="images/digital/bnr-icon-2.png"></img>
							<img className="bnr-2-ico-4" src="images/digital/bnr-icon-3.png"></img>
							<img className="bnr-2-ico-5" src="images/digital/bnr-icon-4.png"></img>
							<img className="bnr-2-ico-6" src="images/digital/bnr-icon-5.png"></img>
							<img className="bnr-2-ico-7" src="images/digital/bnr-icon-6.png"></img>
							<img className="bnr-2-ico-8" src="images/digital/bnr-icon-7.png"></img>
							<img className="bnr-2-ico-9" src="images/digital/bnr-icon-8.png"></img>
							<img className="bnr-2-ico-10" src="images/digital/bnr-icon-9.png"></img>
							<img className="bnr-2-ico-11" src="images/digital/bnr-icon-10.png"></img>
							<img className="bnr-2-ico-12" src="images/digital/bnr-icon-11.png"></img>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</div> 
	
	</section> */}

<section className="creative-main-sec">
	
	<section className="creativity-sec">
		<div className="container">
				<h2 className="outline-txt">Transformation</h2>
			<div className="row">
				<div className="col-sm-12">
					<div className="hd-txt">
						<h2>Conceptualization, Transformation <br />And Creativity</h2>
						<p>We are a USA-based creative logo design company that provides stunning and distinctive services for companies who don't want to blend in.</p>
					</div>
				</div>

				<div className="col-sm-12 p0 creative-main-col">
					<div className="creative-slider">
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-1.png" alt=''></img>
								<h3>Logo Design</h3>
								<p>National Logo Designs is an agency that designs logos for businesses all around the world creating the right brand identity and portraying the right brand image. </p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-2.png"></img>
								<h3>Web Design</h3>
								<p>We provide comprehensive web design services that are not only unique and different but are super user-friendly along with the responsive designs for use in all kinds of devices.</p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-3.png"></img>
								<h3> App Development</h3>
								<p>Our team of highly talented developers can create custom mobile applications that are compatible on every platform and can be integrated on any device.</p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-4.png"></img>
								<h3>Digital Marketing</h3>
								<p>With our digital marketing services, you can take your brand to the next level through our social media marketing and online reputation management services.</p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-5.png"></img>
								<h3>Branding</h3>
								<p>We create unique brand identities that follow the brand guidelines and make your brand stand out among the competitors. </p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
						<div>
							<div className="creative-box">
								<img src="images/creatve-icon-6.png"></img>
								<h3>SEO</h3>
								<p>By performing the market research, we integrate the keywords and create backlinks to rank your website higher thus increasing sales and engagement. </p>
								<span className="circle-inr-one"></span>
								<span className="circle-inr-two"></span>
								<span className="circle-inr-three"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</section>

	<section className="types-logo-sec">
		<div className="container">
			<h2 className="outline-txt">Logo Design</h2>
			<div className="row">
				<div className="col-sm-12 p0 types-main-sec">
					<div className="col-sm-12 p0">
						<div className="hd-txt">
							<h2>Types Of Logo Designs</h2>
							<p>Since a logo is the public face of a company, every brand or enterprise should have one before getting started and for that, we offer a range of online logo design types to choose from.</p>
						</div>
					</div>
					<div className="col-sm-12 type-logo-main-col-list">
						<div className="types-list">
							<ul>
								<li className="active">
									<div className="typles-list-box hover active" >
										<h3>Illustrative Logo</h3>
										<p>Numerous illustrative logo ideas combine classic and modern methods based on an easy procedure, unique design, and typography. It's also interesting to note that, as opposed to businesses with traditional styles, those with quirky styles tend to use illustrative logo designs.</p>
									</div>
									<div className="types-main-side-img">
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-1.png"></img>
									</div>
								</li>
								<li>
									<div className="typles-list-box hover">
										<h3>Typographic Logo</h3>
										<p>This kind of logo reflects the distinctiveness of the brand. This is ideal for drawing clients' attention because it uses bold typefaces. The nice thing about a typographic logo is that it may incorporate several textual designs, such as elegant, somber, careless, or playful ones.</p>
									</div>
									<div className="types-main-side-img">
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-2.png"></img>
									</div>
								</li>
								<li>
									<div className="typles-list-box hover">
										<h3>Iconic Logo Design</h3>
										<p>Due to the company's essence and basic principles being aligned, Iconic Logo Service is of the utmost importance. Additionally, an iconic logo design enhances the spirit of the company by showcasing the power of design rather than just the name and color.</p>
									</div>
									<div className="types-main-side-img">
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-3.png"></img>
									</div>
								</li>
								<li>
									<div className="typles-list-box hover" >
										<h3>2D Animated Logo</h3>
										<p>An animated 2D logo is an experience that holds the audience's interest for a lot longer than a static logo does. Through beautifully developed 2D animated logos, our 2D animated logo design company helps to sustain customer retention and boost return on investment (ROI).</p>
									</div>
									<div className="types-main-side-img">
										{/* <video className="types-side-img-st types-side-img-1" src="images/types-logo-4.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video> */}
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-4.gif"></img>
									</div>
								</li>
								<li>
									<div className="typles-list-box hover" >
										<h3>3D Animated Logo</h3>
										<p>A 3D animated logo design is the instant way of catching the attention of the audience allowing them to stare at the logo for a little longer than they do on a static logo design. The 3D animated logo not only catches the eye but leaves a lasting impact thus increasing sales.</p>
									</div>
									<div className="types-main-side-img">
										{/* <video className="types-side-img-st types-side-img-1" src="images/types-logo-5.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video> */}
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-5.gif"></img>
									</div>
								</li>
								<li>
									<div className="typles-list-box hover" >
										<h3>Symbolic Logo</h3>
										<p>Symbolic Logos are the go-to brand logo design for business as they are simple and unique which includes a lot of brainstorming to define the brand image. In symbolic logo, an icon or a shape is used to convey the essence, values and key attributes of the brand.</p>
									</div>
									<div className="types-main-side-img">
										<img className="types-side-img-st types-side-img-1"  src="images/types-logo-6.png"></img>
									</div>

								</li>

							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>


</section>
<section className="cta-sec">
	<div className="container">
		<div className="row">
			<div className='col-sm-6'>
				<div className='cta-side-img-st'>
					<video src="images/cta-side.mp4" muted autoPlay={"autoplay"} preload="auto" loop ></video>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="hd-txt">
					<h2>Logos That Excite</h2>
					<p>We are always interested in new endeavors and concepts so contact us today and get your unique logo designed from the professionals.</p>					
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

<section className="portfolio-sec">
	<section className="text-moving">
		<div className="container-fluid">
			<div className="row">
				<div className="moving-slider-txt">
					<div>
						<div className="text-move-hd">
							<h3>Logo Design</h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Branding </h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Web Design  </h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Digital Marketing </h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3>Logo Design</h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Branding </h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Web Design  </h3>
						</div>
					</div>
					<div>
						<div className="text-move-hd">
							<h3> Digital Marketing </h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div className="container">
		<h2 className="outline-txt portfolio-outline">Portfolio</h2>
		<div className="row">
			<div className="col-sm-12">
				<div className="hd-txt">
					<h2>Designs That We Are Proud Of <br /> Focused, Bold, Innovative Designs For An Evolving Market</h2>
					<p>We have been working with some amazing clients throughout the year and creating professional logo designs for businesses so they can compete in the market and come out on top every time. </p>
				</div>
			</div>
			<div className="col-sm-12 p0 port-main-col portmain-desktop-slider">
				<div className="port-slider port-slider-1">
					<div>
						<div className="port-box">
							<img src="images/port-1.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-2.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-1.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-2.png"></img>
						</div>
					</div>
				</div>
				<div className="port-slider port-slider-2">
					<div>
						<div className="port-box">
							<img src="images/port-3.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-4.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-3.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-4.png"></img>
						</div>
					</div>
				</div>
				<div className="port-slider port-slider-3">
					<div>
						<div className="port-box">
							<img src="images/port-5.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-6.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-5.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-6.png"></img>
						</div>
					</div>
				</div>
				<div className="port-slider port-slider-4">
					<div>
						<div className="port-box">
							<img src="images/port-7.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-8.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-7.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-8.png"></img>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-12 p0 port-main-col portmain-col-mobile">
				<div className="port-slider port-slider-1">
					<div>
						<div className="port-box">
							<img src="images/port-1.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-2.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-3.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-4.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-5.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-6.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-7.png"></img>
						</div>
					</div>
					<div>
						<div className="port-box">
							<img src="images/port-8.png"></img>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</section>
<section className="rating-form-mix-sec">
	<div className="container-fluid">
		<div className="row">
			<img className="mid-form-logo" src="images/logo-white-gray.png"></img>
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
			<section className="mid-form">
				<div className="container">
					<h2 className="outline-txt portfolio-outline">Consultation</h2>
					<div className="row">
						
						<div className="col-sm-12">
							<div className="hd-txt">
								<h2>Discover Solutions</h2>
								<p>Fill out the form below and let's step into the creative world together with the finest USA national logo design company.</p>
							</div>
						</div>
						<div className="col-sm-12 p0 form-mid-main-col">
							<div className="form-mid-inr-div">
								<form action="/mail" method="POST">
									<div className="form-lft-div">
										<input type="text" name="cn" required placeholder="Enter Name" onKeyPress="return ((event.charCode >= 65 &amp;&amp; event.charCode <= 90) || (event.charCode >= 97 &amp;&amp; event.charCode <= 122) || (event.charCode == 32))"></input>
										<input type="email" name="em" required placeholder="Enter Email"></input>
										<input type="text" onKeyPress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" name="pn" minLength="10" maxLength="12" required placeholder="Enter Number"></input>
										<textarea name="msg" placeholder="Additional Comments" required></textarea>
									</div>
									<div className="right-div">
										<button type="submit">Send Message <i className="fa-solid fa-arrow-right"></i>
											<input type="hidden" id="lead_area_popup1" name="lead_area" value="for $99" />
											<input type="hidden" id="lead_org_price" name="lead_org_price" value="99" />
											<input type="hidden" name="send" value="1" />
											<input type="hidden" name="service_id" value="5672" className="service_id" />
											<input type="hidden" name="lb_source" value="" />
											<input type="hidden" name="lb_source_cat" value="" />
											<input type="hidden" name="lb_source_nam" value="" />
											<input type="hidden" name="lb_source_ema" value="" />
											<input type="hidden" name="lb_source_con" value="" />
											<input type="hidden" name="lb_source_pho" value="" />
											<input type="hidden" name="lb_source_off" value="" />
											<input type="hidden" name="fullpageurl" value="" />
											<input type="hidden" name="pageurl" value="" />
											<input type="hidden" name="ip2loc_ip" value="" />
											<input type="hidden" name="ip2loc_isp" value="" />
											<input type="hidden" name="ip2loc_org" value="" />
											<input type="hidden" name="ip2loc_country" value="" />
											<input type="hidden" name="ip2loc_region" value="" />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
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
				<PricingMainTab />
			</div>
		</div>
	</section>
	<section className="award-sec">
	<h2 className="outline-txt portfolio-outline">Winning Awards</h2>
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
</section>


<WhyChooseTestiSec />

<MainPopup />
    </>
  )
}
