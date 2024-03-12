import { Colors } from "./types";

// Canvas
export const BLOCK_SIZE = 20;
export const BLOCKS_PER_ROW = 16;
export const BLOCKS_PER_COLOR = 8;
export const CANVAS_SIZE = BLOCKS_PER_ROW * BLOCK_SIZE;
const HALF_CANVAS_SIZE = CANVAS_SIZE / 2;

// Squares
const SPEED = 3;
export const squares = [
  {
    x: HALF_CANVAS_SIZE / 2 - BLOCK_SIZE,
    y: HALF_CANVAS_SIZE + BLOCK_SIZE,
    dx: SPEED,
    dy: SPEED,
    color: Colors.Purple,
  },
  {
    x: HALF_CANVAS_SIZE + HALF_CANVAS_SIZE / 2,
    y: HALF_CANVAS_SIZE - HALF_CANVAS_SIZE / 2,
    dx: SPEED,
    dy: SPEED,
    color: Colors.Yellow,
  }
];