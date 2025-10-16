import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-muted-foreground text-lg md:text-xl">Hi, I'm</span>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Your Name</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
            Full Stack Developer & Designer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in building scalable applications that users love.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass border-2 hover:bg-primary/10 transition-all duration-300 text-lg px-8"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
