import { rover } from './objects';
import { Direction } from './types';
import { swipeThreshold } from './variables';

const isAxisX = (dir: Direction) => {
  return dir === Direction.UP || dir === Direction.DOWN;
};

const isAxisY = (dir: Direction) => {
  return dir === Direction.LEFT || dir === Direction.RIGHT;
};

const isSameAxis = (dir1: Direction, dir2: Direction) => {
  return (isAxisX(dir1) && isAxisX(dir2)) || (isAxisY(dir1) && isAxisY(dir2));
};

export const initKeyboardListener = () => {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyR') window.location.reload();
  });

  document.addEventListener('keydown', (e) => {
    let direction;

    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        direction = Direction.UP;
        break;

      case 'ArrowDown':
      case 'KeyS':
        direction = Direction.DOWN;
        break;

      case 'ArrowLeft':
      case 'KeyA':
        direction = Direction.LEFT;
        break;

      case 'ArrowRight':
      case 'KeyD':
        direction = Direction.RIGHT;
        break;

      default:
        direction = Direction.UP;
        break;
    }

    if (!isSameAxis(rover.direction, direction)) rover.direction = direction;
  });
};

export const initTouchListener = () => {
  let xStart: number | null = null;
  let yStart: number | null = null;

  document.addEventListener('touchstart', (e) => {
    xStart = e.touches[0].clientX;
    yStart = e.touches[0].clientY;
  });

  document.addEventListener('touchmove', (e) => {
    if (!xStart || !yStart) return;

    const xDiff = xStart - e.touches[0].clientX;
    const yDiff = yStart - e.touches[0].clientY;

    if (Math.abs(xDiff) < swipeThreshold && Math.abs(yDiff) < swipeThreshold) {
      return;
    }

    let direction;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      direction = xDiff > 0 ? Direction.LEFT : Direction.RIGHT;
    } else {
      direction = yDiff > 0 ? Direction.UP : Direction.DOWN;
    }

    if (!isSameAxis(rover.direction, direction)) rover.direction = direction;

    xStart = null;
    yStart = null;
  });
};
