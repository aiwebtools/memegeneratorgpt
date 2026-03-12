
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Info, Wrench, Palette, X, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-background/80 backdrop-blur-lg border-b border-cyber-primary/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
          className="flex items-center space-x-2 shrink-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 rounded-full bg-cyber-primary grid place-items-center neon-border animate-pulse-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary via-cyber-accent to-cyber-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <Palette 
              size={18} 
              className="text-white z-10 transform group-hover:scale-110 transition-transform" 
              strokeWidth={2.5}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-cyber-primary text-glow leading-tight">Meme Generator GPT</h1>
            <p className="text-xs text-cyber-foreground/70">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors" onClick={(e) => e.stopPropagation()}>AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-cyber-foreground hover:text-cyber-primary active:scale-95 transition-transform"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          <a 
            href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt" 
            className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={18} className="mr-2" />
            Meme Generator GPT
          </a>
          <a 
            href="#faq" 
            className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
          >
            <HelpCircle size={18} className="mr-2" />
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
          >
            <Info size={18} className="mr-2" />
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Wrench size={18} className="mr-2" />
            More AI Tools
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 pb-4 flex flex-col space-y-1">
          <a 
            href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-cyber-primary/10 transition-colors active:bg-cyber-primary/20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageSquare size={18} className="mr-3" />
            Meme Generator GPT
          </a>
          <a 
            href="#faq" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-cyber-primary/10 transition-colors active:bg-cyber-primary/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <HelpCircle size={18} className="mr-3" />
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-cyber-primary/10 transition-colors active:bg-cyber-primary/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <Info size={18} className="mr-3" />
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-cyber-primary/10 transition-colors active:bg-cyber-primary/20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Wrench size={18} className="mr-3" />
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
