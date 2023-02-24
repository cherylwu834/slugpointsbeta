import { renderRate } from "./renderRate.js";

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

const calc = document.querySelector('.calculate');
calc.addEventListener(touchEvent, (event) => renderRate());