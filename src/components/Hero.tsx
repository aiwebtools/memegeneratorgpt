
import { useState, useEffect, useRef } from 'react';
import GridBackgroundCanvas from './hero/GridBackgroundCanvas';
import DisclaimerPopup from './hero/DisclaimerPopup';
import HeroContent from './hero/HeroContent';
import MemeShowcase from './hero/MemeShowcase';
import FeaturesPreview from './hero/FeaturesPreview';

const Hero = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
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
  
  const handleAgree = () => {
    setIsAgreed(true);
    setShowPopup(false);
  };
  
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center pt-16 overflow-hidden">
      {/* 3D Background */}
      <GridBackgroundCanvas mousePos={mousePos} />
      
      {/* Popup Disclaimer */}
      <DisclaimerPopup showPopup={showPopup} onAgree={handleAgree} />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <HeroContent />
          <MemeShowcase mousePos={mousePos} />
        </div>
        
        {/* Features Preview */}
        <FeaturesPreview />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
