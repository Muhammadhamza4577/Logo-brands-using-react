import React, { useEffect } from 'react';

import PortfolioMainTab from '../components/includes/PortfolioMainTab';

export default function Portfolio (){
   
    useEffect(() => {
        window.jQuery( ".txtOnly" ).keypress(function(e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });
        

    });
    return(

        <>
            <section className='innerbanner-sec about-us-bnr portfolio-main-bnr'>            
                <div className='container'>
                    <h2 className="outline-txt">Portfolio</h2>
                    
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='bnr-txt'>
                                <h2>Portfolio </h2>
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

            <PortfolioMainTab />
        </>

    )

}