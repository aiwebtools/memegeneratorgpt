
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Info, Wrench, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-background border-t border-cyber-primary/30 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyber-primary grid place-items-center">
                <span className="text-sm font-bold">MG</span>
              </div>
              <h2 className="text-lg font-bold text-cyber-primary">Meme Generator GPT</h2>
            </div>
            <p className="text-cyber-foreground/70 mb-4">
              Create professional, high-quality memes one at a time with our AI-powered meme generator.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                className="text-cyber-primary hover:text-cyber-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={20} />
              </a>
              <a 
                href="#faq"
                className="text-cyber-primary hover:text-cyber-accent transition-colors"
              >
                <HelpCircle size={20} />
              </a>
              <a 
                href="#disclaimer"
                className="text-cyber-primary hover:text-cyber-accent transition-colors"
              >
                <Info size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cyber-primary font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
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
            <h3 className="text-cyber-primary font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#disclaimer"
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-primary font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <span className="mr-2">📱</span> (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <span className="mr-2">📧</span> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <Button
              variant="outline"
              className="mt-6 bg-cyber-primary/10 border-cyber-primary hover:bg-cyber-primary hover:text-cyber-background transition-all duration-300"
              asChild
            >
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACCESS MEME GENERATOR GPT NOW <Wrench size={16} className="ml-2" />
              </a>
            </Button>
            
            <a 
              href="https://www.aiwebtools.ai"
              className="mt-4 inline-flex items-center px-5 py-3 rounded-full bg-cyber-primary/10 border border-cyber-primary hover:bg-cyber-primary hover:text-cyber-background transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-primary/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <a 
              href="https://www.aiwebtools.ai"
              className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://openai.com/policies/privacy-policy/"
              className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers"
              className="text-cyber-foreground/70 hover:text-cyber-primary transition-colors text-sm"
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
