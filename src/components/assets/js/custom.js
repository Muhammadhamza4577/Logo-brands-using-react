$(function () {
    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
        $('.head_top ul li a').each(function () { //looks in each link item within the primary-nav list
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
 
            if (activePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
                $(this).parent().addClass('active'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
            }
        });
});

$(document).ready(function() {
$(".types-list li").hover(function () {
    $(".types-list li").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});
});
$(document).ready(function(){

$('.hover').hover(function(){
    var value=$(this).attr('data-src');
    $('#cord-cover').attr('src', value);
});

});

$('.creative-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  centerMode: true,
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

$('.moving-slider-txt').slick({
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


$('.testi-slider-st').slick({
  dots: true,
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 1
});
$('.main-banner-slider').slick({
  dots: false,
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});


$('.port-slider-1').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,  
  autoplay: true,
  vertical: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear'
});
$('.port-slider-2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,  
  autoplay: true,
  vertical: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: false,
  cssEase: 'linear'
});
$('.port-slider-3').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,  
  autoplay: true,
  vertical: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: false,
  cssEase: 'linear'
});
$('.port-slider-4').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,  
  autoplay: true,
  vertical: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: false,
  cssEase: 'linear'
});

$('.award-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  centerMode:true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: false,
  cssEase: 'linear'
});



var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }();
function openNav() {
document.getElementById("mySidenav").style.display = "block";
document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
document.getElementById("mySidenav").style.display = "none";
document.getElementById("main").style.marginLeft= "0";
}

window.jQuery(".menu_dd").hide(),
    window.jQuery(".arrow_down").click((function() {
        window.jQuery(".menu_dd").not(window.jQuery(this).next()).hide(),
        window.jQuery(this).next().stop(!0, !0).slideToggle()
    }
    )),
    window.jQuery(".hover-target-close").click((function() {
        window.jQuery("body").removeClass("nav-active"),
        window.jQuery(".overlay-bg").css("display", "none"),
        window.jQuery(".popupform-main").removeClass("active")
    }
    ));



 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


  