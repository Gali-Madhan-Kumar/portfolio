import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "GoSevIT Software Development Pvt Ltd",
    period: "2020 - Present",
    description:
      "Leading development of enterprise applications, mentoring junior developers, and implementing best practices across the team.",
    achievements: [
      "Reduced application load time by 60%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Built responsive web applications for various clients, focusing on modern design and performance optimization.",
    achievements: [
      "Delivered 15+ client projects",
      "Improved SEO rankings by 40%",
      "Developed reusable component library",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description:
      "Developed user interfaces for SaaS platform, collaborated with designers and backend team to deliver features.",
    achievements: [
      "Built responsive dashboard",
      "Implemented real-time features",
      "Optimized bundle size by 50%",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in tech
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary opacity-50 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-primary items-center justify-center flex-shrink-0 shadow-glow">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-6 flex-1 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <span className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground/80">
                          Key Achievements:
                        </p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
