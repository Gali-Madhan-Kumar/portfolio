import { Code2, Palette, Database, Zap, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    items: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
  },
  {
    icon: Zap,
    title: "Performance",
    items: ["Optimization", "SEO", "Core Web Vitals", "Analytics"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "WebAssembly"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "PWA", "Responsive Design", "iOS/Android"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
