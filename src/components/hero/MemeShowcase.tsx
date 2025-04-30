
import { MutableRefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MemeShowcaseProps {
  mousePos: MutableRefObject<MousePosition>;
}

const MemeShowcase = ({ mousePos }: MemeShowcaseProps) => {
  return (
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
            <div className="flex-1 flex items-center justify-center rounded relative overflow-hidden">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/h2Lp-rLMScaWK6A-mrFZQA" 
                alt="AI-generated meme sample" 
                className="w-full h-full object-contain z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/20 to-cyber-accent/20"></div>
            </div>
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
  );
};

export default MemeShowcase;
