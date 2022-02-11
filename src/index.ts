import { initKeyboardListener, initTouchListener } from './controls';
import { rock, rover } from './objects';
import { draw } from './render';
import {
  cellHeight,
  cellWidth,
  gridHeight,
  gridPadding,
  gridWidth,
  tickSpeed,
} from './variables';

const score = <HTMLSpanElement>document.getElementById('score');
const canvas = <HTMLCanvasElement>document.getElementById('game');
const ctx = canvas.getContext('2d');

if (ctx === null) {
  throw new Error('An error occured while getting the canvas context');
}

canvas.width = gridPadding * 2 + cellWidth * gridWidth;
canvas.height = gridPadding * 2 + cellHeight * gridHeight;

initKeyboardListener();
initTouchListener();

rover.spawn();
rock.respawn();

const gameLoop = setInterval(() => {
  rover.tail.unshift({ x: rover.x, y: rover.y });

  if (rover.move() || rover.isTail(rover.x, rover.y)) {
    clearInterval(gameLoop);
  }

  if (rover.x === rock.x && rover.y === rock.y) {
    rover.tailLength++;
    rock.respawn();
  }

  rover.tail = rover.tail.slice(0, rover.tailLength);

  score.innerText = rover.tailLength.toString();

  requestAnimationFrame(() => draw(ctx, canvas.width, canvas.height));
}, tickSpeed);

draw(ctx, canvas.width, canvas.height);
