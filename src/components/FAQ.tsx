
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Meme Generator GPT?",
      answer: "Meme Generator GPT is a professional meme creation assistant powered by GPT4o image technology. It helps users create high-quality memes one at a time through a guided process, offering creative input and various visual style options."
    },
    {
      question: "How does Meme Generator GPT work?",
      answer: "It works by first asking detailed questions about your meme concept, then creating a comprehensive meme outline including title, image description, and caption placement. After planning the meme, it generates the image according to your specified style preference."
    },
    {
      question: "What visual styles are available?",
      answer: "While the default style is hyperrealistic, you can request other styles including rage comic, vintage internet, cartoon, black-and-white, surrealist, MS Paint, 2000s-core, pixelated, minimalist, and more."
    },
    {
      question: "Can I create multiple memes in one session?",
      answer: "Yes! You can create multiple memes one-by-one in a single session. At the end, Meme Generator GPT will offer to compile all your created memes into a downloadable meme pack."
    },
    {
      question: "Is there a limit to how many memes I can create?",
      answer: "There's no specific limit to the number of memes you can create in a session, though standard OpenAI usage policies apply."
    },
    {
      question: "Can Meme Generator GPT help if I don't have a specific idea?",
      answer: "Absolutely! If you're unsure or have a vague idea, Meme Generator GPT will offer creative suggestions for themes, formats, and styles to help you develop your concept."
    },
    {
      question: "Who owns the memes created using this tool?",
      answer: "You retain ownership of the content you create using Meme Generator GPT, subject to OpenAI's terms of service regarding content generation."
    },
    {
      question: "Are there any restrictions on what kind of memes I can create?",
      answer: "Yes, the tool is subject to OpenAI's usage policies and content restrictions. It cannot create content that violates these policies, including harmful, illegal, or explicitly offensive material."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-primary">
            Frequently <span className="text-cyber-foreground">Asked Questions</span>
          </h2>
          <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about Meme Generator GPT and how it can help you create amazing memes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-panel border border-cyber-primary/30 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-cyber-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-cyber-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-cyber-foreground/70 mb-6">
            Still have questions? Contact us directly:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="flex items-center px-6 py-3 rounded-full bg-cyber-primary/10 border border-cyber-primary hover:bg-cyber-primary hover:text-cyber-background transition-all duration-300"
            >
              <span className="mr-2">📧</span>
              Contact@ai-webtools.com
            </a>
            <a 
              href="tel:4758008096" 
              className="flex items-center px-6 py-3 rounded-full bg-cyber-primary/10 border border-cyber-primary hover:bg-cyber-primary hover:text-cyber-background transition-all duration-300"
            >
              <span className="mr-2">📱</span>
              (475) 800-8096
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
