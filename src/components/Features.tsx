
import { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "Comprehensive Meme Planning",
      description: "Every meme gets a full plan before creation, with dedicated caption writing and layout planning for maximum impact.",
      image: "/meme-planning.png",
      items: [
        "Detailed questions to understand your vision",
        "Custom meme outline creation",
        "Professional caption writing",
        "Strategic layout planning",
        "Visual style selection"
      ]
    },
    {
      title: "Visual Style Flexibility",
      description: "Default to hyperrealistic visuals, but choose from multiple style options to match your meme's vibe perfectly.",
      image: "/visual-styles.png",
      items: [
        "Hyperrealistic (default)",
        "Rage comic style",
        "Vintage internet aesthetic",
        "Cartoon and illustrated looks",
        "MS Paint, 2000s-core, pixelated, and more"
      ]
    },
    {
      title: "One-by-One Quality Focus",
      description: "Create memes individually with attention to detail, ensuring each one meets professional quality standards.",
      image: "/quality-focus.png",
      items: [
        "Individual meme creation workflow",
        "Detailed visual specifications",
        "Emotion and expression control",
        "Text placement optimization",
        "Meme pack compilation option"
      ]
    },
    {
      title: "Creative Collaboration",
      description: "Work with Meme Generator GPT like a creative partner, getting suggestions and input when you need it.",
      image: "/collaboration.png",
      items: [
        "Creative suggestions for vague ideas",
        "Style recommendations",
        "Format suggestions",
        "Theme development assistance",
        "Audience-targeted humor guidance"
      ]
    }
  ];
  
  return (
    <section id="features" className="py-20 relative cyber-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-primary">
            Powerful <span className="text-cyber-foreground">Features</span>
          </h2>
          <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
            Discover what makes Meme Generator GPT the most comprehensive and user-friendly meme creation tool available.
          </p>
        </div>
        
        {/* Feature Tabs */}
        <div className="flex flex-wrap mb-8 justify-center">
          {features.map((feature, index) => (
            <button
              key={index}
              className={`px-5 py-2 m-1 rounded-full transition-all ${
                activeTab === index 
                  ? 'bg-cyber-primary text-cyber-background font-bold' 
                  : 'bg-transparent border border-cyber-primary/50 hover:border-cyber-primary'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {feature.title}
            </button>
          ))}
        </div>
        
        {/* Feature Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          {/* Feature Description */}
          <div className="glass-panel p-8 rounded-xl border border-cyber-primary/30 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-cyber-primary">
              {features[activeTab].title}
            </h3>
            <p className="mb-6 text-cyber-foreground/80">
              {features[activeTab].description}
            </p>
            
            <ul className="space-y-3">
              {features[activeTab].items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyber-accent mr-2">✓</span>
                  <span className="text-cyber-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyber-primary/10 border border-cyber-primary px-6 py-2 rounded-full text-cyber-primary font-bold hover:bg-cyber-primary hover:text-cyber-background transition-all duration-300"
              >
                Try This Feature
              </a>
            </div>
          </div>
          
          {/* Feature Visualization */}
          <div className="order-1 md:order-2">
            <div className="relative perspective-800">
              <div className="relative w-full h-64 md:h-96 transform-style-3d">
                <div className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 animate-float flex items-center justify-center">
                  <div className="text-2xl md:text-4xl font-bold text-cyber-primary text-glow text-center">
                    {features[activeTab].title.split(' ').map((word, i) => (
                      <div key={i} style={{ animationDelay: `${i * 0.1}s` }} className="animate-pulse-glow">
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 scale-90 opacity-50 -z-10 -translate-x-10 -translate-y-10"></div>
                <div className="absolute inset-0 glass-panel rounded-lg border border-cyber-primary/30 p-4 scale-80 opacity-30 -z-20 -translate-x-20 -translate-y-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
