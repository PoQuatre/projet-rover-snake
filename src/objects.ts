import { Rover, Direction } from './types';
import { gridHeight, gridWidth } from './variables';

const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const rover: Rover = {
  direction: Direction.UP,
  x: 0,
  y: 0,
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
};
