import { Block, Colors } from "../types";

export function calculateBlocksCount(blocksRef: React.MutableRefObject<Block[][] | null>) {
  let newYellowCount = 0;
  let newPurpleCount = 0;

  blocksRef.current?.forEach((row) => {
    row.forEach((block) => {
      if (block.color === Colors.Yellow) {
        newYellowCount++;
      } else if (block.color === Colors.Purple) {
        newPurpleCount++;
      }
    });
  });

  return {newPurpleCount, newYellowCount};
}