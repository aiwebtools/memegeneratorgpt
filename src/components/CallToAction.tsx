
const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyber-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-background to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto glass-panel p-10 rounded-2xl border border-cyber-primary relative overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyber-primary to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyber-primary to-transparent"></div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cyber-primary text-glow">
              Ready to Create <span className="text-cyber-foreground">Epic Memes?</span>
            </h2>
            <p className="text-xl text-cyber-foreground/80 mb-10 max-w-3xl mx-auto">
              Join thousands of content creators, marketers, and meme enthusiasts who are elevating their meme game with Meme Generator GPT.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://chatgpt.com/g/g-68118a4de96c8191aab638a290e01812-meme-generator-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyber-primary px-10 py-4 rounded-full text-cyber-background font-bold text-lg shadow-lg hover:bg-cyber-primary/80 transition-all duration-300 inline-flex items-center neon-border animate-glow"
              >
                Start Creating Memes Now
              </a>
              <a 
                href="#how-it-works" 
                className="bg-transparent border border-cyber-primary/50 hover:border-cyber-primary px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
