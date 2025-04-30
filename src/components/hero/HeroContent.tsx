
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
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
  );
};

export default HeroContent;
