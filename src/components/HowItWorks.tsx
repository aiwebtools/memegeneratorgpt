
import { useState, useRef, useEffect } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps = [
    {
      title: "Ask the User Bold Questions",
      description: "Meme Generator GPT starts by asking detailed questions in bold to gather information about your meme concept, including theme, audience, tone, and format.",
      icon: "❓"
    },
    {
      title: "Create Meme Outline",
      description: "Before generating anything, it creates a comprehensive meme outline including title/concept, image description, layout, and caption placement.",
      icon: "📝"
    },
    {
      title: "Meme Planning & Caption Writing",
      description: "The AI describes the image, visual tone, formatting, and writes the meme text to ensure everything works together perfectly.",
      icon: "💭"
    },
    {
      title: "Generate the Meme",
      description: "Once you approve the plan, Meme Generator GPT creates your meme with the selected visual style (hyperrealistic by default).",
      icon: "🖼️"
    },
    {
      title: "Create Another or Compile",
      description: "You can create multiple memes one-by-one, and at the end, you'll be offered to compile all memes into a downloadable collection.",
      icon: "📦"
    }
  ];
  
  // Intersection Observer to activate steps when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.7 }
    );
    
    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-primary">
            How <span className="text-cyber-foreground">It Works</span>
          </h2>
          <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
            Creating the perfect meme with Meme Generator GPT is a simple, step-by-step process designed to deliver professional quality results every time.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-cyber-primary/30 transform -translate-x-1/2 md:translate-x-0"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-cyber-background border-2 border-cyber-primary transform -translate-x-1/2 z-10 flex items-center justify-center text-lg">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div 
                    className={`glass-panel p-6 rounded-lg transition-all duration-500 ${activeStep === index ? 'border-cyber-primary neon-border' : 'border-cyber-primary/30'}`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-cyber-primary">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-cyber-foreground/70">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacer for timeline */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyber-primary px-8 py-3 rounded-full text-cyber-background font-bold shadow-lg hover:bg-cyber-primary/80 transition-all duration-300 inline-flex items-center"
          >
            Start Creating Your Memes
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
