import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat platform with AI-powered responses, sentiment analysis, and conversation summaries.",
    tags: ["Next.js", "OpenAI", "WebSockets", "Redis"],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management platform with kanban boards, time tracking, and team analytics.",
    tags: ["React", "TypeScript", "Supabase", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "Charts.js"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="glass border-2">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
