import { useEffect } from "react";
import { useLocation } from "react-router";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;