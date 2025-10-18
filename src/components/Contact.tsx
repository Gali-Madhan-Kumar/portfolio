import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
];

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="glass border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground pt-8">
            © 2025 Madhan Kumar Gali
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
