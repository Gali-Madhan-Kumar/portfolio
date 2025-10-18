import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "/images/pimage.jpg";

const Hero = () => {
  const goToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 animate-fade-in-up">
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Madhan Kumar Gali"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
          />

          {/* Text Content */}
          <div className="text-center md:text-left space-y-4">
            {/* Greeting */}
            <div className="inline-block">
              <span className="text-muted-foreground text-lg md:text-xl">
                Hi, I'm
              </span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text">Madhan Kumar Gali</span>
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Software Developer with over 5 years of experience specialising in
              React.js, JavaScript (ES6+), and Material-UI for developing
              scalable and responsive web applications, Skilled in creating
              intuitive UIs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 w-auto"
                onClick={goToSkills}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-2 hover:bg-primary/10 transition-all duration-300 text-lg px-8 w-auto"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        onClick={goToSkills}
        aria-label="Scroll to Skills Section"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
