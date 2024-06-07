import React, { useEffect } from 'react'

export default function TechnologySecInclude (){

    useEffect(() => {


        window.jQuery('.tech-app-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.tech-app-slider-nav'
        });
        window.jQuery('.tech-app-slider-nav').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            asNavFor: '.tech-app-slider-for',
            dots: false,
            autoplay: true,
			autoplaySpeed: 0,
			speed: 4000,
			pauseOnHover: false,
			cssEase: 'linear',
            arrows:false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
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
    });

    return(

        <section className='tech-sec-app'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-7'>
                        <div className='tech-app-slider-nav'>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-1.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-2.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-3.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-4.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-5.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-6.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-7.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-8.png' alt=''></img>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-bx'>
                                    <img src='images/mobile-app/tech-img-9.png' alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className='tech-app-slider-for'>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Kotlin</h4>
                                    <p>A modern, concise, and versatile programming language for Android app development with seamless interoperability with Java.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>MySQL</h4>
                                    <p>A popular open-source relational database management system known for its speed, reliability, and extensive community support.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Vue.js</h4>
                                    <p>A progressive JavaScript framework for building user interfaces with a simple yet powerful structure and excellent documentation.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Angular</h4>
                                    <p>A robust JavaScript framework by Google for building dynamic web applications with a strong focus on modularity and two-way data binding.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Flutter</h4>
                                    <p>Google's UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Java</h4>
                                    <p>A widely-used, object-oriented programming language known for its portability and versatility in building various software applications.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>React</h4>
                                    <p>A JavaScript library for creating reusable UI components, known for its declarative approach to building interactive web interfaces.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Ruby on Rails</h4>
                                    <p>A web development framework that promotes rapid development, simplicity, and convention over configuration.</p>
                                </div>
                            </div>
                            <div>
                                <div className='tech-app-text-bx'>
                                    <h4>Python</h4>
                                    <p>A high-level, versatile programming language known for its readability and extensive libraries, suitable for various applications, from web development to data analysis.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}