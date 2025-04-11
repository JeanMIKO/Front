import { useEffect, useRef, useState } from "react";

interface CircularProgressProps {
  value: number;
  color?: "blue" | "yellow";
}

export function CircularProgress({ value, color = "blue" }: CircularProgressProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const absValue = Math.abs(value);
  const isNegative = value < 0;

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };

    // Update size on window resize
    window.addEventListener("resize", updateSize);
    updateSize(); // initial size update

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = size;
    if (width === 0 || height === 0) return;

    // For high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e5e7eb"; // gray-200
    ctx.stroke();

    // Draw progress
    const startAngle = -0.5 * Math.PI; // Start from top
    const endAngle = startAngle + (2 * Math.PI * absValue) / 100;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 10;
    ctx.strokeStyle = color === "blue" ? "#3b82f6" : "#eab308"; // blue-500 or yellow-500
    ctx.stroke();

    // Draw text
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = isNegative ? "#ef4444" : "#22c55e"; // red-500 or green-500
    ctx.fillText(`${isNegative ? "-" : ""}${absValue.toFixed(2)}%`, centerX, centerY);
  }, [value, color, absValue, isNegative, size]);

  return (
    <div className="relative w-24 h-24">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
