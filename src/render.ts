import { rover } from './objects';
import {
  cellHeight,
  cellWidth,
  gridHeight,
  gridPadding,
  gridWidth,
} from './variables';

type Context = CanvasRenderingContext2D;

const drawGrid = (ctx: Context) => {
  for (let x = 0; x < gridWidth; x++) {
    for (let y = 0; y < gridHeight; y++) {
      ctx.strokeRect(
        gridPadding + x * cellWidth,
        gridPadding + y * cellHeight,
        cellWidth,
        cellHeight,
      );
    }
  }
};

const drawRover = (ctx: Context) => {
  ctx.fillStyle = '#0f0';

  ctx.fillRect(
    gridPadding + rover.x * cellWidth,
    gridPadding + rover.y * cellHeight,
    cellWidth,
    cellHeight,
  );

  ctx.fillStyle = '#000';
};

export const draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.clearRect(0, 0, w, h);

  drawGrid(ctx);
  drawRover(ctx);
};
