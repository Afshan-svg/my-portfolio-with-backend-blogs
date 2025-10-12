import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    description: "Learn how to set up a modern React project with TypeScript, including best practices and essential configurations for scalable applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    description: "Discover advanced Tailwind CSS techniques to build beautiful, responsive designs faster. Includes custom configurations and utility patterns.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Building RESTful APIs with Node.js",
    description: "A comprehensive guide to creating robust REST APIs using Node.js and Express, covering authentication, validation, and error handling.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    date: "March 5, 2024",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "Frontend Performance Optimization",
    description: "Boost your web app's performance with proven optimization techniques including code splitting, lazy loading, and caching strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    date: "February 28, 2024",
    readTime: "8 min read",
  },
  {
    id: "5",
    title: "Understanding React Hooks in Depth",
    description: "Deep dive into React Hooks including useState, useEffect, useContext, and custom hooks with practical real-world examples.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    date: "February 20, 2024",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Modern Authentication Patterns",
    description: "Explore modern authentication strategies including JWT, OAuth, and secure session management for web applications.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop",
    date: "February 15, 2024",
    readTime: "9 min read",
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
