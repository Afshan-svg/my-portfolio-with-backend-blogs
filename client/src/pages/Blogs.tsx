import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import todoImage from "../assets/todo.jpeg";
import blinkitImage from "../assets/blinkit.png";
import appleSite from "../assets/apple.jpeg";
import langChain from "../assets/langchain.png";
import ml1 from "../assets/ml1.jpg";
import ml2 from "../assets/ml2.png";
import { b } from "node_modules/framer-motion/dist/types.d-BJcRxCew";

const blogData = [
  {
    id: "1",
    title: "Building an Offline-First Task Manager with Flutter and Node.js",
    description: "How I built a full offline-first Task Manager app using Flutter for the frontend and Node.js with Express and TypeScript for the backend. This project covers user authentication, task management, and offline data synchronization with a remote PostgreSQL database.",
    image: todoImage,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
  {
    id: "2",
    title: "Building an Apple MacBook Pro Landing Page Clone",
    description: "Discover how to build a high-fidelity Apple MacBook Pro landing page clone using ReactJS, Tailwind CSS, 3JS, and GSAP. This project covers cinematic animations, interactive 3D product models, and scroll-synchronized effects.",
    image: appleSite,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Building a BlinkIt UI Clone with Flutter",
    description: "How I built a BlinkIt-like grocery app UI using Flutter. This project covers creating a seamless and intuitive user experience for both Android and iOS platforms with a single codebase.",
    image: blinkitImage,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
  {
    id: "4",
    title: "Building a LangChain and Flask Application with Tailwind CSS",
    description: "Explore how to build a real-world content generator app using LangChain, Flask, and Tailwind CSS. This project demonstrates integrating Large Language Models with a Flask backend and creating a responsive, modern UI.",
    image: langChain,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
  {
    id: "5",
    title: "Face Mask Detection with CNN: Detailed Implementation Guide",
    description: "Deep dive into building a face mask detection system using Convolutional Neural Networks (CNN). This project covers data acquisition, image preprocessing, model architecture, training, evaluation, and predictive system deployment.",
    image: ml1,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
  {
    id: "6",
    title: "Building a Neural Network for Breast Cancer Classification with PyTorch",
    description: "Explore how to build a neural network for breast cancer classification using PyTorch. This project demonstrates implementing neural networks, data preprocessing, and model evaluation with PyTorch.",
    image: ml2,
    date: "December 2, 2025",
    readTime: "12 min read",
  },
];



const Blogs = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Blog & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge, experiences, and thoughts on web development, design, and technology
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {blog.description}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Afshan Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
