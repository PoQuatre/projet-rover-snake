import { initKeyboardListener, initTouchListener } from './controls';
import { rover } from './objects';
import { draw } from './render';
import {
  cellHeight,
  cellWidth,
  gridHeight,
  gridPadding,
  gridWidth,
  tickSpeed,
} from './variables';

const canvas = <HTMLCanvasElement>document.getElementById('game');
const ctx = canvas.getContext('2d');

if (ctx === null) {
  throw new Error('An error occured while getting the canvas context');
}

canvas.width = gridPadding * 2 + cellWidth * gridWidth;
canvas.height = gridPadding * 2 + cellHeight * gridHeight;

initKeyboardListener();
initTouchListener();

const gameLoop = setInterval(() => {
  if (rover.move()) {
    clearInterval(gameLoop);
  }

  requestAnimationFrame(() => draw(ctx, canvas.width, canvas.height));
}, tickSpeed);

draw(ctx, canvas.width, canvas.height);
