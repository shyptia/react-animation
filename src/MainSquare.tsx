import { useEffect, useRef, useState } from "react";
import { BLOCK_SIZE, CANVAS_SIZE, squares } from "./constants";
import { Block, Colors } from "./types";
import { calculateBlocksCount, checkCollision, createBlocks } from "./utils";
import { drawBlocks } from "./utils/drawBlocks";

export function MainSquare() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const blocksRef = useRef<Block[][] | null>([]);
  const animationId = useRef<number | null>(null);
  const [yellowCount, setYellowCount] = useState(0);
  const [purpleCount, setPurpleCount] = useState(0);

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

        checkCollision({ square, blocksRef });

        ctx?.beginPath();
        ctx.fillStyle = square.color;
        ctx?.fillRect(square.x, square.y, BLOCK_SIZE, BLOCK_SIZE);
        ctx?.fill();
      });

      const { newYellowCount, newPurpleCount } = calculateBlocksCount(blocksRef);

      setYellowCount(newYellowCount);
      setPurpleCount(newPurpleCount);

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId.current ?? 0);
  }, []);

  return (
    <div style={{ width: "max-content" }}>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
      <div style={{ textAlign: "center", fontSize: 22 }}>
        <span style={{ color: Colors.Yellow }}>{yellowCount}</span> x{" "}
        <span style={{ color: Colors.Purple }}>{purpleCount}</span>
      </div>
    </div>
  );
}
