/* eslint-disable no-unused-vars */
export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export interface Rover {
  direction: Direction;
  x: number;
  y: number;
  tailLength: number;
  tail: { x: number; y: number }[];
  move(): boolean;
  spawn(): void;
  isTail(x: number, y: number): boolean;
}

export interface Rock {
  x?: number;
  y?: number;
  respawn(): void;
}
