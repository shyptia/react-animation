import { useEffect, useRef } from "react";
import { BLOCK_SIZE, CANVAS_SIZE, squares } from "./constants";
import { Block } from "./types";
import { checkCollision, createBlocks } from "./utils";
import { drawBlocks } from "./utils/drawBlocks";

export function MainSquare() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const blocksRef = useRef<Block[][] | null>([]);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx) return;

    createBlocks(blocksRef);

    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      drawBlocks({ blocksRef, ctx });

      squares.forEach((square) => {
        square.x += square.dx;
        square.y += square.dy;

        if (square.x <= 0 || square.x > CANVAS_SIZE - BLOCK_SIZE) {
          square.dx *= -1;
        }
        if (square.y <= 1 || square.y > CANVAS_SIZE - BLOCK_SIZE) {
          square.dy *= -1;
        }

        checkCollision({square, blocksRef});

        ctx?.beginPath();
        ctx.fillStyle = square.color;
        ctx?.fillRect(square.x, square.y, BLOCK_SIZE, BLOCK_SIZE);
        ctx?.fill();
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId.current ?? 0);
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />;
}