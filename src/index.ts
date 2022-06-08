import './index.scss';
import Draggabilly from 'draggabilly';

const draggie = new Draggabilly('.draggable', {});

// const movingTarget = document.querySelector(`.draggable`);

let startCoords = document.querySelector('.draggable')?.getBoundingClientRect();

function getCoords(e: Event) {
  const target = e?.target as HTMLElement;
  startCoords = target?.getBoundingClientRect();
}

draggie.on('dragStart', getCoords);

function showCoords(e: Event) {
  const target = e?.target as HTMLElement;
  if (startCoords) {
    const shiftX = startCoords.left - target.getBoundingClientRect().left;
    const shiftY = startCoords.top - target.getBoundingClientRect().top;
    const range = Math.sqrt(Math.pow(shiftX, 2) + Math.pow(shiftY, 2)).toFixed(
      0
    );
    target.innerHTML = `${range} px`;
  }
}

draggie.on('dragMove', showCoords);
