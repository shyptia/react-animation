import { BLOCK_SIZE } from "../constants";
import { AnimatedBlock, Block, Colors } from "../types";

export function checkCollision ({
  square,
  blocksRef
} : {
  square: AnimatedBlock;
  blocksRef: React.MutableRefObject<Block[][] | null>;
}) {
  if (!blocksRef.current) return;

  if (square.color === Colors.Purple) {
    const blockRowIndex = Math.floor(square.y / BLOCK_SIZE);
    const blockColIndex = Math.floor((square.x + BLOCK_SIZE) / BLOCK_SIZE);

    if (blockRowIndex < 0 || blockColIndex < 0) return;

    if (blocksRef.current[blockRowIndex][blockColIndex].color === Colors.Purple) {
      square.dx *= -1;
    }
  }

  if (square.color === Colors.Yellow) {
    const blockRowIndex = Math.floor(square.y / BLOCK_SIZE);
    const blockColIndex = Math.floor(square.x / BLOCK_SIZE);

    if (blockRowIndex < 0 || blockColIndex < 0) return;

    if (blocksRef.current[blockRowIndex][blockColIndex].color === Colors.Yellow) {
      square.dx *= -1;
    }
  }
}
