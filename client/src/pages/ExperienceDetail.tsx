import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Code2,
  Layers,
  Rocket,
  Smartphone,
  Globe,
  Bot,
  Database,
  Workflow,
  FileSpreadsheet,
  Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const projects = [
  {
    id: 1,
    title: "ICR Dashboard",
    type: "Client Project",
    icon: Layers,
    description: "A comprehensive financial dashboard displaying client's financial data with interactive visualizations.",
    responsibilities: [
      "Built responsive dashboard using React.js",
      "Implemented React Charts for financial data visualization",
      "Created interactive data filtering and reporting features"
    ],
    technologies: ["React.js", "React Charts", "TailwindCSS", "REST API"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    id: 2,
    title: "PRT React Native App",
    type: "Mobile Development",
    icon: Smartphone,
    description: "Contributed to the React Native mobile application, developing key features and learning mobile app development.",
    responsibilities: [
      "Developed 2-3 features for the mobile application",
      "Learned React Native development patterns",
      "Gained experience with Gradle build system",
      "App building and deployment processes"
    ],
    technologies: ["React Native", "Gradle", "JavaScript", "Mobile Development"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    id: 3,
    title: "PRT Web (Magento)",
    type: "E-Commerce",
    icon: Globe,
    description: "Worked on Magento-based web platform for feature development and automated reporting.",
    responsibilities: [
      "Feature development on Magento platform",
      "Built email reporting system for weekly website/app visitor stats",
      "Client report automation and delivery"
    ],
    technologies: ["Magento", "PHP", "Email Integration", "Analytics"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    id: 4,
    title: "TutorGPT",
    type: "AI/EdTech Platform",
    icon: Bot,
    description: "Educational platform where teachers create personalized AI agents for their use cases.",
    responsibilities: [
      "Developed embedded code feature for agent creation",
      "Built embeddable widget system for third-party integration",
      "Users can place generated code on any website to integrate their custom agent"
    ],
    technologies: ["React.js", "Node.js", "OpenAI API", "Embedded Widgets", "JavaScript"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    id: 5,
    title: "CollabAI",
    type: "Company Product",
    icon: Workflow,
    description: "Company's flagship AI product with dynamic app integration and advanced agent capabilities.",
    responsibilities: [
      "Built Dynamic App Integration Module",
      "Implemented Slack integration for AI agents",
      "Developed custom app creation system where users can add relevant APIs",
      "Integrated function calling to allow agents to call APIs dynamically"
    ],
    technologies: ["Node.js", "React.js", "Slack API", "Function Calling", "OpenAI", "MongoDB"],
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30"
  },
  {
    id: 6,
    title: "App.CollabAI (SaaS)",
    type: "Lead Developer",
    icon: Rocket,
    description: "SaaS version of the company product. Led the development team to fix and deploy the subscription module.",
    responsibilities: [
      "Served as Lead Developer",
      "Fixed critical issues in Stripe subscription module (2 years after initial development)",
      "Resolved deployment blockers",
      "Built additional AI agent integration features"
    ],
    technologies: ["React.js", "Node.js", "Stripe", "MongoDB", "OpenAI", "SaaS Architecture"],
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30"
  },
  {
    id: 7,
    title: "PureHealth",
    type: "Healthcare Automation",
    icon: Stethoscope,
    description: "Medical company automation platform for processing facesheets and insurance claims using AI.",
    responsibilities: [
      "Built React frontend with n8n backend integration",
      "Implemented AWS Textract for document processing",
      "Used Gemini AI for intelligent text extraction",
      "CMS form mapping and auto-filling",
      "Integrated Tebra APIs for patient creation and insurance claims"
    ],
    technologies: ["React.js", "n8n", "AWS Textract", "Gemini AI", "Tebra API", "Healthcare APIs"],
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30"
  },
  {
    id: 8,
    title: "Starling Diagnostics",
    type: "Project Management",
    icon: FileSpreadsheet,
    description: "Project management module for a medical diagnostics center with task assignment and tracking.",
    responsibilities: [
      "Built complete project management system",
      "Excel upload and task assignment to coordinators",
      "Patient appointment confirmation tracking",
      "Status and comments management system",
      "Developed using React and Lovable"
    ],
    technologies: ["React.js", "Lovable", "Excel Processing", "Task Management"],
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30"
  },
  {
    id: 9,
    title: "ICR Capital AI",
    type: "Financial Suite",
    icon: Database,
    description: "Comprehensive financial website with 5 integrated applications for trading and analysis.",
    responsibilities: [
      "Built main app using MERN stack with OpenAI integration",
      "Developed 4 Python/Django financial applications",
      "Call Spread Bidder - Options trading tool",
      "Data Depot - Financial data management",
      "Convert Pricer - Conversion pricing calculator",
      "Call Spread Pricer - Spread pricing tool",
      "Implemented complex financial calculations and bidder form submissions"
    ],
    technologies: ["MERN Stack", "Django", "Python", "OpenAI API", "Financial APIs", "PostgreSQL"],
    color: "from-slate-500/20 to-zinc-500/20",
    borderColor: "border-slate-500/30"
  },
];

const ExperienceDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              className="mb-8 group"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-foreground text-background">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Current Position</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
                  Junior Software Engineer
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Building2 className="mr-2 h-4 w-4" />
                SJ Innovation
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                1.5+ Years
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Code2 className="mr-2 h-4 w-4" />
                Full-Time
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Working as a Backend Developer at SJ Innovation, I've had the opportunity to work on
              diverse projects spanning <span className="text-foreground font-medium">MERN Stack</span>,
              <span className="text-foreground font-medium"> React Native</span>,
              <span className="text-foreground font-medium"> AI/ML integrations</span>,
              <span className="text-foreground font-medium"> Django</span>, and
              <span className="text-foreground font-medium"> Healthcare automation</span>.
              Each project has contributed to my growth as a full-stack engineer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center">
            {[
              { label: "Projects Delivered", value: "9+" },
              { label: "Technologies Used", value: "15+" },
              { label: "AI Integrations", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground font-heading">
              Projects & Contributions
            </h2>
            <p className="text-muted-foreground">
              Detailed breakdown of my work at SJ Innovation
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-2 ${project.borderColor} hover:-translate-y-1 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4 items-start">
                          <div className="p-3 rounded-xl bg-secondary group-hover:bg-foreground transition-colors duration-300">
                            <Icon className="h-6 w-6 text-foreground group-hover:text-background transition-colors duration-300" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                              <CardTitle className="text-xl text-foreground">
                                {project.title}
                              </CardTitle>
                              <Badge variant="secondary" className="text-xs">
                                {project.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:bg-foreground hover:text-background transition-colors cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-foreground font-heading">
              Skills Acquired
            </h2>
            <p className="text-muted-foreground">
              Technologies and skills gained through these projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              "React.js", "Node.js", "Express.js", "MongoDB",
              "React Native", "Django", "Python", "PostgreSQL",
              "OpenAI API", "Gemini AI", "AWS Textract", "n8n",
              "Stripe", "Slack API", "Magento", "TailwindCSS"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 bg-background rounded-xl border border-border text-center hover:border-foreground transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can contribute to your next project
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
              onClick={() => navigate("/#contact")}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetail;

