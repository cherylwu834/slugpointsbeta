import { renderPoints } from "./renderPoints.js";

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

const banana = document.querySelector('.banana');
banana.addEventListener(touchEvent, (event) => renderPoints('banana'));
const gold = document.querySelector('.gold');
gold.addEventListener(touchEvent, (event) => renderPoints('gold'));
const blue = document.querySelector('.blue');
blue.addEventListener(touchEvent, (event) => renderPoints('blue'));