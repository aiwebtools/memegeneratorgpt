import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Info, Wrench, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cyber-background via-cyber-background/95 to-cyber-primary/10 border-t-2 border-cyber-primary/50 pt-12 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(155,135,245,0.15)_0%,_transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(217,70,239,0.1)_0%,_transparent_50%)] animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-primary via-cyber-accent to-cyber-secondary grid place-items-center neon-border animate-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/80 via-cyber-accent/60 to-cyber-secondary/80 animate-pulse"></div>
                <span className="text-lg font-bold z-10 text-white text-shadow-lg">MG</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-cyber-primary text-glow">Meme Generator GPT</h2>
                <p className="text-xs text-cyber-foreground/70">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors hover:text-glow">AiWebTools.Ai</a></p>
              </div>
            </div>
            <p className="text-cyber-foreground/80 mb-6 leading-relaxed">
              Create professional, high-quality memes one at a time with our AI-powered meme generator.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                className="text-cyber-primary hover:text-cyber-accent transition-all duration-300 hover:scale-110 hover:text-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={24} />
              </a>
              <a 
                href="#faq"
                className="text-cyber-primary hover:text-cyber-accent transition-all duration-300 hover:scale-110 hover:text-glow"
              >
                <HelpCircle size={24} />
              </a>
              <a 
                href="#disclaimer"
                className="text-cyber-primary hover:text-cyber-accent transition-all duration-300 hover:scale-110 hover:text-glow"
              >
                <Info size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cyber-primary font-bold mb-6 text-lg text-glow">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#how-it-works"
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#features"
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials"
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-primary font-bold mb-6 text-lg text-glow">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#disclaimer"
                  className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 hover:text-glow"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 hover:text-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 hover:text-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-primary font-bold mb-6 text-lg text-glow">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 flex items-center hover:text-glow"
                >
                  <span className="mr-2 text-lg">📱</span> (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 flex items-center hover:text-glow"
                >
                  <span className="mr-2 text-lg">📧</span> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <Button
              variant="outline"
              className="mt-8 bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 border-2 border-cyber-primary hover:bg-gradient-to-r hover:from-cyber-primary hover:to-cyber-accent hover:text-cyber-background transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyber-primary/50"
              asChild
            >
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACCESS MEME GENERATOR GPT NOW <Wrench size={18} className="ml-2" />
              </a>
            </Button>
            
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              className="mt-6 inline-flex items-center px-6 py-4 rounded-full bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 border-2 border-cyber-primary hover:bg-gradient-to-r hover:from-cyber-primary hover:to-cyber-secondary hover:text-cyber-background transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyber-accent/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="border-t-2 border-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary pt-8 flex flex-col md:flex-row justify-between items-center relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent animate-pulse"></div>
          <div>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 hover:text-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://openai.com/policies/privacy-policy/"
              className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 text-sm hover:text-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers"
              className="text-cyber-foreground/80 hover:text-cyber-primary transition-all duration-300 text-sm hover:text-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
