import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Download, Headphones } from "lucide-react";
import { useRef } from "react";
import profileImg from '../assets/profile-portfolio_.png';


const stats = [
  {
    icon: Award,
    label: "Experience",
    value: "Student IT'24",
  },
  {
    icon: Briefcase,
    label: "Completed",
    value: "10+ Projects",
  },
  {
    icon: Headphones,
    label: "Support",
    value: "Always Helpful :)",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">About Me</h2>
          <p className="text-sm text-muted-foreground">My Introduction</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-md transition-all duration-300">
                      <CardContent className="pt-6 pb-4">
                        <Icon className="h-6 w-6 mx-auto mb-2 text-foreground" />
                        <h3 className="font-semibold text-sm mb-1 text-foreground">{stat.label}</h3>
                        <p className="text-xs text-muted-foreground">{stat.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Engineer @ SJ Innovation specializing in MERN Stack development. Passionate about AI/ML, DevOps, and Flutter.
            </p>

            {/* Download CV Button */}
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
