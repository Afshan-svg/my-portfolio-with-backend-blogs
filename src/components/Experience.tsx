import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "TechNova Solutions",
    period: "March 2023 - Present",
    type: "Full-time",
    description: "Working on full-stack web applications using MongoDB, Express, React, and Node.js. Building scalable and maintainable solutions for enterprise clients.",
  },
  {
    title: "React Developer Intern",
    company: "CodeSpark Labs",
    period: "October 2022 - February 2023",
    type: "Internship",
    description: "Developed responsive user interfaces and collaborated with the team on multiple client projects. Gained hands-on experience with modern React patterns and state management.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Webify Tech",
    period: "June 2022 - September 2022",
    type: "Internship",
    description: "Created pixel-perfect landing pages and web applications. Learned industry best practices and modern frontend development workflows.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">Experience</h2>
          <p className="text-sm text-muted-foreground">My Professional Journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-start flex-1">
                      <div className="p-3 rounded-xl bg-secondary group-hover:bg-foreground transition-colors duration-300">
                        <Briefcase className="h-6 w-6 text-foreground group-hover:text-background transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 text-foreground group-hover:text-primary transition-colors">
                          {experience.title}
                        </CardTitle>
                        <p className="text-base font-medium text-muted-foreground mb-1">
                          {experience.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full whitespace-nowrap">
                      {experience.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
