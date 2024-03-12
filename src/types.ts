export enum Colors {
  Purple = "#8932fa",
  Yellow = "#fabb32"
}

export type Block = {
  x: number,
  y: number,
  color: Colors,
};

export interface AnimatedBlock extends Block {
  dx: number;
  dy: number;
}
