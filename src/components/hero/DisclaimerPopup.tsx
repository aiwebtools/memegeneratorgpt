
import { Button } from "@/components/ui/button";

interface DisclaimerPopupProps {
  showPopup: boolean;
  onAgree: () => void;
}

const DisclaimerPopup = ({ showPopup, onAgree }: DisclaimerPopupProps) => {
  if (!showPopup) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
      <div className="glass-panel p-8 max-w-lg rounded-xl border border-cyber-primary animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-cyber-primary text-glow">Disclaimer</h2>
        <p className="mb-6 text-cyber-foreground/90">
          By using Meme Generator GPT, you agree to comply with all applicable laws and regulations regarding content creation and copyright. You are solely responsible for the memes you create and how you use them. AI WEB TOOLS LLC is not liable for any misuse of this tool or the content created with it.
        </p>
        <div className="flex justify-end">
          <Button
            className="bg-cyber-primary hover:bg-cyber-primary/80 text-cyber-background font-bold px-6 py-2 rounded-full"
            onClick={onAgree}
          >
            I AGREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
