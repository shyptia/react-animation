import { BLOCK_SIZE } from "../constants";
import { Block, Colors } from "../types";

export const createBlocks = (blocksRef: React.MutableRefObject<Block[][] | null>) => {
  blocksRef.current = Array(16).fill(undefined).map((_row, rowIndex) => {
    return Array(16).fill(undefined).map((_column, colIndex) => {
      const color = colIndex < 8 ? Colors.Yellow : Colors.Purple;
      const x = colIndex * BLOCK_SIZE;
      const y = rowIndex * BLOCK_SIZE;

      return { x, y, color };
    });
  });
};
