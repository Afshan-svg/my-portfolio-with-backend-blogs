import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const blogContent: Record<string, any> = {
  "1": {
    title: "Getting Started with React and TypeScript",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "React and TypeScript together create a powerful combination for building scalable and maintainable web applications. TypeScript brings static typing to JavaScript, helping catch errors early and improving code quality."
      },
      {
        type: "heading",
        value: "Why TypeScript with React?"
      },
      {
        type: "text",
        value: "TypeScript enhances the development experience by providing better IDE support, autocomplete, and refactoring capabilities. When combined with React, it helps create more robust component architectures with clear prop types and interfaces."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=600&fit=crop",
        alt: "Code editor with TypeScript"
      },
      {
        type: "heading",
        value: "Setting Up Your Project"
      },
      {
        type: "text",
        value: "Setting up a React project with TypeScript is straightforward with modern tools like Vite or Create React App. These tools handle the configuration automatically, allowing you to focus on building your application. The type system helps catch potential bugs during development rather than at runtime."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=600&fit=crop",
        alt: "Development workspace"
      },
      {
        type: "text",
        value: "As you continue developing with React and TypeScript, you'll discover patterns and practices that make your code more maintainable. The investment in learning TypeScript pays dividends in larger projects where type safety becomes crucial."
      }
    ]
  },
  "2": {
    title: "Mastering Tailwind CSS: Tips and Tricks",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "Tailwind CSS has revolutionized the way we write CSS in modern web applications. Its utility-first approach allows for rapid development while maintaining consistency across your design system."
      },
      {
        type: "heading",
        value: "The Power of Utility Classes"
      },
      {
        type: "text",
        value: "Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that let you build custom designs without leaving your HTML. This approach reduces context switching and makes it easier to maintain your styles alongside your markup."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
        alt: "Web design interface"
      },
      {
        type: "heading",
        value: "Custom Configuration"
      },
      {
        type: "text",
        value: "One of Tailwind's greatest strengths is its customization options. You can extend the default theme, add custom utilities, and configure plugins to match your project's specific needs. This flexibility ensures that Tailwind adapts to your design system rather than forcing you to adapt to it."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
        alt: "Modern workspace"
      },
      {
        type: "text",
        value: "By mastering Tailwind CSS, you'll significantly speed up your development workflow while creating beautiful, responsive designs that are easy to maintain and scale."
      }
    ]
  },
  "3": {
    title: "Building RESTful APIs with Node.js",
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "Creating robust RESTful APIs is a fundamental skill for backend developers. Node.js, with its non-blocking I/O model, is an excellent choice for building scalable API services that can handle thousands of concurrent connections."
      },
      {
        type: "heading",
        value: "REST Principles"
      },
      {
        type: "text",
        value: "RESTful architecture follows specific principles including statelessness, client-server separation, and a uniform interface. Understanding these principles helps you design APIs that are intuitive, scalable, and easy to maintain."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop",
        alt: "Server infrastructure"
      },
      {
        type: "heading",
        value: "Implementation Best Practices"
      },
      {
        type: "text",
        value: "When building APIs with Node.js and Express, focus on proper error handling, input validation, and security measures. Implement authentication middleware, rate limiting, and proper logging to create production-ready APIs."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
        alt: "Technology and coding"
      },
      {
        type: "text",
        value: "A well-designed API becomes the backbone of your application, enabling seamless communication between frontend and backend systems while providing a great developer experience."
      }
    ]
  },
  "4": {
    title: "Frontend Performance Optimization",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "Performance is crucial for user experience. A fast-loading website keeps users engaged and improves conversion rates. Let's explore key strategies for optimizing frontend performance."
      },
      {
        type: "heading",
        value: "Code Splitting and Lazy Loading"
      },
      {
        type: "text",
        value: "Modern bundlers like Webpack and Vite support code splitting, allowing you to break your application into smaller chunks. This means users only download the code they need, significantly reducing initial load times."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        alt: "Performance metrics"
      },
      {
        type: "heading",
        value: "Asset Optimization"
      },
      {
        type: "text",
        value: "Images often account for most of a page's weight. Use modern formats like WebP, implement responsive images, and leverage lazy loading for images below the fold. These techniques dramatically improve page load performance."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=1200&h=600&fit=crop",
        alt: "Digital performance"
      },
      {
        type: "text",
        value: "Remember, performance optimization is an ongoing process. Regular audits using tools like Lighthouse help identify bottlenecks and opportunities for improvement."
      }
    ]
  },
  "5": {
    title: "Understanding React Hooks in Depth",
    date: "February 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "React Hooks revolutionized how we write React components. They allow you to use state and other React features without writing class components, leading to cleaner and more reusable code."
      },
      {
        type: "heading",
        value: "Common Hooks Explained"
      },
      {
        type: "text",
        value: "useState and useEffect are the foundation of React Hooks. useState manages component state, while useEffect handles side effects like data fetching, subscriptions, or manually changing the DOM. Understanding when and how to use these hooks is essential for effective React development."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
        alt: "React development"
      },
      {
        type: "heading",
        value: "Custom Hooks"
      },
      {
        type: "text",
        value: "Custom hooks let you extract component logic into reusable functions. They're perfect for sharing stateful logic between components without changing their hierarchy. This promotes code reuse and makes your components cleaner and easier to test."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
        alt: "Code collaboration"
      },
      {
        type: "text",
        value: "Mastering React Hooks opens up new possibilities for component design and helps you write more maintainable React applications."
      }
    ]
  },
  "6": {
    title: "Modern Authentication Patterns",
    date: "February 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop",
    content: [
      {
        type: "text",
        value: "Security is paramount in web applications. Modern authentication patterns provide robust protection while maintaining good user experience. Let's explore the most effective authentication strategies."
      },
      {
        type: "heading",
        value: "JWT and Token-Based Auth"
      },
      {
        type: "text",
        value: "JSON Web Tokens (JWT) have become the standard for stateless authentication. They allow you to verify user identity without storing session data on the server, making your API more scalable and easier to deploy across multiple servers."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
        alt: "Security and authentication"
      },
      {
        type: "heading",
        value: "OAuth and Social Login"
      },
      {
        type: "text",
        value: "Implementing OAuth allows users to authenticate using their existing accounts from providers like Google, GitHub, or Facebook. This reduces friction in the signup process and leverages the security infrastructure of established platforms."
      },
      {
        type: "image",
        value: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
        alt: "Digital security"
      },
      {
        type: "text",
        value: "Combining multiple authentication methods gives users flexibility while maintaining security. Always implement proper token refresh mechanisms and secure storage practices."
      }
    ]
  }
};

const BlogDetail = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blog = blogContent[blogId || "1"];

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Button onClick={() => navigate("/blogs")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <motion.article
        className="container mx-auto px-4 pt-32 pb-20 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/blogs")}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.map((section: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {section.type === "heading" && (
                <h2 className="text-3xl font-bold mt-12 mb-4">{section.value}</h2>
              )}

              {section.type === "text" && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {section.value}
                </p>
              )}

              {section.type === "image" && (
                <div className="my-8 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={section.value}
                    alt={section.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-border flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            onClick={() => navigate("/blogs")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Blogs
          </Button>

          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share Article
          </Button>
        </motion.div>
      </motion.article>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Afshan Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
