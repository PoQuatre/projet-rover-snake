import { rover } from './objects';
import { Direction } from './types';
import { swipeThreshold } from './variables';

export const initKeyboardListener = () => {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyR') window.location.reload();
  });

  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        rover.direction = Direction.UP;
        break;

      case 'ArrowDown':
      case 'KeyS':
        rover.direction = Direction.DOWN;
        break;

      case 'ArrowLeft':
      case 'KeyA':
        rover.direction = Direction.LEFT;
        break;

      case 'ArrowRight':
      case 'KeyD':
        rover.direction = Direction.RIGHT;
        break;

      default:
        break;
    }
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

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      rover.direction = xDiff > 0 ? Direction.LEFT : Direction.RIGHT;
    } else {
      rover.direction = yDiff > 0 ? Direction.UP : Direction.DOWN;
    }

    xStart = null;
    yStart = null;
  });
};
