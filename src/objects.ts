import { Rover, Direction, Rock } from './types';
import { gridHeight, gridWidth } from './variables';

const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const rover: Rover = {
  direction: Direction.UP,
  x: 0,
  y: 0,
  tailLength: 0,
  tail: [],
  move() {
    let { x, y } = rover;

    switch (this.direction) {
      case Direction.UP:
        y--;
        break;
      case Direction.DOWN:
        y++;
        break;
      case Direction.LEFT:
        x--;
        break;
      case Direction.RIGHT:
        x++;
        break;
      default:
        break;
    }

    rover.x = clamp(x, 0, gridWidth - 1);
    rover.y = clamp(y, 0, gridHeight - 1);

    return rover.x !== x || rover.y !== y;
  },
  spawn() {
    this.x = Math.floor(Math.random() * gridWidth);
    this.y = Math.floor(Math.random() * gridHeight);

    const xDiff = gridWidth - this.x - 1;
    const yDiff = gridHeight - this.y - 1;

    if (Math.max(this.x, xDiff) > Math.max(this.y, yDiff)) {
      this.direction = this.x > xDiff ? Direction.LEFT : Direction.RIGHT;
    } else {
      this.direction = this.y > yDiff ? Direction.UP : Direction.DOWN;
    }
  },
  isTail(x, y) {
    return this.tail.filter((v) => v.x === x && v.y === y).length > 0;
  },
};

export const rock: Rock = {
  respawn() {
    let x = Math.floor(Math.random() * gridWidth);
    let y = Math.floor(Math.random() * gridHeight);

    while ((x === rover.x && y === rover.y) || rover.isTail(x, y)) {
      x = Math.floor(Math.random() * gridWidth);
      y = Math.floor(Math.random() * gridHeight);
    }

    this.x = x;
    this.y = y;
  },
};
