
import './index.scss';

let Draggabilly = require('draggabilly');

let draggie = new Draggabilly( '.draggable', {});

const movingTarget = document.querySelector(`.draggable`);

let startCoords;


draggie.on( 'dragStart', getCoords );

function getCoords() {
    let target = event?.target as HTMLElement;
    startCoords = target?.getBoundingClientRect();
}

draggie.on( 'dragMove', showCoords );

function showCoords() {
    let target = event?.target as HTMLElement;
    let shiftX = startCoords.left - target.getBoundingClientRect().left
    let shiftY = startCoords.top - target.getBoundingClientRect().top
    let range = Math.sqrt(Math.pow(shiftX, 2) + Math.pow(shiftY, 2)).toFixed(0)
    target.innerHTML = `${range} px`
}