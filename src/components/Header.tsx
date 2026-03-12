
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Info, Wrench, Palette } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-background/80 backdrop-blur-lg border-b border-cyber-primary/30">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a 
          href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
          className="flex items-center space-x-2"
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
            <h1 className="text-xl font-bold text-cyber-primary text-glow">Meme Generator GPT</h1>
            <p className="text-xs text-cyber-foreground/70">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Mobile Menu Toggle - Only show on mobile */}
        {isMobile && (
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyber-foreground hover:text-cyber-primary"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </Button>
          </div>
        )}

        {/* Desktop Navigation - Always visible on desktop */}
        {!isMobile && (
          <nav className="flex items-center space-x-4">
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
              href="https://www.aiwebtools.ai" 
              className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Wrench size={18} className="mr-2" />
              More AI Tools
            </a>
          </nav>
        )}

        {/* Mobile Navigation - Only show when menu is open and on mobile */}
        {isMobile && isMenuOpen && (
          <div className="lg:hidden w-full pt-4 pb-2 glass-panel mt-2 rounded-lg">
            <nav className="flex flex-col space-y-2">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt" 
                className="flex items-center px-4 py-2 rounded-lg hover:bg-cyber-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare size={18} className="mr-2" />
                Meme Generator GPT
              </a>
              <a 
                href="#faq" 
                className="flex items-center px-4 py-2 rounded-lg hover:bg-cyber-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle size={18} className="mr-2" />
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="flex items-center px-4 py-2 rounded-lg hover:bg-cyber-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={18} className="mr-2" />
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                className="flex items-center px-4 py-2 rounded-lg hover:bg-cyber-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wrench size={18} className="mr-2" />
                More AI Tools
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
