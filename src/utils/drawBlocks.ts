import { BLOCK_SIZE } from "../constants";
import { Block } from "../types";

export const drawBlocks = ({
  blocksRef,
  ctx,
} : {
  blocksRef: React.MutableRefObject<Block[][]>;
  ctx: CanvasRenderingContext2D | null | undefined
}) => {
  if (!ctx ) return;

  blocksRef.current?.forEach((row) => {
    row.forEach((block) => {
      ctx.fillStyle = block.color;
      ctx.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
    });
  });
};
