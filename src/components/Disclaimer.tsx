
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-cyber-accent/5 to-cyber-secondary/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(155,135,245,0.3)_0%,_transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(217,70,239,0.2)_0%,_transparent_50%)] animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyber-primary text-glow animate-pulse-glow">
            Legal <span className="text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary bg-clip-text animate-pulse">Disclaimer</span>
          </h2>
          <p className="text-cyber-foreground/80 max-w-2xl mx-auto text-lg">
            Important information about using Meme Generator GPT.
          </p>
          <div className="mt-4 p-3 bg-gradient-to-r from-cyber-primary/20 via-cyber-accent/20 to-cyber-secondary/20 rounded-lg border border-cyber-primary/40 backdrop-blur-sm">
            <p className="text-cyber-foreground/90 text-sm font-medium">
              ⚠️ This tool is provided for informational, educational, and research purposes only.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-2xl border-2 border-cyber-primary/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-accent/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary animate-pulse"></div>
          
          <div className="space-y-8 text-cyber-foreground/85 relative z-10">
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Usage Policy:</strong> Meme Generator GPT is provided by AI WEB TOOLS LLC as a creative tool for generating meme content. By using this tool, you agree to comply with all applicable laws and regulations regarding content creation, copyright, and intellectual property.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">User Responsibility:</strong> Users are solely responsible for the content they create using Meme Generator GPT. AI WEB TOOLS LLC does not monitor, edit, or take ownership of any content generated through this tool. Users must ensure their created content does not infringe on any third-party rights, including but not limited to copyright, trademark, privacy, publicity, or other personal or proprietary rights.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Content Restrictions:</strong> Meme Generator GPT may not be used to create, upload, or share content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">No Liability:</strong> AI WEB TOOLS LLC disclaims all liability for any content created using Meme Generator GPT. We are not responsible for any damages, losses, or legal issues arising from the creation, distribution, or use of memes generated through this tool.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Third-Party Integration:</strong> Meme Generator GPT is powered by OpenAI's GPT4o technology and is subject to OpenAI's terms of service and usage policies. AI WEB TOOLS LLC is not affiliated with, endorsed by, or officially connected to OpenAI.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Intellectual Property:</strong> Subject to compliance with these terms, users retain ownership of the content they create using Meme Generator GPT. However, we recommend users exercise caution when incorporating copyrighted elements in their memes and seek appropriate permissions when necessary.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Changes to Service:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue Meme Generator GPT at any time without notice.
            </p>
            
            <p className="leading-relaxed">
              <strong className="text-cyber-primary text-glow">Contact Information:</strong> For questions regarding this disclaimer or the use of Meme Generator GPT, please contact us at Contact@ai-webtools.com or call (475) 800-8096.
            </p>
            
            <p className="leading-relaxed font-medium">
              By using Meme Generator GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t-2 border-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary text-center relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent animate-pulse"></div>
            <p className="text-cyber-foreground/80 text-lg">
              For additional information, please refer to our
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                className="text-cyber-primary ml-1 hover:text-cyber-accent transition-all duration-300 hover:text-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              {" "}and{" "}
              <a 
                href="https://aiwebtools.lovable.app/disclaimers" 
                className="text-cyber-primary hover:text-cyber-accent transition-all duration-300 hover:text-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
