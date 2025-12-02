import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import profileIcon from "../assets/prodile-icon.png";
import { motion, AnimatePresence } from "framer-motion";
import MarkdownMessage from "./BotResponse";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  error?: boolean;
}

interface ChatResponse {
  answer: string;
  sources?: Array<{
    id: string;
    title: string;
    metadata: any;
    snippet: string;
  }>;
}

// Your existing TypingIndicator component remains the same
const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex items-center gap-4 mb-6"
  >
    <Avatar className="w-10 h-10 flex-shrink-0">
      <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
        <Bot className="w-5 h-5 text-primary-foreground" />
      </div>
    </Avatar>
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-foreground">Afshan's AI</span>
      <div className="px-4 py-3 rounded-2xl bg-card border border-border flex items-center gap-1">
        <motion.span
          className="w-2 h-2 rounded-full bg-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          className="w-2 h-2 rounded-full bg-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
        />
        <motion.span
          className="w-2 h-2 rounded-full bg-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </div>
  </motion.div>
);

// Your existing TypingMessage component remains the same

const TypingMessage = ({ content }: { content: string }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);


  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      // Mark as complete when all content is typed
      setIsComplete(true);
    }
  }, [currentIndex, content]);

  // Reset when content changes
  useEffect(() => {
    setDisplayedContent("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [content]);

  if (isComplete) {
    // Phase 2: Show formatted markdown when typing is complete
    return <MarkdownMessage content={content} />;
  }

  // Phase 1: Show plain text while typing
  return (
    <p className="text-sm leading-relaxed whitespace-pre-wrap">
      {displayedContent}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-foreground ml-0.5"
      />
    </p>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm **Afshan's AI assistant**. Ask me anything about my background, experience, or interests! Please note: I may take your **5-10 seconds** to respond",
      timestamp: new Date(),
      isTyping: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // API call function
  const sendMessageToAPI = async (message: string): Promise<ChatResponse> => {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        message,
        k: 5, // Number of relevant chunks to retrieve
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isThinking) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsThinking(true);

    try {
      // Call your RAG API
      const response = await sendMessageToAPI(currentInput);

      setIsThinking(false);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.answer,
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, aiResponse]);

      // Mark typing as complete after content is displayed
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiResponse.id ? { ...msg, isTyping: false } : msg
          )
        );
      }, response.answer.length * 20 + 500);

    } catch (error) {
      setIsThinking(false);
      console.error('Chat API Error:', error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
        isTyping: false,
        error: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-border bg-card/80 backdrop-blur-lg z-10 flex-shrink-0"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold text-foreground cursor-pointer" onClick={()=> {
                navigate("/")
              }}>Afshan's AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Powered by RAG & GPT-4o-mini</p>
            </div>
            <div className="ml-auto">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Chat Messages - Scrollable */}
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {message.role === "assistant" && (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <Avatar className="w-10 h-10 flex-shrink-0">
      <div className={`w-full h-full rounded-full flex items-center justify-center shadow-md overflow-hidden ${
        message.error
          ? "bg-red-500"
          : "bg-gradient-to-br from-primary to-primary/60"
      }`}>
        {message.error ? (
          <AlertCircle className="w-5 h-5 text-white" />
        ) : (
          <img
            src={profileIcon}
            alt="Afshan's Profile"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              // Fallback to Bot icon if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        )}
        {/* Fallback Bot icon (hidden by default) */}
        <Bot className="w-5 h-5 text-primary-foreground hidden" />
      </div>
    </Avatar>
  </motion.div>
)}

                  <div
                    className={`flex flex-col gap-1 max-w-[75%] ${message.role === "user" ? "items-end" : "items-start"
                      }`}
                  >
                    {message.role === "assistant" && (
                      <span className="text-xs font-medium text-muted-foreground px-1">
                        Afshan's AI
                      </span>
                    )}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`px-4 py-3 rounded-2xl shadow-sm ${message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : message.error
                          ? "bg-red-50 text-red-800 border border-red-200 rounded-tl-sm"
                          : "bg-card text-card-foreground border border-border rounded-tl-sm"
                        }`}
                    >

                      {message.isTyping ? (
                        <TypingMessage content={message.content} />
                      ) : (
                        <MarkdownMessage content={message.content} />
                      )}
                    </motion.div>
                    <span className="text-xs text-muted-foreground px-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  {message.role === "user" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <div className="w-full h-full bg-muted rounded-full flex items-center justify-center shadow-sm">
                          <User className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </Avatar>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isThinking && <TypingIndicator />}
          </div>
        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-t border-border bg-card/80 backdrop-blur-lg flex-shrink-0"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 items-end bg-background rounded-2xl border border-border p-2 shadow-lg focus-within:border-primary/50 transition-colors">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Afshan..."
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-none"
                disabled={isThinking}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="flex-shrink-0 rounded-xl"
                disabled={!inputMessage.trim() || isThinking}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
