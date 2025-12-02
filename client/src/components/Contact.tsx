import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "afshan.atyubkhan@gmail.com",
    action: "Write Me →",
    href: "mailto:afshan.atyubkhan@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 8421705719",
    action: "Write Me →",
    href: "https://wa.me/918421705719",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "king_of_khans_06",
    action: "Write Me →",
    href: "https://www.instagram.com/king_of_khans_06?igsh=OGQ5ZDc2ODk2ZA==",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground font-heading">Get In Touch</h2>
          <p className="text-sm text-muted-foreground">Contact Me</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground font-heading">Talk to Me</h3>
            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 pb-4 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-foreground" />
                      <h4 className="font-semibold mb-1 text-foreground">{contact.label}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{contact.value}</p>
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {contact.action}
                      </a>
                    </CardContent>
                  </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground font-heading">Write me your Project</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Insert your name"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Mail
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Insert your email"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Project
                </label>
                <Textarea
                  id="project"
                  rows={6}
                  placeholder="Write your Project"
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 w-full md:w-auto"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
