import {
  cellHeight,
  cellWidth,
  gridHeight,
  gridPadding,
  gridWidth,
} from './variables';

const drawGrid = (ctx: CanvasRenderingContext2D) => {
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

export const draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.clearRect(0, 0, w, h);

  drawGrid(ctx);
};
