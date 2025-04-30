
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-primary/5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-primary">
            Legal <span className="text-cyber-foreground">Disclaimer</span>
          </h2>
          <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
            Important information about using Meme Generator GPT.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-xl border border-cyber-primary/30">
          <div className="space-y-6 text-cyber-foreground/80">
            <p>
              <strong className="text-cyber-primary">Usage Policy:</strong> Meme Generator GPT is provided by AI WEB TOOLS LLC as a creative tool for generating meme content. By using this tool, you agree to comply with all applicable laws and regulations regarding content creation, copyright, and intellectual property.
            </p>
            
            <p>
              <strong className="text-cyber-primary">User Responsibility:</strong> Users are solely responsible for the content they create using Meme Generator GPT. AI WEB TOOLS LLC does not monitor, edit, or take ownership of any content generated through this tool. Users must ensure their created content does not infringe on any third-party rights, including but not limited to copyright, trademark, privacy, publicity, or other personal or proprietary rights.
            </p>
            
            <p>
              <strong className="text-cyber-primary">Content Restrictions:</strong> Meme Generator GPT may not be used to create, upload, or share content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
            </p>
            
            <p>
              <strong className="text-cyber-primary">No Liability:</strong> AI WEB TOOLS LLC disclaims all liability for any content created using Meme Generator GPT. We are not responsible for any damages, losses, or legal issues arising from the creation, distribution, or use of memes generated through this tool.
            </p>
            
            <p>
              <strong className="text-cyber-primary">Third-Party Integration:</strong> Meme Generator GPT is powered by OpenAI's GPT4o technology and is subject to OpenAI's terms of service and usage policies. AI WEB TOOLS LLC is not affiliated with, endorsed by, or officially connected to OpenAI.
            </p>
            
            <p>
              <strong className="text-cyber-primary">Intellectual Property:</strong> Subject to compliance with these terms, users retain ownership of the content they create using Meme Generator GPT. However, we recommend users exercise caution when incorporating copyrighted elements in their memes and seek appropriate permissions when necessary.
            </p>
            
            <p>
              <strong className="text-cyber-primary">Changes to Service:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue Meme Generator GPT at any time without notice.
            </p>
            
            <p>
              <strong className="text-cyber-primary">Contact Information:</strong> For questions regarding this disclaimer or the use of Meme Generator GPT, please contact us at Contact@ai-webtools.com or call (475) 800-8096.
            </p>
            
            <p>
              By using Meme Generator GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyber-primary/30 text-center">
            <p className="text-cyber-foreground/70">
              For additional information, please refer to our
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                className="text-cyber-primary ml-1 hover:text-cyber-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              {" "}and{" "}
              <a 
                href="https://aiwebtools.ai/terms-of-services" 
                className="text-cyber-primary hover:text-cyber-accent transition-colors"
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
