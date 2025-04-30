
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Info, Tool } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
          <div className="w-10 h-10 rounded-full bg-cyber-primary grid place-items-center neon-border animate-pulse-glow">
            <span className="text-xl font-bold">MG</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-cyber-primary text-glow">Meme Generator GPT</h1>
            <p className="text-xs text-cyber-foreground/70">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
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
            href="https://www.aiwebtools.ai" 
            className="flex items-center px-4 py-2 rounded-full border border-cyber-primary/50 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tool size={18} className="mr-2" />
            More AI Tools
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
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
                <Tool size={18} className="mr-2" />
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
