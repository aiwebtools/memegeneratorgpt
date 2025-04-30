
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({x: 0, y: 0});
  
  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
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
  }, []);
  
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center pt-16 overflow-hidden">
      {/* 3D Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
        style={{ filter: "blur(1px)" }}
      />
      
      {/* Popup Disclaimer */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
          <div className="glass-panel p-8 max-w-lg rounded-xl border border-cyber-primary animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-cyber-primary text-glow">Disclaimer</h2>
            <p className="mb-6 text-cyber-foreground/90">
              By using Meme Generator GPT, you agree to comply with all applicable laws and regulations regarding content creation and copyright. You are solely responsible for the memes you create and how you use them. AI WEB TOOLS LLC is not liable for any misuse of this tool or the content created with it.
            </p>
            <div className="flex justify-end">
              <Button
                className="bg-cyber-primary hover:bg-cyber-primary/80 text-cyber-background font-bold px-6 py-2 rounded-full"
                onClick={() => {
                  setIsAgreed(true);
                  setShowPopup(false);
                }}
              >
                I AGREE
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <div className="mb-6 inline-block">
              <div className="bg-cyber-accent/10 text-cyber-accent px-4 py-1 rounded-full border border-cyber-accent/30 text-sm">
                POWERED BY GPT4o IMAGE TECHNOLOGY
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cyber-primary text-glow">
              Meme Generator<br/>
              <span className="text-cyber-foreground">GPT</span>
            </h1>
            <p className="text-xl mb-8 text-cyber-foreground/80 max-w-lg">
              Create professional, high-quality memes with AI assistance. Personalized, one-by-one meme generation with hyperrealistic visuals and creative flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyber-primary px-8 py-3 rounded-full text-cyber-background font-bold shadow-lg hover:bg-cyber-primary/80 transition-all duration-300 inline-flex items-center neon-border animate-glow"
              >
                Start Creating Memes
              </a>
              <a 
                href="#how-it-works" 
                className="bg-transparent border border-cyber-primary/50 hover:border-cyber-primary px-8 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* 3D Meme Showcase */}
          <div className="relative perspective-800 hidden lg:block">
            <div className="relative w-full h-96 transform-style-3d">
              <div 
                className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 shadow-lg transform rotate-y-10 rotate-x-5 animate-float"
                style={{
                  transform: `rotateY(${mousePos.current.x * 10}deg) rotateX(${-mousePos.current.y * 10}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="bg-black/40 p-4 rounded-lg h-full flex flex-col">
                  <div className="text-xl font-bold text-cyber-accent mb-2 text-glow-accent">Top Text</div>
                  <div className="flex-1 flex items-center justify-center bg-black/40 rounded relative">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-md">
                      <div className="w-full h-full bg-gradient-to-br from-cyber-primary/30 to-cyber-accent/30 blur-md"></div>
                    </div>
                    <span className="relative z-10 text-5xl font-black text-white text-shadow-lg text-center">MEME CONTENT</span>
                  </div>
                  <div className="text-xl font-bold text-cyber-accent mt-2 text-glow-accent">Bottom Text</div>
                </div>
              </div>
              
              {/* Extra meme showcase elements in background */}
              <div 
                className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 shadow-lg scale-90 opacity-50 -z-10 -translate-x-10 -translate-y-10"
                style={{
                  transform: `scale(0.9) translateX(-40px) translateY(-40px) rotateY(${mousePos.current.x * 5}deg) rotateX(${-mousePos.current.y * 5}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              ></div>
              
              <div 
                className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 shadow-lg scale-80 opacity-30 -z-20 -translate-x-20 -translate-y-20"
                style={{
                  transform: `scale(0.8) translateX(-80px) translateY(-80px) rotateY(${mousePos.current.x * 3}deg) rotateX(${-mousePos.current.y * 3}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
            <div className="text-cyber-primary font-bold mb-1">Hyperrealistic</div>
            <p className="text-sm text-cyber-foreground/70">Default visual style with options to customize</p>
          </div>
          <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
            <div className="text-cyber-primary font-bold mb-1">Step-by-Step</div>
            <p className="text-sm text-cyber-foreground/70">Guided meme creation process</p>
          </div>
          <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
            <div className="text-cyber-primary font-bold mb-1">One-by-One</div>
            <p className="text-sm text-cyber-foreground/70">Focus on quality over quantity</p>
          </div>
          <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
            <div className="text-cyber-primary font-bold mb-1">GPT4o Powered</div>
            <p className="text-sm text-cyber-foreground/70">Advanced AI image generation</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
