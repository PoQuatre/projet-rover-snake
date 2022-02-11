import { draw } from './render';
import {
  cellHeight,
  cellWidth,
  gridHeight,
  gridPadding,
  gridWidth,
} from './variables';

const canvas = <HTMLCanvasElement>document.getElementById('game');
const ctx = canvas.getContext('2d');

if (ctx === null) {
  throw new Error('An error occured while getting the canvas context');
}

canvas.width = gridPadding * 2 + cellWidth * gridWidth;
canvas.height = gridPadding * 2 + cellHeight * gridHeight;

draw(ctx, canvas.width, canvas.height);
