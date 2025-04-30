
import { useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface GridBackgroundCanvasProps {
  mousePos: React.MutableRefObject<MousePosition>;
}

const GridBackgroundCanvas = ({ mousePos }: GridBackgroundCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Simple 3D grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const gridSize = 20;
    const pointSize = 1;
    const gridPoints: {x: number, y: number, z: number}[] = [];
    
    // Set canvas size
    const updateCanvasSize = () => {
      if (canvas && ctx) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        // Create grid points
        const cols = Math.ceil(canvas.width / gridSize);
        const rows = Math.ceil(canvas.height / gridSize);
        
        gridPoints.length = 0;
        
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            gridPoints.push({
              x: i * gridSize,
              y: j * gridSize,
              z: Math.random() * 0.5
            });
          }
        }
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation loop
    const render = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(155, 135, 245, 0.3)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i];
        
        // Apply parallax effect based on mouse position
        const offsetX = mousePos.current.x * 20 * point.z;
        const offsetY = mousePos.current.y * 20 * point.z;
        
        const x = point.x + offsetX;
        const y = point.y + offsetY;
        
        // Draw point
        ctx.fillStyle = `rgba(155, 135, 245, ${0.3 * point.z + 0.1})`;
        ctx.beginPath();
        ctx.arc(x, y, pointSize * (point.z + 0.5), 0, Math.PI * 2);
        ctx.fill();
        
        // Connect to neighbors
        if (i % 10 === 0) {
          const nextPoint = gridPoints[i + 1];
          if (nextPoint) {
            const nextX = nextPoint.x + mousePos.current.x * 20 * nextPoint.z;
            const nextY = nextPoint.y + mousePos.current.y * 20 * nextPoint.z;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(render);
    };
    
    const animationId = requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
      style={{ filter: "blur(1px)" }}
    />
  );
};

export default GridBackgroundCanvas;
