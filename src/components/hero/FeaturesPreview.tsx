
const FeaturesPreview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
      <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
        <div className="text-cyber-primary font-bold mb-1">Hyperrealistic</div>
        <p className="text-sm text-cyber-foreground/70">Default visual style with options to customize</p>
      </div>
      <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
        <div className="text-cyber-primary font-bold mb-1">Step-by-Step</div>
        <p className="text-sm text-cyber-foreground/70">Guided meme creation process</p>
      </div>
      <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
        <div className="text-cyber-primary font-bold mb-1">One-by-One</div>
        <p className="text-sm text-cyber-foreground/70">Focus on quality over quantity</p>
      </div>
      <div className="glass-panel p-4 rounded-lg border border-cyber-primary/30">
        <div className="text-cyber-primary font-bold mb-1">GPT4o Powered</div>
        <p className="text-sm text-cyber-foreground/70">Advanced AI image generation</p>
      </div>
    </div>
  );
};

export default FeaturesPreview;
