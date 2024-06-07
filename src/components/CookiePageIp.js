import { useEffect } from "react";
import { useLocation } from "react-router";

const   CookiePageIp = (props) => {
  const location = useLocation();
  useEffect(() => { 


        

      //  IP Config

      var currentIP = '';
      window.jQuery.getJSON("https://api.ipify.org?format=json", function(data) {
            currentIP = data.ip;
            window.jQuery("meta[name=ip2loc]").attr('content',data.ip)
           });
            window.jQuery( document ).ready(function() {
            var key = '5XpThOAEkfgOvEJ';
            var pgurl = window.location.href;
            window.jQuery("meta[name=page_url]").attr('content',pgurl);
            window.jQuery.ajax({
            method: 'get',
            url: '//pro.ip-api.com/json/' + currentIP,
            data: {key: key},
            success: function (data) {
            if (data) {
            window.jQuery('input[name=ip2loc_ip]').val(data.query);
            window.jQuery('input[name=ip2loc_isp]').val(data.isp);
            window.jQuery('input[name=ip2loc_org]').val(data.org);
            window.jQuery('input[name=ip2loc_country]').val(data.country);
            window.jQuery('input[name=ip2loc_region]').val(data.regionName);
            window.jQuery('input[name=ip2loc_city]').val(data.city);
            window.jQuery('input[name=pageurl]').val(pgurl);
            window.jQuery('input[name=fullpageurl]').val(pgurl);
      
      
      
      }}
      });
      });




      // cookies


      function getParameterByName(name, url) {
         if (!url) url = window.location.href;
         name = name.replace(/[\[\]]/g, "\\$&");
         var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
             results = regex.exec(url);
         if (!results) return null;
         if (!results[2]) return '';
         return decodeURIComponent(results[2].replace(/\+/g, " "));
     }
     var gclid_js = getParameterByName('gclid'); // "lorem"
     var utm_source_js = getParameterByName('utm_source'); // "" (present with empty value)
     var utm_medium_js = getParameterByName('utm_medium'); // "" (present with no value)
     var utm_campaign_js = getParameterByName('utm_campaign'); // null (absent)
     console.log(gclid_js);
     console.log(utm_source_js);
     console.log(utm_medium_js);
     console.log(utm_campaign_js);
     var referrer = document.referrer;
     function detectCampaing() {
         var rets = false;
         var campaignName = null;
         if (gclid_js != null) {
             rets = true
             campaignName = "js";
         }
         if (utm_source_js != null) {
             rets = true;
             campaignName = "sounce_js"
         }
         if (utm_medium_js != null) {
             rets = true
         }
         if (utm_campaign_js != null) {
             rets = true
         }
         if (referrer.indexOf("Google Campaign") > 0) {
             rets = true;
             campaignName = "ppc"
         }
         if (referrer.indexOf("Facebook") > 0) {
             rets = true;
             campaignName = "facebook"
         }
         // console.log(rets, campaignName);
         return {
             rets: rets,
             from: campaignName
         };
     }
     
     
     
     var campaign = detectCampaing();
     if (campaign.rets) {
     
         function setCookie(cname, cvalue, exdays) {
             const d = new Date();
             d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
             let expires = "expires=" + d.toUTCString();
             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
         }
     
         function getCookie(cname) {
             let name = cname + "=";
             let ca = document.cookie.split(';');
             for (let i = 0; i < ca.length; i++) {
                 let c = ca[i];
                 while (c.charAt(0) == ' ') {
                     c = c.substring(1);
                 }
                 if (c.indexOf(name) == 0) {
                     return c.substring(name.length, c.length);
                 }
             }
             return "";
         }
     
     
         function checkCookie() {
     
             var lead_type_s = 'PPC Lead';
             var gclid_s = getParameterByName('gclid');
             var utm_source_s = getParameterByName('utm_source');
             var utm_medium_s = getParameterByName('utm_medium');
             var utm_campaign_s = getParameterByName('utm_campaign');
             var utm_term_s = getParameterByName('utm_term');
             var utm_id_s = getParameterByName('utm_id');
             var utm_content_s = getParameterByName('utm_content');
     
     
             var lead_type = getCookie("lead_type");
             var gclid = getCookie("gclid");
             var utm_source = getCookie("utm_source");
             var utm_medium = getCookie("utm_medium");
             var utm_campaign = getCookie("utm_campaign");
             var utm_term = getCookie("utm_term");
             var utm_id = getCookie("utm_id");
             var  utm_content = getCookie("utm_id");
     
     
     
     
             if (lead_type != "") {
                 console.log(lead_type);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "lead_type");
                     input.setAttribute("value", lead_type);
                     document.querySelector("form").appendChild(input);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("lead_type", lead_type_s, '24');
                 console.log(getCookie("lead_type"));
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     console.log(getCookie("lead_type"));
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "lead_type");
                     input.setAttribute("value", getCookie("lead_type"));
                     elem.appendChild(input);
                 });
             }
             if (gclid != "") {
                 console.log(gclid);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "gclid");
                     input.setAttribute("value", gclid);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("gclid", gclid_s, '24');
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(getCookie("gclid"));
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "gclid");
                     input.setAttribute("value", getCookie("gclid"));
                     elem.appendChild(input);
                 });
             }
             if (utm_source != "") {
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_source");
                     input.setAttribute("value", utm_source);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_source", utm_source_s, '24');
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(getCookie("utm_source"));
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_source");
                     input.setAttribute("value", getCookie("utm_source"));
                     elem.appendChild(input);
                 });
             }
             if (utm_medium != "") {
                 console.log(utm_medium);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_medium");
                     input.setAttribute("value", utm_medium);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_medium", utm_medium_s, '24');
                 console.log(getCookie("utm_medium"));
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
     
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_medium");
                     input.setAttribute("value", getCookie("utm_medium"));
                     elem.appendChild(input);
                 });
             }
             if (utm_campaign != "") {
                 console.log(utm_campaign);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
     
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_campaign");
                     input.setAttribute("value", utm_campaign);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_campaign", utm_campaign_s, '24');
                 console.log(getCookie("utm_campaign"));
                 console.log(utm_campaign);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_campaign");
                     input.setAttribute("value", getCookie("utm_campaign"));
                     elem.appendChild(input);
                 });
             }
             if (utm_term != "") {
                 console.log(utm_term);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_term");
                     input.setAttribute("value", utm_term);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_term", utm_term_s, '24');
                 console.log(getCookie("utm_term"));
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_term);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_term");
                     input.setAttribute("value", getCookie("utm_term"));
                     elem.appendChild(input);
                 });
             }
             if (utm_id != "") {
                 console.log(utm_id);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_id);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_id");
                     input.setAttribute("value", utm_id);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_id", utm_id_s, '24');
                 console.log(getCookie("utm_id"));
     
                 console.log(utm_id);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_term);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_id");
                     input.setAttribute("value", getCookie("utm_id"));
                     elem.appendChild(input);
                 });
             }
             if (utm_content != "") {
                 console.log(utm_content);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_term);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_content");
                     input.setAttribute("value", utm_content);
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("utm_content", utm_content_s, '24');
                 console.log(getCookie("utm_content"));
     
                 console.log(utm_content);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_content");
                     input.setAttribute("value", getCookie("utm_content"));
                     elem.appendChild(input);
                 });
             }
         }
     
         window.addEventListener('load', (event) => {
             
         });
         checkCookie();
     
     } else {
     
         function setCookie(cname, cvalue, exdays) {
             const d = new Date();
             d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
             let expires = "expires=" + d.toUTCString();
             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
         }
     
         function getCookie(cname) {
             let name = cname + "=";
             let ca = document.cookie.split(';');
             for (let i = 0; i < ca.length; i++) {
                 let c = ca[i];
                 while (c.charAt(0) == ' ') {
                     c = c.substring(1);
                 }
                 if (c.indexOf(name) == 0) {
                     return c.substring(name.length, c.length);
                 }
             }
             return "";
         }
     
         function checkCookie() {
             var lead_type_s = "Organic Lead";


             var lead_type = getCookie("lead_type");
             var gclid = getCookie("gclid");
             var utm_source = getCookie("utm_source");
             var  utm_medium = getCookie("utm_medium");
             var utm_campaign = getCookie("utm_campaign");
             var utm_term = getCookie("utm_term");
             var utm_id = getCookie("utm_id");
             var utm_content = getCookie("utm_id");
             if (lead_type != "") {
                 console.log(lead_type);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "lead_type");
                     input.setAttribute("value", getCookie("lead_type"));
                     elem.appendChild(input);
                 });
             } else {
                 setCookie("lead_type", lead_type_s, '24');
                 console.log(getCookie("lead_type"));
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "lead_type");
                     input.setAttribute("value", getCookie("lead_type"));
                     elem.appendChild(input);
                 });
             }
             if (gclid != "") {
                 console.log(gclid);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(elem);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "gclid");
                     input.setAttribute("value", gclid);
                     elem.appendChild(input);
                 });
             }
             if (utm_source != "") {
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_source");
                     input.setAttribute("value", utm_source);
                     elem.appendChild(input);
                 });
             }
             if (utm_medium != "") {
                 console.log(utm_medium);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_medium");
                     input.setAttribute("value", utm_medium);
                     elem.appendChild(input);
                 });
             }
             if (utm_campaign != "") {
                 console.log(utm_campaign);
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
     
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_campaign");
                     input.setAttribute("value", utm_campaign);
                     elem.appendChild(input);
                 });
             }
             if (utm_term != "") {
                 console.log(utm_term);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_term");
                     input.setAttribute("value", utm_term);
                     elem.appendChild(input);
                 });
             }
             if (utm_id != "") {
                 console.log(utm_id);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_id);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_id");
                     input.setAttribute("value", utm_id);
                     elem.appendChild(input);
                 });
             }
             if (utm_content != "") {
                 console.log(utm_content);
     
                 var x = document.querySelectorAll("form");
                 x.forEach(elem => {
                     console.log(utm_term);
                     var input = document.createElement("input");
                     input.setAttribute("type", "hidden");
                     input.setAttribute("name", "utm_content");
                     input.setAttribute("value", utm_content);
                     elem.appendChild(input);
                 });
             }
         }
         window.addEventListener('load', (event) => {
             
             console.log("page change");
             
         });


         checkCookie();
     
     }
    



  }, [location]);

  return <>{props.children}</>
};

export default CookiePageIp;