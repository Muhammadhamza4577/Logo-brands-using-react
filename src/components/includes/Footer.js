/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <section className="ftr-main-sec">
	<div className="container">
		<div className="row">
			{/* <img className="ftr-bl-st" src="images/ftr-bubble.png"></img> */}
			<div className="col-sm-12">
				<div className="ftr-logo-div">
					<img src="images/logo-ftr.png"></img>
					<p>National Logo Designs, a US-based professional logo design agency, excels in fulfilling all your digital needs, propelling your business to the next level with creative and innovative solutions! </p>
				</div>
			</div>
			<div className="col-sm-12 p0 ftr-main-col">
				<div className="col-sm-7">
					<div className="services-list services-list-main">
						
						<h4>Services</h4>
						<ul>
							<li><Link className="nav-link" to="logo-design">Logo Design</Link></li>
							<li><Link className="nav-link" to="2d-logo-design">2D Logo Design</Link></li>
                            <li><Link className="nav-link" to="3d-logo-design">3D Logo Design</Link></li>
                            <li><Link className="nav-link" to="mascot-logo-design">Mascot Logo Design</Link></li>
                            <li><Link className="nav-link" to="illustrative-logo-design">Illustrative Logo Design</Link></li>
                            <li><Link className="nav-link" to="animated-logo-design">Animated Logo Design</Link></li>
							<li><Link className="nav-link" to="website-design">Web Design</Link></li>
							<li><Link className="nav-link" to="mobile-app-development">Mobile Application</Link></li>
							<li><Link className="nav-link" to="digital-marketing">Digital Marketing</Link></li>
							<li><Link className="nav-link" to="branding">Branding</Link></li>
						</ul>					
					</div>
					
					<div className="services-list">
						<h4>About</h4>
						<ul>
							<li><Link className="nav-link" to="pricing">Pricing</Link></li>
							<li><Link className="nav-link" to="portfolio">Portfolio</Link></li>
							<li><Link className="nav-link" to="about">About</Link></li>
							<li><Link className="nav-link" to="contact-us">Contact</Link></li>
						</ul>						
					</div>
					<img className="ftr-img-rev" src="images/customer-review.png"></img>
				</div>
				<div className="col-sm-5">
					<div className="ftr-lft-div">
						<h4>Contact</h4>
						<a href="tel:866-712-0210"><i className="fa-sharp fa-solid fa-phone-volume"></i> 866-712-0210</a>
						{/* <a href="#"><i className="fa-solid fa-location-dot"></i> 110 Battery St #100, San Francisco, CA 94111, United States</a> */}
						<a href="mailto:sales@nationallogodesigns.com"><i className="fa-solid fa-envelope"></i> sales@nationallogodesigns.com</a>
						<div className="social-icon">
							<a href="https://www.facebook.com/nationallogodesignsglobal/" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
							<a href="javacript:;"><i className="fa-brands fa-twitter"></i></a>
							<a href="https://www.linkedin.com/company/national-logo-design" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
							<a href="https://www.youtube.com/channel/UC3kOkmx9GYqLqw31KBiNQug" target="_blank"><i className="fa-brands fa-youtube"></i></a>
							<a href="https://www.bark.com/en/us/company/national-logo-designs/Ong87/" target="_blank"><img src='images/bark-icon-2.png'></img></a>
							<a href="https://www.trustpilot.com/review/nationallogodesigns.com" target="_blank"><img src='images/review-icon-2.png'></img></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</section>
<section className="ftr-copy">
	<div className="container">
		<div className="row">
			<div className="ftr-copy-main-col">
				<p>©Copyright 2023 National Logo Designs, All Rights Reserved</p>
				
			</div>
			<div className='payment-img'>
				<img src="images/pay-img.png"></img>
			</div>
			<div className='ftr-link'>
				<Link to="privacy-policy"> Privacy Policy</Link>
				<Link to="terms&conditions"> Terms and conditions</Link>
			</div>
		</div>
	</div>
</section>


    </>

  )
}
