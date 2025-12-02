import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import chatbotImg from "../assets/chatbot.png";

const FloatingChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleMinimize = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Pulsing Ring Animation - Now behind the image */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary rounded-full blur-sm"
            />

            {/* Close/Minimize Button */}
            <motion.button
              onClick={handleMinimize}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-3 h-3" />
            </motion.button>

            {/* Main Chat Button - Just the Image */}
            <motion.button
              onClick={handleChatClick}
              className="relative w-20 h-20 flex items-center justify-center group cursor-pointer"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0]
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Large Chatbot Image with Waving Animation */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={chatbotImg}
                  alt="Chatbot"
                  className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                />
              </motion.div>

              {/* Notification Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"
              />
            </motion.button>

            {/* Floating Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
              className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap shadow-xl border border-gray-700"
            >
              💬 Chat with Afshan AI
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatWidget;
