import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Code, PenTool, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Layout,
    title: "Web Developer",
    description: "Building responsive and modern web applications with latest technologies.",
  },
  {
    icon: Code,
    title: "UI/UX Designer",
    description: "Creating beautiful and intuitive user interfaces with focus on user experience.",
  },
  {
    icon: PenTool,
    title: "Technical Consultant",
    description: "Providing expert advice on technical solutions and best practices.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">Services</h2>
          <p className="text-sm text-muted-foreground">What I Offer</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group h-full">
                <CardHeader className="text-center">
                  <div className="mb-4 inline-flex p-4 rounded-2xl bg-secondary mx-auto">
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <button className="text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                    View More
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </button>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
