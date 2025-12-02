import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "GitHub", level: "Advanced" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: "Intermediate" },
      { name: "AI", level: "Intermediate" },
      { name: "AI App Integration", level: "Advanced" },
    ],
  },
  {
    title: "Programming & Design",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "OOP", level: "Intermediate" },
      { name: "Problem Solving", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">Skills</h2>
          <p className="text-sm text-muted-foreground">My Technical Expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <h4 className="font-medium text-foreground text-sm">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground ml-6">
                          {skill.level}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
