import './style.css'
import { upCounter, resetCounter, downCounter } from './src/use-cases/index';

document.querySelector('#app').innerHTML = `
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
`

const elementIDs = {
    ButtonIncrease: '.increase-button',
    ButtonReset: '.reset-button',
    ButtonDecrease: '.decrease-button',
    SpanCounter: '#counter',
}

//Referencias HTML
const btnIncrease = document.querySelector(elementIDs.ButtonIncrease);
const btnReset = document.querySelector(elementIDs.ButtonReset)
const btnDecrease = document.querySelector(elementIDs.ButtonDecrease);
/* const spanCounter = document.querySelector(elementIDs.SpanCounter); */

let counter = 0;

btnIncrease.addEventListener('click', () => {
    counter = upCounter(counter)
    document.getElementById('counter').innerHTML = counter;
})

btnReset.addEventListener('click', () => {
    counter = resetCounter(counter);
    document.getElementById('counter').innerHTML = counter;
})

btnDecrease.addEventListener('click', () => {
    counter = downCounter(counter);
    document.getElementById('counter').innerHTML = counter;
})
