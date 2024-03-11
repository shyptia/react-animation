import { useEffect, useRef } from "react";
import { CANVAS_SIZE } from "./constants";
import { Block } from "./types";
import { createBlocks } from "./utils";
import { drawBlocks } from "./utils/drawBlocks";

export function MainSquare() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocksRef = useRef<Block[][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    createBlocks(blocksRef);

    drawBlocks({blocksRef, ctx});
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />;
}