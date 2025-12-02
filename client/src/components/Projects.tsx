import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import todoImage from "../assets/1.jpg";
import blinkitImage from "../assets/3.jpg";
import appleSite from "../assets/2.jpg";
import langChain from "../assets/4.jpg";
import ml1 from "../assets/5.jpg";
import ml2 from "../assets/6.jpg";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Offline Todo Application",
    description: "A robust offline-first todo application with local data persistence and synchronization capabilities.",
    technologies: ["Flutter", "PostgreSQL", "Docker"],
    image: todoImage,
    github: "",
    demo: "",
  },
  {
    title: "Apple-Style Website",
    description: "Stunning Apple-inspired website with smooth animations, 3D elements and premium user experience.",
    technologies: ["React", "Three.js", "GSAP", "TailwindCSS"],
    image: appleSite,
    github: "",
    demo: "",
  },
  {
    title: "Blinkit Frontend Clone",
    description: "Complete frontend clone of Blinkit grocery delivery app with modern UI/UX and responsive design.",
    technologies: ["Flutter", "Dart", "REST API", "State Management"],
    image: blinkitImage,
    github: "",
    demo: "",
  },
  {
    title: "AI Article Generator",
    description: "Intelligent content creation platform using Langchain and OpenAI for generating high-quality articles.",
    technologies: ["Langchain", "OpenAI API", "Python", "Streamlit"],
    image: langChain,
    github: "",
    demo: "",
  },
  {
    title: "Face Mask Detection System",
    description: "Real-time face mask detection system using Convolutional Neural Networks for safety compliance.",
    technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
    image: ml1,
    github: "",
    demo: "",
  },
  {
    title: "Breast Cancer Prediction",
    description: "Medical diagnosis system using Neural Networks in PyTorch for accurate breast cancer prediction.",
    technologies: ["PyTorch", "Python", "Neural Networks", "Scikit-learn"],
    image: ml2,
    github: "",
    demo: "",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">Portfolio</h2>
          <p className="text-sm text-muted-foreground">My Recent Works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                      disabled={!project.github}
                    >
                      {/* <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a> */}
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                      disabled={!project.demo}
                    >
                      {/* <a href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a> */}
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => navigate(`/blogs/${index + 1}`)}
                    >
                      Read More
                    </Button>

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

export default Projects;
