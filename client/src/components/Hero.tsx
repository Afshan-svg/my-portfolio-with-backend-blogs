import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, ChevronDown, Github, Instagram, Linkedin, Send } from "lucide-react";
import { Suspense } from "react";
import profileImg from "../assets/profile-portfolio_.png";
import HeroProfile3D from "./HeroProfile3D";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Social Links - Left Side */}
          <div className="hidden lg:flex flex-col gap-6 absolute left-8">
            <a
              href="https://www.instagram.com/king_of_khans_06?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Afshan-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afshan-khan-dasankop-a55061233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Text Content - Left */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground font-heading">
              Afshan Khan <span className="inline-block animate-[wave_2s_ease-in-out_infinite]"> : )</span>
            </h1>
            <div className="border-l-4 border-foreground pl-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer
              </p>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed">
              I'm Software Developer based in Margao Goa, and I'm very passionate and dedicated to my work.
            </p>

            {/* Buttons side by side with gap */}
            <div className="flex items-center gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group"
              >
                Say Hello
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                onClick={() => navigate("/chat")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                Chat With My AI
                <Bot className="ml-2 h-4 w-4" />
              </Button>
            </div>


            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-8">
              <div className="w-8 h-12 border-2 border-foreground rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-foreground rounded-full animate-bounce"></div>
              </div>
              <span className="font-medium">Scroll Down</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </motion.div>

          {/* Profile 3D Model - Right */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Suspense fallback={
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-muted to-background animate-pulse" />
            }>
              <HeroProfile3D />
            </Suspense>

          </motion.div>

          {/* Mobile Social Links */}
          <div className="flex lg:hidden gap-6 justify-center">
            <a
              href="https://www.instagram.com/king_of_khans_06?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Afshan-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afshan-khan-dasankop-a55061233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
