
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    quote: "Meme Generator GPT has transformed our social media strategy. The hyperrealistic visual options and professional planning make our memes stand out from competitors."
  },
  {
    name: "Samantha Lee",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    quote: "I love how Meme Generator GPT walks me through the entire process. The creative suggestions when I'm out of ideas have saved me countless times!"
  },
  {
    name: "Marcus Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    quote: "Our engagement numbers skyrocketed since we started using Meme Generator GPT. The ability to compile memes into themed collections is game-changing for campaigns."
  },
  {
    name: "Jamie Rivera",
    role: "Influencer",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    quote: "As someone who needs to stay on trend, Meme Generator GPT helps me create relevant, high-quality memes in minutes instead of hours. Absolutely essential tool!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-primary/5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-primary">
            What Users <span className="text-cyber-foreground">Are Saying</span>
          </h2>
          <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
            See how Meme Generator GPT is helping content creators, marketers, and social media managers create better memes.
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glass-panel p-6 rounded-xl border transition-all duration-500 ${
                index === currentIndex 
                  ? 'border-cyber-primary neon-border scale-105 z-20' 
                  : 'border-cyber-primary/30'
              }`}
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cyber-primary/30">
                  <AvatarImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-cyber-primary/20">
                    {testimonial.name.split(' ').map(name => name[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-cyber-primary">{testimonial.name}</h4>
                  <p className="text-sm text-cyber-foreground/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-cyber-foreground/80 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-cyber-primary' 
                  : 'bg-cyber-primary/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
