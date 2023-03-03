(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const l=t=>(t==isNaN?console.warn("We could not find the element, please recharge the page"):t++,t),u=t=>{if(t==isNaN)throw new Error("We could not find the element, please recharge the page");return t=0},d=t=>{if(t>0)t--;else return console.warn("Negative numbers are not allowed"),0;return t};document.querySelector("#app").innerHTML=`
  <nav class="nav-box">
  <img src="images/uwu-image.png">
  <ul class="menu-list">
      <li><a class="link-button" href="https://es.pornhub.com/" target="_blank">Home</a></li>   
      <li><a class="link-button" href="https://es.pornhub.com/" target="_blank">About me</a></li>
      <li><a class="link-button" href="https://es.pornhub.com/" target="_blank">Contact</a></li>
      <li><a class="link-button" href="https://es.pornhub.com/" target="_blank">Portfolio</a></li>
      <li><a class="link-button" href="https://es.pornhub.com/" target="_blank">Service</a></li>
  </ul>
  </nav>

  <div class="flex-container">
  <p class="tittle">Counter-uwu</p>
  <img src="images/cat-sleeping.png">
  <label class="label-counter">The counter is: <span id="counter">0</span></label>
  <div class="flex-button-container">
      <button class="btn increase-button">Increase</button>
      <button class="btn reset-button">Reset</button>
      <button class="btn decrease-button">Decrease</button>
  </div>
  <i class="fa-sharp fa-solid fa-arrow-down"></i>
  </div>

  <footer>
  <div class="footer-container">
      <h2>Created by Nekolas</h2>
      <div class="redes_sociales-container">
          <a href="#"><i class="fa-brands fa-facebook icon-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram icon-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp icon-whatsapp"></i></a>
          <a href="#"><i class="fa-brands fa-twitter icon-twitter"></i></a>
      </div>
      <p class="copyright"> &copy; Copyright All rights reserved</p>
  </div>
  </footer>
`;const a={ButtonIncrease:".increase-button",ButtonReset:".reset-button",ButtonDecrease:".decrease-button",SpanCounter:"#counter"},f=document.querySelector(a.ButtonIncrease),b=document.querySelector(a.ButtonReset),p=document.querySelector(a.ButtonDecrease);let r=0;f.addEventListener("click",()=>{r=l(r),document.getElementById("counter").innerHTML=r});b.addEventListener("click",()=>{r=u(r),document.getElementById("counter").innerHTML=r});p.addEventListener("click",()=>{r=d(r),document.getElementById("counter").innerHTML=r});
